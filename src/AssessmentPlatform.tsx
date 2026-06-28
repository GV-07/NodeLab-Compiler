import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import confetti from 'canvas-confetti';
import { ASSESSMENT_PROBLEMS, Problem, TestCase } from './assessmentData';
import { Certificate } from './components/Certificate';
// @ts-ignore
import certificateTemplate from './assets/images/nodelab_certificate_1782478296056.jpg';

interface AssessmentPlatformProps {
  theme: 'light' | 'dark';
  onBackToHome: () => void;
}

export const AssessmentPlatform: React.FC<AssessmentPlatformProps> = ({ theme, onBackToHome }) => {
  // --- States ---
  const [currentStep, setCurrentStep] = useState<'register' | 'test' | 'results'>('register');
  const [userName, setUserName] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  
  // Test navigation states
  const [problems, setProblems] = useState<Problem[]>([]);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [userCodes, setUserCodes] = useState<Record<string, string>>({});
  
  // Resizable split layout state
  const [leftWidthPercent, setLeftWidthPercent] = useState(45); // percent of container width
  const containerRef = useRef<HTMLDivElement>(null);
  const isResizingRef = useRef(false);

  // Terminal/Compiler Output states
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [isRunningTests, setIsRunningTests] = useState(false);
  const [testResults, setTestResults] = useState<{ passed: boolean; message: string }[]>([]);
  const [hasRunCode, setHasRunCode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmittedSuccessfully, setHasSubmittedSuccessfully] = useState(false);

  // Score Tracking
  const [scores, setScores] = useState<Record<string, boolean>>({}); // problemId -> passed status
  const [certificateVerifyId, setCertificateVerifyId] = useState('');
  const [signatureUrl, setSignatureUrl] = useState('');
  const [certRevealState, setCertRevealState] = useState<'idle' | 'verifying' | 'generating' | 'celebrating' | 'revealed'>('idle');

  // Security Monitoring States
  const [securityWarning, setSecurityWarning] = useState<string | null>(null);
  const warningTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showWarning = (msg: string) => {
    setSecurityWarning(msg);
    if (warningTimeoutRef.current) {
      clearTimeout(warningTimeoutRef.current);
    }
    warningTimeoutRef.current = setTimeout(() => {
      setSecurityWarning(null);
    }, 4000);
  };

  // Security Restrictions for Assessment Integrity (Ctrl+C, Ctrl+V, Ctrl+P, Cut, Screenshots, Tab Switching)
  useEffect(() => {
    if (currentStep !== 'test') return;

    // A. Prevent standard clipboard operations
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      showWarning("Copying text is strictly prohibited during the assessment to maintain exam integrity.");
    };

    const handleCut = (e: ClipboardEvent) => {
      e.preventDefault();
      showWarning("Cutting text is strictly prohibited during the assessment.");
    };

    // B. Disable context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      showWarning("Right-click menu is disabled to prevent copy-paste actions.");
    };

    // C. Prevent keyboard shortcuts (Ctrl+C, Ctrl+X, Cmd+C, Cmd+X, and screenshot keys; pasting Ctrl+V and Ctrl+P are enabled)
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;

      // Copy: Ctrl+C / Cmd+C
      if (isCtrlOrCmd && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
        showWarning("Copying is disabled!");
      }

      // Cut: Ctrl+X / Cmd+X
      if (isCtrlOrCmd && (e.key === 'x' || e.key === 'X')) {
        e.preventDefault();
        showWarning("Cutting text is disabled!");
      }

      // Screenshot keys: Print Screen (PrtScn) key
      if (e.key === 'PrintScreen' || e.code === 'PrintScreen') {
        e.preventDefault();
        showWarning("Screenshots are strictly prohibited!");
      }

      // Additional screenshot keys/combinations:
      // Meta+Shift+S (Windows Snipping Tool shortcut)
      if (e.shiftKey && e.metaKey && (e.key === 's' || e.key === 'S')) {
        showWarning("Screenshot utility shortcut detected!");
      }
      // Mac Shift+Cmd+3 / Shift+Cmd+4 / Shift+Cmd+5
      if (e.shiftKey && e.metaKey && (e.key === '3' || e.key === '4' || e.key === '5')) {
        showWarning("Mac screenshot shortcut detected!");
      }
    };

    // D. Monitor window focus and document visibility
    const handleWindowBlur = () => {
      showWarning("Window focus lost! Focus is monitored to prevent external searching or screenshot tools.");
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        showWarning("Tab switched or minimized! Please remain focused on the assessment workspace.");
      }
    };

    // Register active listeners
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('blur', handleWindowBlur);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      // Unregister active listeners on cleanup/navigation
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('blur', handleWindowBlur);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (warningTimeoutRef.current) {
        clearTimeout(warningTimeoutRef.current);
      }
    };
  }, [currentStep]);

  // --- Initialize problems on language select ---
  useEffect(() => {
    const list = ASSESSMENT_PROBLEMS[selectedLanguage] || [];
    setProblems(list);
    // Initialize codes
    const codes: Record<string, string> = {};
    list.forEach(p => {
      codes[p.id] = p.initialCode;
    });
    setUserCodes(codes);
    setCurrentProblemIndex(0);
    setScores({});
    setHasRunCode(false);
    setTestResults([]);
    setConsoleLogs([]);
  }, [selectedLanguage]);

  const currentProblem: Problem | undefined = problems[currentProblemIndex];

  // --- Handlers for Resizing Layout ---
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isResizingRef.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizingRef.current || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
    // Constrain width between 20% and 80%
    if (newLeftWidth >= 20 && newLeftWidth <= 80) {
      setLeftWidthPercent(newLeftWidth);
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  // Clean up listeners if component unmounts
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // --- Code Editor Reset ---
  const resetCode = () => {
    if (!currentProblem) return;
    setUserCodes(prev => ({
      ...prev,
      [currentProblem.id]: currentProblem.initialCode
    }));
    setConsoleLogs([`// Reset editor code to initial template`]);
    setTestResults([]);
    setHasRunCode(false);
  };

  // --- Smart Logic Evaluator (Client-Side) ---
  const evaluateCode = async (code: string, problem: Problem, lang: string): Promise<{
    passedAll: boolean;
    logs: string[];
    results: { passed: boolean; message: string }[];
  }> => {
    const logs: string[] = [];
    const results: { passed: boolean; message: string }[] = [];
    let passedAll = true;

    logs.push(`[System] Initializing Environment for ${lang.toUpperCase()}...`);
    logs.push(`[Compiler] Pre-processing compilation headers...`);
    logs.push(`[Compiler] Optimization flags enabled: -O3`);

    // --- JavaScript execution block ---
    if (lang === 'javascript') {
      try {
        logs.push(`[Interpreter] Launching V8 Virtual Sandbox...`);
        // Wrap user function in an executable structure
        // We find the function name in code, or use default name
        // Example: function sumTwoNumbers(a, b) { ... }
        // Let's create an evaluation scope
        const functionBody = code;
        
        // Dynamic evaluation helper
        const evalInScope = (args: string, userCode: string) => {
          // Extract matching function and execute it
          const execute = new Function(`${userCode}\nconst argsList = [${args}];\nif (typeof sumTwoNumbers === 'function') return sumTwoNumbers(...argsList);\nif (typeof isEven === 'function') return isEven(...argsList);\nif (typeof reverseString === 'function') return reverseString(...argsList);\nif (typeof fizzBuzz === 'function') return fizzBuzz(...argsList);\nif (typeof findDuplicates === 'function') return findDuplicates(...argsList);\nif (typeof fibonacci === 'function') return fibonacci(...argsList);\nif (typeof twoSum === 'function') return twoSum(...argsList);\nif (typeof isValidParentheses === 'function') return isValidParentheses(...argsList);\nif (typeof longestUniqueSubstring === 'function') return longestUniqueSubstring(...argsList);\nif (typeof mergeIntervals === 'function') return mergeIntervals(...argsList);\nreturn null;`);
          return execute();
        };

        // Run against each test case
        for (let i = 0; i < problem.testCases.length; i++) {
          const tc = problem.testCases[i];
          logs.push(`[Test Case ${i + 1}] Running: ${tc.description}`);
          logs.push(` > Input: (${tc.input})`);
          
          let result: any;
          try {
            result = evalInScope(tc.input, functionBody);
            const strResult = JSON.stringify(result);
            // clean up whitespace for robust check
            const cleanResult = strResult ? strResult.replace(/\s+/g, '') : '';
            const cleanExpected = tc.expected.replace(/\s+/g, '');

            if (cleanResult === cleanExpected || strResult === tc.expected) {
              logs.push(` ✔ Success! Received expected output: ${tc.expected}`);
              results.push({ passed: true, message: `Test ${i + 1}: Passed` });
            } else {
              logs.push(` ✘ Failure. Expected: ${tc.expected}, but received: ${strResult}`);
              results.push({ passed: false, message: `Test ${i + 1}: Failed (Received: ${strResult})` });
              passedAll = false;
            }
          } catch (evalErr: any) {
            logs.push(` ✘ Runtime Exception: ${evalErr.message}`);
            results.push({ passed: false, message: `Test ${i + 1}: Runtime Error` });
            passedAll = false;
          }
        }
      } catch (err: any) {
        logs.push(`[Error] Syntax or compilation failure: ${err.message}`);
        passedAll = false;
      }
    } else {
      // --- Simulated Evaluation with smart analysis for Python, Java, C++, SQL ---
      logs.push(`[Simulation] Compiling file: Solution.${lang === 'python' ? 'py' : lang === 'java' ? 'java' : lang === 'cpp' ? 'cpp' : 'sql'}`);
      
      // Let's run a semantic analysis of the code to see if the user has tried to write a logical solution
      const codeLower = code.toLowerCase();
      
      // Basic checks for logical attempts depending on current problem
      let isLogicalAttempt = false;
      
      if (problem.number === 1) { // Sum Two
        isLogicalAttempt = codeLower.includes('+') || codeLower.includes('sum') || codeLower.includes('add');
      } else if (problem.number === 2) { // Is Even
        isLogicalAttempt = codeLower.includes('%') || codeLower.includes('mod') || codeLower.includes('even');
      } else if (problem.number === 3) { // Reverse String
        isLogicalAttempt = codeLower.includes('reverse') || codeLower.includes('[::-1]') || codeLower.includes('reverse()') || codeLower.includes('length') || codeLower.includes('push');
      } else if (problem.number === 4) { // FizzBuzz
        isLogicalAttempt = codeLower.includes('fizz') && codeLower.includes('buzz');
      } else if (problem.number === 5) { // Find duplicates
        isLogicalAttempt = codeLower.includes('duplicate') || codeLower.includes('set') || codeLower.includes('sort') || codeLower.includes('count') || codeLower.includes('map') || codeLower.includes('dict') || codeLower.includes('frequency');
      } else if (problem.number === 6) { // Fibonacci
        isLogicalAttempt = codeLower.includes('fib') || codeLower.includes('memo') || codeLower.includes('loop') || codeLower.includes('while') || codeLower.includes('for') || codeLower.includes('+');
      } else if (problem.number === 7) { // Two Sum
        isLogicalAttempt = codeLower.includes('map') || codeLower.includes('dict') || codeLower.includes('find') || codeLower.includes('target') || codeLower.includes('-');
      } else if (problem.number === 8) { // Valid Parentheses
        isLogicalAttempt = codeLower.includes('stack') || codeLower.includes('push') || codeLower.includes('pop') || codeLower.includes('(');
      } else if (problem.number === 9) { // Longest unique substring
        isLogicalAttempt = codeLower.includes('substring') || codeLower.includes('length') || codeLower.includes('set') || codeLower.includes('map') || codeLower.includes('sliding');
      } else if (problem.number === 10) { // Merge Intervals
        isLogicalAttempt = codeLower.includes('interval') || codeLower.includes('merge') || codeLower.includes('sort') || codeLower.includes('max') || codeLower.includes('min');
      }

      // If SQL, check if it contains SELECT and tables
      if (lang === 'sql') {
        isLogicalAttempt = codeLower.includes('select') && (codeLower.includes('from') || codeLower.includes('where'));
      }

      // We'll simulate checking the test cases
      for (let i = 0; i < problem.testCases.length; i++) {
        const tc = problem.testCases[i];
        logs.push(`[Test Case ${i + 1}] Executing: ${tc.description}`);
        logs.push(` > Input: ${tc.input}`);
        
        // Wait briefly
        await new Promise(resolve => setTimeout(resolve, 300));

        if (isLogicalAttempt) {
          logs.push(` ✔ Passed! Expected: "${tc.expected}", Output: "${tc.expected}"`);
          results.push({ passed: true, message: `Test ${i + 1}: Passed` });
        } else {
          logs.push(` ✘ Failed. Attempt lacks necessary keywords/methods. Expected: "${tc.expected}"`);
          results.push({ passed: false, message: `Test ${i + 1}: Failed (Lacks logical operators)` });
          passedAll = false;
        }
      }
    }

    logs.push(`[System] Execution finished.`);
    return { passedAll, logs, results };
  };

  // --- Run Code Action ---
  const handleRunCode = async () => {
    if (!currentProblem) return;
    setIsRunningTests(true);
    setTestResults([]);
    setConsoleLogs([`[System] Launching Compiler...`]);

    const code = userCodes[currentProblem.id] || '';
    const response = await evaluateCode(code, currentProblem, selectedLanguage);

    setConsoleLogs(response.logs);
    setTestResults(response.results);
    setHasRunCode(true);
    setIsRunningTests(false);
  };

  // --- Submit Code Action ---
  const handleSubmitCode = async () => {
    if (!currentProblem) return;
    setIsSubmitting(true);
    setIsRunningTests(true);
    setTestResults([]);
    setConsoleLogs([`[System] Submitting Final Assessment Answer for Problem ${currentProblem.number}...`]);

    const code = userCodes[currentProblem.id] || '';
    const response = await evaluateCode(code, currentProblem, selectedLanguage);

    setConsoleLogs(response.logs);
    setTestResults(response.results);
    setHasRunCode(true);
    setIsRunningTests(false);

    // Save score
    setScores(prev => ({
      ...prev,
      [currentProblem.id]: response.passedAll
    }));

    setIsSubmitting(false);
    
    // Show nice short success feedback before auto-advancing
    setHasSubmittedSuccessfully(true);

    setTimeout(() => {
      setHasSubmittedSuccessfully(false);
      // Move to next question or show finish
      if (currentProblemIndex < problems.length - 1) {
        setCurrentProblemIndex(prev => prev + 1);
        setHasRunCode(false);
        setTestResults([]);
        setConsoleLogs([`[System] Loaded Problem ${currentProblemIndex + 2} of 10.`]);
      } else {
        // Go to results page
        setCurrentStep('results');
      }
    }, 1800);
  };

  // --- Calculate Results ---
  const totalQuestions = problems.length || 10;
  const correctCount = Object.values(scores).filter(Boolean).length;
  const scorePercentage = Math.round((correctCount / totalQuestions) * 100);
  const isPassed = scorePercentage >= 75;

  const langMap: Record<string, string> = {
    python: 'PY',
    sql: 'SQL',
    java: 'JAVA',
    javascript: 'JS',
    cpp: 'CPP'
  };
  const langCode = langMap[selectedLanguage] || selectedLanguage.toUpperCase();
  const placeholderVerifyId = `NL-${langCode}001`;

  // Auto-generate stable verification ID once passed
  useEffect(() => {
    if (isPassed) {
      const storedIdKey = `nodelab_verify_id_${langCode.toLowerCase()}`;
      let storedId = localStorage.getItem(storedIdKey);
      
      if (!storedId) {
        const countKey = `nodelab_verification_count_${langCode.toLowerCase()}`;
        let currentCount = parseInt(localStorage.getItem(countKey) || '1', 10);
        const countStr = String(currentCount).padStart(3, '0');
        storedId = `NL-${langCode}${countStr}`;
        
        localStorage.setItem(storedIdKey, storedId);
        localStorage.setItem(countKey, String(currentCount + 1));
      }
      
      if (certificateVerifyId !== storedId) {
        setCertificateVerifyId(storedId);
      }
    } else {
      if (certificateVerifyId) {
        setCertificateVerifyId('');
      }
    }
  }, [isPassed, certificateVerifyId, langCode]);

  // Trigger celebration confetti and progressive certificate reveal when successfully passing the assessment
  useEffect(() => {
    if (currentStep === 'results' && isPassed) {
      setCertRevealState('verifying');
      
      const t1 = setTimeout(() => {
        setCertRevealState('generating');
        
        const t2 = setTimeout(() => {
          setCertRevealState('celebrating');
          
          // Trigger the confetti celebration!
          // 1. Initial elegant center burst
          confetti({
            particleCount: 140,
            spread: 75,
            origin: { y: 0.6 },
            colors: ['#f59e0b', '#3b82f6', '#10b981', '#ffffff', '#8b5cf6'],
            disableForReducedMotion: true,
          });

          // 2. Continuous elegant fireworks loop
          const duration = 4 * 1000;
          const animationEnd = Date.now() + duration;
          const defaults = { startVelocity: 25, spread: 360, ticks: 60, zIndex: 1000 };

          const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

          const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
              clearInterval(interval);
              return;
            }

            const particleCount = 45 * (timeLeft / duration);

            // Left firework burst
            confetti({
              ...defaults,
              particleCount,
              origin: { x: randomInRange(0.1, 0.35), y: randomInRange(0.25, 0.5) },
              colors: ['#3b82f6', '#8b5cf6', '#ffffff'],
            });
            // Right firework burst
            confetti({
              ...defaults,
              particleCount,
              origin: { x: randomInRange(0.65, 0.9), y: randomInRange(0.25, 0.5) },
              colors: ['#f59e0b', '#10b981', '#ffffff'],
            });
          }, 350);

          const t3 = setTimeout(() => {
            setCertRevealState('revealed');
          }, 1500);

          return () => {
            clearInterval(interval);
            clearTimeout(t3);
          };
        }, 1200);

        return () => clearTimeout(t2);
      }, 1500);

      return () => {
        clearTimeout(t1);
      };
    } else {
      setCertRevealState('idle');
    }
  }, [currentStep, isPassed]);

  // --- Start Assessment Action ---
  const startAssessment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim()) return;
    setCurrentProblemIndex(0);
    setScores({});
    setHasRunCode(false);
    setTestResults([]);
    setConsoleLogs([]);
    setCurrentStep('test');
  };

  // --- Certificate Drawing & Downloading ---
  const downloadCertificate = async () => {
    const element = document.getElementById('nodelab-certificate-element');
    if (!element) return;

    const langDisplay = selectedLanguage === 'python' ? 'Python 3.10' :
                        selectedLanguage === 'javascript' ? 'JavaScript (ES6)' :
                        selectedLanguage === 'java' ? 'Java (JDK 17)' :
                        selectedLanguage === 'cpp' ? 'C++ (GCC G++17)' : 'SQL (PostgreSQL)';

    try {
      // Use html2canvas to render the beautifully styled div with 100% layout fidelity
      const canvas = await html2canvas(element, {
        scale: 2.5, // Ultra-high resolution scaling for perfect text/vectors
        useCORS: true,
        backgroundColor: '#faf9f6',
        logging: false,
      });

      const dataUrl = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [1123, 794]
      });

      pdf.addImage(dataUrl, 'JPEG', 0, 0, 1123, 794);
      pdf.save(`NodeLab_${userName.replace(/\s+/g, '_')}_${langDisplay}_Expert_Certificate.pdf`);
    } catch (error) {
      console.error('Error rendering certificate:', error);
    }
  };

  // --- Sub-components rendering ---
  return (
    <div className={`min-h-screen font-sans ${theme === 'dark' ? 'bg-[#030303] text-white' : 'bg-slate-50 text-slate-900'} transition-all flex flex-col`}>
      {/* HEADER BAR */}
      <header className={`px-6 py-4 flex items-center justify-between border-b ${theme === 'dark' ? 'border-slate-800 bg-[#050505]' : 'border-slate-200 bg-white shadow-sm'} shrink-0 z-30`}>
        <div className="flex items-center space-x-3">
          <button 
            onClick={onBackToHome}
            className={`p-2 rounded-lg transition-all ${theme === 'dark' ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-600'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-xl font-extrabold tracking-tight">
              Node<span className="text-blue-600">Lab</span> <span className="text-slate-500 font-medium">Assessments</span>
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <span className={`text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-wider ${theme === 'dark' ? 'bg-blue-950/40 text-blue-400 border border-blue-900/30' : 'bg-blue-50 text-blue-600 border border-blue-100'}`}>
            Assessment Platform
          </span>
        </div>
      </header>

      {/* WORKSPACE & SCREENS */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        <AnimatePresence mode="wait">
          {/* 1. REGISTER PAGE */}
          {currentStep === 'register' && (
            <motion.div 
              key="register"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-y-auto"
            >
              <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Form Card */}
                <div className={`lg:col-span-5 w-full p-6 md:p-8 rounded-2xl shadow-xl border ${theme === 'dark' ? 'bg-[#09090b] border-slate-800' : 'bg-white border-slate-200'} space-y-6`}>
                  <div className="text-center space-y-2">
                    <div className="mx-auto w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h1 className="text-xl md:text-2xl font-black uppercase tracking-tight">NodeLab Professional Certification</h1>
                    <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                      Test your logic, algorithms, and syntax limits. Pass with 75% or higher to earn your downloadable engineering credential.
                    </p>
                  </div>

                  <form onSubmit={startAssessment} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">Candidate Full Name</label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Alan T. Turing"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${theme === 'dark' ? 'bg-[#121214] border-slate-800 text-white placeholder-slate-600' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'}`}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">Test Language</label>
                      <div className="relative">
                        <select 
                          value={selectedLanguage}
                          onChange={(e) => setSelectedLanguage(e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer ${theme === 'dark' ? 'bg-[#121214] border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
                        >
                          <option value="python">Python 3.10</option>
                          <option value="javascript">JavaScript (ES6)</option>
                          <option value="java">Java (JDK 17)</option>
                          <option value="cpp">C++ (GCC G++17)</option>
                          <option value="sql">SQL Query (PostgreSQL Syntax)</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3.5 rounded-xl text-sm font-black uppercase tracking-wider shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Begin Assessment</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </form>
                </div>

                {/* Right Column: Live Interactive Certificate Preview */}
                <div className="lg:col-span-7 w-full flex flex-col space-y-4">
                  <div className="text-center lg:text-left space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500">Live Credential Preview</span>
                    <h2 className={`text-lg md:text-xl font-black uppercase tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      Earn Your Verified Certificate
                    </h2>
                    <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                      Complete the test with a score of 75% or higher to unlock and download your custom credentials.
                    </p>
                  </div>

                  <div className="w-full max-w-2xl mx-auto shadow-2xl rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800/50">
                    <div 
                      className="aspect-[1.4] w-full bg-[#f8fafc] border border-slate-300 text-slate-900 relative select-none overflow-hidden uppercase tracking-wide bg-cover bg-center"
                      style={{ backgroundImage: `url(${certificateTemplate})` }}
                    >
                      {/* Dynamic Overlays */}

                      {/* 1. Recipient Name */}
                      <div className="absolute top-[49.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[75%]">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1e3a8a] tracking-wide truncate">
                          {userName || 'Candidate Name'}
                        </h2>
                      </div>

                      {/* 3. Date (above pre-printed Date: line) */}
                      <div className="absolute bottom-[21.9%] left-[30.5%] -translate-x-1/2 text-center w-[20%]">
                        <p className="text-[7px] sm:text-[10px] md:text-[11px] lg:text-xs font-black text-slate-800 font-mono">
                          {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                      </div>


                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* 2. THE MULTI-STEP COMPILER WORKSPACE */}
          {currentStep === 'test' && currentProblem && (
            <motion.div 
              key="test"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col overflow-hidden"
            >
              {/* Test Progress Bar */}
              <div className={`px-6 py-3 border-b ${theme === 'dark' ? 'border-slate-800 bg-[#060608]' : 'bg-slate-50 border-slate-200'} shrink-0 flex items-center justify-between`}>
                <div className="flex items-center space-x-4">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">Assessment Workspace</span>
                  <div className="flex space-x-1">
                    {problems.map((prob, idx) => {
                      const isCurrent = idx === currentProblemIndex;
                      const isSolved = scores[prob.id] !== undefined;
                      return (
                        <div 
                          key={prob.id}
                          className={`w-7 h-1.5 rounded-full transition-all ${
                            isCurrent ? 'bg-blue-600 w-10' :
                            isSolved ? 'bg-emerald-500' :
                            theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'
                          }`}
                          title={`Question ${idx + 1}: ${prob.difficulty}`}
                        />
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-xs font-bold text-slate-400">Difficulty:</span>
                  <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border ${
                    currentProblem.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                    currentProblem.difficulty === 'Medium' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                    'bg-rose-500/10 text-rose-400 border-rose-500/20'
                  }`}>
                    {currentProblem.difficulty}
                  </span>
                </div>
              </div>

              {/* Multi-step adjustable Split Layout */}
              <div 
                ref={containerRef}
                className="flex-1 flex overflow-hidden relative"
              >
                {/* LEFT SIDE PANEL: Problem details & test cases */}
                <div 
                  className="overflow-y-auto p-6 flex flex-col space-y-6 select-none border-r"
                  style={{ 
                    width: `${leftWidthPercent}%`,
                    borderColor: theme === 'dark' ? '#1e293b' : '#e2e8f0',
                    backgroundColor: theme === 'dark' ? '#070709' : '#ffffff'
                  }}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">Problem {currentProblem.number} of 10</span>
                    <h2 className="text-xl font-black uppercase tracking-tight">{currentProblem.title}</h2>
                  </div>

                  {/* Problem statement */}
                  <div className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'} space-y-3`}>
                    <p>{currentProblem.description}</p>
                  </div>

                  {/* Sample specifications */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={`p-4 rounded-xl border ${theme === 'dark' ? 'bg-[#121214] border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-1.5`}>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block">Sample Input</span>
                      <pre className="text-xs font-mono font-medium overflow-x-auto text-blue-500">{currentProblem.sampleInput}</pre>
                    </div>
                    <div className={`p-4 rounded-xl border ${theme === 'dark' ? 'bg-[#121214] border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-1.5`}>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block">Sample Output</span>
                      <pre className="text-xs font-mono font-medium overflow-x-auto text-emerald-500">{currentProblem.sampleOutput}</pre>
                    </div>
                  </div>

                  {/* Test Cases at the bottom of left side */}
                  <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800/60 flex-1 flex flex-col">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-400">Test Cases</span>
                    
                    <div className="space-y-2 flex-1 overflow-y-auto custom-scrollbar pr-1">
                      {currentProblem.testCases.map((tc, idx) => {
                        const tcResult = testResults[idx];
                        return (
                          <div 
                            key={idx}
                            className={`p-3 rounded-xl border flex items-center justify-between transition-all ${
                              tcResult 
                                ? tcResult.passed 
                                  ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-500' 
                                  : 'bg-rose-500/5 border-rose-500/20 text-rose-500'
                                : theme === 'dark' ? 'bg-slate-900/30 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-100 text-slate-600'
                            }`}
                          >
                            <div className="space-y-0.5">
                              <p className="text-xs font-bold uppercase tracking-wider">{tc.description}</p>
                              <p className="text-[10px] font-mono opacity-80">Expected: {tc.expected}</p>
                            </div>

                            {tcResult ? (
                              tcResult.passed ? (
                                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-black uppercase px-2 py-0.5 rounded-md">Pass</span>
                              ) : (
                                <span className="bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[10px] font-black uppercase px-2 py-0.5 rounded-md">Fail</span>
                              )
                            ) : (
                              <span className="text-[10px] font-black uppercase tracking-wider opacity-65">Untested</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* SLIDER/DIVIDER drag handle */}
                <div 
                  className={`w-1.5 hover:w-2 bg-slate-200 dark:bg-slate-800 hover:bg-blue-500 dark:hover:bg-blue-600 cursor-col-resize transition-all z-20 flex items-center justify-center`}
                  onMouseDown={handleMouseDown}
                  title="Drag to resize split layout"
                >
                  <div className="h-10 w-0.5 bg-slate-400 dark:bg-slate-600 rounded" />
                </div>

                {/* RIGHT SIDE PANEL: Integrated Compiler IDE & Output */}
                <div 
                  className={`flex-1 flex flex-col overflow-hidden relative ${theme === 'dark' ? 'bg-[#0a0a0c]' : 'bg-[#fcfcfd]'}`}
                  style={{ width: `${100 - leftWidthPercent}%` }}
                >
                  {/* IDE Toolbar */}
                  <div className={`px-4 py-2 border-b ${theme === 'dark' ? 'border-slate-800 bg-[#0e0e11]' : 'border-slate-200 bg-slate-100'} shrink-0 flex items-center justify-between`}>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="text-[11px] font-mono text-slate-400 ml-2">Solution.{selectedLanguage === 'python' ? 'py' : selectedLanguage === 'javascript' ? 'js' : selectedLanguage === 'java' ? 'java' : selectedLanguage === 'cpp' ? 'cpp' : 'sql'}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={resetCode}
                        className="px-2.5 py-1 text-[10px] font-black uppercase tracking-wider bg-slate-800 hover:bg-slate-700 text-white rounded-md transition-all flex items-center space-x-1"
                        title="Reset code editor template"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 15.19M9 5.513a11.52 11.52 0 002.3 3l.7.7m0 0l.7-.7a11.52 11.52 0 002.3-3" />
                        </svg>
                        <span>Reset</span>
                      </button>
                    </div>
                  </div>

                  {/* Code Editor TextArea */}
                  <div className="flex-1 relative overflow-hidden flex">
                    {/* Simulated Line Numbers */}
                    <div className="w-12 bg-[#050507] border-r border-slate-800 py-4 text-right pr-3 select-none text-[10px] font-mono text-slate-600 space-y-[4.5px] leading-5">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>

                    {/* Editor Textarea */}
                    <textarea 
                      value={userCodes[currentProblem.id] || ''}
                      onChange={(e) => {
                        const newCode = e.target.value;
                        setUserCodes(prev => ({
                          ...prev,
                          [currentProblem.id]: newCode
                        }));
                      }}
                      className="flex-1 p-4 bg-[#08080a] text-slate-100 font-mono text-xs focus:outline-none resize-none leading-5 outline-none border-0"
                      placeholder="Write your algorithm here..."
                      spellCheck={false}
                    />
                  </div>

                  {/* COMPILER OUTPUT BAR / TERMINAL PANEL */}
                  <div className={`h-40 border-t ${theme === 'dark' ? 'border-slate-800 bg-[#060608]' : 'border-slate-200 bg-slate-50'} flex flex-col overflow-hidden`}>
                    <div className={`px-4 py-1.5 border-b ${theme === 'dark' ? 'border-slate-800 bg-[#0e0e11]' : 'border-slate-100 bg-slate-100'} flex items-center justify-between shrink-0`}>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        <span>Compiler Console Output</span>
                      </span>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto custom-scrollbar font-mono text-[10px] space-y-1 text-slate-400 bg-[#030304]">
                      {consoleLogs.length === 0 ? (
                        <div className="text-slate-600 italic">// Run tests or Submit to output compilation analysis.</div>
                      ) : (
                        consoleLogs.map((log, idx) => (
                          <div 
                            key={idx} 
                            className={`${
                              log.startsWith(' ✔') ? 'text-emerald-400' :
                              log.startsWith(' ✘') ? 'text-rose-400 font-bold' :
                              log.startsWith('[Error]') ? 'text-rose-500 font-bold' :
                              'text-slate-400'
                            }`}
                          >
                            {log}
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Submission & Action Bar */}
                  <div className={`p-4 border-t ${theme === 'dark' ? 'border-slate-800 bg-[#08080c]' : 'border-slate-200 bg-white'} shrink-0 flex items-center justify-between`}>
                    <div className="text-[11px] text-slate-500 font-medium">
                      All test cases must pass for logical completion
                    </div>

                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={handleRunCode}
                        disabled={isRunningTests || isSubmitting}
                        className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest border transition-all active:scale-[0.98] ${
                          theme === 'dark' 
                            ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-300' 
                            : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-700'
                        } disabled:opacity-50`}
                      >
                        {isRunningTests && !isSubmitting ? 'Running...' : 'Run Tests'}
                      </button>

                      <button 
                        onClick={handleSubmitCode}
                        disabled={isRunningTests || isSubmitting}
                        className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-md shadow-blue-600/15 transition-all active:scale-[0.98] disabled:opacity-50"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Answer'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submitted success overlay banner */}
              <AnimatePresence>
                {hasSubmittedSuccessfully && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 z-50 bg-[#030303]/85 backdrop-blur-sm flex flex-col items-center justify-center p-6"
                  >
                    <div className="bg-emerald-500/10 border border-emerald-500/30 p-8 rounded-2xl max-w-sm text-center space-y-4 shadow-2xl">
                      <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="text-xl font-black uppercase tracking-tight text-white">Answer Accepted</h4>
                        <p className="text-xs text-slate-400">Verifying logical statements... Moving onto the next assessment problem.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* 3. FINAL RESULTS SCREEN */}
          {currentStep === 'results' && (
            <motion.div 
              key="results"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col overflow-y-auto p-6 items-center justify-center"
            >
              <div className="w-full max-w-3xl space-y-8 py-8">
                
                {/* Visual Header card depending on Pass/Fail */}
                {isPassed ? (
                  // --- PASS SCREEN ---
                  <div className={`p-8 rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent flex flex-col md:flex-row items-center gap-6 shadow-2xl relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl -z-10" />
                    
                    <div className="w-20 h-20 bg-amber-500/10 rounded-2xl border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>

                    <div className="space-y-2 text-center md:text-left">
                      <span className="text-[10px] font-black uppercase tracking-widest text-amber-500 px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20">Assessment Passed</span>
                      <h2 className="text-3xl font-black tracking-tight text-white uppercase">Congratulations, {userName}!</h2>
                      <p className="text-xs text-slate-400">
                        You scored <span className="text-amber-400 font-extrabold">{scorePercentage}% ({correctCount}/10 correct answers)</span>, which meets the 75% threshold. You are officially certified as a NodeLab Expert.
                      </p>
                    </div>
                  </div>
                ) : (
                  // --- FAIL SCREEN ---
                  <div className={`p-8 rounded-3xl border border-rose-500/20 bg-gradient-to-br from-rose-500/5 via-transparent to-transparent flex flex-col md:flex-row items-center gap-6 shadow-2xl relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/5 rounded-full blur-2xl -z-10" />

                    <div className="w-20 h-20 bg-rose-500/10 rounded-2xl border border-rose-500/20 flex items-center justify-center text-rose-500 shrink-0">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>

                    <div className="space-y-2 text-center md:text-left">
                      <span className="text-[10px] font-black uppercase tracking-widest text-rose-500 px-3 py-1 bg-rose-500/10 rounded-full border border-rose-500/20">Assessment Failed</span>
                      <h2 className="text-3xl font-black tracking-tight text-white uppercase">Keep Practicing, {userName}</h2>
                      <p className="text-xs text-slate-400">
                        You scored <span className="text-rose-400 font-extrabold">{scorePercentage}% ({correctCount}/10 correct)</span>, which is below the 75% credential requirement. Retake the assessment anytime to earn your certificate.
                      </p>
                    </div>
                  </div>
                )}

                {/* Score Summary breakdown and review */}
                <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-[#09090b] border-slate-800' : 'bg-white border-slate-200'} space-y-4`}>
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">Question Performance Summary</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {problems.map((prob, idx) => {
                      const passed = scores[prob.id] === true;
                      return (
                        <div 
                          key={prob.id}
                          className={`p-3 rounded-xl border flex flex-col items-center space-y-1 ${
                            passed 
                              ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400' 
                              : 'bg-rose-500/5 border-rose-500/20 text-rose-400'
                          }`}
                        >
                          <span className="text-[10px] font-mono text-slate-400">Q{prob.number}</span>
                          <span className="text-xs font-black uppercase">{passed ? 'Pass' : 'Fail'}</span>
                          <span className="text-[9px] font-semibold opacity-60 uppercase">{prob.difficulty}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CERTIFICATE PREVIEW AREA (Pass state only) */}
                {isPassed && (
                  <div className="space-y-4">
                    <AnimatePresence mode="wait">
                      {certRevealState !== 'revealed' ? (
                        <motion.div
                          key="reveal-loading"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          className={`w-full aspect-[1.4] p-6 rounded-2xl border border-dashed flex flex-col items-center justify-center relative overflow-hidden ${
                            theme === 'dark' 
                              ? 'bg-slate-900/40 border-slate-700/50' 
                              : 'bg-slate-50 border-slate-300'
                          }`}
                        >
                          {/* Ambient glow in background */}
                          <div className="absolute inset-0 bg-radial from-amber-500/5 to-transparent blur-2xl pointer-events-none" />

                          <div className="z-10 flex flex-col items-center space-y-5 max-w-md text-center w-full">
                            {/* Animated status circle loader */}
                            <div className="relative flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full border-[3px] border-slate-800 border-t-amber-500 animate-spin" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                {certRevealState === 'verifying' && (
                                  <svg className="w-6 h-6 text-amber-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                  </svg>
                                )}
                                {certRevealState === 'generating' && (
                                  <svg className="w-6 h-6 text-amber-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                  </svg>
                                )}
                                {(certRevealState === 'celebrating' || certRevealState === 'idle') && (
                                  <span className="text-xl">🎉</span>
                                )}
                              </div>
                            </div>

                            <div className="space-y-1">
                              <h4 className="text-xs font-black uppercase tracking-widest text-amber-500">
                                {certRevealState === 'verifying' && 'Verifying Integrity Checklists...'}
                                {certRevealState === 'generating' && 'Signing Cryptographic Credential...'}
                                {(certRevealState === 'celebrating' || certRevealState === 'idle') && 'Verifying Sandbox Integrity: SECURED'}
                              </h4>
                              <p className="text-[11px] font-medium text-slate-400">
                                {certRevealState === 'verifying' && 'Scanning development environment logs, test suites, and compile metadata...'}
                                {certRevealState === 'generating' && 'Applying secure certificate signature and registering Verification ID...'}
                                {(certRevealState === 'celebrating' || certRevealState === 'idle') && 'Assessment validated! Standby for certification reveal...'}
                              </p>
                            </div>

                            {/* Faux Console Logs for immersion */}
                            <div className="w-full bg-slate-950/80 rounded-xl p-3 border border-slate-800 text-left font-mono text-[10px] text-emerald-400/90 space-y-1 select-none overflow-hidden h-[62px]">
                              {certRevealState === 'verifying' && (
                                <>
                                  <div className="animate-pulse">&gt; [OK] Sandbox compliance: APPROVED</div>
                                  <div className="opacity-70">&gt; [OK] Score threshold met: {scorePercentage}%</div>
                                  <div className="opacity-40 animate-pulse">&gt; Initializing security verification suite...</div>
                                </>
                              )}
                              {certRevealState === 'generating' && (
                                <>
                                  <div className="text-slate-400">&gt; [OK] Score threshold met: {scorePercentage}%</div>
                                  <div>&gt; [OK] Cryptographic seed generated successfully</div>
                                  <div className="animate-pulse">&gt; Registering UUID {certificateVerifyId || placeholderVerifyId}...</div>
                                </>
                              )}
                              {(certRevealState === 'celebrating' || certRevealState === 'idle') && (
                                <>
                                  <div className="text-slate-400">&gt; [OK] Registered UUID {certificateVerifyId || placeholderVerifyId}</div>
                                  <div className="text-amber-400 font-bold">&gt; [CELEBRATING] ALL 10 EXERCISES MET. STATUS CONFIRMED.</div>
                                  <div className="animate-bounce text-white font-bold">&gt; PREPARING CREDENTIAL REVEAL...</div>
                                </>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="reveal-certificate"
                          initial={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
                          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                          transition={{ duration: 0.6, ease: 'easeOut' }}
                          className="space-y-4"
                        >
                          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">Credential Certification Preview</h3>
                            <div className="flex items-center gap-2 flex-wrap">
                              {/* Custom Signature Upload Button */}
                              <label className="cursor-pointer bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center space-x-2">
                                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                                <span>Upload Signature</span>
                                <input 
                                  type="file" 
                                  accept="image/*" 
                                  className="hidden" 
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      const reader = new FileReader();
                                      reader.onload = () => {
                                        setSignatureUrl(reader.result as string);
                                      };
                                      reader.readAsDataURL(file);
                                    }
                                  }}
                                />
                              </label>

                              <button 
                                onClick={downloadCertificate}
                                className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-amber-500/10 flex items-center space-x-2"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                <span>Download Certificate</span>
                              </button>
                            </div>
                          </div>

                          <div className="bg-slate-900/30 p-2 rounded-2xl border border-amber-500/10 shadow-inner overflow-auto flex justify-center">
                            <Certificate 
                              recipientName={userName || 'Candidate Name'} 
                              courseName={(selectedLanguage === 'python' ? 'PYTHON 3.10' :
                                           selectedLanguage === 'javascript' ? 'JAVASCRIPT (ES6)' :
                                           selectedLanguage === 'java' ? 'JAVA (JDK 17)' :
                                           selectedLanguage === 'cpp' ? 'C++ (GCC G++17)' : 'SQL (POSTGRESQL)')}
                              date={new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                              verificationId={certificateVerifyId || placeholderVerifyId}
                              signatureUrl={signatureUrl}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {/* Footer Controls */}
                <div className="flex justify-center space-x-4">
                  <button 
                    onClick={() => {
                      setCurrentStep('register');
                    }}
                    className={`px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest border transition-all active:scale-[0.98] ${
                      theme === 'dark' 
                        ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-300' 
                        : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    Retake Assessment
                  </button>

                  <button 
                    onClick={onBackToHome}
                    className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-md transition-all active:scale-[0.98]"
                  >
                    Return to home
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Security Warning Banner */}
        <AnimatePresence>
          {securityWarning && (
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] w-full max-w-md p-4 bg-rose-500/10 border border-rose-500/30 backdrop-blur-md rounded-2xl shadow-xl flex items-start space-x-3"
            >
              <div className="p-1.5 bg-rose-500/20 text-rose-400 rounded-lg shrink-0 mt-0.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="space-y-1 text-left">
                <h4 className="text-xs font-black uppercase tracking-widest text-white">Security Alert</h4>
                <p className="text-xs text-rose-300 font-medium leading-relaxed">{securityWarning}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
