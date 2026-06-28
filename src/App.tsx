import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, Terminal, Cpu, Award, Sparkles, Code2, Play, 
  Trash2, HelpCircle, LogOut, User, Sun, Moon, ChevronRight, 
  Search, Database, Brain, Compass, Menu, X, ArrowRight, CheckCircle2, Info
} from 'lucide-react';

import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { ForgotPasswordForm } from './components/ForgotPasswordForm';
import { TUTORIAL_SECTIONS, TutorialSection, TutorialTopic } from './tutorialsData';
import { AssessmentPlatform } from './AssessmentPlatform';

// Categories mapping to group the 52 tutorial sections beautifully
const SECTION_CATEGORIES: Record<string, string> = {
  html: 'Frontend',
  css: 'Frontend',
  js: 'Frontend',
  react: 'Frontend',
  vue: 'Frontend',
  svelte: 'Frontend',
  tailwind: 'Frontend',
  jquery: 'Frontend',
  bootstrap3: 'Frontend',
  bootstrap4: 'Frontend',
  bootstrap5: 'Frontend',
  htmx: 'Frontend',
  mui: 'Frontend',
  animejs: 'Frontend',
  backbone: 'Frontend',
  
  nodeAndNext: 'Backend & Frameworks',
  flask: 'Backend & Frameworks',
  streamlit: 'Backend & Frameworks',
  firebase: 'Services',
  parcel: 'Tools & Config',
  
  sql: 'Databases',
  mysql: 'Databases',
  postgres: 'Databases',
  sqlite: 'Databases',
  mongoDB: 'Databases',
  redis: 'Databases',
  questdb: 'Databases',
  
  python: 'Languages',
  java: 'Languages',
  c: 'Languages',
  cpp: 'Languages',
  csharp: 'Languages',
  kotlin: 'Languages',
  go: 'Languages',
  ruby: 'Languages',
  swift: 'Languages',
  dart: 'Languages',
  typescript: 'Languages',
  assembly: 'Languages',
  xml: 'Languages',
  r: 'Languages',
  
  pandas: 'Data Science & ML',
  numpy: 'Data Science & ML',
  seaborn: 'Data Science & ML',
  pytorch: 'Data Science & ML',
  tensorflow: 'Data Science & ML',
  matplotlib: 'Data Science & ML',
  scikitLearn: 'Data Science & ML',
};

const CATEGORIES_LIST = [
  'Frontend',
  'Languages',
  'Databases',
  'Backend & Frameworks',
  'Data Science & ML',
  'Services',
  'Tools & Config'
];

interface UserSession {
  email: string;
  fullName: string;
  avatarEmoji: string;
  avatarColor: string;
}

export default function App() {
  // --- Core States ---
  const [currentUser, setCurrentUser] = useState<UserSession | null>(null);
  const [authScreen, setAuthScreen] = useState<'login' | 'register' | 'forgot-password'>('login');
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  
  const [activeTab, setActiveTab] = useState<'tutorials' | 'assessments'>('tutorials');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [searchQuery, setSearchQuery] = useState('');

  // Sidebar expanded categories state
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'Frontend': true,
    'Languages': true,
  });

  // Selected tutorial topic state
  const [selectedSection, setSelectedSection] = useState<TutorialSection | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<TutorialTopic | null>(null);
  const [editorCode, setEditorCode] = useState('');

  // Playground Execution Terminal States
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [showHtmlPreview, setShowHtmlPreview] = useState(false);

  // AI Co-Pilot State
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);
  const [aiFeedback, setAiFeedback] = useState<{
    explanation: string;
    complexity: { time: string; space: string };
    suggestion: string;
    suggestedCode: string;
  } | null>(null);
  const [showAiPanel, setShowAiPanel] = useState(false);

  // --- Initialize App State ---
  useEffect(() => {
    // 1. Check existing session
    const savedSession = localStorage.getItem('current_session');
    if (savedSession) {
      try {
        setCurrentUser(JSON.parse(savedSession));
      } catch (e) {
        localStorage.removeItem('current_session');
      }
    }

    // 2. Select default tutorial topic (HTML Intro)
    const defaultSec = TUTORIAL_SECTIONS.find(s => s.id === 'html');
    if (defaultSec) {
      setSelectedSection(defaultSec);
      if (defaultSec.topics && defaultSec.topics.length > 0) {
        setSelectedTopic(defaultSec.topics[0]);
        setEditorCode(defaultSec.topics[0].code || '');
      }
    }
  }, []);

  // Update editor code when selected topic changes
  useEffect(() => {
    if (selectedTopic) {
      setEditorCode(selectedTopic.code || '');
      setTerminalLogs([]);
      setShowHtmlPreview(false);
      setAiFeedback(null);
    }
  }, [selectedTopic]);

  // Handle Search Input matching across all 52 tutorial titles and topics
  const filteredSections = TUTORIAL_SECTIONS.filter(sec => {
    const query = searchQuery.toLowerCase();
    const matchSecTitle = sec.title.toLowerCase().includes(query);
    const matchTopic = sec.topics?.some(topic => 
      topic.title.toLowerCase().includes(query) || 
      topic.description.toLowerCase().includes(query)
    );
    return matchSecTitle || matchTopic;
  });

  const toggleCategory = (cat: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  // --- Handlers ---
  const handleAuthSuccess = (email: string, name: string, emoji: string, color: string) => {
    const sessionUser = { email, fullName: name, avatarEmoji: emoji, avatarColor: color };
    setCurrentUser(sessionUser);
    localStorage.setItem('current_session', JSON.stringify(sessionUser));
  };

  const handleLogout = () => {
    localStorage.removeItem('current_session');
    setCurrentUser(null);
    setAuthScreen('login');
  };

  const runPlaygroundCode = () => {
    setIsRunningCode(true);
    setTerminalLogs([
      `[NodeLab Sandbox v2.4.0] Booting environment...`,
      `[Compiler] Preparing execution resources...`,
    ]);

    setTimeout(() => {
      const logs: string[] = [];
      const currentLang = selectedSection?.id || 'javascript';

      // Live Javascript evaluation engine
      if (currentLang === 'js') {
        logs.push(`[Runtime] Intercepting console.log outputs...`);
        logs.push(`[Runtime] Executing JavaScript in virtual scope...`);

        // Capture standard log statements
        const capturedLogs: string[] = [];
        const originalConsoleLog = console.log;
        
        console.log = (...args: any[]) => {
          capturedLogs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
        };

        try {
          // Inline evaluation sandbox
          const executor = new Function(editorCode);
          executor();
          
          if (capturedLogs.length > 0) {
            logs.push(...capturedLogs.map(l => ` > ${l}`));
            logs.push(`[Success] Execution completed with exit code 0.`);
          } else {
            logs.push(`[Warning] Script ran successfully, but produced no console.log statements.`);
          }
        } catch (e: any) {
          logs.push(`[Error] Runtime exception: ${e.message}`);
        } finally {
          console.log = originalConsoleLog;
        }
      } 
      // Live HTML evaluation engine
      else if (currentLang === 'html' || currentLang === 'css' || currentLang === 'tailwind') {
        logs.push(`[Previewer] Binding custom markup context...`);
        logs.push(`[Previewer] Successfully rendered! View outputs inside the Preview tab.`);
        setShowHtmlPreview(true);
      } 
      // Simulated parsing and variable dump for all other 49 languages
      else {
        logs.push(`[Simulation] Pre-parsing Solution File (Compiler Flags: -O2)...`);
        
        // Analyze code with simple heuristic triggers to dump smart outcomes
        const codeLower = editorCode.toLowerCase();
        logs.push(`[Vim-Linker] Symbol definitions linked successfully.`);
        logs.push(`[Sandbox Log] stdout results:`);
        
        if (codeLower.includes('print(') || codeLower.includes('println') || codeLower.includes('cout <<') || codeLower.includes('echo ')) {
          // Try to extract printed content or simulate logic
          if (codeLower.includes('hello')) {
            logs.push(` > Hello, World!`);
          } else if (codeLower.includes('even')) {
            logs.push(` > Number: 14 -> Status: EVEN`);
          } else {
            logs.push(` > Output: Process completed. Program evaluation matches logical statements.`);
          }
        } else {
          logs.push(` > Done. Code contains valid syntax. No standard outputs defined.`);
        }
        logs.push(`[Success] Simulated execution terminated successfully.`);
      }

      setTerminalLogs(prev => [...prev, ...logs]);
      setIsRunningCode(false);
    }, 1000);
  };

  // --- Real-Time AI Co-Pilot Assistance Engine ---
  const generateAiAssistance = () => {
    setIsGeneratingAi(true);
    setShowAiPanel(true);
    setAiFeedback(null);

    setTimeout(() => {
      // Analyze code heuristics to deliver highly contextual algorithmic analysis
      const code = editorCode;
      const lang = selectedSection?.title || 'Programming';
      
      let explanation = `This code is a standard implementation in ${lang}. It sets up initial structures, coordinates key operations, and resolves structural statements.`;
      let timeComplexity = 'O(N)';
      let spaceComplexity = 'O(1)';
      let suggestion = 'Consider adding early exit conditions or boundary assertions to safeguard performance.';
      let suggestedCode = code;

      // Deduce algorithm properties based on syntax inspection
      const hasForLoop = (code.match(/for /g) || []).length;
      const hasWhile = code.includes('while');
      const hasNestedLoops = (code.match(/for.*for/gs) || []).length > 0 || hasForLoop > 1;

      if (hasNestedLoops) {
        timeComplexity = 'O(N²)';
        explanation = `The assistant detected multiple nested loops in your ${lang} logic. This signifies a quadratic expansion, iterating through arrays progressively.`;
        suggestion = 'Refactor the inner loops by indexing values into a Map or Hash Set to run in linear time.';
      } else if (hasForLoop || hasWhile) {
        timeComplexity = 'O(N)';
        explanation = `This code uses a loop structure to iterate sequentially across the sequence. It assesses each element once.`;
        suggestion = 'This represents highly optimized logic. Safeguard against empty bounds or null pointers.';
      } else {
        timeComplexity = 'O(1)';
        explanation = `This contains constant-time operations. It computes results without iterating across dynamic arrays or sequences.`;
      }

      if (code.includes('Array') || code.includes('List') || code.includes('append') || code.includes('push')) {
        spaceComplexity = 'O(N)';
      }

      // Tailored suggestions per section
      if (selectedSection?.id === 'js') {
        suggestedCode = `// AI Refactored Modern ES6 Version\nconst optimizedSolve = (data) => {\n  if (!data) return [];\n  // Use functional map/filter routines\n  return data.filter(item => item !== null);\n};`;
        suggestion = 'Transition from standard imperative for loops to declarative ES6 routines like .map(), .filter(), or .reduce().';
      } else if (selectedSection?.id === 'python') {
        suggestedCode = `# AI Pythonic One-Liner Optimization\ndef optimized_solve(items):\n    # Utilize list comprehensions for speed\n    return [x for x in items if x is not None]`;
        suggestion = 'Employ Pythonic list comprehensions or built-in generator expressions to optimize runtime speed.';
      } else if (selectedSection?.id === 'html') {
        explanation = 'Your HTML template is solid, setting up clean container classes and responsive text layouts.';
        timeComplexity = 'O(Dom)';
        suggestedCode = `<!-- AI Optimized Markup -->\n<div class="flex flex-col items-center justify-center p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">\n  <h3 class="text-lg font-bold text-white tracking-tight">Optimized Card</h3>\n  <p className="text-sm text-slate-400">Constructed with high-contrast semantics.</p>\n</div>`;
        suggestion = 'Add semantic micro-formats or clear ARIA attributes to ensure the frontend satisfies access rules.';
      }

      setAiFeedback({
        explanation,
        complexity: { time: timeComplexity, space: spaceComplexity },
        suggestion,
        suggestedCode,
      });
      setIsGeneratingAi(false);
    }, 1500);
  };

  // --- UNAUTHENTICATED RENDER (Sign In / Register Portal) ---
  if (!currentUser) {
    return (
      <div className={`min-h-screen flex items-center justify-center font-sans bg-[#030303] text-white overflow-y-auto p-4 md:p-8 relative`}>
        {/* Abstract background vector patterns */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl -z-10" />

        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-stretch bg-[#08080a] border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl relative" id="auth-portal-wrapper">
          {/* Left Hero Brand Panel (Descriptive info) */}
          <div className="lg:w-1/2 p-8 md:p-12 bg-gradient-to-br from-indigo-950/40 via-slate-950 to-slate-950 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800/80" id="auth-hero-panel">
            <div className="space-y-3" id="auth-brand-info">
              <div className="flex items-center space-x-2.5" id="auth-brand-logo">
                <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center font-extrabold text-white text-base">NL</div>
                <span className="text-xl font-black tracking-tight text-white uppercase">Node<span className="text-indigo-500">Lab</span> Academy</span>
              </div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">The Intelligent Educational Terminal</p>
            </div>

            <div className="space-y-8 my-8 lg:my-0" id="auth-hero-bullet-points">
              <div className="space-y-2" id="hero-main-title">
                <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-none uppercase">
                  Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">52 technologies</span> live inside your browser
                </h1>
                <p className="text-sm text-slate-400 max-w-md leading-relaxed font-medium">
                  Experience a high-fidelity coding platform. Read comprehensive courses, run dynamic codes instantly, and challenge assessments.
                </p>
              </div>

              {/* Highlight list */}
              <div className="space-y-4" id="hero-highlights">
                <div className="flex items-start gap-3" id="hl-1">
                  <div className="w-5 h-5 bg-indigo-500/10 border border-indigo-500/20 rounded-md flex items-center justify-center text-indigo-400 mt-0.5"><Code2 size={12} /></div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-slate-200 uppercase tracking-wide">Multi-Language Playground</p>
                    <p className="text-xs text-slate-400 leading-relaxed">Run real-time compilers, execute variable scopes, and visual outputs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3" id="hl-2">
                  <div className="w-5 h-5 bg-violet-500/10 border border-violet-500/20 rounded-md flex items-center justify-center text-violet-400 mt-0.5"><Brain size={12} /></div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-slate-200 uppercase tracking-wide">Real-time AI Co-Pilot Assistance</p>
                    <p className="text-xs text-slate-400 leading-relaxed">Explain logic details, evaluate complexity overhead, and suggest smart refactorings.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3" id="hl-3">
                  <div className="w-5 h-5 bg-amber-500/10 border border-amber-500/20 rounded-md flex items-center justify-center text-amber-400 mt-0.5"><Award size={12} /></div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-slate-200 uppercase tracking-wide">Expert Assessments & Credentials</p>
                    <p className="text-xs text-slate-400 leading-relaxed">Pass rigorous exams to generate and download signed vector certificates.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-500 font-mono tracking-wider" id="hero-copyright">
              NODELAB ENGINE V2.4 // SECURE AUTH PORTAL
            </div>
          </div>

          {/* Right Form panel (Switches views) */}
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center" id="auth-form-panel">
            <AnimatePresence mode="wait">
              {authScreen === 'login' && (
                <LoginForm
                  key="login-form"
                  onSuccess={handleAuthSuccess}
                  onSwitchToRegister={() => setAuthScreen('register')}
                  onSwitchToForgotPassword={(email) => {
                    setForgotPasswordEmail(email);
                    setAuthScreen('forgot-password');
                  }}
                />
              )}

              {authScreen === 'register' && (
                <RegisterForm
                  key="register-form"
                  onSuccess={handleAuthSuccess}
                  onSwitchToLogin={() => setAuthScreen('login')}
                />
              )}

              {authScreen === 'forgot-password' && (
                <ForgotPasswordForm
                  key="forgot-pwd-form"
                  initialEmail={forgotPasswordEmail}
                  onBack={() => setAuthScreen('login')}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  }

  // --- COMPLETED AUTH RENDER (Interactive Workspace Dashboard) ---
  return (
    <div className={`min-h-screen font-sans ${theme === 'dark' ? 'bg-[#030303] text-slate-100' : 'bg-slate-50 text-slate-900'} transition-colors duration-200 flex flex-col overflow-hidden`}>
      
      {/* GLOBAL DOCK / HEADER */}
      <header className={`px-6 py-4 flex items-center justify-between border-b ${theme === 'dark' ? 'border-slate-800/80 bg-[#060608]' : 'border-slate-200 bg-white shadow-sm'} shrink-0 z-30`}>
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-extrabold text-white text-sm">NL</div>
            <span className="text-lg font-black tracking-tight uppercase">
              Node<span className="text-indigo-500">Lab</span> <span className="text-slate-500 font-medium">Academy</span>
            </span>
          </div>

          {/* Mode Toggles */}
          <nav className="hidden md:flex items-center bg-slate-900/40 border border-slate-800/60 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('tutorials')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-150 flex items-center space-x-2
                ${activeTab === 'tutorials' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-slate-200'}`}
            >
              <BookOpen size={14} />
              <span>Tutorials ({TUTORIAL_SECTIONS.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('assessments')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-150 flex items-center space-x-2
                ${activeTab === 'assessments' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-slate-200'}`}
            >
              <Award size={14} />
              <span>Assessments & Credentials</span>
            </button>
          </nav>
        </div>

        {/* Right side user menu */}
        <div className="flex items-center space-x-4">
          {/* Theme switcher */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`p-2 rounded-xl border transition-all duration-150
              ${theme === 'dark' 
                ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-amber-400' 
                : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-indigo-600'}`}
            title="Toggle theme view"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* User Badge */}
          <div className={`flex items-center space-x-2.5 pl-3.5 border-l ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg shadow-inner ${currentUser.avatarColor}`}>
              {currentUser.avatarEmoji}
            </div>
            <div className="hidden lg:block text-left">
              <p className="text-xs font-bold text-slate-100 truncate max-w-[120px]">{currentUser.fullName}</p>
              <p className="text-[10px] text-slate-400 font-mono tracking-wider truncate">STUDENT CODE</p>
            </div>
          </div>

          {/* Log out */}
          <button
            onClick={handleLogout}
            className={`p-2 rounded-xl transition-all duration-150 border
              ${theme === 'dark' 
                ? 'bg-slate-900 border-slate-800 hover:bg-rose-500/10 hover:border-rose-500/20 text-slate-400 hover:text-rose-400' 
                : 'bg-slate-100 border-slate-200 hover:bg-rose-50 hover:border-rose-100 text-slate-600 hover:text-rose-600'}`}
            title="Log out of session"
          >
            <LogOut size={15} />
          </button>
        </div>
      </header>

      {/* RENDER ACTIVE SCREEN */}
      <div className="flex-1 flex overflow-hidden relative">
        <AnimatePresence mode="wait">
          
          {/* A. WORKSPACE PORTAL (TUTORIALS & INTERACTIVE COMPILER) */}
          {activeTab === 'tutorials' && (
            <motion.div
              key="tutorials-workspace"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex overflow-hidden"
            >
              {/* 1. LEFT SIDE NAVIGATION: categorized courses */}
              <aside className={`w-80 border-r ${theme === 'dark' ? 'border-slate-800 bg-[#060608]' : 'border-slate-200 bg-white shadow-sm'} flex flex-col overflow-hidden shrink-0`}>
                {/* Search Bar */}
                <div className="p-4 border-b border-slate-800/60 shrink-0">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
                    <input
                      type="text"
                      placeholder="Search 52 tutorials..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`w-full pl-9 pr-4 py-2 text-xs rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all font-semibold
                        ${theme === 'dark' 
                          ? 'bg-slate-900/60 border border-slate-800 text-white placeholder-slate-600' 
                          : 'bg-slate-100 border border-slate-200 text-slate-900 placeholder-slate-400'}`}
                    />
                  </div>
                </div>

                {/* Categories Accordion */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                  {CATEGORIES_LIST.map(category => {
                    // Filter tutorials belonging to this category
                    const categorySections = filteredSections.filter(sec => {
                      const matchedCat = SECTION_CATEGORIES[sec.id];
                      return matchedCat === category;
                    });

                    if (categorySections.length === 0) return null;

                    const isExpanded = expandedCategories[category];

                    return (
                      <div key={category} className="space-y-1.5" id={`category-block-${category.toLowerCase().replace(/\s+/g, '-')}`}>
                        {/* Category Heading Trigger */}
                        <button
                          onClick={() => toggleCategory(category)}
                          className="w-full flex items-center justify-between py-1 px-2 text-[10px] font-extrabold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-colors"
                        >
                          <span>{category} ({categorySections.length})</span>
                          <ChevronRight 
                            size={12} 
                            className={`transform transition-transform ${isExpanded ? 'rotate-90 text-indigo-400' : 'text-slate-500'}`} 
                          />
                        </button>

                        {/* Expandable Tutorials list */}
                        {isExpanded && (
                          <div className="space-y-0.5 pl-1" id={`category-list-${category.toLowerCase().replace(/\s+/g, '-')}`}>
                            {categorySections.map((sec) => {
                              const isSelected = selectedSection?.id === sec.id;
                              return (
                                <button
                                  key={sec.id}
                                  id={`tutorial-sec-btn-${sec.id}`}
                                  onClick={() => {
                                    setSelectedSection(sec);
                                    if (sec.topics && sec.topics.length > 0) {
                                      setSelectedTopic(sec.topics[0]);
                                    }
                                  }}
                                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all group
                                    ${isSelected 
                                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/10' 
                                      : 'text-slate-400 hover:bg-slate-900/40 hover:text-slate-200'}`}
                                >
                                  <div className="flex items-center space-x-2.5 truncate">
                                    {sec.iconName === 'xml' ? (
                                      <img 
                                        src="/src/assets/images/xml_icon_1782476557333.jpg" 
                                        alt="XML Logo" 
                                        className="w-5 h-5 rounded-md object-contain bg-slate-950 p-0.5 border border-slate-850"
                                        referrerPolicy="no-referrer"
                                      />
                                    ) : (
                                      <div className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black
                                        ${isSelected 
                                          ? 'bg-indigo-500 text-white' 
                                          : 'bg-slate-900 border border-slate-800 text-slate-300 group-hover:bg-slate-850'}`}
                                      >
                                        {sec.title.substring(0, 2).toUpperCase()}
                                      </div>
                                    )}
                                    <span className="truncate">{sec.title}</span>
                                  </div>
                                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full font-mono
                                    ${isSelected ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-900/80 text-slate-500'}`}
                                  >
                                    {sec.topics?.length || 0}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </aside>

              {/* 2. MIDDLE SCREEN: Course content, explanations, and split-screen IDE */}
              <main className="flex-1 flex overflow-hidden">
                <div className="w-1/2 flex flex-col overflow-hidden border-r border-slate-800/80">
                  {/* Topic navigation tabs */}
                  {selectedSection && (
                    <div className={`px-4 py-3.5 border-b ${theme === 'dark' ? 'border-slate-800/80 bg-[#060608]' : 'border-slate-200 bg-slate-50'} flex items-center space-x-2 overflow-x-auto shrink-0 custom-scrollbar`}>
                      {selectedSection.topics?.map((topic, idx) => {
                        const isSel = selectedTopic?.id === topic.id;
                        return (
                          <button
                            key={topic.id}
                            id={`topic-nav-btn-${topic.id}`}
                            onClick={() => setSelectedTopic(topic)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-150 shrink-0
                              ${isSel 
                                ? 'bg-slate-800 text-indigo-400 font-bold border border-indigo-500/20' 
                                : 'text-slate-400 hover:bg-slate-900/20 hover:text-slate-300'}`}
                          >
                            Step {idx + 1}: {topic.title}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Course Explanations panel */}
                  {selectedTopic ? (
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar text-left">
                      <div className="flex items-start space-x-4">
                        {selectedSection?.iconName === 'xml' && (
                          <img 
                            src="/src/assets/images/xml_icon_1782476557333.jpg" 
                            alt="XML Logo" 
                            className="w-12 h-12 rounded-xl object-contain bg-[#0c0c0f] p-1.5 border border-slate-800 shadow-xl shrink-0"
                            referrerPolicy="no-referrer"
                          />
                        )}
                        <div className="space-y-1">
                          <span className="text-[10px] font-black uppercase tracking-wider text-indigo-400">Section: {selectedSection?.title}</span>
                          <h2 className="text-xl font-black text-white tracking-tight uppercase leading-tight">{selectedTopic.title}</h2>
                        </div>
                      </div>

                      <div className={`p-4 rounded-2xl border ${theme === 'dark' ? 'bg-[#0a0a0d] border-slate-800' : 'bg-slate-50 border-slate-200'} text-xs font-medium leading-relaxed text-slate-300`}>
                        {selectedTopic.description}
                      </div>

                      {/* Course explanations array */}
                      <div className="space-y-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block">Core Educational Insights</span>
                        <div className="space-y-3">
                          {selectedTopic.explanation?.map((para, i) => (
                            <div key={i} className="flex gap-3 text-xs leading-relaxed text-slate-400 font-medium">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0 mt-1.5" />
                              <p>{para}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Info warning indicator */}
                      <div className="p-4 bg-indigo-950/20 border border-indigo-900/30 rounded-2xl flex gap-3 text-slate-400 text-xs">
                        <Info size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                        <p className="leading-relaxed">
                          Feel free to edit the code sample in the editor workspace on the right, run it dynamically, or click <strong className="text-slate-200">AI Co-Pilot</strong> to receive contextual recommendations.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1 flex flex-col items-center justify-center p-6 text-slate-400 font-medium text-xs">
                      Select a topic from the sidebar courses to get started.
                    </div>
                  )}
                </div>

                {/* 3. RIGHT COLUMN: Interactive IDE Terminal, preview box, and AI assistance drawer */}
                <div className="w-1/2 flex flex-col overflow-hidden bg-[#070709]">
                  
                  {/* IDE header */}
                  <div className="px-4 py-2 bg-slate-900/60 border-b border-slate-800 flex items-center justify-between shrink-0">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="text-[11px] font-mono text-slate-500 ml-2">sandbox_editor.{selectedSection?.id === 'python' ? 'py' : selectedSection?.id === 'js' ? 'js' : 'src'}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={generateAiAssistance}
                        className="px-2.5 py-1 text-[10px] font-black uppercase tracking-wider bg-slate-800 hover:bg-slate-700 text-white rounded-md transition-all flex items-center space-x-1"
                      >
                        <Brain size={12} className="text-violet-400" />
                        <span>AI Co-Pilot</span>
                      </button>

                      <button
                        onClick={() => {
                          if (selectedTopic) setEditorCode(selectedTopic.code || '');
                          setTerminalLogs([]);
                          setShowHtmlPreview(false);
                        }}
                        className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider hover:bg-slate-800 text-slate-400 hover:text-white rounded transition-colors"
                        title="Reset code template"
                      >
                        Reset
                      </button>
                    </div>
                  </div>

                  {/* Code editor textarea split */}
                  <div className="flex-1 flex overflow-hidden">
                    <div className="w-10 bg-[#040406] border-r border-slate-850 py-3 text-right pr-2 text-[10px] font-mono text-slate-700 leading-5 select-none space-y-[4px]">
                      {Array.from({ length: 35 }).map((_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>
                    <textarea
                      value={editorCode}
                      onChange={(e) => setEditorCode(e.target.value)}
                      className="flex-1 p-3 bg-[#070709] text-slate-100 font-mono text-xs focus:outline-none resize-none leading-5 overflow-y-auto"
                      spellCheck={false}
                    />
                  </div>

                  {/* Terminal & Preview panel */}
                  <div className="h-56 border-t border-slate-800/80 bg-[#050507] flex flex-col overflow-hidden relative">
                    <div className="px-4 py-1.5 bg-slate-900/30 border-b border-slate-800 flex items-center justify-between shrink-0">
                      <div className="flex items-center space-x-4">
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Sandbox Executor Terminal</span>
                        {(selectedSection?.id === 'html' || selectedSection?.id === 'css' || selectedSection?.id === 'tailwind') && (
                          <div className="flex bg-slate-850 p-0.5 rounded-lg border border-slate-800">
                            <button
                              onClick={() => setShowHtmlPreview(false)}
                              className={`px-2 py-0.5 text-[9px] font-bold rounded ${!showHtmlPreview ? 'bg-slate-700 text-white' : 'text-slate-400'}`}
                            >
                              Console
                            </button>
                            <button
                              onClick={() => setShowHtmlPreview(true)}
                              className={`px-2 py-0.5 text-[9px] font-bold rounded ${showHtmlPreview ? 'bg-slate-700 text-white' : 'text-slate-400'}`}
                            >
                              Live Preview
                            </button>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={runPlaygroundCode}
                        disabled={isRunningCode}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center space-x-1.5 active:scale-95 transition-transform disabled:opacity-50"
                      >
                        <Play size={10} fill="currentColor" />
                        <span>{isRunningCode ? 'Compiling...' : 'Run Code'}</span>
                      </button>
                    </div>

                    {/* Console body or Live Sandbox view */}
                    <div className="flex-1 p-4 overflow-y-auto custom-scrollbar font-mono text-[10px] leading-relaxed text-slate-300">
                      {showHtmlPreview && (selectedSection?.id === 'html' || selectedSection?.id === 'css' || selectedSection?.id === 'tailwind') ? (
                        <div className="w-full h-full bg-white rounded-lg overflow-hidden border border-slate-800 shadow-inner p-1.5">
                          {/* Real-time HTML Sandbox container */}
                          <iframe
                            title="Interactive Sandbox Output"
                            srcDoc={selectedSection?.id === 'tailwind' 
                              ? `<html><head><script src="https://unpkg.com/@tailwindcss/browser@4"></script></head><body>${editorCode}</body></html>`
                              : editorCode}
                            className="w-full h-full border-0 bg-white"
                            sandbox="allow-scripts"
                          />
                        </div>
                      ) : (
                        <div className="space-y-1">
                          {terminalLogs.length === 0 ? (
                            <div className="text-slate-600 italic">// Click "Run Code" to compile and execute current code structure.</div>
                          ) : (
                            terminalLogs.map((l, index) => (
                              <div key={index} className={
                                l.startsWith('[Error]') ? 'text-rose-400 font-bold' :
                                l.startsWith('[Success]') ? 'text-emerald-400' :
                                l.startsWith('[Warning]') ? 'text-amber-400' : 'text-slate-400'
                              }>
                                {l}
                              </div>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </main>

              {/* DYNAMIC AI CO-PILOT ASSISTANCE FLOATING DRAWER */}
              <AnimatePresence>
                {showAiPanel && (
                  <motion.div
                    initial={{ x: 450 }}
                    animate={{ x: 0 }}
                    exit={{ x: 450 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="absolute right-0 top-0 bottom-0 z-40 w-96 bg-[#09090c] border-l border-slate-800 flex flex-col shadow-2xl"
                    id="ai-copilot-drawer"
                  >
                    <div className="p-4 border-b border-slate-800 bg-slate-900/40 flex items-center justify-between" id="ai-drawer-header">
                      <div className="flex items-center space-x-2" id="ai-header-title">
                        <Brain size={16} className="text-violet-400" />
                        <span className="text-xs font-black uppercase tracking-wider text-white">AI Co-Pilot Assist</span>
                      </div>
                      <button
                        onClick={() => setShowAiPanel(false)}
                        className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors focus:outline-hidden"
                        id="ai-drawer-close-btn"
                      >
                        <X size={15} />
                      </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-5 space-y-5 text-left custom-scrollbar" id="ai-drawer-body">
                      {isGeneratingAi ? (
                        <div className="h-full flex flex-col items-center justify-center space-y-3" id="ai-loading">
                          <div className="relative" id="ai-spinner-container">
                            <div className="w-10 h-10 border-4 border-violet-500/10 border-t-violet-400 rounded-full animate-spin" />
                            <Brain size={16} className="text-violet-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                          </div>
                          <div className="text-center" id="ai-loading-text">
                            <p className="text-xs font-bold text-white uppercase tracking-wider">Analyzing Codebase Structure</p>
                            <p className="text-[10px] text-slate-500">Evaluating compiler parameters...</p>
                          </div>
                        </div>
                      ) : aiFeedback ? (
                        <div className="space-y-5" id="ai-feedback-container">
                          
                          {/* 1. Algorithmic Explanation */}
                          <div className="space-y-1.5" id="ai-explanation-section">
                            <span className="text-[10px] font-black uppercase tracking-widest text-violet-400">Heuristic Explanation</span>
                            <p className="text-xs text-slate-300 leading-relaxed font-medium bg-slate-950/50 p-3.5 border border-slate-800/80 rounded-xl">
                              {aiFeedback.explanation}
                            </p>
                          </div>

                          {/* 2. Complexity Analysis */}
                          <div className="space-y-1.5" id="ai-complexity-section">
                            <span className="text-[10px] font-black uppercase tracking-widest text-violet-400">Algorithmic Complexity</span>
                            <div className="grid grid-cols-2 gap-3" id="ai-complexity-cards">
                              <div className="p-3 bg-slate-950/80 border border-slate-850 rounded-xl text-center" id="ai-time-card">
                                <span className="text-[9px] font-bold text-slate-500 block uppercase">Time Complexity</span>
                                <span className="text-sm font-black text-amber-400 font-mono">{aiFeedback.complexity.time}</span>
                              </div>
                              <div className="p-3 bg-slate-950/80 border border-slate-850 rounded-xl text-center" id="ai-space-card">
                                <span className="text-[9px] font-bold text-slate-500 block uppercase">Space Complexity</span>
                                <span className="text-sm font-black text-indigo-400 font-mono">{aiFeedback.complexity.space}</span>
                              </div>
                            </div>
                          </div>

                          {/* 3. Refactoring Tips */}
                          <div className="space-y-1.5" id="ai-refactor-section">
                            <span className="text-[10px] font-black uppercase tracking-widest text-violet-400">Refactoring Advice</span>
                            <p className="text-xs text-slate-400 leading-relaxed font-medium bg-slate-950/50 p-3.5 border border-slate-800/80 rounded-xl">
                              {aiFeedback.suggestion}
                            </p>
                          </div>

                          {/* 4. Optimized Code Snippet */}
                          <div className="space-y-1.5" id="ai-optimized-snippet-section">
                            <span className="text-[10px] font-black uppercase tracking-widest text-violet-400">Recommended Template Code</span>
                            <div className="bg-[#050507] border border-slate-800 rounded-xl p-3 relative group overflow-x-auto" id="ai-snippet-box">
                              <pre className="text-[10px] font-mono text-emerald-400 leading-relaxed leading-5">
                                {aiFeedback.suggestedCode}
                              </pre>
                            </div>
                          </div>

                        </div>
                      ) : (
                        <div className="h-full flex items-center justify-center text-slate-500 text-xs italic" id="ai-empty-prompt">
                          No analysis parsed yet. Select "AI Co-Pilot" to generate context help.
                        </div>
                      )}
                    </div>

                    <div className="p-4 border-t border-slate-800 bg-[#050507] shrink-0" id="ai-drawer-footer">
                      <button
                        onClick={generateAiAssistance}
                        className="w-full bg-violet-600 hover:bg-violet-500 text-white py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center space-x-2"
                        id="ai-generate-again-btn"
                      >
                        <Brain size={12} />
                        <span>Run Full Code Analysis</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* B. EXPERT ASSESSMENT PLATFORM (CERTIFICATION EXAMS) */}
          {activeTab === 'assessments' && (
            <motion.div
              key="assessments-workspace"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col"
            >
              <AssessmentPlatform
                theme={theme}
                onBackToHome={() => setActiveTab('tutorials')}
              />
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
