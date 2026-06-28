import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Editor, { loader } from '@monaco-editor/react';

loader.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs',
  },
});
import { LANGUAGES, GENERIC_CODE_ICON } from './constants';
import { Language, ExecutionResult, LanguageType, User } from './types';
import { runCodeWithAI, explainCode, fixCode, generateCode, generateFullWebProject, fixFullWebProject, explainFullWebProject, askNlBot } from './services/geminiService';
import { TUTORIAL_SECTIONS, TutorialSection, TutorialTopic, QUIZ_QUESTIONS } from './src/tutorialsData';
import { getReactPreviewDoc, getNodePreviewDoc } from './src/utils/compiler';

const GoogleIcon = () => (
  <svg className="w-5 h-5 md:w-3.5 md:h-3.5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const Logo = ({ className = "w-8 h-8", textClassName = "text-[1.2rem]", onClick }: { className?: string, textClassName?: string, onClick?: () => void }) => (
  <div onClick={onClick} className={`${className} relative flex items-center justify-center shrink-0 ${onClick ? 'cursor-pointer hover:scale-110 active:scale-95 transition-all' : ''}`}>
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-xl">
      <path 
        d="M50 5 L92 25 L92 75 L50 95 L8 75 L8 25 Z" 
        className="fill-slate-900 stroke-slate-700" 
        strokeWidth="4"
      />
      <path 
        d="M75 10 Q95 10 95 35" 
        className="stroke-sky-500" 
        strokeWidth="4" 
        strokeLinecap="round" 
        fill="none"
      />
    </svg>
    <div className={`relative z-10 flex items-baseline font-black tracking-tighter leading-none ${textClassName}`}>
      <span className="text-white">N</span>
      <span className="text-sky-500">L</span>
    </div>
  </div>
);

// --- Icons ---
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
);
const XIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
);
const PencilIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
);
const HomeIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>;
const CodeIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>;
const BulbIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>;
const PuzzleIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>;
const KeyIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11.536 11l-.733.733a1.414 1.414 0 000 1.999l.732.733a1.414 1.414 0 000 1.999l.733.732a1.414 1.414 0 010 1.999l-2.001 2.001a1.414 1.414 0 00-1 1.707l1.171 2.343a1.414 1.414 0 01-1.385 2.022H5a2 2 0 01-2-2v-5a2 2 0 012-2h4l.654-.654A6.002 6.002 0 0115 7z"/></svg>;
const MailIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>;
const SaveIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/></svg>;
const SparklesIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
const ChevronUpIcon = ({ className = "w-4 h-4" }: { className?: string }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>;
const ChevronDownIcon = ({ className = "w-4 h-4" }: { className?: string }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>;
const ResizeIcon = () => <svg className="w-4 h-4 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>;
const MonitorIcon = ({ className = "w-5 h-5" }: { className?: string }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
const LogOutIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
);
const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const BookIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const TechIcon: React.FC<{ icon: string; name: string; size?: 'sm' | 'md' }> = ({ icon, name, size = 'md' }) => {
  const sizeClass = size === 'md' ? 'w-10 h-10' : 'w-6 h-6';
  if (icon === GENERIC_CODE_ICON) {
    return (
      <div className={`${sizeClass} bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-center text-slate-500 font-black text-lg`}>
        <svg className={size === 'md' ? 'w-6 h-6' : 'w-4 h-4'} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
    );
  }
  return <img src={icon} alt={name} className={`${sizeClass} object-contain group-hover:scale-110 transition-transform`} />;
};

const ThemeToggle: React.FC<{ theme: 'dark' | 'light', onToggle: () => void }> = ({ theme, onToggle }) => (
  <button 
    onClick={onToggle}
    className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors border border-slate-200 dark:border-slate-800"
    title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
  >
    {theme === 'dark' ? (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ) : (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
    )}
  </button>
);

declare global {
  interface Window {
    handleCredentialResponse: (response: any) => void;
    google: any;
  }
}

const GoogleLogin: React.FC<{ onSuccess: (user: User) => void; onError?: (msg: string) => void }> = ({ onSuccess, onError }) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch('/api/auth/google/url');
      if (!res.ok) throw new Error('Failed to get auth URL');
      const { url } = await res.json();
      
      const width = 500;
      const height = 600;
      const left = window.screenX + (window.outerWidth - width) / 2;
      const top = window.screenY + (window.outerHeight - height) / 2;
      
      const popup = window.open(
        url,
        'google-oauth',
        `width=${width},height=${height},left=${left},top=${top}`
      );

      if (!popup || popup.closed || typeof popup.closed === 'undefined') {
        throw new Error('Popup blocked! Please allow popups for this site.');
      }

      // Poll to see if popup was closed manually without success
      const pollTimer = window.setInterval(() => {
        if (popup.closed) {
          window.clearInterval(pollTimer);
          setLoading(false);
        }
      }, 500);

    } catch (err: any) {
      console.error('Failed to initiate login:', err);
      onError?.(err.message || 'Failed to initiate login');
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleLogin}
      disabled={loading}
      className={`flex items-center space-x-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-xl hover:border-blue-500 transition-all shadow-sm active:scale-95 group ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {loading ? (
        <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      ) : (
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/>
        </svg>
      )}
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400">
        {loading ? 'Authenticating...' : 'Sign in with Google'}
      </span>
    </button>
  );
};

const Notification: React.FC<{ message: string; type: 'error' | 'success'; onDismiss: () => void }> = ({ message, type, onDismiss }) => (
  <motion.div
    initial={{ opacity: 0, y: -20, x: '-50%' }}
    animate={{ opacity: 1, y: 0, x: '-50%' }}
    exit={{ opacity: 0, y: -20, x: '-50%' }}
    className={`fixed top-4 left-1/2 z-[100] px-6 py-3 rounded-2xl shadow-2xl border flex items-center space-x-3 min-w-[300px] ${
      type === 'error' 
        ? 'bg-rose-50 border-rose-200 text-rose-600 dark:bg-rose-950 dark:border-rose-900 dark:text-rose-400' 
        : 'bg-emerald-50 border-emerald-200 text-emerald-600 dark:bg-emerald-950 dark:border-emerald-900 dark:text-emerald-400'
    }`}
  >
    <div className="flex-1 text-sm font-bold uppercase tracking-tight">{message}</div>
    <button onClick={onDismiss} className="p-1 hover:bg-black/5 rounded-lg transition-colors">
      <XIcon />
    </button>
  </motion.div>
);

const UserMenu: React.FC<{ user: User | null; onLogin: (u: User) => void; onLogout: () => void; onError?: (m: string) => void; hideLoginButton?: boolean }> = ({ user, onLogin, onLogout, onError, hideLoginButton }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!user) {
    return null;
  }

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-1.5 pr-4 rounded-xl hover:border-blue-500 transition-all shadow-sm active:scale-95"
      >
        <img src={user.picture} alt={user.name} className="w-6 h-6 rounded-lg object-cover" />
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 truncate max-w-[80px]">{user.name.split(' ')[0]}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="p-4 border-b border-slate-100 dark:border-slate-800">
                <p className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white truncate">{user.name}</p>
                <p className="text-[10px] text-slate-500 truncate">{user.email}</p>
              </div>
              <button 
                onClick={() => {
                  onLogout();
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-3 text-[10px] font-black uppercase tracking-widest text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/10 transition-colors"
              >
                Logout
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const ScrollStrip: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [docHeight, setDocHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollY(currentY);
      setDocHeight(totalHeight);
      setIsVisible(currentY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

  if (!isVisible) return null;

  return (
    <div className="fixed right-6 bottom-10 flex flex-col items-center z-50 animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="flex flex-col items-center bg-slate-900/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-2xl border border-slate-700/50 overflow-hidden">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
          title="Scroll to Top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7"/></svg>
        </button>
        
        <div className="w-[3px] h-20 bg-slate-700/30 relative">
          <div 
            className="absolute top-0 left-0 w-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-75" 
            style={{ height: `${progress}%` }}
          />
        </div>

        <button 
          onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}
          className="w-12 h-12 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
          title="Scroll to Bottom"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"/></svg>
        </button>
      </div>
    </div>
  );
};

const LogoCloud: React.FC = () => {
  const logos = [
    { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'Meta', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'Nvidia', url: 'https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg' },
    { name: 'Stripe', url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg' },
    { name: 'Perplexity', url: 'https://onecompiler.com/images/logos/companies/perplexity.png' },
    { name: 'Samsung', url: 'https://onecompiler.com/images/logos/companies/samsung.svg' },
    { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Walmart', url: 'https://onecompiler.com/images/logos/companies/walmart.svg' },
    { name: 'Intel', url: 'https://onecompiler.com/images/logos/companies/intel.svg' },
    { name: 'PayPal', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' },
    { name: 'Zoho', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Zoho_logo.svg' },
    { name: 'Infosys', url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
  ];

  return (
    <div className="w-full py-20 bg-slate-50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-slate-800 flex flex-col items-center">
      <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-12">Trusted by developers at world's top companies</span>
      <div className="max-w-7xl w-full px-6 flex flex-col space-y-12">
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24 opacity-40 grayscale group hover:grayscale-0 transition-all duration-500">
          {logos.slice(0, 6).map(logo => (
            <img key={logo.name} src={logo.url} alt={logo.name} className="h-6 md:h-7 lg:h-8 w-auto object-contain" />
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24 opacity-40 grayscale group hover:grayscale-0 transition-all duration-500">
          {logos.slice(6, 12).map(logo => (
            <img key={logo.name} src={logo.url} alt={logo.name} className="h-6 md:h-7 lg:h-8 w-auto object-contain" />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeaturesGrid: React.FC = () => (
  <section className="w-full py-24 bg-white dark:bg-[#050505] flex flex-col items-center px-6">
    <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="flex flex-col">
        <div className="text-blue-600 mb-6"><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg></div>
        <h3 className="text-xl font-black mb-4 uppercase tracking-tight">Embed Editor & Challenges</h3>
        <p className="text-slate-500 leading-relaxed font-medium">Embed our Editor & Challenges as an iframe into your website to get code execution capabilities in minutes.</p>
      </div>
      <div className="flex flex-col">
        <div className="text-blue-600 mb-6"><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>
        <h3 className="text-xl font-black mb-4 uppercase tracking-tight">APIs to run code</h3>
        <p className="text-slate-500 leading-relaxed font-medium">Build more complex use-cases by calling our APIs from your backend applications to run code and read reports.</p>
      </div>
      <div className="flex flex-col">
        <div className="text-blue-600 mb-6"><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
        <h3 className="text-xl font-black mb-4 uppercase tracking-tight">Custom Workflows</h3>
        <p className="text-slate-500 leading-relaxed font-medium">Reach out to us to build custom workflows that are not covered by standard APIs, specifically tailored for your scale.</p>
      </div>
    </div>
  </section>
);

// --- Sidebar Component ---
const Sidebar = ({ 
  isOpen, 
  onClose, 
  items, 
  onLogoClick,
  user,
  onLogin,
  onLogout,
  onAuthError,
  intelligenceEnabled,
  setIntelligenceEnabled,
  hideLoginButton
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  items: any[]; 
  onLogoClick?: () => void;
  user: User | null;
  onLogin: (u: User) => void;
  onLogout: () => void;
  onAuthError?: (m: string) => void;
  intelligenceEnabled?: boolean;
  setIntelligenceEnabled?: (v: boolean) => void;
  hideLoginButton?: boolean;
}) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}
      
      {/* Drawer */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-[#050505] border-r border-slate-800 z-[70] transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex items-center justify-between border-b border-slate-800 shrink-0">
           <div onClick={() => { onLogoClick?.(); onClose(); }} className="flex items-center gap-3 cursor-pointer select-none hover:opacity-90 transition-opacity">
             <Logo className="w-8 h-8" textClassName="text-lg" />
             <span className="text-xl font-bold tracking-tight text-white">Node<span className="text-blue-500">Lab</span></span>
           </div>
           <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400">
             <XIcon />
           </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => { item.action(); onClose(); }}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-slate-300 hover:bg-blue-900/20 hover:text-blue-400 transition-all font-medium text-left group"
            >
              <div className="text-slate-400 group-hover:text-blue-500 transition-colors">
                {item.icon}
              </div>
              {item.label}
            </button>
          ))}


        </div>

        {/* Sidebar Footer / Login */}
        {user && (
          <div className="p-4 border-t border-slate-800 bg-slate-900/10 shrink-0">
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center space-x-3 min-w-0">
                <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-lg object-cover ring-2 ring-blue-500/20" />
                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white truncate">{user.name.split(' ')[0]}</p>
                  <p className="text-[9px] text-slate-500 truncate">{user.email}</p>
                </div>
              </div>
              <button 
                onClick={onLogout}
                className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-all"
                title="Logout"
              >
                <LogOutIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

// --- Data ---
const CHALLENGES = [
  { id: 1, title: 'Hello World', level: 'Beginner', language: 'python', description: 'Write a program that prints "Hello, World!" to the console.', code: 'print("Hello, World!")' },
  { id: 2, title: 'Sum of Two Numbers', level: 'Beginner', language: 'javascript_prog', description: 'Write a function that takes two numbers and returns their sum.', code: 'function sum(a, b) {\n  return a + b;\n}\n\nconsole.log(sum(5, 3));' },
  { id: 3, title: 'Fibonacci Sequence', level: 'Hard', language: 'python', description: 'Generate the first n numbers of the Fibonacci sequence.', code: 'def fibonacci(n):\n    if n <= 0: return []\n    if n == 1: return [0]\n    fib = [0, 1]\n    while len(fib) < n:\n        fib.append(fib[-1] + fib[-2])\n    return fib\n\nprint(fibonacci(10))' },
  { id: 4, title: 'Reverse String', level: 'Beginner', language: 'java', description: 'Write a method to reverse a given string.', code: 'public class Main {\n    public static String reverse(String str) {\n        return new StringBuilder(str).reverse().toString();\n    }\n    public static void main(String[] args) {\n        System.out.println(reverse("NodeLab"));\n    }\n}' },
  { id: 5, title: 'Binary Search', level: 'Hard', language: 'cpp', description: 'Implement binary search algorithm for a sorted array.', code: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint binarySearch(const vector<int>& arr, int target) {\n    int left = 0, right = arr.size() - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (arr[mid] == target) return mid;\n        if (arr[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}\n\nint main() {\n    vector<int> arr = {2, 3, 4, 10, 40};\n    cout << "Index of 10: " << binarySearch(arr, 10);\n    return 0;\n}' },
  { id: 6, title: 'Factorial Calculation', level: 'Beginner', language: 'c', description: 'Write a program to calculate the factorial of a number.', code: '#include <stdio.h>\n\nlong long factorial(int n) {\n    if (n == 0) return 1;\n    return n * factorial(n - 1);\n}\n\nint main() {\n    printf("Factorial of 5: %lld", factorial(5));\n    return 0;\n}' },
  { id: 7, title: 'Palindrome Check', level: 'Beginner', language: 'csharp', description: 'Check if a given string is a palindrome.', code: 'using System;\n\nclass Program {\n    static bool IsPalindrome(string s) {\n        string rev = "";\n        for (int i = s.Length - 1; i >= 0; i--) rev += s[i];\n        return s == rev;\n    }\n    static void Main() {\n        Console.WriteLine(IsPalindrome("racecar"));\n    }\n}' },
  { id: 8, title: 'HTTP Server', level: 'Hard', language: 'go', description: 'Create a simple HTTP server that responds with "Hello NodeLab".', code: 'package main\n\nimport (\n\t"fmt"\n\t"net/http"\n)\n\nfunc handler(w http.ResponseWriter, r *http.Request) {\n\tfmt.Fprintf(w, "Hello NodeLab")\n}\n\nfunc main() {\n\thttp.HandleFunc("/", handler)\n\tfmt.Println("Server starting on :8080...")\n\t// http.ListenAndServe(":8080", nil)\n}' },
  { id: 9, title: 'Safe Memory Management', level: 'Hard', language: 'rust', description: 'Implement a basic ownership example in Rust.', code: 'fn main() {\n    let s1 = String::from("hello");\n    let s2 = s1.clone();\n    println!("s1 = {}, s2 = {}", s1, s2);\n}' },
  { id: 10, title: 'Array Mean with NumPy', level: 'Beginner', language: 'numpy', description: 'Calculate the mean of a NumPy array.', code: 'import numpy as np\n\ndata = np.array([10, 20, 30, 40, 50])\nprint(f"Mean: {np.mean(data)}")' },
  { id: 11, title: 'Data Filtering with Pandas', level: 'Hard', language: 'pandas', description: 'Filter a DataFrame for rows where Age > 25.', code: 'import pandas as pd\n\ndata = {"Name": ["A", "B", "C"], "Age": [20, 30, 40]}\ndf = pd.DataFrame(data)\nfiltered_df = df[df["Age"] > 25]\nprint(filtered_df)' },
  { id: 12, title: 'Quick Sort', level: 'Hard', language: 'typescript', description: 'Implement the Quick Sort algorithm.', code: 'function quickSort(arr: number[]): number[] {\n  if (arr.length <= 1) return arr;\n  const pivot = arr[0];\n  const left = arr.slice(1).filter(x => x < pivot);\n  const right = arr.slice(1).filter(x => x >= pivot);\n  return [...quickSort(left), pivot, ...quickSort(right)];\n}\n\nconsole.log(quickSort([5, 3, 8, 1, 2]));' },
  { id: 13, title: 'Sweet Seventeen', level: 'Hard', language: 'python', description: 'Given a base-17 number, convert it to decimal.', code: 'def seventeen_to_decimal(s):\n    return int(s, 17)\n\nprint(seventeen_to_decimal("23GF"))', company: 'TCS' },
  { id: 14, title: 'Word is Key', level: 'Beginner', language: 'c', description: 'Check if a given word is a keyword in C.', code: '#include <stdio.h>\n#include <string.h>\n\nint isKeyword(char* word) {\n    char* keywords[] = {"break", "case", "continue", "default", "defer", "else", "for", "func", "goto", "if", "map", "range", "return", "struct", "type", "var"};\n    for(int i=0; i<16; i++) if(strcmp(word, keywords[i]) == 0) return 1;\n    return 0;\n}\n\nint main() {\n    printf("%d", isKeyword("defer"));\n    return 0;\n}', company: 'TCS' },
  { id: 15, title: 'Jar of Candies', level: 'Beginner', language: 'python', description: 'A jar has N candies. Customer wants K. If K <= N, sell. If remaining < 5, refill.', code: 'def jar_candies(n, k):\n    if k > n or k == 0:\n        print("INVALID INPUT")\n        print(f"NUMBER OF CANDIES LEFT: {n}")\n    else:\n        n -= k\n        print(f"NUMBER OF CANDIES SOLD: {k}")\n        print(f"NUMBER OF CANDIES LEFT: {n}")\n\njar_candies(10, 3)', company: 'TCS' },
  { id: 16, title: 'Two Sum', level: 'Beginner', language: 'javascript_prog', description: 'Find two numbers that add up to a specific target.', code: 'function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) return [map.get(complement), i];\n    map.set(nums[i], i);\n  }\n  return [];\n}\n\nconsole.log(twoSum([2, 7, 11, 15], 9));', company: 'Google' },
  { id: 17, title: 'Valid Parentheses', level: 'Beginner', language: 'python', description: 'Determine if the input string has valid parentheses.', code: 'def isValid(s):\n    stack = []\n    mapping = {")": "(", "}": "{", "]": "["}\n    for char in s:\n        if char in mapping:\n            top_element = stack.pop() if stack else "#"\n            if mapping[char] != top_element: return False\n        else:\n            stack.append(char)\n    return not stack\n\nprint(isValid("()[]{}"))', company: 'Microsoft' },
  { id: 18, title: 'Merge K Sorted Lists', level: 'Hard', language: 'cpp', description: 'Merge k sorted linked lists and return it as one sorted list.', code: '#include <iostream>\n#include <vector>\n#include <queue>\n\nstruct ListNode {\n    int val;\n    ListNode *next;\n    ListNode() : val(0), next(nullptr) {}\n    ListNode(int x) : val(x), next(nullptr) {}\n};\n\nint main() {\n    std::cout << "Merge K Sorted Lists Implementation";\n    return 0;\n}', company: 'Amazon' },
  { id: 19, title: 'LRU Cache', level: 'Hard', language: 'java', description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.', code: 'import java.util.*;\n\nclass LRUCache {\n    public LRUCache(int capacity) {}\n    public int get(int key) { return -1; }\n    public void put(int key, int value) {}\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("LRU Cache Implementation");\n    }\n}', company: 'Meta' },
  { id: 20, title: 'Trapping Rain Water', level: 'Hard', language: 'python', description: 'Given n non-negative integers representing an elevation map, compute how much water it can trap.', code: 'def trap(height):\n    if not height: return 0\n    l, r = 0, len(height) - 1\n    leftMax, rightMax = height[l], height[r]\n    res = 0\n    while l < r:\n        if leftMax < rightMax:\n            l += 1\n            leftMax = max(leftMax, height[l])\n            res += leftMax - height[l]\n        else:\n            r -= 1\n            rightMax = max(rightMax, height[r])\n            res += rightMax - height[r]\n    return res\n\nprint(trap([0,1,0,2,1,0,1,3,2,1,2,1]))', company: 'Nvidia' },
  { id: 21, title: 'Longest Substring', level: 'Hard', language: 'javascript_prog', description: 'Amazon: Find the length of the longest substring without repeating characters.', code: 'function lengthOfLongestSubstring(s) {\n  let n = s.length, ans = 0;\n  let map = new Map();\n  for (let j = 0, i = 0; j < n; j++) {\n    if (map.has(s[j])) i = Math.max(map.get(s[j]), i);\n    ans = Math.max(ans, j - i + 1);\n    map.set(s[j], j + 1);\n  }\n  return ans;\n}\n\nconsole.log(lengthOfLongestSubstring("abcabcbb"));', company: 'Amazon' },
  { id: 22, title: 'Maximum Subarray', level: 'Beginner', language: 'python', description: 'Stripe: Find the contiguous subarray which has the largest sum.', code: 'def maxSubArray(nums):\n    max_so_far = nums[0]\n    current_max = nums[0]\n    for x in nums[1:]:\n        current_max = max(x, current_max + x)\n        max_so_far = max(max_so_far, current_max)\n    return max_so_far\n\nprint(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))', company: 'Stripe' },
  { id: 23, title: 'Spiral Matrix', level: 'Hard', language: 'java', description: 'Samsung: Return all elements of a matrix in spiral order.', code: 'import java.util.*;\n\npublic class Main {\n    public static List<Integer> spiralOrder(int[][] matrix) {\n        List<Integer> res = new ArrayList<>();\n        if (matrix.length == 0) return res;\n        int r1 = 0, r2 = matrix.length - 1;\n        int c1 = 0, c2 = matrix[0].length - 1;\n        while (r1 <= r2 && c1 <= c2) {\n            for (int c = c1; c <= c2; c++) res.add(matrix[r1][c]);\n            for (int r = r1 + 1; r <= r2; r++) res.add(matrix[r][c2]);\n            if (r1 < r2 && c1 < c2) {\n                for (int c = c2 - 1; c > c1; c--) res.add(matrix[r2][c]);\n                for (int r = r2; r > r1; r--) res.add(matrix[r][c1]);\n            }\n            r1++; r2--; c1++; c2--;\n        }\n        return res;\n    }\n    public static void main(String[] args) {\n        int[][] matrix = {{1,2,3},{4,5,6},{7,8,9}};\n        System.out.println(spiralOrder(matrix));\n    }\n}', company: 'Samsung' },
  { id: 24, title: 'Word Search', level: 'Hard', language: 'cpp', description: 'IBM: Check if a word exists in a 2D grid of characters.', code: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nbool exist(vector<vector<char>>& board, string word) {\n    return true; // Implementation here\n}\n\nint main() {\n    cout << "Word Search Implementation";\n    return 0;\n}', company: 'IBM' },
  { id: 25, title: 'Best Time to Buy Stock', level: 'Beginner', language: 'python', description: 'Walmart: Find the maximum profit you can achieve from one transaction.', code: 'def maxProfit(prices):\n    min_price = float("inf")\n    max_profit = 0\n    for price in prices:\n        if price < min_price: min_price = price\n        elif price - min_price > max_profit: max_profit = price - min_price\n    return max_profit\n\nprint(maxProfit([7,1,5,3,6,4]))', company: 'Walmart' },
  { id: 26, title: 'Number of Islands', level: 'Hard', language: 'python', description: 'Intel: Count the number of islands in a 2D binary grid.', code: 'def numIslands(grid):\n    if not grid: return 0\n    count = 0\n    for i in range(len(grid)):\n        for j in range(len(grid[0])):\n            if grid[i][j] == "1":\n                # DFS here\n                count += 1\n    return count\n\nprint(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]))', company: 'Intel' },
  { id: 27, title: 'Merge Intervals', level: 'Hard', language: 'javascript_prog', description: 'PayPal: Merge all overlapping intervals.', code: 'function merge(intervals) {\n    if (intervals.length <= 1) return intervals;\n    intervals.sort((a, b) => a[0] - b[0]);\n    const result = [intervals[0]];\n    for (let i = 1; i < intervals.length; i++) {\n        const last = result[result.length - 1];\n        if (intervals[i][0] <= last[1]) last[1] = Math.max(last[1], intervals[i][1]);\n        else result.push(intervals[i]);\n    }\n    return result;\n}\n\nconsole.log(merge([[1,3],[2,6],[8,10],[15,18]]));', company: 'PayPal' },
  { id: 28, title: 'Look and Say', level: 'Hard', language: 'python', description: 'Zoho: Generate the nth term of the Look and Say sequence.', code: 'def look_and_say(n):\n    if n == 1: return "1"\n    s = "1"\n    for _ in range(n-1):\n        res = ""\n        i = 0\n        while i < len(s):\n            count = 1\n            while i + 1 < len(s) and s[i] == s[i+1]:\n                i += 1\n                count += 1\n            res += str(count) + s[i]\n            i += 1\n        s = res\n    return s\n\nprint(look_and_say(5))', company: 'Zoho' },
  { id: 29, title: 'Nth Prime', level: 'Beginner', language: 'python', description: 'Wipro: Find the nth prime number.', code: 'def is_prime(num):\n    if num < 2: return False\n    for i in range(2, int(num**0.5) + 1):\n        if num % i == 0: return False\n    return True\n\ndef nth_prime(n):\n    count = 0\n    num = 2\n    while True:\n        if is_prime(num):\n            count += 1\n            if count == n: return num\n        num += 1\n\nprint(nth_prime(10))', company: 'Wipro' },
  { id: 30, title: 'Monster Defeat', level: 'Hard', language: 'python', description: 'Infosys: Calculate the maximum monsters you can defeat with given power.', code: 'def max_monsters(power, monsters):\n    monsters.sort(key=lambda x: x[0])\n    count = 0\n    for m_power, bonus in monsters:\n        if power >= m_power:\n            power += bonus\n            count += 1\n        else: break\n    return count\n\nprint(max_monsters(10, [[15, 5], [10, 2], [5, 1]]))', company: 'Infosys' },
  { id: 31, title: 'Array Rotation', level: 'Beginner', language: 'python', description: 'HCL: Rotate an array to the right by k steps.', code: 'def rotate(nums, k):\n    k %= len(nums)\n    nums[:] = nums[-k:] + nums[:-k]\n    return nums\n\nprint(rotate([1,2,3,4,5], 2))', company: 'HCL' },
  { id: 32, title: 'Leap Year', level: 'Beginner', language: 'python', description: 'Check if a given year is a leap year.', code: 'def is_leap(year):\n    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)\n\nprint(is_leap(2024))', company: 'TCS' },
  { id: 33, title: 'Prime Factors', level: 'Beginner', language: 'python', description: 'Find all prime factors of a number.', code: 'def prime_factors(n):\n    i = 2\n    factors = []\n    while i * i <= n:\n        if n % i: i += 1\n        else:\n            n //= i\n            factors.append(i)\n    if n > 1: factors.append(n)\n    return factors\n\nprint(prime_factors(56))', company: 'TCS' },
  { id: 34, title: 'Median of Two Sorted Arrays', level: 'Hard', language: 'python', description: 'Find the median of two sorted arrays.', code: 'def findMedianSortedArrays(nums1, nums2):\n    # Implementation\n    return 0.0', company: 'Google' },
  { id: 35, title: 'Container With Most Water', level: 'Hard', language: 'python', description: 'Find two lines that together with the x-axis forms a container, such that the container contains the most water.', code: 'def maxArea(height):\n    l, r = 0, len(height) - 1\n    res = 0\n    while l < r:\n        res = max(res, min(height[l], height[r]) * (r - l))\n        if height[l] < height[r]: l += 1\n        else: r -= 1\n    return res', company: 'Google' },
  { id: 36, title: 'Word Break', level: 'Hard', language: 'python', description: 'Determine if a string can be segmented into a space-separated sequence of one or more dictionary words.', code: 'def wordBreak(s, wordDict):\n    dp = [False] * (len(s) + 1)\n    dp[0] = True\n    for i in range(1, len(s) + 1):\n        for j in range(i):\n            if dp[j] and s[j:i] in wordDict:\n                dp[i] = True\n                break\n    return dp[len(s)]', company: 'Google' },
  { id: 37, title: 'Longest Palindromic Substring', level: 'Hard', language: 'python', description: 'Find the longest palindromic substring in s.', code: 'def longestPalindrome(s):\n    # Implementation\n    return ""', company: 'Google' },
  { id: 38, title: 'Reverse Linked List', level: 'Beginner', language: 'python', description: 'Reverse a singly linked list.', code: 'def reverseList(head):\n    prev = None\n    curr = head\n    while curr:\n        next_temp = curr.next\n        curr.next = prev\n        prev = curr\n        curr = next_temp\n    return prev', company: 'Microsoft' },
  { id: 39, title: 'Binary Tree Inorder Traversal', level: 'Beginner', language: 'python', description: 'Return the inorder traversal of its nodes\' values.', code: 'def inorderTraversal(root):\n    res = []\n    def helper(node):\n        if node:\n            helper(node.left)\n            res.append(node.val)\n            helper(node.right)\n    helper(root)\n    return res', company: 'Microsoft' },
  { id: 40, title: 'Validate Binary Search Tree', level: 'Hard', language: 'python', description: 'Determine if it is a valid binary search tree (BST).', code: 'def isValidBST(root):\n    def validate(node, low=-float("inf"), high=float("inf")):\n        if not node: return True\n        if not (low < node.val < high): return False\n        return validate(node.left, low, node.val) and validate(node.right, node.val, high)\n    return validate(root)', company: 'Microsoft' },
  { id: 41, title: 'Group Anagrams', level: 'Hard', language: 'python', description: 'Group the anagrams together.', code: 'import collections\ndef groupAnagrams(strs):\n    ans = collections.defaultdict(list)\n    for s in strs:\n        ans[tuple(sorted(s))].append(s)\n    return list(ans.values())', company: 'Microsoft' },
  { id: 42, title: 'Top K Frequent Elements', level: 'Hard', language: 'python', description: 'Return the k most frequent elements.', code: 'import collections, heapq\ndef topKFrequent(nums, k):\n    count = collections.Counter(nums)\n    return heapq.nlargest(k, count.keys(), key=count.get)', company: 'Amazon' },
  { id: 43, title: 'Course Schedule', level: 'Hard', language: 'python', description: 'Determine if you can finish all courses.', code: 'def canFinish(numCourses, prerequisites):\n    # Implementation\n    return True', company: 'Amazon' },
  { id: 44, title: 'Word Ladder', level: 'Hard', language: 'python', description: 'Find the length of shortest transformation sequence.', code: 'def ladderLength(beginWord, endWord, wordList):\n    # Implementation\n    return 0', company: 'Amazon' },
  { id: 45, title: 'Binary Tree Right Side View', level: 'Hard', language: 'python', description: 'Return the values of the nodes you can see ordered from top to bottom.', code: 'def rightSideView(root):\n    # Implementation\n    return []', company: 'Meta' },
  { id: 46, title: 'Subarray Sum Equals K', level: 'Hard', language: 'python', description: 'Find the total number of continuous subarrays whose sum equals to k.', code: 'def subarraySum(nums, k):\n    count, cur_sum = 0, 0\n    d = {0: 1}\n    for x in nums:\n        cur_sum += x\n        count += d.get(cur_sum - k, 0)\n        d[cur_sum] = d.get(cur_sum, 0) + 1\n    return count', company: 'Meta' },
  { id: 47, title: 'Product of Array Except Self', level: 'Hard', language: 'python', description: 'Return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].', code: 'def productExceptSelf(nums):\n    # Implementation\n    return []', company: 'Meta' },
  { id: 48, title: 'Minimum Window Substring', level: 'Hard', language: 'python', description: 'Find the minimum window in s which will contain all the characters in t.', code: 'def minWindow(s, t):\n    # Implementation\n    return ""', company: 'Meta' },
  { id: 49, title: 'Search in Rotated Sorted Array', level: 'Hard', language: 'python', description: 'Search for a target value in a rotated sorted array.', code: 'def search(nums, target):\n    # Implementation\n    return -1', company: 'Nvidia' },
  { id: 50, title: 'Find Minimum in Rotated Sorted Array', level: 'Hard', language: 'python', description: 'Find the minimum element in a rotated sorted array.', code: 'def findMin(nums):\n    # Implementation\n    return 0', company: 'Nvidia' },
  { id: 51, title: 'Kth Largest Element in an Array', level: 'Hard', language: 'python', description: 'Find the kth largest element in an array.', code: 'import heapq\ndef findKthLargest(nums, k):\n    return heapq.nlargest(k, nums)[-1]', company: 'Nvidia' },
  { id: 52, title: 'Longest Consecutive Sequence', level: 'Hard', language: 'python', description: 'Find the length of the longest consecutive elements sequence.', code: 'def longestConsecutive(nums):\n    # Implementation\n    return 0', company: 'Nvidia' },
  { id: 53, title: 'Coin Change', level: 'Hard', language: 'python', description: 'Find the fewest number of coins that you need to make up that amount.', code: 'def coinChange(coins, amount):\n    # Implementation\n    return -1', company: 'Stripe' },
  { id: 54, title: 'House Robber', level: 'Beginner', language: 'python', description: 'Determine the maximum amount of money you can rob tonight without alerting the police.', code: 'def rob(nums):\n    # Implementation\n    return 0', company: 'Stripe' },
  { id: 55, title: 'Decode Ways', level: 'Hard', language: 'python', description: 'Determine the total number of ways to decode a string.', code: 'def numDecodings(s):\n    # Implementation\n    return 0', company: 'Stripe' },
  { id: 56, title: 'Combination Sum', level: 'Hard', language: 'python', description: 'Find all unique combinations in candidates where the candidate numbers sum to target.', code: 'def combinationSum(candidates, target):\n    # Implementation\n    return []', company: 'Stripe' },
  { id: 57, title: 'Rotate Image', level: 'Hard', language: 'python', description: 'Rotate the image by 90 degrees (clockwise).', code: 'def rotate(matrix):\n    # Implementation\n    pass', company: 'Samsung' },
  { id: 58, title: 'Set Matrix Zeroes', level: 'Beginner', language: 'python', description: 'If an element is 0, set its entire row and column to 0.', code: 'def setZeroes(matrix):\n    # Implementation\n    pass', company: 'Samsung' },
  { id: 59, title: 'Search a 2D Matrix', level: 'Beginner', language: 'python', description: 'Determine if a target value exists in an m x n matrix.', code: 'def searchMatrix(matrix, target):\n    # Implementation\n    return False', company: 'Samsung' },
  { id: 60, title: 'Subsets', level: 'Hard', language: 'python', description: 'Return all possible subsets (the power set).', code: 'def subsets(nums):\n    # Implementation\n    return []', company: 'Samsung' },
  { id: 61, title: 'Climbing Stairs', level: 'Beginner', language: 'python', description: 'Find how many distinct ways you can climb to the top.', code: 'def climbStairs(n):\n    if n <= 2: return n\n    a, b = 1, 2\n    for _ in range(3, n + 1):\n        a, b = b, a + b\n    return b', company: 'IBM' },
  { id: 62, title: 'Unique Paths', level: 'Hard', language: 'python', description: 'Find how many possible unique paths are there from top-left to bottom-right.', code: 'def uniquePaths(m, n):\n    # Implementation\n    return 1', company: 'IBM' },
  { id: 63, title: 'Edit Distance', level: 'Hard', language: 'python', description: 'Find the minimum number of operations required to convert word1 to word2.', code: 'def minDistance(word1, word2):\n    # Implementation\n    return 0', company: 'IBM' },
  { id: 64, title: 'Longest Common Subsequence', level: 'Hard', language: 'python', description: 'Find the length of the longest common subsequence.', code: 'def longestCommonSubsequence(text1, text2):\n    # Implementation\n    return 0', company: 'IBM' },
  { id: 65, title: 'Jump Game', level: 'Hard', language: 'python', description: 'Determine if you are able to reach the last index.', code: 'def canJump(nums):\n    # Implementation\n    return True', company: 'Walmart' },
  { id: 66, title: 'Gas Station', level: 'Hard', language: 'python', description: 'Find the starting gas station\'s index if you can travel around the circuit once.', code: 'def canCompleteCircuit(gas, cost):\n    # Implementation\n    return -1', company: 'Walmart' },
  { id: 67, title: 'Candy', level: 'Hard', language: 'python', description: 'Find the minimum number of candies you must give.', code: 'def candy(ratings):\n    # Implementation\n    return 0', company: 'Walmart' },
  { id: 68, title: 'Maximum Product Subarray', level: 'Hard', language: 'python', description: 'Find the contiguous subarray within an array which has the largest product.', code: 'def maxProduct(nums):\n    # Implementation\n    return 0', company: 'Walmart' },
  { id: 69, title: 'Clone Graph', level: 'Hard', language: 'python', description: 'Return a deep copy (clone) of the graph.', code: 'def cloneGraph(node):\n    # Implementation\n    return None', company: 'Intel' },
  { id: 70, title: 'Pacific Atlantic Water Flow', level: 'Hard', language: 'python', description: 'Find the list of grid coordinates where water can flow to both the Pacific and Atlantic oceans.', code: 'def pacificAtlantic(heights):\n    # Implementation\n    return []', company: 'Intel' },
  { id: 71, title: 'Graph Valid Tree', level: 'Hard', language: 'python', description: 'Determine if these edges make up a valid tree.', code: 'def validTree(n, edges):\n    # Implementation\n    return True', company: 'Intel' },
  { id: 72, title: 'Number of Connected Components', level: 'Hard', language: 'python', description: 'Find the number of connected components in an undirected graph.', code: 'def countComponents(n, edges):\n    # Implementation\n    return 0', company: 'Intel' },
  { id: 73, title: 'Insert Interval', level: 'Hard', language: 'python', description: 'Insert a new interval into a list of non-overlapping intervals.', code: 'def insert(intervals, newInterval):\n    # Implementation\n    return []', company: 'PayPal' },
  { id: 74, title: 'Non-overlapping Intervals', level: 'Hard', language: 'python', description: 'Find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.', code: 'def eraseOverlapIntervals(intervals):\n    # Implementation\n    return 0', company: 'PayPal' },
  { id: 75, title: 'Meeting Rooms', level: 'Beginner', language: 'python', description: 'Determine if a person could attend all meetings.', code: 'def canAttendMeetings(intervals):\n    # Implementation\n    return True', company: 'PayPal' },
  { id: 76, title: 'Meeting Rooms II', level: 'Hard', language: 'python', description: 'Find the minimum number of conference rooms required.', code: 'def minMeetingRooms(intervals):\n    # Implementation\n    return 0', company: 'PayPal' },
  { id: 77, title: 'String Permutations', level: 'Hard', language: 'python', description: 'Find all permutations of a string.', code: 'from itertools import permutations\ndef get_permutations(s):\n    return ["".join(p) for p in permutations(s)]\n\nprint(get_permutations("abc"))', company: 'Zoho' },
  { id: 78, title: 'Matrix Multiplication', level: 'Beginner', language: 'python', description: 'Multiply two matrices.', code: 'def multiply(A, B):\n    # Implementation\n    return []', company: 'Zoho' },
  { id: 79, title: 'Sort by Frequency', level: 'Hard', language: 'python', description: 'Sort characters in a string by frequency.', code: 'import collections\ndef frequencySort(s):\n    count = collections.Counter(s)\n    return "".join([char * freq for char, freq in count.most_common()])', company: 'Zoho' },
  { id: 80, title: 'Balanced Brackets', level: 'Beginner', language: 'python', description: 'Check if brackets are balanced.', code: 'def isBalanced(s):\n    stack = []\n    for char in s:\n        if char == "(": stack.append(char)\n        elif char == ")":\n            if not stack: return False\n            stack.pop()\n    return not stack', company: 'Zoho' },
  { id: 81, title: 'GCD of Two Numbers', level: 'Beginner', language: 'python', description: 'Find the greatest common divisor.', code: 'import math\nprint(math.gcd(48, 18))', company: 'Wipro' },
  { id: 82, title: 'LCM of Two Numbers', level: 'Beginner', language: 'python', description: 'Find the least common multiple.', code: 'import math\ndef lcm(a, b):\n    return abs(a*b) // math.gcd(a, b)\nprint(lcm(48, 18))', company: 'Wipro' },
  { id: 83, title: 'Strong Number', level: 'Beginner', language: 'python', description: 'Check if a number is a strong number.', code: 'import math\ndef is_strong(n):\n    return sum(math.factorial(int(d)) for d in str(n)) == n\nprint(is_strong(145))', company: 'Wipro' },
  { id: 84, title: 'Perfect Number', level: 'Beginner', language: 'python', description: 'Check if a number is a perfect number.', code: 'def is_perfect(n):\n    return sum(i for i in range(1, n) if n % i == 0) == n\nprint(is_perfect(28))', company: 'Wipro' },
  { id: 85, title: 'Unique Characters', level: 'Beginner', language: 'python', description: 'Check if a string has all unique characters.', code: 'def has_unique(s):\n    return len(set(s)) == len(s)\nprint(has_unique("abc"))', company: 'Infosys' },
  { id: 86, title: 'String Compression', level: 'Beginner', language: 'python', description: 'Compress a string using counts of repeated characters.', code: 'def compress(s):\n    # Implementation\n    return s', company: 'Infosys' },
  { id: 87, title: 'Reverse Words', level: 'Beginner', language: 'python', description: 'Reverse the words in a string.', code: 'def reverse_words(s):\n    return " ".join(s.split()[::-1])\nprint(reverse_words("hello world"))', company: 'Infosys' },
  { id: 88, title: 'Anagram Check', level: 'Beginner', language: 'python', description: 'Check if two strings are anagrams.', code: 'def is_anagram(s1, s2):\n    return sorted(s1) == sorted(s2)\nprint(is_anagram("listen", "silent"))', company: 'Infosys' },
  { id: 89, title: 'Second Largest', level: 'Beginner', language: 'python', description: 'Find the second largest element in an array.', code: 'def second_largest(nums):\n    first = second = -float("inf")\n    for n in nums:\n        if n > first:\n            second = first\n            first = n\n        elif n > second and n != first:\n            second = n\n    return second\nprint(second_largest([1, 5, 2, 4, 3]))', company: 'HCL' },
  { id: 90, title: 'Remove Duplicates', level: 'Beginner', language: 'python', description: 'Remove duplicates from a sorted array in-place.', code: 'def removeDuplicates(nums):\n    if not nums: return 0\n    i = 0\n    for j in range(1, len(nums)):\n        if nums[j] != nums[i]:\n            i += 1\n            nums[i] = nums[j]\n    return i + 1', company: 'HCL' },
  { id: 91, title: 'Move Zeroes', level: 'Beginner', language: 'python', description: 'Move all zeroes to the end of the array.', code: 'def moveZeroes(nums):\n    pos = 0\n    for i in range(len(nums)):\n        if nums[i] != 0:\n            nums[pos], nums[i] = nums[i], nums[pos]\n            pos += 1\n    return nums', company: 'HCL' },
  { id: 92, title: 'Intersection of Arrays', level: 'Beginner', language: 'python', description: 'Find the intersection of two arrays.', code: 'def intersect(nums1, nums2):\n    return list(set(nums1) & set(nums2))\nprint(intersect([1,2,2,1], [2,2]))', company: 'HCL' },
  { id: 93, title: 'FizzBuzz', level: 'Beginner', language: 'python', description: 'Print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for both.', code: 'for i in range(1, 101):\n    if i % 15 == 0: print("FizzBuzz")\n    elif i % 3 == 0: print("Fizz")\n    elif i % 5 == 0: print("Buzz")\n    else: print(i)', company: 'General Practice' },
  { id: 94, title: 'Vowel Counter', level: 'Beginner', language: 'javascript_prog', description: 'Count the number of vowels in a given string.', code: 'function countVowels(s) {\n    return (s.match(/[aeiou]/gi) || []).length;\n}\nconsole.log(countVowels("NodeLab Intelligence"));', company: 'General Practice' },
  { id: 95, title: 'Next Permutation', level: 'Hard', language: 'python', description: 'Google: Implementation of next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.', code: 'def nextPermutation(nums):\n    # Implementation\n    pass', company: 'Google' },
  { id: 96, title: 'Copy List with Random Pointer', level: 'Hard', language: 'cpp', description: 'Microsoft: A linked list is given such that each node contains an additional random pointer.', code: '// Node definition and clone logic\nvoid copyRandomList() {}', company: 'Microsoft' },
  { id: 97, title: 'Reorder Data in Log Files', level: 'Beginner', language: 'python', description: 'Amazon: Reorder logs such that letter-logs come before digit-logs.', code: 'def reorderLogFiles(logs):\n    # Sort logic\n    return sorted(logs)', company: 'Amazon' },
  { id: 98, title: 'Binary Tree Vertical Order', level: 'Hard', language: 'java', description: 'Meta: Given a binary tree, return the vertical order traversal of its nodes\' values.', code: '// Tree traversal logic', company: 'Meta' },
  { id: 99, title: 'Kth Smallest in BST', level: 'Beginner', language: 'python', description: 'Adobe: Find the kth smallest element in a binary search tree.', code: 'def kthSmallest(root, k):\n    # In-order traversal\n    return 0', company: 'Adobe' },
  { id: 100, title: 'Basic Calculator', level: 'Hard', language: 'python', description: 'Salesforce: Implement a basic calculator to evaluate a simple expression string.', code: 'def calculate(s):\n    # Expression evaluation\n    return 0', company: 'Salesforce' },
  { id: 101, title: 'Longest Valid Parentheses', level: 'Hard', language: 'python', description: 'Netflix: Find the length of the longest valid (well-formed) parentheses substring.', code: 'def longestValidParentheses(s):\n    # Stack or DP\n    return 0', company: 'Netflix' },
  { id: 102, title: 'Word Break II', level: 'Hard', language: 'python', description: 'Snapchat: Given a string and a dictionary, add spaces in the string to construct a sentence where each word is a valid dictionary word.', code: 'def wordBreak(s, wordDict):\n    # Backtracking\n    return []', company: 'Snapchat' },
  { id: 103, title: 'Sliding Window Maximum', level: 'Hard', language: 'python', description: 'Uber: Find the maximum element in each sliding window of size k.', code: 'import collections\ndef maxSlidingWindow(nums, k):\n    # Deque implementation\n    return []', company: 'Uber' },
  { id: 104, title: 'Invert Binary Tree', level: 'Beginner', language: 'python', description: 'Adobe: Invert a binary tree (flip it horizontally).', code: 'def invertTree(root):\n    if not root: return None\n    root.left, root.right = invertTree(root.right), invertTree(root.left)\n    return root', company: 'Adobe' },
  { id: 105, title: 'Longest Palindromic Substring', level: 'Hard', language: 'python', description: 'Adobe: Find the longest palindromic substring in a given string.', code: 'def longestPalindrome(s):\n    # Expand around center logic\n    return ""', company: 'Adobe' },
  { id: 106, title: 'Find the Duplicate Number', level: 'Beginner', language: 'python', description: 'HCL: Find the duplicate number in an array of n+1 integers where each integer is between 1 and n.', code: 'def findDuplicate(nums):\n    slow = fast = nums[0]\n    while True:\n        slow = nums[slow]\n        fast = nums[nums[fast]]\n        if slow == fast: break\n    slow = nums[0]\n    while slow != fast:\n        slow = nums[slow]\n        fast = nums[fast]\n    return slow', company: 'HCL' },
  { id: 107, title: 'Segregate 0s and 1s', level: 'Beginner', language: 'python', description: 'HCL: Segregate all 0s to the left and 1s to the right in an array.', code: 'def segregate(nums):\n    left, right = 0, len(nums) - 1\n    while left < right:\n        while nums[left] == 0 and left < right: left += 1\n        while nums[right] == 1 and left < right: right -= 1\n        if left < right:\n            nums[left], nums[right] = 0, 1\n            left += 1\n            right -= 1\n    return nums', company: 'HCL' },
  { id: 108, title: 'Armstrong Number', level: 'Beginner', language: 'python', description: 'Wipro: Check if a number is an Armstrong number (sum of nth power of digits equals the number).', code: 'def is_armstrong(n):\n    s = str(n)\n    power = len(s)\n    return sum(int(d)**power for d in s) == n\nprint(is_armstrong(153))', company: 'Wipro' },
  { id: 109, title: 'Sum of Digits', level: 'Beginner', language: 'python', description: 'Wipro: Calculate the sum of digits of a non-negative integer.', code: 'def sum_digits(n):\n    return sum(int(d) for d in str(n))\nprint(sum_digits(12345))', company: 'Wipro' },
  { id: 110, title: 'Missing Number', level: 'Beginner', language: 'python', description: 'HCL: Find the missing number in an array of consecutive integers from 1 to n.', code: 'def find_missing(nums, n):\n    expected_sum = n * (n + 1) // 2\n    actual_sum = sum(nums)\n    return expected_sum - actual_sum\n\nprint(find_missing([1, 2, 4, 5, 6], 6))', company: 'HCL' },
  { id: 111, title: 'Character Frequency', level: 'Beginner', language: 'python', description: 'HCL: Count the frequency of each character in a given string.', code: 'def char_frequency(s):\n    freq = {}\n    for char in s:\n        freq[char] = freq.get(char, 0) + 1\n    return freq\n\nprint(char_frequency("nodelab"))', company: 'HCL' },
  { id: 112, title: 'Majority Element', level: 'Hard', language: 'python', description: 'HCL: Find the element that appears more than n/2 times in an array.', code: 'def majority_element(nums):\n    candidate = None\n    count = 0\n    for num in nums:\n        if count == 0: candidate = num\n        count += (1 if num == candidate else -1)\n    return candidate\n\nprint(majority_element([2, 2, 1, 1, 1, 2, 2]))', company: 'HCL' },
  { id: 113, title: 'Valid Anagram', level: 'Beginner', language: 'python', description: 'HCL: Check if two strings are anagrams of each other.', code: 'def is_anagram(s, t):\n    return sorted(s) == sorted(t)\n\nprint(is_anagram("anagram", "nagaram"))', company: 'HCL' },
  { id: 114, title: 'Count Leaf Nodes', level: 'Hard', language: 'python', description: 'Wipro: Given a binary tree, count the number of leaf nodes.', code: 'class Node:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\n\ndef count_leaves(root):\n    if not root: return 0\n    if not root.left and not root.right: return 1\n    return count_leaves(root.left) + count_leaves(root.right)\n\nroot = Node(1)\nroot.left = Node(2)\nroot.right = Node(3)\nroot.left.left = Node(4)\nprint(count_leaves(root))', company: 'Wipro' },
  { id: 115, title: 'Reverse a Number', level: 'Beginner', language: 'python', description: 'Wipro: Reverse the digits of a given integer.', code: 'def reverse_number(n):\n    res = 0\n    while n > 0:\n        res = res * 10 + n % 10\n        n //= 10\n    return res\n\nprint(reverse_number(12345))', company: 'Wipro' },
  { id: 116, title: 'Power of Two', level: 'Beginner', language: 'python', description: 'Wipro: Check if a given positive integer is a power of two.', code: 'def is_power_of_two(n):\n    return n > 0 and (n & (n - 1)) == 0\n\nprint(is_power_of_two(16))\nprint(is_power_of_two(18))', company: 'Wipro' },
  { id: 117, title: 'Automorphic Number', level: 'Beginner', language: 'python', description: 'Wipro: Check if a number is an automorphic number (square ends with the number itself).', code: 'def is_automorphic(n):\n    sq = n * n\n    return str(sq).endswith(str(n))\n\nprint(is_automorphic(25))\nprint(is_automorphic(7))', company: 'Wipro' },
];

const SaveIndicator = ({ status }: { status: 'idle' | 'saving' | 'saved' }) => {
  return (
    <AnimatePresence mode="wait">
      {status !== 'idle' && (
        <motion.div 
          key={status}
          initial={{ opacity: 0, y: 5, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className={`flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${status === 'saving' ? 'text-blue-500' : 'text-emerald-500'}`}
        >
          <div className={`w-1.5 h-1.5 rounded-full ${status === 'saving' ? 'bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.5)]' : 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]'}`}></div>
          <span className="whitespace-nowrap">{status === 'saving' ? 'Saving...' : 'Changes Saved'}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const AboutPage = ({ onBack, theme }: { onBack: () => void, theme: 'dark' | 'light' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen ${theme === 'dark' ? 'bg-[#050505] text-white' : 'bg-white text-slate-900'} p-8 md:p-16 font-sans overflow-y-auto`}
    >
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="flex items-center space-x-2 text-blue-600 font-black mb-12 hover:-translate-x-2 transition-transform group">
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          <span className="uppercase tracking-[0.2em] text-xs">Return to Workspace</span>
        </button>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none"
        >
          Node<span className="text-blue-600">Lab</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="p-8 border-2 border-slate-900 dark:border-slate-800 rounded-2xl bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden group hover:border-blue-600 transition-colors"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <h3 className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-4">Core Engine</h3>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
              A high-performance sandboxed environment supporting 40+ programming languages. Instant execution, real-time output, and enterprise-grade isolation.
            </p>
          </motion.div>
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="p-8 border-2 border-slate-900 dark:border-slate-800 rounded-2xl bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden group hover:border-violet-600 transition-colors"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"/></svg>
            </div>
            <h3 className="text-violet-600 font-black uppercase tracking-widest text-[10px] mb-4">Neural Defense</h3>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
              Powered by Gemini AI, providing semantic code explanations, predictive debugging, and natural language code generation.
            </p>
          </motion.div>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-4xl font-black uppercase tracking-widest mb-8 flex items-center gap-4">
              <span className="w-12 h-2 bg-blue-600"></span>
              Usage System
            </h2>
            <div className="space-y-0 font-mono text-sm border-2 border-slate-900 dark:border-slate-800 divide-y-2 divide-slate-900 dark:divide-slate-800 rounded-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors group">
                <span className="text-slate-500 group-hover:text-blue-600 transition-colors">WORKSPACE INIT</span>
                <span className="font-bold">Select target runtime from the global dashboard.</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors group">
                <span className="text-slate-500 group-hover:text-blue-600 transition-colors">EXECUTION PATH</span>
                <span className="font-bold">Trigger "RUN" to synthesize and execute high-speed binary.</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors group">
                <span className="text-slate-500 group-hover:text-blue-600 transition-colors">AUTO-SYNC</span>
                <span className="font-bold">Progress is automatically mirrored to persistent local storage.</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors group">
                <span className="text-slate-500 group-hover:text-blue-600 transition-colors">AI ORACLE</span>
                <span className="font-bold">Invoke "Explain Core" for deep logical decomposition.</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors group">
                <span className="text-slate-500 group-hover:text-blue-600 transition-colors">WEB PREVIEW</span>
                <span className="font-bold">Responsive frame handles HTML/CSS/JS with livereload.</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-black uppercase tracking-widest mb-8 flex items-center gap-4">
              <span className="w-12 h-2 bg-violet-600"></span>
              AI Protocol
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
              {[
                { 
                  title: 'Deep Explain', 
                  desc: 'Decomposes complex logic into human-readable blueprints.', 
                  how: 'Click the "Explain" button in the IDE header to invoke the neural oracle.',
                  icon: <BulbIcon />
                },
                { 
                  title: 'Auto Repair', 
                  desc: 'Predictive debugging engine that identifies and patches syntax/logic errors.', 
                  how: 'Use the "Fix" command when an execution fails or hits a breakpoint.',
                  icon: <SparklesIcon />
                },
                { 
                  title: 'Vibe Synthesis', 
                  desc: 'Generates entire codebases from natural language descriptions.', 
                  how: 'Access "Vibe Coding" via the sidebar to prompt the generative core.',
                  icon: <CodeIcon />
                }
              ].map((intel, idx) => (
                <div key={idx} className="p-6 border-2 border-slate-900 dark:border-slate-800 rounded-2xl flex flex-col hover:bg-violet-600/5 transition-colors">
                  <div className="text-violet-600 mb-4">{intel.icon}</div>
                  <h3 className="font-black text-lg mb-2 uppercase tracking-tight">{intel.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-1">{intel.desc}</p>
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Invocation</div>
                    <div className="text-xs font-bold leading-relaxed">{intel.how}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-black uppercase tracking-widest mb-8 flex items-center gap-4">
              <span className="w-12 h-2 bg-emerald-500"></span>
              Compute Ecosystem
            </h2>
            <div className="grid grid-cols-1 gap-12">
              {[
                { type: LanguageType.PROGRAMMING, label: 'Core Languages' },
                { type: LanguageType.WEB, label: 'Web Stack' },
                { type: LanguageType.DATABASE, label: 'Data Engines' },
                { type: LanguageType.MACHINE_LEARNING, label: 'Neural Runtimes' },
              ].map(group => (
                <div key={group.label}>
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {LANGUAGES.filter(l => l.type === group.type).map(lang => (
                      <div key={lang.id} className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors group">
                        <TechIcon icon={lang.icon} name={lang.name} size="sm" />
                        <span className="text-sm font-bold opacity-70 group-hover:opacity-100 transition-opacity whitespace-nowrap">{lang.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-8 md:p-12 rounded-3xl transform -rotate-1 shadow-2xl">
            <h2 className="text-2xl font-black uppercase tracking-[0.3em] mb-12">System Capacity</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { label: 'Latency', value: '72ms' },
                { label: 'Runtimes', value: '42' },
                { label: 'Uptime', value: '99.9%' },
                { label: 'Defense', value: 'Neural' },
              ].map(s => (
                <div key={s.label} className="border-l-4 border-blue-600 pl-4">
                  <div className="text-[10px] opacity-60 uppercase tracking-widest mb-1">{s.label}</div>
                  <div className="font-black text-3xl italic">{s.value}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <footer className="mt-24 pt-12 border-t border-slate-200 dark:border-slate-800 text-center text-slate-400 text-xs font-bold uppercase tracking-[0.5em]">
          Designed for the high-end developer <br/>
          &copy; 2026 NODELAB INSTRUMENTS
        </footer>
      </div>
    </motion.div>
  );
};

const DataOutput = ({ text, error }: { text: string; error?: string }) => {
  if (error) return <div className="text-rose-500">{text}</div>;

  // Detect tables (Markdown or ASCII bar-style)
  const isTable = text.includes('|') && (text.includes('---') || text.includes('+--'));

  if (!isTable) {
    return <div className="text-emerald-500 dark:text-emerald-400 whitespace-pre-wrap font-mono text-sm leading-relaxed">{text}</div>;
  }

  try {
    const lines = text.trim().split('\n');
    // Filter lines that look like table rows
    const tableRows = lines.filter(line => line.includes('|') && !line.includes('===') && !line.trim().startsWith('+--'));
    
    if (tableRows.length < 2) {
      return <div className="text-emerald-500 dark:text-emerald-400 whitespace-pre-wrap font-mono text-sm leading-relaxed">{text}</div>;
    }

    // Identify header and separator positions to handle varied formats
    const isMarkdown = lines.some(l => l.includes('|') && l.includes('---'));
    
    // Simple parser for table rows
    const parseRow = (row: string) => {
      let cells = row.split('|').map(c => c.trim());
      // Handle rows starting/ending with |
      if (row.trim().startsWith('|')) cells = cells.slice(1);
      if (row.trim().endsWith('|')) cells = cells.slice(0, -1);
      return cells;
    };

    // Skip the separator row in markdown or ASCII
    const filteredRows = tableRows.filter(row => !row.includes('---') && !row.includes('-+-'));
    const headers = parseRow(filteredRows[0]);
    const dataRows = filteredRows.slice(1).map(parseRow);

    return (
      <div className="flex flex-col space-y-4">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 flex items-center gap-2">
           <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
           Data Structure Detected
        </div>
        <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900/50 shadow-2xl backdrop-blur-sm">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
            <thead className="bg-slate-50/50 dark:bg-slate-800/50">
              <tr>
                {headers.map((h, i) => (
                  <th key={i} className="px-6 py-4 text-left text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {dataRows.map((row, i) => (
                <tr key={i} className="hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors">
                  {row.map((cell, j) => (
                    <td key={j} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-700 dark:text-slate-300">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (e) {
    // Fallback if parsing fails
    return <div className="text-emerald-500 dark:text-emerald-400 whitespace-pre-wrap font-mono text-sm leading-relaxed">{text}</div>;
  }
};

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'ide' | 'challenges' | 'contact' | 'web-ide' | 'about' | 'tutorial'>('home');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [notification, setNotification] = useState<{ message: string; type: 'error' | 'success' } | null>(null);

  // Tutorial States
  const [selectedTutorialSection, setSelectedTutorialSection] = useState<TutorialSection>(TUTORIAL_SECTIONS[0]);
  const [selectedTutorialTopic, setSelectedTutorialTopic] = useState<TutorialTopic>(TUTORIAL_SECTIONS[0].topics[0]);
  const [tutorialSearchQuery, setTutorialSearchQuery] = useState('');
  const [tutorialCode, setTutorialCode] = useState(TUTORIAL_SECTIONS[0].topics[0].code);
  const [tutorialResult, setTutorialResult] = useState<string | null>(null);
  const [isTutorialRunning, setIsTutorialRunning] = useState(false);
  const [tutorialQuizAnswer, setTutorialQuizAnswer] = useState<string | null>(null);
  const [tutorialQuizChecked, setTutorialQuizChecked] = useState(false);
  const [isTutorialLangDropdownOpen, setIsTutorialLangDropdownOpen] = useState(false);
  const [isLessonDropdownOpen, setIsLessonDropdownOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  // NL Bot States
  const [isNlBotOpen, setIsNlBotOpen] = useState(false);
  const [nlBotMessages, setNlBotMessages] = useState<{ id: string; sender: 'user' | 'bot'; text: string; timestamp: Date }[]>([]);
  const [nlBotInput, setNlBotInput] = useState('');
  const [isNlBotThinking, setIsNlBotThinking] = useState(false);

  const nlBotChatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (nlBotChatEndRef.current && isNlBotOpen) {
      setTimeout(() => {
        nlBotChatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [nlBotMessages, isNlBotThinking, isNlBotOpen]);

  useEffect(() => {
    const topicTitle = selectedTutorialTopic?.title || 'this topic';
    const sectionTitle = selectedTutorialSection?.title || 'NodeLab';
    const introMsg = `Hey there! I'm **NL**, your interactive NodeLab learning companion. 🤖\n\nI see you are currently learning **${topicTitle}** inside **${sectionTitle}**! \n\nHow can I help you today? You can ask me to:\n- 💡 **Explain** this topic in simpler terms\n- 🛠️ **Give a mini-challenge** to practice\n- 🔍 **Review** the code in your workspace playground\n- 🚀 **Suggest** standard coding exercises or ask general questions!`;

    setNlBotMessages([
      {
        id: 'welcome_' + (selectedTutorialTopic?.id || 'default'),
        sender: 'bot',
        text: introMsg,
        timestamp: new Date()
      }
    ]);
  }, [selectedTutorialTopic]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const showNotification = (message: string, type: 'error' | 'success' = 'error') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  // Check auth on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/me');
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
      } finally {
        setIsAuthLoading(false);
      }
    };
    checkAuth();

    // Listen for OAuth messages from popup
    const handleAuthMessage = (event: MessageEvent) => {
      if (event.origin !== window.origin) return;
      
      if (event.data?.type === 'OAUTH_AUTH_SUCCESS') {
        checkAuth();
        showNotification('Successfully logged in!', 'success');
      } else if (event.data?.type === 'OAUTH_AUTH_ERROR') {
        showNotification(event.data.error || 'Authentication failed');
      }
    };
    window.addEventListener('message', handleAuthMessage);
    return () => window.removeEventListener('message', handleAuthMessage);
  }, []);

  const handleLoginSuccess = (u: User) => {
    setUser(u);
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };
  const [selectedLang, setSelectedLang] = useState<Language>(LANGUAGES[0]);
  const [code, setCode] = useState<string>(LANGUAGES[0].defaultCode);
  
  // Web IDE specific states
  const [htmlCode, setHtmlCode] = useState('<!DOCTYPE html>\n<html>\n<body>\n  <h1>Hello NodeLab Web!</h1>\n</body>\n</html>');
  const [cssCode, setCssCode] = useState('body {\n  background: #0f172a;\n  color: white;\n  font-family: sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  margin: 0;\n}');
  const [jsCode, setJsCode] = useState('console.log("Web IDE Ready");');

  const [result, setResult] = useState<ExecutionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'output' | 'preview'>('output');
  const [activeTab, setActiveTab] = useState<LanguageType>(LanguageType.POPULAR);
  const [searchQuery, setSearchQuery] = useState('');
  
  // New State
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showMobileIntelligence, setShowMobileIntelligence] = useState(false);
  const [activeWebIntelTab, setActiveWebIntelTab] = useState<'html' | 'css' | 'js'>('html');
  const [webIntelMode, setWebIntelMode] = useState<'all' | 'active'>('all');
  const [intelligenceEnabled, setIntelligenceEnabled] = useState(true);
  const [isTerminalCollapsed, setIsTerminalCollapsed] = useState(false);
  const [terminalHeight, setTerminalHeight] = useState(288); // Default 288px (h-72)
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState<number | null>(null);
  const [debugSession, setDebugSession] = useState<{ original: string; fixed: string } | null>(null);
  const [fileName, setFileName] = useState('main.py');
  const [htmlFileName, setHtmlFileName] = useState('index.html');
  const [cssFileName, setCssFileName] = useState('style.css');
  const [jsFileName, setJsFileName] = useState('script.js');
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingHtmlName, setIsEditingHtmlName] = useState(false);
  const [isEditingCssName, setIsEditingCssName] = useState(false);
  const [isEditingJsName, setIsEditingJsName] = useState(false);
  const [genPrompt, setGenPrompt] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<'All' | 'Beginner' | 'Hard'>('All');
  const [companyFilter, setCompanyFilter] = useState<string>('All');

  // Drag handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (dragStartY === null) return;
      
      // Only start dragging if moved more than 5px to prevent accidental drags on click
      if (!isDragging && Math.abs(e.clientY - dragStartY) > 5) {
        setIsDragging(true);
      }

      if (isDragging) {
        const newHeight = window.innerHeight - e.clientY;
        
        // Snap to collapse if dragged too small (below 100px)
        if (newHeight < 100) {
          if (!isTerminalCollapsed) setIsTerminalCollapsed(true);
        } else {
          if (isTerminalCollapsed) setIsTerminalCollapsed(false);
          // Min 100px, Max 80% of screen
          const constrainedHeight = Math.max(100, Math.min(newHeight, window.innerHeight * 0.8));
          setTerminalHeight(constrainedHeight);
        }
      }
    };

    const handleMouseUp = () => {
      setDragStartY(null);
      setTimeout(() => setIsDragging(false), 0); // Defer to allow click handler to check drag state
    };

    if (dragStartY !== null) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      if (isDragging) {
        document.body.style.cursor = 'row-resize';
        document.body.style.userSelect = 'none';
      }
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    };
  }, [isDragging, dragStartY, isTerminalCollapsed]);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const htmlNameInputRef = useRef<HTMLInputElement>(null);
  const cssNameInputRef = useRef<HTMLInputElement>(null);
  const jsNameInputRef = useRef<HTMLInputElement>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [forceDesktop, setForceDesktop] = useState(false);
  const [challengeLangs, setChallengeLangs] = useState<Record<number, string>>(
    CHALLENGES.reduce((acc, c) => ({ ...acc, [c.id]: c.language }), {})
  );

  // Load saved code on mount
  useEffect(() => {
    const savedCode = localStorage.getItem('nodelab_code');
    const savedHtml = localStorage.getItem('nodelab_html');
    const savedCss = localStorage.getItem('nodelab_css');
    const savedJs = localStorage.getItem('nodelab_js');
    const savedFileName = localStorage.getItem('nodelab_file_name');
    const savedHtmlName = localStorage.getItem('nodelab_html_name');
    const savedCssName = localStorage.getItem('nodelab_css_name');
    const savedJsName = localStorage.getItem('nodelab_js_name');
    const savedLangId = localStorage.getItem('nodelab_lang');
    const savedViewMode = localStorage.getItem('nodelab_view_mode');
    const savedView = localStorage.getItem('nodelab_current_view');

    if (savedCode) setCode(savedCode);
    if (savedHtml) setHtmlCode(savedHtml);
    if (savedCss) setCssCode(savedCss);
    if (savedJs) setJsCode(savedJs);
    if (savedFileName) setFileName(savedFileName);
    if (savedHtmlName) setHtmlFileName(savedHtmlName);
    if (savedCssName) setCssFileName(savedCssName);
    if (savedJsName) setJsFileName(savedJsName);
    if (savedViewMode === 'output' || savedViewMode === 'preview') setViewMode(savedViewMode);
    if (savedView && ['home', 'ide', 'challenges', 'contact', 'web-ide', 'about'].includes(savedView)) {
      setView(savedView as any);
    }
    
    if (savedLangId) {
      const lang = LANGUAGES.find(l => l.id === savedLangId);
      if (lang) setSelectedLang(lang);
    }
    
    const savedIntel = localStorage.getItem('nodelab_intel');
    if (savedIntel !== null) setIntelligenceEnabled(savedIntel === 'true');
  }, []);

  // Auto-save logic
  useEffect(() => {
    setSaveStatus('saving');
    const timer = setTimeout(() => {
      localStorage.setItem('nodelab_code', code);
      localStorage.setItem('nodelab_html', htmlCode);
      localStorage.setItem('nodelab_css', cssCode);
      localStorage.setItem('nodelab_js', jsCode);
      localStorage.setItem('nodelab_file_name', fileName);
      localStorage.setItem('nodelab_html_name', htmlFileName);
      localStorage.setItem('nodelab_css_name', cssFileName);
      localStorage.setItem('nodelab_js_name', jsFileName);
      localStorage.setItem('nodelab_lang', selectedLang.id);
      localStorage.setItem('nodelab_view_mode', viewMode);
      localStorage.setItem('nodelab_current_view', view);
      localStorage.setItem('nodelab_intel', String(intelligenceEnabled));
      
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 1500);
    }, 1000); // Save after 1 second of inactivity

    return () => clearTimeout(timer);
  }, [code, htmlCode, cssCode, jsCode, selectedLang, viewMode, view, fileName, htmlFileName, cssFileName, jsFileName, intelligenceEnabled]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Update extension when language changes, but keep name if possible
  useEffect(() => {
    const nameParts = fileName.split('.');
    const name = nameParts.length > 1 ? nameParts.slice(0, -1).join('.') : 'main';
    setFileName(`${name}.${selectedLang.extension}`);
  }, [selectedLang]);

  useEffect(() => {
    if (isEditingName && nameInputRef.current) {
      nameInputRef.current.focus();
    }
    if (isEditingHtmlName && htmlNameInputRef.current) {
      htmlNameInputRef.current.focus();
    }
    if (isEditingCssName && cssNameInputRef.current) {
      cssNameInputRef.current.focus();
    }
    if (isEditingJsName && jsNameInputRef.current) {
      jsNameInputRef.current.focus();
    }
  }, [isEditingName, isEditingHtmlName, isEditingCssName, isEditingJsName]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const renderIntelligencePanel = () => {
    // Determine target code and language for analysis
    let targetCode = code;
    let targetLang = selectedLang.name;
    
    if (view === 'web-ide') {
      if (activeWebIntelTab === 'html') {
        targetCode = htmlCode;
        targetLang = 'html';
      } else if (activeWebIntelTab === 'css') {
        targetCode = cssCode;
        targetLang = 'css';
      } else {
        targetCode = jsCode;
        targetLang = 'javascript';
      }
    }

    const handleExplain = async () => {
      setIsLoading(true);
      try {
        let r;
        if (view === 'web-ide' && webIntelMode === 'all') {
          r = await explainFullWebProject(htmlCode, cssCode, jsCode);
        } else {
          r = await explainCode(targetCode, targetLang);
        }
        setResult({ output: r, timestamp: Date.now() });
        setViewMode('output');
      } catch (err) {
        showNotification(err instanceof Error ? err.message : String(err));
      } finally {
        setIsLoading(false);
      }
    };

    const handleGenerate = async () => {
      if (!genPrompt.trim()) return;
      setIsLoading(true);
      try {
        if (view === 'web-ide' && webIntelMode === 'all') {
          const results = await generateFullWebProject(genPrompt);
          if (results.html) setHtmlCode(results.html);
          if (results.css) setCssCode(results.css);
          if (results.javascript) setJsCode(results.javascript);
          showNotification("Successfully generated files for HTML, CSS, and JS simultaneously!");
        } else {
          const generated = await generateCode(genPrompt, targetLang);
          if (generated) {
            if (view === 'web-ide') {
              if (activeWebIntelTab === 'html') setHtmlCode(generated);
              else if (activeWebIntelTab === 'css') setCssCode(generated);
              else setJsCode(generated);
            } else {
              setCode(generated);
            }
          }
        }
      } catch (err) {
        showNotification(err instanceof Error ? err.message : String(err));
      } finally {
        setIsLoading(false);
      }
    };

    const handleDebug = async () => {
      setIsLoading(true);
      try {
        if (view === 'web-ide' && webIntelMode === 'all') {
          const fixed = await fixFullWebProject(htmlCode, cssCode, jsCode);
          setHtmlCode(fixed.html);
          setCssCode(fixed.css);
          setJsCode(fixed.javascript);
          setDebugSession({
            original: `HTML:\n${htmlCode}\n\nCSS:\n${cssCode}\n\nJS:\n${jsCode}`,
            fixed: `HTML:\n${fixed.html}\n\nCSS:\n${fixed.css}\n\nJS:\n${fixed.javascript}`
          });
          setViewMode('preview');
          showNotification("Successfully fixed all files!");
        } else {
          const original = targetCode;
          const fixed = await fixCode(targetCode, targetLang);
          if (view === 'web-ide') {
            if (activeWebIntelTab === 'html') setHtmlCode(fixed);
            else if (activeWebIntelTab === 'css') setCssCode(fixed);
            else setJsCode(fixed);
          } else {
            setCode(fixed);
          }
          setDebugSession({ original, fixed });
          setViewMode('preview');
        }
      } catch (err) {
        showNotification(err instanceof Error ? err.message : String(err));
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <aside className={`${showMobileIntelligence ? 'flex fixed inset-y-0 right-0 z-50 w-full md:w-96 md:shadow-2xl' : 'hidden'} border-l border-slate-200 dark:border-slate-900 p-6 flex-col space-y-6 shrink-0 bg-white dark:bg-[#0a0a0a] overflow-y-auto custom-scrollbar transition-all duration-300 shadow-2xl`}>
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">AI Assistant</h3>
          <button 
            onClick={() => setShowMobileIntelligence(false)} 
            className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <XIcon />
          </button>
        </div>

        {view === 'web-ide' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400">AI Assistant Scope</h4>
              <div className="flex bg-slate-100 dark:bg-slate-900 rounded-xl p-1 border border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => setWebIntelMode('all')}
                  className={`flex-1 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                    webIntelMode === 'all' 
                      ? 'bg-violet-600 text-white shadow-md' 
                      : 'text-slate-500 hover:text-violet-600'
                  }`}
                >
                  All Files
                </button>
                <button
                  onClick={() => setWebIntelMode('active')}
                  className={`flex-1 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                    webIntelMode === 'active' 
                      ? 'bg-violet-600 text-white shadow-md' 
                      : 'text-slate-500 hover:text-violet-600'
                  }`}
                >
                  Active File
                </button>
              </div>
            </div>

            {webIntelMode === 'active' && (
              <div className="space-y-2">
                <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400">Select File Context</h4>
                <div className="flex bg-slate-100 dark:bg-slate-900 rounded-xl p-1 border border-slate-200 dark:border-slate-800">
                  {(['html', 'css', 'js'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveWebIntelTab(tab)}
                      className={`flex-1 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                        activeWebIntelTab === tab 
                          ? 'bg-violet-600 text-white shadow-md' 
                          : 'text-slate-500 hover:text-violet-600'
                      }`}
                    >
                      {tab.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="space-y-4">
          <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400">AI Features</h4>
          
          <button 
            onClick={handleExplain} 
            disabled={isLoading}
            className="w-full border border-slate-200 dark:border-slate-800 p-5 rounded-2xl text-left transition-all hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-blue-600/50 shadow-sm group active:scale-95 disabled:opacity-50"
          >
            <div className="text-blue-600 mb-2 font-black text-[11px] uppercase tracking-wider">Explain Core</div>
            <p className="text-[11px] text-slate-500 leading-relaxed font-medium font-sans">Deep logic analysis by Gemini AI.</p>
          </button>

          <div className="w-full border border-slate-200 dark:border-slate-800 p-5 rounded-2xl text-left transition-all bg-white dark:bg-[#0a0a0a] shadow-sm">
            <div className="text-violet-600 mb-2 font-black text-[11px] uppercase tracking-wider">Generate Code</div>
            <textarea 
              value={genPrompt}
              onChange={(e) => setGenPrompt(e.target.value)}
              placeholder={view === 'web-ide' && webIntelMode === 'all' ? "Describe what to build (HTML format, CSS design, JS interactivity generated together)..." : "Describe what to build..."}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-xs focus:outline-none focus:ring-1 focus:ring-violet-500 mb-3 h-24 resize-none"
            />
            <button 
              onClick={handleGenerate} 
              disabled={isLoading || !genPrompt.trim()}
              className="w-full bg-violet-600 hover:bg-violet-500 text-white py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all disabled:opacity-50"
            >
              Generate
            </button>
          </div>

          <button 
            onClick={handleDebug} 
            disabled={isLoading}
            className="w-full border border-slate-200 dark:border-slate-800 p-5 rounded-2xl text-left transition-all hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-emerald-600/50 shadow-sm group active:scale-95 disabled:opacity-50"
          >
            <div className="text-emerald-600 mb-2 font-black text-[11px] uppercase tracking-wider">Debug Vision</div>
            <p className="text-[11px] text-slate-500 leading-relaxed font-medium font-sans">Auto-fix syntax and logical errors instantly.</p>
          </button>
        </div>
      </aside>
    );
  };

  const openEditor = (lang: Language, customCode?: string) => {
    setSelectedLang(lang);
    setCode(customCode || lang.defaultCode);
    setResult(null);
    setViewMode(lang.type === LanguageType.WEB || lang.id === 'html' ? 'preview' : 'output');
    setView('ide');
    window.scrollTo(0, 0);
  };

  const handleRun = async () => {
    setIsLoading(true);
    if (selectedLang.type === LanguageType.WEB || selectedLang.id === 'html' || selectedLang.id === 'css') {
      setViewMode('preview');
      setIsLoading(false);
      return;
    }
    try {
      const output = await runCodeWithAI(code, selectedLang.name);
      setResult({ output, timestamp: Date.now() });
      setViewMode('output');
      if (isTerminalCollapsed) {
        setIsTerminalCollapsed(false);
      }
    } catch (err: any) {
      setResult({ output: '', error: err.message, timestamp: Date.now() });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  };

  const menuItems = [
    { label: 'Home', action: () => setView('home'), icon: <HomeIcon /> },
    { label: 'NodeLab Tutorial', action: () => setView('tutorial'), icon: <BookIcon /> },
    { label: 'Editor', action: () => setView('web-ide'), icon: <CodeIcon /> },
    { label: 'Vibe Coding', action: () => window.open('https://aistudio.google.com/', '_blank'), icon: <BulbIcon /> },
    { label: 'Challenges', action: () => setView('challenges'), icon: <PuzzleIcon /> },
    { label: 'Get API Key', action: () => window.open('https://aistudio.google.com/app/apikey', '_blank'), icon: <KeyIcon /> },
    { label: 'Contact', action: () => setView('contact'), icon: <MailIcon /> },
    { label: 'Save Files', action: handleDownload, icon: <SaveIcon /> },
  ];

  // --- Views ---

  if (isAppLoading) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center space-y-6"
        >
          <div className="relative">
            <Logo className="w-24 h-24 shadow-2xl animate-pulse" textClassName="text-4xl" />
            <div className="absolute -inset-4 bg-blue-600/10 rounded-full blur-xl animate-pulse -z-10" />
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <span className="text-4xl font-black tracking-tighter text-white">
              Node<span className="text-blue-600">Lab</span>
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
              Engineering Excellence
            </span>
          </div>
          {/* Subtle elegant line loader */}
          <div className="w-32 h-1 bg-slate-900 rounded-full overflow-hidden mt-4">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="h-full w-1/2 bg-blue-600 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    );
  }

  if (view === 'home') {
    const filteredLanguages = LANGUAGES.filter(l => {
      const matchesSearch = l.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTab = activeTab === LanguageType.POPULAR 
        ? l.isPopular === true 
        : l.type === activeTab;
      return matchesSearch && matchesTab;
    });

    return (
      <div className="min-h-screen bg-white dark:bg-[#050505] text-slate-900 dark:text-white flex flex-col items-center transition-colors duration-300">
        <AnimatePresence>
          {notification && (
            <Notification 
              message={notification.message} 
              type={notification.type} 
              onDismiss={() => setNotification(null)} 
            />
          )}
        </AnimatePresence>
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
          items={menuItems} 
          onLogoClick={() => setView('about')} 
          user={user}
          onLogin={handleLoginSuccess}
          onLogout={handleLogout}
          onAuthError={(msg) => showNotification(msg)}
          intelligenceEnabled={intelligenceEnabled}
          setIntelligenceEnabled={setIntelligenceEnabled}
        />
        
        <header className="w-full max-w-7xl px-6 py-8 flex justify-between items-center z-10 sticky top-0 backdrop-blur-md bg-transparent">
          <div className="flex items-center space-x-4">
             <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-700 dark:text-slate-200">
               <MenuIcon />
             </button>
             <div className="flex items-center space-x-3">
               <Logo onClick={() => setView('about')} className="w-12 h-12 shadow-2xl rotate-3 cursor-pointer" textClassName="text-2xl" />
               <span onClick={() => setView('about')} className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white cursor-pointer select-none hover:text-blue-600 transition-colors">Node<span className="text-blue-600">Lab</span></span>
             </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <UserMenu user={user} onLogin={handleLoginSuccess} onLogout={handleLogout} onError={(msg) => showNotification(msg)} />
          </div>
        </header>

        <main className="flex-1 w-full flex flex-col items-center">
          <div className="max-w-7xl w-full px-6 py-12 flex flex-col items-center">
            <h1 className="text-6xl md:text-8xl font-black text-center mb-8 leading-none tracking-tighter text-slate-900 dark:text-white">
              Welcome to Node<span className="text-blue-600">Lab</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-xl md:text-2xl text-center max-w-4xl mb-16 font-medium leading-relaxed">
              The ultimate online compiler suite for 40+ languages. Zero setup, instant preview, and AI-powered simulation.
            </p>

            <div className="w-full max-w-4xl relative mb-16">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-slate-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <input
                type="text"
                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl py-6 pl-16 pr-8 text-xl focus:outline-none focus:ring-4 focus:ring-blue-600/20 transition-all placeholder:text-slate-500 shadow-2xl backdrop-blur-sm"
                placeholder="Start coding in Python, TensorFlow, React, SQL..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex bg-slate-100 dark:bg-slate-900 p-2 rounded-2xl mb-16 border border-slate-200 dark:border-slate-800 shadow-inner overflow-x-auto max-w-full custom-scrollbar">
              {[
                { id: LanguageType.POPULAR, label: '🔥 Popular' },
                { id: LanguageType.PROGRAMMING, label: '💻 Languages' },
                { id: LanguageType.WEB, label: '🌐 Web Tech' },
                { id: LanguageType.DATABASE, label: '🗄️ Databases' },
                { id: LanguageType.MACHINE_LEARNING, label: '🤖 ML Libraries' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as LanguageType)}
                  className={`px-10 py-3.5 rounded-xl text-sm font-black tracking-widest whitespace-nowrap transition-all ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-blue-500'}`}
                >
                  {tab.label.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Horizontal Rectangular Language Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full px-4 mb-16">
              {filteredLanguages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => openEditor(lang)}
                  className="group flex items-center justify-between border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-5 bg-white dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:border-blue-600/50"
                >
                  <div className="flex flex-col text-left">
                    <span className="text-xl font-bold text-slate-700 dark:text-slate-200 group-hover:text-blue-600 transition-colors truncate">
                      {lang.name}
                    </span>
                    <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">Launch IDE</span>
                  </div>
                  <div className="shrink-0">
                    <TechIcon icon={lang.icon} name={lang.name} />
                  </div>
                </button>
              ))}
            </div>

            {/* Take a Test Highlight Callout Banner removed */}
          </div>

          <LogoCloud />
          <FeaturesGrid />

          <section className="w-full py-24 bg-slate-50 dark:bg-slate-900/30 flex flex-col items-center px-6">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight uppercase tracking-tighter">Now available on <span className="text-blue-600">Google Play</span></h2>
                <p className="text-slate-500 text-lg mb-8 font-medium">Take your coding environment anywhere. Compile, run, and debug on the go with the NodeLab mobile app.</p>
                <div className="flex space-x-4">
                  <button className="bg-black text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-3 hover:scale-105 transition-transform">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
                  </button>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                 <div className="relative w-80 h-[500px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden">
                    <div className="absolute top-0 w-1/3 h-6 bg-slate-800 rounded-b-2xl"></div>
                    <div className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-2xl">
                        <Logo onClick={() => setView('about')} className="w-full h-full" textClassName="text-3xl" />
                      </div>
                      <h4 className="text-white text-lg font-black uppercase tracking-widest mb-4">NodeLab App</h4>
                      <div className="space-y-3">
                        <div className="h-2 w-full bg-slate-800 rounded"></div>
                        <div className="h-2 w-3/4 bg-slate-800 rounded"></div>
                        <div className="h-2 w-1/2 bg-slate-800 rounded"></div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="w-full py-12 border-t border-slate-100 dark:border-slate-900 text-center bg-slate-50 dark:bg-slate-900/10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left mb-12">
            <div className="lg:col-span-3">
              <div className="flex items-center space-x-2 mb-6">
                <Logo onClick={() => setView('about')} className="w-8 h-8 cursor-pointer" textClassName="text-lg" />
                <span onClick={() => setView('about')} className="font-black uppercase tracking-widest text-lg text-slate-900 dark:text-white cursor-pointer select-none hover:text-blue-600 transition-colors">Node<span className="text-blue-600">Lab</span></span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">The professional standard for online code execution. Zero latency, 40+ environments, AI-first.</p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-4 text-slate-400">Languages</h4>
                  <div className="flex flex-col gap-y-1 text-xs md:text-sm text-slate-500">
                    {LANGUAGES.filter(lang => lang.type === LanguageType.PROGRAMMING).map(lang => (
                      <button 
                        key={lang.id} 
                        onClick={() => openEditor(lang)} 
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left truncate cursor-pointer py-0.5"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-4 text-slate-400">Web Tech</h4>
                  <div className="flex flex-col gap-y-1 text-xs md:text-sm text-slate-500">
                    {LANGUAGES.filter(lang => lang.type === LanguageType.WEB).map(lang => (
                      <button 
                        key={lang.id} 
                        onClick={() => openEditor(lang)} 
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left truncate cursor-pointer py-0.5"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-4 text-slate-400">Database</h4>
                  <div className="flex flex-col gap-y-1 text-xs md:text-sm text-slate-500">
                    {LANGUAGES.filter(lang => lang.type === LanguageType.DATABASE).map(lang => (
                      <button 
                        key={lang.id} 
                        onClick={() => openEditor(lang)} 
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left truncate cursor-pointer py-0.5"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-4 text-slate-400">ML Libraries</h4>
                  <div className="flex flex-col gap-y-1 text-xs md:text-sm text-slate-500">
                    {LANGUAGES.filter(lang => lang.type === LanguageType.MACHINE_LEARNING).map(lang => (
                      <button 
                        key={lang.id} 
                        onClick={() => openEditor(lang)} 
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left truncate cursor-pointer py-0.5"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-6 text-slate-400">Community</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li>
                  <a href="https://github.com/GV-07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-600 transition-colors">
                    <GithubIcon />
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/gokul-v-gv07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-600 transition-colors">
                    <LinkedinIcon />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=jrjtWvNBpnkjzjvKdgpHfRtmmMbpGxPSGWrTmXLTfjJcwLQmNVtbpVXDHHVkMVHFBqNwCwXz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-600 transition-colors">
                    <MailIcon />
                    <span className="truncate">nodelab40@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 dark:text-slate-600">
            NodeLab • Engineering Excellence • 2024
          </div>
        </footer>
      </div>
    );
  }

  if (view === 'tutorial') {
    const activeQuiz = QUIZ_QUESTIONS[selectedTutorialTopic.id];

    const getSectionDisplayName = (id: string): string => {
      const mapping: Record<string, string> = {
        'html': 'HTML',
        'css': 'CSS',
        'js': 'JAVASCRIPT',
        'sql': 'SQL',
        'python': 'PYTHON',
        'java': 'JAVA',
        'php': 'PHP',
        'c': 'C',
        'cpp': 'C++',
        'csharp': 'C#',
        'android-xml': 'ANDROID XML',
        'tailwind': 'TAILWIND',
        'htmx': 'HTMX',
        'vue': 'VUE.JS',
        'mui': 'MUI',
        'svelte': 'SVELTE',
        'animejs': 'ANIME.JS',
        'd3': 'D3.JS',
        'chartjs': 'CHART.JS',
        'backbone': 'BACKBONE.JS',
        'streamlit': 'STREAMLIT',
        'flask': 'FLASK',
        'firebase': 'FIREBASE',
        'sqlite': 'SQLITE',
        'questdb': 'QUESTDB',
        'seaborn': 'SEABORN',
        'pytorch': 'PYTORCH',
        'tensorflow': 'TENSORFLOW',
        'matplotlib': 'MATPLOTLIB',
        'redis': 'REDIS',
        'scikit-learn': 'SCIKIT-LEARN',
        'bootstrap3': 'BOOTSTRAP 3',
        'bootstrap4': 'BOOTSTRAP 4',
        'bootstrap5': 'BOOTSTRAP 5',
        'react': 'REACT',
        'jquery': 'JQUERY',
        'mysql_tut': 'MYSQL',
        'xml_tut': 'XML',
        'typescript_tut': 'TYPESCRIPT',
        'kotlin_tut': 'KOTLIN',
        'node_and_next_tut': 'NODE.JS',
        'angularjs_tut': 'ANGULARJS',
        'mongodb_tut': 'MONGODB',
        'go_tut': 'GO',
        'parcel_tut': 'PARCEL',
        'swift_tut': 'SWIFT',
        'postgres_tut': 'POSTGRESQL',
        'pandas_tut': 'PANDAS',
        'numpy_tut': 'NUMPY',
        'assembly_tut': 'ASSEMBLY',
        'dart_tut': 'DART',
        'r_tut': 'R',
        'ruby_tut': 'RUBY'
      };
      return mapping[id] || id.toUpperCase();
    };

    const selectSection = (section: any) => {
      setSelectedTutorialSection(section);
      if (section.topics && section.topics.length > 0) {
        setSelectedTutorialTopic(section.topics[0]);
        setTutorialCode(section.topics[0].code);
      } else {
        setTutorialCode('');
      }
      setTutorialResult(null);
      setTutorialQuizAnswer(null);
      setTutorialQuizChecked(false);
      setIsTutorialLangDropdownOpen(false);
      setIsLessonDropdownOpen(false);
    };

    const filteredSections = TUTORIAL_SECTIONS.map(section => {
      const matchingTopics = section.topics.filter(topic =>
        topic.title.toLowerCase().includes(tutorialSearchQuery.toLowerCase()) ||
        topic.description.toLowerCase().includes(tutorialSearchQuery.toLowerCase()) ||
        section.title.toLowerCase().includes(tutorialSearchQuery.toLowerCase())
      );
      return {
        ...section,
        topics: matchingTopics
      };
    }).filter(section => section.topics.length > 0);

    const activeSectionTopics = selectedTutorialSection.topics.filter(topic =>
      topic.title.toLowerCase().includes(tutorialSearchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(tutorialSearchQuery.toLowerCase())
    );

    const selectTopic = (topic: TutorialTopic) => {
      setSelectedTutorialTopic(topic);
      const parentSection = TUTORIAL_SECTIONS.find(s => s.topics.some(t => t.id === topic.id));
      if (parentSection) {
        setSelectedTutorialSection(parentSection);
        setExpandedSections(prev => ({
          ...prev,
          [parentSection.id]: true
        }));
      }
      setTutorialCode(topic.code);
      setTutorialResult(null);
      setTutorialQuizAnswer(null);
      setTutorialQuizChecked(false);
    };

    const runSandboxCode = async () => {
      if (selectedTutorialTopic.languageId === 'html') {
        setTutorialResult(tutorialCode);
        showNotification("Web preview refreshed successfully!", "success");
      } else {
        setIsTutorialRunning(true);
        setTutorialResult(null);
        try {
          const matchedLang = LANGUAGES.find(l => l.id === selectedTutorialTopic.languageId);
          const langName = matchedLang ? matchedLang.name : 'JavaScript';
          const output = await runCodeWithAI(tutorialCode, langName);
          setTutorialResult(output);
        } catch (err: any) {
          setTutorialResult(`Execution Error: ${err.message}`);
        } finally {
          setIsTutorialRunning(false);
        }
      }
    };

    const handleOpenInWorkspace = () => {
      const matchedLang = LANGUAGES.find(l => l.id === selectedTutorialTopic.languageId);
      if (matchedLang) {
        openEditor(matchedLang, tutorialCode);
        showNotification(`Loaded into workspace! Running ${matchedLang.name} editor.`, "success");
      } else {
        showNotification("Could not find matching workspace editor.", "error");
      }
    };

    const parseBoldText = (text: string, baseKey: string): React.ReactNode[] => {
      const parts: React.ReactNode[] = [];
      const boldRegex = /\*\*([^*]+)\*\*/g;
      let match;
      let lastIndex = 0;
      let keyIdx = 0;
      
      while ((match = boldRegex.exec(text)) !== null) {
        const textBefore = text.substring(lastIndex, match.index);
        if (textBefore) {
          parts.push(<span key={`text-${baseKey}-${keyIdx++}`}>{textBefore}</span>);
        }
        parts.push(
          <strong key={`bold-${baseKey}-${keyIdx++}`} className="font-extrabold text-slate-950 dark:text-white">
            {match[1]}
          </strong>
        );
        lastIndex = boldRegex.lastIndex;
      }
      
      if (lastIndex < text.length) {
        parts.push(<span key={`text-${baseKey}-${keyIdx++}`}>{text.substring(lastIndex)}</span>);
      }
      
      return parts;
    };

    const renderFormattedMessage = (text: string) => {
      if (!text) return null;
      
      const lines = text.split('\n');
      return lines.map((line, i) => {
        const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ');
        let content = isBullet ? line.trim().substring(2) : line;
        
        const parts: React.ReactNode[] = [];
        let remaining = content;
        
        const codeRegex = /`([^`]+)`/g;
        let match;
        let lastIndex = 0;
        let keyIdx = 0;
        
        while ((match = codeRegex.exec(remaining)) !== null) {
          const textBefore = remaining.substring(lastIndex, match.index);
          if (textBefore) {
            parts.push(...parseBoldText(textBefore, `${i}-${keyIdx++}`));
          }
          parts.push(
            <code key={`code-${i}-${keyIdx++}`} className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-950 font-mono text-xs text-rose-500 dark:text-rose-400 font-semibold border border-slate-200 dark:border-slate-800/80">
              {match[1]}
            </code>
          );
          lastIndex = codeRegex.lastIndex;
        }
        
        if (lastIndex < remaining.length) {
          parts.push(...parseBoldText(remaining.substring(lastIndex), `${i}-${keyIdx++}`));
        }
        
        if (isBullet) {
          return (
            <li key={i} className="ml-4 list-disc pl-1 mb-1 font-medium leading-relaxed">
              <span>{parts}</span>
            </li>
          );
        }
        
        return (
          <p key={i} className={line.trim() === '' ? 'h-3' : 'mb-2 font-medium leading-relaxed'}>
            {parts}
          </p>
        );
      });
    };

    const handleNlBotSend = async (customText?: string) => {
      const textToSend = customText || nlBotInput;
      if (!textToSend.trim()) return;

      const userMsg = {
        id: `user-${Date.now()}`,
        sender: 'user' as const,
        text: textToSend,
        timestamp: new Date()
      };
      
      setNlBotMessages(prev => [...prev, userMsg]);
      if (!customText) {
        setNlBotInput('');
      }
      
      setIsNlBotThinking(true);

      try {
        const systemInstruction = `You are "NL", an extremely friendly, helpful, and highly skilled interactive programming tutor built into the NodeLab learning platform.
Your goal is to guide students as they learn programming concepts.
Keep your responses:
- Conversational, engaging, and encouraging.
- Technically precise but simple to understand (use analogies where helpful!).
- Short and scannable (use formatting, bullet points, and code snippets where appropriate).
- Focused on teaching and helping the user learn. Instead of just giving them the direct answer, guide them, ask clarifying questions, or give them hints when they are working on exercises.

The student is currently working on the lesson: "${selectedTutorialTopic?.title || 'General'}" (under "${selectedTutorialSection?.title || 'General'}").
The lesson's key concepts are: ${(selectedTutorialTopic?.explanation || []).join(', ')}.
The student's playground sandbox code is currently:
\`\`\`
${tutorialCode || ''}
\`\`\`

Support the student with guidance tailored specifically to this topic and their workspace playground code.`;

        const botResponse = await askNlBot(
          textToSend,
          nlBotMessages.map(m => ({ sender: m.sender, text: m.text })),
          systemInstruction
        );

        setNlBotMessages(prev => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: 'bot' as const,
            text: botResponse,
            timestamp: new Date()
          }
        ]);
      } catch (err: any) {
        setNlBotMessages(prev => [
          ...prev,
          {
            id: `bot-err-${Date.now()}`,
            sender: 'bot' as const,
            text: `Whoops! I hit a snag: ${err.message}. Could you try sending that again?`,
            timestamp: new Date()
          }
        ]);
      } finally {
        setIsNlBotThinking(false);
      }
    };

    return (
      <div className={`min-h-screen flex flex-col transition-colors duration-300 ${theme === 'dark' ? 'bg-[#050505] text-white' : 'bg-slate-50 text-slate-900'}`}>
        <AnimatePresence>
          {notification && (
            <Notification 
              message={notification.message} 
              type={notification.type} 
              onDismiss={() => setNotification(null)} 
            />
          )}
        </AnimatePresence>
        
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
          items={menuItems} 
          onLogoClick={() => setView('about')} 
          user={user}
          onLogin={handleLoginSuccess}
          onLogout={handleLogout}
          onAuthError={(msg) => showNotification(msg)}
          intelligenceEnabled={intelligenceEnabled}
          setIntelligenceEnabled={setIntelligenceEnabled}
        />

        {/* Global Tutorial Header */}
        <header className="w-full px-6 py-4 flex justify-between items-center z-10 sticky top-0 border-b border-slate-100 dark:border-slate-900 backdrop-blur-md bg-transparent">
          <div className="flex items-center space-x-4">
             <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-700 dark:text-slate-200">
               <MenuIcon />
             </button>
             <button onClick={() => setView('home')} className="text-slate-500 hover:text-blue-600 flex items-center space-x-2 transition-colors group px-2 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 shrink-0">
               <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
               <span className="font-black text-xs uppercase tracking-widest hidden sm:inline">Back</span>
             </button>
             <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 shrink-0"></div>
             <div className="flex items-center space-x-3">
               <Logo onClick={() => setView('about')} className="w-10 h-10 shadow-2xl rotate-3 cursor-pointer" textClassName="text-xl" />
               <span onClick={() => setView('about')} className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white cursor-pointer select-none hover:text-blue-600 transition-colors">Node<span className="text-blue-600">Lab</span> <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 px-2.5 py-0.5 rounded-full ml-2">Tutorials</span></span>
             </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <UserMenu user={user} onLogin={handleLoginSuccess} onLogout={handleLogout} onError={(msg) => showNotification(msg)} />
          </div>
        </header>

        {/* Main Columns */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          
          {/* LEFT PANEL - Navigation & Topic Selection */}
          <aside className="w-full lg:w-80 border-r border-slate-200 dark:border-slate-900 flex flex-col bg-white dark:bg-[#09090b]">
            <div className="p-4 border-b border-slate-100 dark:border-slate-900">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">Search Lessons</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. selectors, variables..."
                  value={tutorialSearchQuery}
                  onChange={(e) => setTutorialSearchQuery(e.target.value)}
                  className="w-full bg-slate-100 dark:bg-[#121214] border border-slate-200 dark:border-slate-800/80 rounded-xl px-4 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600/50"
                />
                {tutorialSearchQuery && (
                  <button onClick={() => setTutorialSearchQuery('')} className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-100">✕</button>
                )}
              </div>
            </div>

            {/* Vertical list of languages / sections */}
            <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
              {filteredSections.map((section) => {
                const isExpanded = !!expandedSections[section.id];
                const isSelected = selectedTutorialSection.id === section.id;
                return (
                  <div key={section.id} className="rounded-xl overflow-hidden transition-all">
                    <button
                      type="button"
                      onClick={() => {
                        setExpandedSections(prev => ({
                          ...prev,
                          [section.id]: !prev[section.id]
                        }));
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                        isExpanded 
                          ? 'bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 border border-blue-100/50 dark:border-blue-900/30 rounded-xl' 
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#121214] hover:text-blue-600 rounded-xl'
                      }`}
                    >
                      <span className="font-extrabold">{getSectionDisplayName(section.id)}</span>
                      <svg className={`w-4 h-4 text-slate-400 dark:text-slate-500 transition-transform duration-200 shrink-0 ${isExpanded ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isExpanded && (
                      <div className="mt-1 ml-2 pl-2 border-l border-slate-200 dark:border-slate-800 py-1 space-y-0.5 animate-in fade-in slide-in-from-top-2 duration-200">
                        {section.topics.map((topic) => {
                          const isTopicActive = selectedTutorialTopic.id === topic.id;
                          return (
                            <button
                              key={topic.id}
                              type="button"
                              onClick={() => selectTopic(topic)}
                              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-between ${
                                isTopicActive 
                                  ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/10' 
                                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#121214] hover:text-slate-900 dark:hover:text-white'
                              }`}
                            >
                              <span className="truncate pr-2">{topic.title}</span>
                              {isTopicActive && <span className="w-1.5 h-1.5 rounded-full bg-white block animate-pulse shrink-0" />}
                            </button>
                          );
                        })}
                        {section.topics.length === 0 && (
                          <div className="p-3 text-center text-slate-400 dark:text-slate-500 text-xs">
                            No matching lessons.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
              {filteredSections.length === 0 && (
                <div className="p-8 text-center text-slate-400 dark:text-slate-500 text-xs">
                  No matching tutorials found.
                </div>
              )}
            </div>

            {/* Display current lesson info summary card */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-900 bg-slate-50/20 dark:bg-transparent shrink-0">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-900/50 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Current Lesson</span>
                <h4 className="text-sm font-black text-slate-800 dark:text-slate-200">{selectedTutorialTopic.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">{selectedTutorialTopic.description}</p>
              </div>
            </div>
          </aside>

          {/* RIGHT PANEL - Content and Interactive Sandbox */}
          <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-[#050505] p-6 lg:p-10">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* TOPIC INTRO */}
              <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-500/10 dark:bg-blue-600/10 px-3 py-1 rounded-full inline-block">
                  {selectedTutorialSection.title}
                </div>
                <h1 className="text-3xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-none">
                  {selectedTutorialTopic.title}
                </h1>
                <p className="text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {selectedTutorialTopic.description}
                </p>
              </div>

              {/* CONCEPT CARD DETAILS */}
              <div className="bg-white dark:bg-[#0c0c0e] border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 shadow-sm space-y-6">
                <h3 className="text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 block" />
                  <span>Key Concepts & Details</span>
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedTutorialTopic.explanation.map((exp, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      <span className="text-blue-500 dark:text-blue-600 font-bold mt-0.5">•</span>
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* TRY IT YOURSELF PLAYGROUND SANDBOX */}
              <div className="border border-slate-200 dark:border-slate-800/80 rounded-3xl overflow-hidden bg-white dark:bg-[#0c0c0e] shadow-xl flex flex-col">
                
                {/* Sandbox Header bar */}
                <div className="bg-slate-100/80 dark:bg-[#121214] border-b border-slate-200 dark:border-slate-800/80 px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-xs font-black tracking-wider text-slate-500 dark:text-slate-400 uppercase font-mono pl-3 border-l border-slate-200 dark:border-slate-800">
                      Try It Yourself Sandbox
                    </span>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={runSandboxCode}
                      disabled={isTutorialRunning}
                      className="flex-1 sm:flex-none flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl transition-all disabled:opacity-50 active:scale-95"
                    >
                      {isTutorialRunning ? (
                        <>
                          <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Running...</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          </svg>
                          <span>Run Code</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={handleOpenInWorkspace}
                      className="flex-1 sm:flex-none flex items-center justify-center space-x-2 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-[#18181b] text-slate-700 dark:text-slate-300 text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl transition-all active:scale-95"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      <span>Open in Full IDE</span>
                    </button>
                  </div>
                </div>

                {/* Sandbox Split View Workspace */}
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
                  
                  {/* Left Column: Monaco Code Editor */}
                  <div className="border-r border-slate-200 dark:border-slate-800 flex flex-col min-h-[300px] md:min-h-auto">
                    <div className="bg-slate-50 dark:bg-[#0c0c0e] border-b border-slate-200 dark:border-slate-800 px-4 py-1.5 flex justify-between items-center text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase font-mono">
                      <span>Source Code Editor</span>
                      <button onClick={() => setTutorialCode(selectedTutorialTopic.code)} className="hover:text-blue-500 transition-colors">Reset</button>
                    </div>
                    <div className="flex-1 relative">
                      <Editor
                        height="380px"
                        language={(() => {
                          const matched = LANGUAGES.find(l => l.id === selectedTutorialTopic.languageId);
                          return matched ? matched.monaco : 'javascript';
                        })()}
                        theme={theme === 'dark' ? 'vs-dark' : 'light'}
                        value={tutorialCode}
                        onChange={(value) => setTutorialCode(value || '')}
                        options={{
                          minimap: { enabled: false },
                          fontSize: 13,
                          padding: { top: 12 },
                          roundedSelection: true,
                          scrollBeyondLastLine: false,
                          automaticLayout: true,
                        }}
                      />
                    </div>
                  </div>

                  {/* Right Column: Dynamic Output Sandbox */}
                  <div className="flex flex-col bg-slate-900 text-slate-100 min-h-[300px] md:min-h-auto overflow-hidden">
                    <div className="bg-[#121214] border-b border-slate-800/80 px-4 py-1.5 flex justify-between items-center text-[10px] font-bold tracking-wider text-slate-500 uppercase font-mono">
                      <span>Sandbox Live Output</span>
                      <span className="flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 block animate-pulse" />
                        <span>Interactive</span>
                      </span>
                    </div>

                    <div className="flex-1 p-4 overflow-auto flex flex-col justify-stretch">
                      {selectedTutorialTopic.languageId === 'html' ? (
                        /* Web Preview Frame */
                        <iframe
                          title="NodeLab Tutorial Sandbox Preview"
                          srcDoc={tutorialResult || selectedTutorialTopic.code}
                          sandbox="allow-scripts allow-modals"
                          className="w-full h-full min-h-[320px] bg-white rounded-xl border-none shadow-inner"
                        />
                      ) : (
                        /* Programming Console Output Terminal */
                        <div className="flex-1 bg-[#050505] rounded-xl p-4 font-mono text-xs text-emerald-500/90 shadow-inner overflow-y-auto border border-slate-800 flex flex-col space-y-2 leading-relaxed min-h-[320px]">
                          <div className="text-slate-600 font-sans font-bold text-[10px] uppercase tracking-wider mb-2 border-b border-slate-800/60 pb-1.5">Console Output Window</div>
                          <div className="text-slate-400"># Click "Run Code" to compile and see standard output below.</div>
                          
                          {isTutorialRunning && (
                            <div className="flex items-center space-x-2 text-slate-400 py-4 animate-pulse">
                              <div className="w-3 h-3 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                              <span>Simulating output on secure VM instance...</span>
                            </div>
                          )}

                          {tutorialResult && !isTutorialRunning && (
                            <div className="whitespace-pre-wrap leading-relaxed py-2">
                              {tutorialResult}
                            </div>
                          )}

                          {!tutorialResult && !isTutorialRunning && (
                            <div className="text-slate-600 italic mt-auto">
                              No execution payload. Sandbox ready.
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                </div>

              </div>

              {/* QUICK TOPIC QUIZ CARD */}
              {activeQuiz && (
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-[#0d1527] dark:to-[#070b15] border border-blue-100 dark:border-blue-900/40 rounded-3xl p-6 shadow-md space-y-6">
                  <div className="flex items-center justify-between border-b border-blue-200/40 dark:border-blue-900/20 pb-4">
                    <h3 className="text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center space-x-2">
                      <span className="text-lg">💡</span>
                      <span>Test Yourself with a Quick Quiz</span>
                    </h3>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 border border-blue-200/30 dark:border-blue-800/30">
                      W3Schools Challenge
                    </span>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug">
                      {activeQuiz.question}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activeQuiz.options.map((option, idx) => {
                        const isSelected = tutorialQuizAnswer === option;
                        return (
                          <button
                            key={idx}
                            onClick={() => {
                              if (!tutorialQuizChecked) {
                                setTutorialQuizAnswer(option);
                              }
                            }}
                            disabled={tutorialQuizChecked}
                            className={`w-full text-left px-4 py-3 rounded-2xl text-xs transition-all flex items-center justify-between border border-solid ${
                              isSelected
                                ? 'bg-blue-600 text-white font-bold border-blue-600 shadow-md shadow-blue-600/10'
                                : 'bg-white dark:bg-[#101726] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-[#151f33]'
                            }`}
                          >
                            <span>{option}</span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-white bg-white/20' : 'border-slate-300 dark:border-slate-700'}`}>
                              {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submission and Feedback actions */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-blue-200/30 dark:border-blue-900/20">
                    {!tutorialQuizChecked ? (
                      <button
                        onClick={() => {
                          if (!tutorialQuizAnswer) {
                            showNotification("Please select an option to submit!", "error");
                            return;
                          }
                          setTutorialQuizChecked(true);
                        }}
                        className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded-xl transition-all shadow-md active:scale-95"
                      >
                        Submit Answer
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setTutorialQuizAnswer(null);
                          setTutorialQuizChecked(false);
                        }}
                        className="border border-blue-200 dark:border-blue-800/80 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded-xl hover:bg-blue-100/30 dark:hover:bg-blue-900/20 transition-all active:scale-95"
                      >
                        Retry Question
                      </button>
                    )}

                    {tutorialQuizChecked && (
                      <div className={`w-full sm:w-auto p-4 rounded-2xl border text-xs leading-relaxed max-w-lg ${
                        tutorialQuizAnswer === activeQuiz.answer
                          ? 'bg-emerald-500/10 dark:bg-emerald-950/25 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                          : 'bg-rose-500/10 dark:bg-rose-950/25 text-rose-600 dark:text-rose-400 border-rose-500/30'
                      }`}>
                        <div className="flex items-center space-x-1.5 font-black uppercase tracking-wider text-[10px] mb-1">
                          {tutorialQuizAnswer === activeQuiz.answer ? (
                            <>
                              <span>✓</span>
                              <span>Correct Answer!</span>
                            </>
                          ) : (
                            <>
                              <span>✕</span>
                              <span>Incorrect Choice</span>
                            </>
                          )}
                        </div>
                        <p className="font-medium text-slate-700 dark:text-slate-300">
                          {activeQuiz.explanation}
                        </p>
                      </div>
                    )}
                  </div>

                </div>
              )}

            </div>
          </main>

        </div>

        {/* ================= NL BOT FLOATING ASSISTANT ================= */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
          <AnimatePresence>
            {isNlBotOpen && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-[420px] max-w-[calc(100vw-32px)] h-[580px] max-h-[calc(100vh-120px)] bg-white dark:bg-[#0c0c0e] border border-slate-200/80 dark:border-slate-800/80 rounded-[28px] shadow-2xl flex flex-col overflow-hidden mb-4 border-solid"
              >
                {/* Bot Header */}
                <div className="bg-gradient-to-r from-blue-600/10 via-indigo-600/5 to-transparent px-5 py-4 border-b border-slate-100 dark:border-slate-900 flex items-center justify-between shrink-0">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-2xl bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-500/20">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25M7.5 10.5h.008v.008H7.5V10.5zm6.75 0h.008v.008h-.008V10.5z" />
                        </svg>
                      </div>
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-[#0c0c0e]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-slate-800 dark:text-white flex items-center space-x-1.5">
                        <span>NL</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-extrabold tracking-wider uppercase">TUTOR</span>
                      </h3>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Online • NodeLab Assistant</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setIsNlBotOpen(false)}
                    className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Messages Body */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-slate-50/30 dark:bg-slate-900/10">
                  {nlBotMessages.map((msg) => (
                    <div 
                      key={msg.id} 
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} items-start space-x-2.5 max-w-full`}
                    >
                      {msg.sender === 'bot' && (
                        <div className="w-7 h-7 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20 mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25M7.5 10.5h.008v.008H7.5V10.5zm6.75 0h.008v.008h-.008V10.5z" />
                          </svg>
                        </div>
                      )}
                      <div className={`max-w-[82%] rounded-2xl p-3.5 text-xs ${
                        msg.sender === 'user' 
                          ? 'bg-blue-600 text-white rounded-tr-sm font-semibold shadow-md shadow-blue-600/10' 
                          : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-850 rounded-tl-sm shadow-sm'
                      }`}>
                        {msg.sender === 'bot' ? (
                          <div className="space-y-1 select-text">
                            {renderFormattedMessage(msg.text)}
                          </div>
                        ) : (
                          <p className="whitespace-pre-wrap select-text leading-relaxed">{msg.text}</p>
                        )}
                        <span className={`text-[9px] block text-right mt-1.5 opacity-60 font-medium ${msg.sender === 'user' ? 'text-blue-100' : 'text-slate-400'}`}>
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Thinking Bubble */}
                  {isNlBotThinking && (
                    <div className="flex justify-start items-start space-x-2.5">
                      <div className="w-7 h-7 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20 mt-1">
                        <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                      </div>
                      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 text-slate-800 dark:text-slate-200 rounded-2xl rounded-tl-sm p-4 text-xs shadow-sm flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  )}

                  <div ref={nlBotChatEndRef} />
                </div>

                {/* Suggestions and Quick Chips */}
                <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-900/60 bg-white dark:bg-[#0c0c0e] shrink-0 flex gap-2 overflow-x-auto select-none custom-scrollbar pb-3">
                  <button 
                    onClick={() => handleNlBotSend(`Can you explain the key concepts of ${selectedTutorialTopic.title} in simpler terms with a clear real-world analogy?`)}
                    disabled={isNlBotThinking}
                    className="px-3 py-1.5 bg-slate-50 hover:bg-blue-50 dark:bg-slate-900/60 dark:hover:bg-blue-950/20 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-100 dark:border-slate-800/85 rounded-xl text-[10px] font-bold whitespace-nowrap transition-colors"
                  >
                    💡 Explain
                  </button>
                  <button 
                    onClick={() => handleNlBotSend(`Give me a coding exercise or mini-challenge based on ${selectedTutorialTopic.title} so I can practice.`)}
                    disabled={isNlBotThinking}
                    className="px-3 py-1.5 bg-slate-50 hover:bg-blue-50 dark:bg-slate-900/60 dark:hover:bg-blue-950/20 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-100 dark:border-slate-800/85 rounded-xl text-[10px] font-bold whitespace-nowrap transition-colors"
                  >
                    🛠️ Mini-Challenge
                  </button>
                  <button 
                    onClick={() => handleNlBotSend(`Could you review the current code in my sandbox and suggest any improvements or fixes?\n\nCode:\n\`\`\`\n${tutorialCode}\n\`\`\``)}
                    disabled={isNlBotThinking}
                    className="px-3 py-1.5 bg-slate-50 hover:bg-blue-50 dark:bg-slate-900/60 dark:hover:bg-blue-950/20 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-100 dark:border-slate-800/85 rounded-xl text-[10px] font-bold whitespace-nowrap transition-colors"
                  >
                    🔍 Review Code
                  </button>
                  <button 
                    onClick={() => handleNlBotSend(`Show me a comprehensive real-world code example demonstrating ${selectedTutorialTopic.title}.`)}
                    disabled={isNlBotThinking}
                    className="px-3 py-1.5 bg-slate-50 hover:bg-blue-50 dark:bg-slate-900/60 dark:hover:bg-blue-950/20 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-100 dark:border-slate-800/85 rounded-xl text-[10px] font-bold whitespace-nowrap transition-colors"
                  >
                    🎨 Example
                  </button>
                </div>

                {/* Footer Input Area */}
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleNlBotSend();
                  }}
                  className="p-4 border-t border-slate-100 dark:border-slate-900 bg-white dark:bg-[#0c0c0e] flex items-center space-x-2.5 shrink-0"
                >
                  <input
                    type="text"
                    value={nlBotInput}
                    onChange={(e) => setNlBotInput(e.target.value)}
                    placeholder={`Ask about ${selectedTutorialTopic.title}...`}
                    disabled={isNlBotThinking}
                    className="flex-1 bg-slate-50 dark:bg-[#121214] text-slate-900 dark:text-slate-100 border border-slate-100 dark:border-slate-800/80 rounded-2xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600/50 disabled:opacity-65"
                  />
                  <button
                    type="submit"
                    disabled={!nlBotInput.trim() || isNlBotThinking}
                    className="p-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-100 dark:disabled:bg-slate-900 text-white disabled:text-slate-400 rounded-2xl transition-colors shrink-0 shadow-md shadow-blue-600/10"
                  >
                    <svg className="w-4 h-4 transform rotate-90" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pulsing Floating Action Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsNlBotOpen(!isNlBotOpen)}
            className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl hover:bg-blue-500 transition-colors relative border border-blue-500/30 group cursor-pointer"
          >
            <div className="absolute inset-0 rounded-full bg-blue-600/30 animate-ping opacity-75 group-hover:opacity-100" />
            
            {isNlBotOpen ? (
              <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            ) : (
              <div className="relative z-10 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21L8.188 15.904L3 15L8.188 14.096L9 9L9.813 14.096L15 15L9.813 15.904Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.071 4.929l-.707.707-.707-.707.707-.707.707.707zM17.657 16.243l-.707.707-.707-.707.707-.707.707.707zM6.343 4.929l-.707.707-.707-.707.707-.707.707.707z" />
                </svg>
                <span className="absolute -top-1.5 -right-1 px-1.5 py-0.5 text-[8px] font-black font-mono bg-rose-500 text-white rounded-full border border-white dark:border-[#050505] animate-bounce">
                  NEW
                </span>
              </div>
            )}
          </motion.button>
        </div>

      </div>
    );
  }

  if (view === 'contact') {
    return (
      <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
          items={menuItems} 
          onLogoClick={() => setView('about')} 
          user={user}
          onLogin={handleLoginSuccess}
          onLogout={handleLogout}
          intelligenceEnabled={intelligenceEnabled}
          setIntelligenceEnabled={setIntelligenceEnabled}
          hideLoginButton={true}
        />
        
        <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 dark:bg-[#050505]/70 border-b border-slate-200 dark:border-slate-800">
          <AnimatePresence>
            {notification && (
              <Notification 
                message={notification.message} 
                type={notification.type} 
                onDismiss={() => setNotification(null)} 
              />
            )}
          </AnimatePresence>
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-200">
                <MenuIcon />
              </button>
              <button onClick={() => setView('home')} className="text-slate-500 hover:text-blue-600 flex items-center space-x-2 transition-colors group px-2 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 shrink-0">
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                <span className="font-black text-xs uppercase tracking-widest hidden sm:inline">Back</span>
              </button>
              <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800"></div>
              <span className="text-xl font-bold">Contact</span>
            </div>
            <div className="flex items-center gap-4">
              <UserMenu user={user} onLogin={handleLoginSuccess} onLogout={handleLogout} onError={(msg) => showNotification(msg)} hideLoginButton={true} />
            </div>
          </div>
        </nav>

        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter">Keep in Touch</h1>
          <p className="text-xl md:text-2xl font-bold mb-8 text-slate-500 dark:text-slate-400">If any issues in this compiler send a feedback to</p>
          <a 
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=jrjtWvNBpnkjzjvKdgpHfRtmmMbpGxPSGWrTmXLTfjJcwLQmNVtbpVXDHHVkMVHFBqNwCwXz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-3xl md:text-5xl font-black bg-blue-600 text-white px-10 py-4 rounded-2xl shadow-2xl transform -rotate-1 hover:bg-blue-500 hover:scale-105 transition-all inline-block select-all cursor-pointer"
          >
            nodelab40@gmail.com
          </a>
        </div>
      </div>
    );
  }

  if (view === 'web-ide') {
    const combinedPreview = `
      <html>
        <style>${cssCode}</style>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;

    return (
      <div className={`flex flex-col h-screen ${theme === 'dark' ? 'bg-slate-950 text-slate-200' : 'bg-slate-50 text-slate-900'} overflow-hidden transition-colors duration-300`}>
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
          items={menuItems} 
          onLogoClick={() => setView('about')} 
          user={user}
          onLogin={handleLoginSuccess}
          onLogout={handleLogout}
          intelligenceEnabled={intelligenceEnabled}
          setIntelligenceEnabled={setIntelligenceEnabled}
          hideLoginButton={true}
        />

        <header className={`flex items-center justify-between px-6 py-3 border-b shrink-0 ${theme === 'dark' ? 'border-slate-900 bg-[#0a0a0a]' : 'border-slate-200 bg-white shadow-sm'}`}>
          <AnimatePresence>
            {notification && (
              <Notification 
                message={notification.message} 
                type={notification.type} 
                onDismiss={() => setNotification(null)} 
              />
            )}
          </AnimatePresence>
          <div className="flex items-center space-x-6">
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-500 dark:text-slate-400">
              <MenuIcon />
            </button>
            <button onClick={() => setView('home')} className="text-slate-500 hover:text-blue-600 flex items-center space-x-2 transition-colors group">
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              <span className="font-black text-xs uppercase tracking-widest">Back</span>
            </button>
            <div className="h-5 w-[1px] bg-slate-200 dark:bg-slate-800"></div>
            <span className="text-sm font-bold text-slate-900 dark:text-white">Web Project (HTML/CSS/JS)</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setShowMobileIntelligence(!showMobileIntelligence)}
              className={`p-2.5 rounded-full transition-all border group shrink-0 ${showMobileIntelligence ? 'bg-violet-600/15 border-violet-500/50 text-violet-500 shadow-md shadow-violet-500/10' : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 hover:text-violet-500 hover:border-violet-500/30'}`}
              title={showMobileIntelligence ? "Close AI Assistant" : "Open AI Assistant"}
            >
              <SparklesIcon />
            </button>
            <SaveIndicator status={saveStatus} />
            <UserMenu user={user} onLogin={handleLoginSuccess} onLogout={handleLogout} onError={(msg) => showNotification(msg)} hideLoginButton={true} />
            <div className="flex bg-slate-100 dark:bg-slate-900 rounded-xl p-1 border border-slate-200 dark:border-slate-800">
              <button onClick={() => setViewMode('output')} className={`px-5 py-2 rounded-lg text-xs font-black transition-all ${viewMode === 'output' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-blue-600'}`}>CODE</button>
              <button onClick={() => setViewMode('preview')} className={`px-5 py-2 rounded-lg text-xs font-black transition-all ${viewMode === 'preview' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-blue-600'}`}>VIEW</button>
            </div>
            <button 
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setViewMode('preview');
                  setIsLoading(false);
                }, 600);
              }}
              disabled={isLoading}
              className="flex bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-xl text-xs font-black tracking-widest transition-all disabled:opacity-50 items-center space-x-2 shadow-md active:scale-95"
            >
              {isLoading ? (
                <span className="animate-spin rounded-full h-3.5 w-3.5 border-b-2 border-white"></span>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>RUN</span>
                </>
              )}
            </button>
          </div>
        </header>

        <div className="flex-1 flex flex-col overflow-hidden">
          {viewMode === 'output' ? (
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-1 p-1 bg-slate-200 dark:bg-slate-900 overflow-hidden">
              <div className="flex flex-col bg-white dark:bg-[#050505] rounded-lg overflow-hidden">
                <div className="px-4 py-2 bg-slate-100 dark:bg-slate-900 flex items-center justify-between group">
                  <div className="flex items-center gap-2 cursor-text" onClick={() => setIsEditingHtmlName(true)}>
                    {isEditingHtmlName ? (
                      <input
                        ref={htmlNameInputRef}
                        type="text"
                        value={htmlFileName}
                        onChange={(e) => setHtmlFileName(e.target.value)}
                        onBlur={() => setIsEditingHtmlName(false)}
                        onKeyDown={(e) => e.key === 'Enter' && setIsEditingHtmlName(false)}
                        className="bg-transparent border-none outline-none text-[10px] font-black uppercase tracking-widest text-slate-500 w-24 p-0 m-0"
                      />
                    ) : (
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{htmlFileName}</span>
                    )}
                    <div className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <PencilIcon />
                    </div>
                  </div>
                  <span className="text-[8px] font-black text-slate-400">HTML</span>
                </div>
                <div className="flex-1 relative">
                  <Editor
                    height="100%"
                    theme={theme === 'dark' ? 'vs-dark' : 'light'}
                    language="html"
                    value={htmlCode}
                    onChange={(v) => setHtmlCode(v || '')}
                    options={{ 
                      fontSize: 14, 
                      minimap: { enabled: false }, 
                      automaticLayout: true,
                      quickSuggestions: intelligenceEnabled,
                      suggestOnTriggerCharacters: intelligenceEnabled,
                      parameterHints: { enabled: intelligenceEnabled }
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col bg-white dark:bg-[#050505] rounded-lg overflow-hidden">
                <div className="px-4 py-2 bg-slate-100 dark:bg-slate-900 flex items-center justify-between group">
                  <div className="flex items-center gap-2 cursor-text" onClick={() => setIsEditingCssName(true)}>
                    {isEditingCssName ? (
                      <input
                        ref={cssNameInputRef}
                        type="text"
                        value={cssFileName}
                        onChange={(e) => setCssFileName(e.target.value)}
                        onBlur={() => setIsEditingCssName(false)}
                        onKeyDown={(e) => e.key === 'Enter' && setIsEditingCssName(false)}
                        className="bg-transparent border-none outline-none text-[10px] font-black uppercase tracking-widest text-slate-500 w-24 p-0 m-0"
                      />
                    ) : (
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{cssFileName}</span>
                    )}
                    <div className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <PencilIcon />
                    </div>
                  </div>
                  <span className="text-[8px] font-black text-slate-400">CSS</span>
                </div>
                <div className="flex-1 relative">
                  <Editor
                    height="100%"
                    theme={theme === 'dark' ? 'vs-dark' : 'light'}
                    language="css"
                    value={cssCode}
                    onChange={(v) => setCssCode(v || '')}
                    options={{ 
                      fontSize: 14, 
                      minimap: { enabled: false }, 
                      automaticLayout: true,
                      quickSuggestions: intelligenceEnabled,
                      suggestOnTriggerCharacters: intelligenceEnabled,
                      parameterHints: { enabled: intelligenceEnabled }
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col bg-white dark:bg-[#050505] rounded-lg overflow-hidden">
                <div className="px-4 py-2 bg-slate-100 dark:bg-slate-900 flex items-center justify-between group">
                  <div className="flex items-center gap-2 cursor-text" onClick={() => setIsEditingJsName(true)}>
                    {isEditingJsName ? (
                      <input
                        ref={jsNameInputRef}
                        type="text"
                        value={jsFileName}
                        onChange={(e) => setJsFileName(e.target.value)}
                        onBlur={() => setIsEditingJsName(false)}
                        onKeyDown={(e) => e.key === 'Enter' && setIsEditingJsName(false)}
                        className="bg-transparent border-none outline-none text-[10px] font-black uppercase tracking-widest text-slate-500 w-24 p-0 m-0"
                      />
                    ) : (
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{jsFileName}</span>
                    )}
                    <div className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <PencilIcon />
                    </div>
                  </div>
                  <span className="text-[8px] font-black text-slate-400">JS</span>
                </div>
                <div className="flex-1 relative">
                  <Editor
                    height="100%"
                    theme={theme === 'dark' ? 'vs-dark' : 'light'}
                    language="javascript"
                    value={jsCode}
                    onChange={(v) => setJsCode(v || '')}
                    options={{ 
                      fontSize: 14, 
                      minimap: { enabled: false }, 
                      automaticLayout: true,
                      quickSuggestions: intelligenceEnabled,
                      suggestOnTriggerCharacters: intelligenceEnabled,
                      parameterHints: { enabled: intelligenceEnabled }
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 p-6 bg-slate-100 dark:bg-[#020202]">
              <iframe 
                className="w-full h-full bg-white rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800" 
                srcDoc={combinedPreview} 
              />
            </div>
          )}
        </div>

        {/* Floating Mobile Toggle */}
        <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <div className="flex bg-slate-900/90 backdrop-blur-md rounded-2xl p-1.5 border border-slate-800 shadow-2xl items-center gap-1">
            <button 
              onClick={() => setViewMode('output')} 
              className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all ${viewMode === 'output' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'text-slate-400 hover:text-white'}`}
            >
              CODE
            </button>
            <button 
              onClick={() => setViewMode('preview')} 
              className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all ${viewMode === 'preview' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'text-slate-400 hover:text-white'}`}
            >
              VIEW
            </button>
            <button 
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setViewMode('preview');
                  setIsLoading(false);
                }, 600);
              }}
              disabled={isLoading}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl text-xs font-black tracking-widest transition-all disabled:opacity-50 flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>RUN</span>
            </button>
          </div>
        </div>

        {renderIntelligencePanel()}
      </div>
    );
  }

  if (view === 'challenges') {
    const allCompanies = Array.from(new Set(CHALLENGES.map(c => (c as any).company || 'General Practice'))).sort();
    
    const filteredChallenges = CHALLENGES.filter(challenge => {
      const difficultyMatch = difficultyFilter === 'All' || challenge.level === difficultyFilter;
      const companyMatch = companyFilter === 'All' || ((challenge as any).company || 'General Practice') === companyFilter;
      return difficultyMatch && companyMatch;
    });

    const groupedChallenges = filteredChallenges.reduce((acc, challenge) => {
      const company = (challenge as any).company || 'General Practice';
      if (!acc[company]) acc[company] = [];
      acc[company].push(challenge);
      return acc;
    }, {} as Record<string, typeof CHALLENGES>);

    return (
      <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
          items={menuItems} 
          onLogoClick={() => setView('about')} 
          user={user}
          onLogin={handleLoginSuccess}
          onLogout={handleLogout}
          intelligenceEnabled={intelligenceEnabled}
          setIntelligenceEnabled={setIntelligenceEnabled}
          hideLoginButton={true}
        />
        
        <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 dark:bg-[#050505]/70 border-b border-slate-200 dark:border-slate-800">
          <AnimatePresence>
            {notification && (
              <Notification 
                message={notification.message} 
                type={notification.type} 
                onDismiss={() => setNotification(null)} 
              />
            )}
          </AnimatePresence>
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-200">
                <MenuIcon />
              </button>
              <button onClick={() => setView('home')} className="text-slate-500 hover:text-blue-600 flex items-center space-x-2 transition-colors group px-2 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 shrink-0">
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                <span className="font-black text-xs uppercase tracking-widest hidden sm:inline">Back</span>
              </button>
              <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none">Challenges</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-black mt-1">Practice & Placements</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-6">
               <div className="flex items-center gap-2">
                 <span className="text-[10px] font-black uppercase text-slate-400">Difficulty:</span>
                 <div className="flex bg-slate-100 dark:bg-slate-900 rounded-xl p-1 border border-slate-200 dark:border-slate-800">
                    {(['All', 'Beginner', 'Hard'] as const).map((level) => (
                      <button
                        key={level}
                        onClick={() => setDifficultyFilter(level)}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all ${
                          difficultyFilter === level 
                            ? 'bg-white dark:bg-slate-800 text-blue-600 shadow-sm' 
                            : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                        }`}
                      >
                        {level.toUpperCase()}
                      </button>
                    ))}
                 </div>
               </div>

               <div className="flex items-center gap-2">
                 <span className="text-[10px] font-black uppercase text-slate-400">Company:</span>
                 <select 
                   value={companyFilter}
                   onChange={(e) => setCompanyFilter(e.target.value)}
                   className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2 text-xs font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer"
                 >
                   <option value="All">ALL COMPANIES</option>
                   {allCompanies.map(company => (
                     <option key={company} value={company}>{company.toUpperCase()}</option>
                   ))}
                 </select>
               </div>
            </div>

            <div className="flex items-center gap-4">
              <UserMenu user={user} onLogin={handleLoginSuccess} onLogout={handleLogout} onError={(msg) => showNotification(msg)} hideLoginButton={true} />
            </div>
          </div>
          
          {/* Mobile/Tablet Filters */}
          <div className="lg:hidden p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
              <span className="text-[9px] font-black uppercase text-slate-500 shrink-0">Difficulty:</span>
              {(['All', 'Beginner', 'Hard'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setDifficultyFilter(level)}
                  className={`px-3 py-1 rounded-lg text-[10px] font-black whitespace-nowrap transition-all ${
                    difficultyFilter === level 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-white dark:bg-slate-900 text-slate-500 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {level.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
              <span className="text-[9px] font-black uppercase text-slate-500 shrink-0">Company:</span>
              <button
                onClick={() => setCompanyFilter('All')}
                className={`px-3 py-1 rounded-lg text-[10px] font-black whitespace-nowrap transition-all ${
                  companyFilter === 'All' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-white dark:bg-slate-900 text-slate-500 border border-slate-200 dark:border-slate-800'
                }`}
              >
                ALL
              </button>
              {allCompanies.map(company => (
                <button
                  key={company}
                  onClick={() => setCompanyFilter(company)}
                  className={`px-3 py-1 rounded-lg text-[10px] font-black whitespace-nowrap transition-all ${
                    companyFilter === company 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-white dark:bg-slate-900 text-slate-500 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {company.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <div className="flex-1 max-w-7xl mx-auto w-full p-6 space-y-12">
          {Object.entries(groupedChallenges).length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <div className="w-20 h-20 bg-slate-100 dark:bg-slate-900 rounded-3xl flex items-center justify-center mb-6 text-slate-400">
                <PuzzleIcon />
              </div>
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter">No challenges found</h3>
              <p className="text-slate-500 font-medium">Try adjusting your filters to see more problems.</p>
              <button 
                onClick={() => { setDifficultyFilter('All'); setCompanyFilter('All'); }}
                className="mt-8 px-6 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl active:scale-95"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            Object.entries(groupedChallenges).map(([company, challenges]) => (
              <section key={company} className="space-y-8">
                <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                  <div className={`w-3 h-3 rounded-full shadow-lg ${company === 'General Practice' ? 'bg-blue-600' : 'bg-indigo-500'}`}></div>
                  <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-800 dark:text-slate-100">
                    {company} <span className="text-slate-400 font-medium">Problems</span>
                  </h2>
                  <span className="ml-auto text-xs font-bold bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-500">
                    {challenges.length} Challenges
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {challenges.map(challenge => {
                    const companyName = (challenge as any).company;
                    const challengeLang = LANGUAGES.find(l => l.id === challenge.language);
                    const getCompanyColor = (c: string) => {
                      switch(c) {
                        case 'TCS': return 'bg-orange-500';
                        case 'Zoho': return 'bg-orange-600';
                        case 'Google': return 'bg-rose-500';
                        case 'Microsoft': return 'bg-blue-500';
                        case 'Amazon': return 'bg-amber-500';
                        case 'Meta': return 'bg-blue-600';
                        case 'Nvidia': return 'bg-emerald-600';
                        case 'Stripe': return 'bg-indigo-600';
                        default: return 'bg-blue-600';
                      }
                    };

                    return (
                      <div key={challenge.id} className={`bg-white dark:bg-slate-900 rounded-2xl p-6 border transition-all shadow-sm hover:shadow-lg hover:-translate-y-1 relative overflow-visible ${companyName ? 'border-slate-100 dark:border-slate-800' : 'border-slate-200 dark:border-slate-800'} hover:border-blue-500 dark:hover:border-blue-500`}>
                        {companyName && (
                          <div className={`absolute top-0 right-0 text-white text-[9px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-widest shadow-lg z-10 ${getCompanyColor(companyName)}`}>
                            {companyName}
                          </div>
                        )}
                        <div className="flex justify-between items-start mb-4">
                           <h3 className="text-lg font-bold pr-12">{challenge.title}</h3>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${challenge.level === 'Beginner' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20' : 'bg-rose-50 text-rose-600 dark:bg-rose-900/20'}`}>
                            {challenge.level}
                          </span>
                          {companyName && (
                             <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-blue-50 text-blue-600 dark:bg-blue-900/20">
                               Corporate
                             </span>
                          )}
                          {challengeLang && (
                            <div className="flex items-center gap-1.5 ml-auto bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md group/lang relative">
                              <TechIcon icon={challengeLang.icon} name={challengeLang.name} size="sm" />
                              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{challengeLang.name}</span>
                              {/* Language Tooltip */}
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/lang:block z-50">
                                <div className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded shadow-xl whitespace-nowrap">
                                  Default: {challengeLang.name}
                                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-slate-900"></div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        {/* Description with Tooltip */}
                        <div className="relative group/desc mb-6">
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2 cursor-help">
                            {challenge.description}
                          </p>
                          {/* Description Tooltip */}
                          <div className="absolute top-full left-0 w-full mt-2 hidden group-hover/desc:block z-50">
                            <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs p-4 rounded-xl shadow-2xl border border-slate-800 dark:border-slate-200 leading-relaxed min-w-[200px]">
                              {challenge.description}
                              <div className="absolute bottom-full left-4 border-x-8 border-x-transparent border-b-8 border-b-slate-900 dark:border-b-white"></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-3">
                              <select 
                                value={challengeLangs[challenge.id]} 
                                onChange={(e) => setChallengeLangs(prev => ({ ...prev, [challenge.id]: e.target.value }))}
                                className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer"
                              >
                                {LANGUAGES.filter(l => l.type === LanguageType.PROGRAMMING || l.type === LanguageType.MACHINE_LEARNING).map(lang => (
                                  <option key={lang.id} value={lang.id}>{lang.name}</option>
                                ))}
                              </select>
                           </div>
                           <button 
                             onClick={() => {
                               const selectedId = challengeLangs[challenge.id];
                               const lang = LANGUAGES.find(l => l.id === selectedId) || LANGUAGES[0];
                               const startCode = selectedId === challenge.language ? challenge.code : lang.defaultCode;
                               openEditor(lang, startCode);
                             }}
                             className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg active:scale-95"
                           >
                             Solve Challenge
                           </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))
          )}
        </div>
      </div>
    );
  }

  if (view === 'about') {
    return <AboutPage onBack={() => setView('home')} theme={theme} />;
  }

  // IDE View
  return (
    <div className={`flex flex-col h-screen ${theme === 'dark' ? 'bg-slate-950 text-slate-200' : 'bg-slate-50 text-slate-900'} overflow-hidden transition-colors duration-300`}>
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        items={menuItems} 
        onLogoClick={() => setView('about')} 
        user={user}
        onLogin={handleLoginSuccess}
        onLogout={handleLogout}
        intelligenceEnabled={intelligenceEnabled}
        setIntelligenceEnabled={setIntelligenceEnabled}
        hideLoginButton={true}
      />

      <header className={`flex items-center justify-between px-4 md:px-6 py-3 border-b shrink-0 gap-3 ${theme === 'dark' ? 'border-slate-900 bg-[#0a0a0a]' : 'border-slate-200 bg-white shadow-sm'}`}>
        
        <div className="flex items-center space-x-2 md:space-x-6 overflow-hidden">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-500 dark:text-slate-400 shrink-0">
            <MenuIcon />
          </button>
          
          <button onClick={() => setView('home')} className="text-slate-500 hover:text-blue-600 flex items-center space-x-1 md:space-x-2 transition-colors group shrink-0">
            <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            <span className="font-black text-[10px] md:text-xs uppercase tracking-widest">Back</span>
          </button>
          
          <div className="h-5 w-[1px] bg-slate-200 dark:bg-slate-800 shrink-0"></div>
          
          {/* Project Title / File Name */}
          <div className="flex group items-center gap-2 px-1 md:px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-900 cursor-text relative overflow-hidden shrink" onClick={() => setIsEditingName(true)}>
             <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center shrink-0">
                <img src={selectedLang.icon} alt={selectedLang.name} className="w-full h-full object-contain" />
             </div>
             {isEditingName ? (
               <input 
                 ref={nameInputRef}
                 type="text" 
                 value={fileName} 
                 onChange={(e) => setFileName(e.target.value)}
                 onBlur={() => setIsEditingName(false)}
                 onKeyDown={(e) => e.key === 'Enter' && setIsEditingName(false)}
                 className="bg-transparent border-none outline-none text-xs md:text-sm font-bold text-slate-900 dark:text-white w-24 md:w-32 p-0 m-0"
               />
             ) : (
               <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white truncate">{fileName}</span>
             )}
             <div className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
               <PencilIcon />
             </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-6 shrink-0">
          <button 
            onClick={() => setShowMobileIntelligence(!showMobileIntelligence)}
            className={`p-2.5 rounded-full transition-all border group shrink-0 ${showMobileIntelligence ? 'bg-violet-600/15 border-violet-500/50 text-violet-500 shadow-md shadow-violet-500/10' : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 hover:text-violet-500 hover:border-violet-500/30'}`}
            title={showMobileIntelligence ? "Close AI Assistant" : "Open AI Assistant"}
          >
            <SparklesIcon />
          </button>
          <div className="flex items-center gap-1 md:gap-2">
            <button 
              onClick={() => setForceDesktop(!forceDesktop)}
              title={forceDesktop ? "Mobile View" : "Desktop View"}
              className={`p-2 rounded-xl transition-all md:hidden ${forceDesktop ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <MonitorIcon />
            </button>
            <UserMenu user={user} onLogin={handleLoginSuccess} onLogout={handleLogout} hideLoginButton={true} />
            <button 
              onClick={() => setForceDesktop(!forceDesktop)}
              className={`md:hidden p-2 rounded-xl transition-all ${forceDesktop ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              title={forceDesktop ? "Switch to Mobile View" : "Switch to Desktop View"}
            >
              <MonitorIcon />
            </button>
          </div>

          <div className={`flex bg-slate-100 dark:bg-slate-900 rounded-xl p-1 border border-slate-200 dark:border-slate-800 ${forceDesktop ? 'hidden md:flex' : 'flex'}`}>
            <button onClick={() => setViewMode('output')} className={`px-2 md:px-5 py-1.5 md:py-2 rounded-lg text-[10px] md:text-xs font-black transition-all ${viewMode === 'output' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-blue-600'}`}>CODE</button>
            <button onClick={() => setViewMode('preview')} className={`px-2 md:px-5 py-1.5 md:py-2 rounded-lg text-[10px] md:text-xs font-black transition-all ${viewMode === 'preview' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-blue-600'}`}>VIEW</button>
          </div>

          <div className="hidden md:block shrink-0">
            <SaveIndicator status={saveStatus} />
          </div>

          <button onClick={handleRun} disabled={isLoading} className="flex bg-emerald-600 hover:bg-emerald-500 text-white px-4 md:px-8 py-2.5 rounded-xl text-sm font-black tracking-widest transition-all disabled:opacity-50 items-center space-x-3 shadow-xl active:scale-95">
            {isLoading ? <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span> : <span>RUN</span>}
          </button>
        </div>
      </header>

        <div className="flex flex-1 overflow-hidden relative">
          <aside className="hidden md:flex w-16 border-r border-slate-200 dark:border-slate-900 flex-col items-center py-8 space-y-8 shrink-0 overflow-y-auto custom-scrollbar bg-white dark:bg-[#0a0a0a]">
            {LANGUAGES.filter(l => l.isPopular).map(lang => (
              <button 
                key={lang.id} 
                onClick={() => openEditor(lang)} 
                title={lang.name}
                className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all shrink-0 ${selectedLang.id === lang.id ? 'bg-blue-600 border-2 border-blue-400 scale-125 shadow-xl rotate-6' : 'opacity-30 hover:opacity-100 hover:scale-110'}`}
              >
                <TechIcon icon={lang.icon} name={lang.name} size="sm" />
              </button>
            ))}
          </aside>

          <main className={`flex-1 flex min-w-0 bg-white dark:bg-[#050505] overflow-hidden ${forceDesktop ? 'flex-row' : 'flex-col md:flex-row'}`}>
            <div className={`flex-1 relative border-r border-slate-200 dark:border-slate-900 flex flex-col min-w-0 ${forceDesktop || viewMode === 'output' ? 'flex' : 'hidden md:flex'}`}>
              <div className="flex-1 relative">
                <Editor
                  height="100%"
                  theme={theme === 'dark' ? 'vs-dark' : 'light'}
                  language={selectedLang.monaco}
                  value={code}
                  onChange={(v) => setCode(v || '')}
                  options={{ 
                    fontSize: 16, 
                    fontFamily: 'Fira Code', 
                    minimap: { enabled: false }, 
                    padding: { top: 20 }, 
                    smoothScrolling: true, 
                    cursorBlinking: 'smooth', 
                    renderLineHighlight: 'all', 
                    automaticLayout: true,
                    lineNumbersMinChars: 3,
                    quickSuggestions: intelligenceEnabled,
                    suggestOnTriggerCharacters: intelligenceEnabled,
                    parameterHints: { enabled: intelligenceEnabled },
                    tabCompletion: intelligenceEnabled ? 'on' : 'off'
                  }}
                />
              </div>
            </div>

            <div 
              className={`flex flex-col shadow-2xl shrink-0 bg-white dark:bg-[#050505] transition-all duration-75 ease-out relative 
                ${forceDesktop ? 'w-1/2 h-full' : (viewMode === 'preview' ? 'flex-1 w-full h-full' : (isTerminalCollapsed ? 'h-10 md:w-10 md:h-full' : 'h-1/3 md:w-1/2 md:h-full'))}
                ${!forceDesktop && viewMode !== 'preview' ? 'hidden md:flex' : 'flex'}
              `}
            >
              <div 
                className={`flex items-center justify-between px-4 py-2 border-b border-slate-200 dark:border-slate-900 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors group select-none shrink-0 ${viewMode === 'preview' ? 'hidden' : 'flex'}`}
                onClick={() => setIsTerminalCollapsed(!isTerminalCollapsed)}
              >
                <div className="flex items-center space-x-2">
                   <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Terminal Output</span>
                </div>
                <button className="text-slate-400 hover:text-blue-600 transition-colors">
                  {isTerminalCollapsed ? <ChevronUpIcon className="w-4 h-4 md:-rotate-90" /> : <ChevronDownIcon className="w-4 h-4 md:-rotate-90" />}
                </button>
              </div>

              {!isTerminalCollapsed && (
                <div className="flex-1 overflow-auto p-6 font-mono text-sm leading-relaxed custom-scrollbar">
                  {viewMode === 'output' ? (
                    <div className="whitespace-pre-wrap">
                      {isLoading ? (
                        <div className="flex items-center space-x-3 text-blue-600">
                          <span className="animate-pulse">Synthesizing high-speed execution...</span>
                        </div>
                      ) : result?.output ? (
                        <DataOutput text={result.output} error={result.error} />
                      ) : (
                        <span className="text-slate-400">Environment ready. Press RUN to start execution.</span>
                      )}
                    </div>
                  ) : (
                    <div className="w-full h-full">
                      {debugSession ? (
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-between mb-4 shrink-0">
                               <h3 className="text-xs font-black uppercase tracking-widest text-emerald-600">Debug Vision Analysis</h3>
                               <div className="flex space-x-2">
                                  <button onClick={() => { setCode(debugSession.original); setDebugSession(null); setViewMode('output'); }} className="px-3 py-1 bg-rose-600 text-white text-[10px] font-bold uppercase rounded hover:bg-rose-500">Undo Fix</button>
                                  <button onClick={() => { setDebugSession(null); setViewMode('output'); }} className="px-3 py-1 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase rounded hover:bg-slate-300 dark:hover:bg-slate-700">Clear</button>
                               </div>
                            </div>
                            <div className="flex-1 flex flex-col gap-4 overflow-hidden">
                               <div className="flex flex-col overflow-hidden border border-rose-200 dark:border-rose-900/30 rounded-lg bg-rose-50/50 dark:bg-rose-900/10 h-1/2">
                                  <div className="px-3 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-600 text-[10px] font-bold uppercase">Original Error</div>
                                  <pre className="p-3 overflow-auto text-xs text-rose-600/80 font-mono flex-1">{debugSession.original}</pre>
                               </div>
                               <div className="flex flex-col overflow-hidden border border-emerald-200 dark:border-emerald-900/30 rounded-lg bg-emerald-50/50 dark:bg-emerald-900/10 h-1/2">
                                  <div className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 text-[10px] font-bold uppercase">Corrected Code</div>
                                  <pre className="p-3 overflow-auto text-xs text-emerald-600/80 font-mono flex-1">{debugSession.fixed}</pre>
                               </div>
                            </div>
                        </div>
                      ) : (
                        <iframe 
                          className="w-full h-full bg-white rounded-2xl shadow-2xl border border-slate-200" 
                          srcDoc={
                            selectedLang.id === 'react'
                              ? getReactPreviewDoc(code, false)
                              : selectedLang.id === 'nextjs'
                              ? getReactPreviewDoc(code, true)
                              : selectedLang.id === 'nodejs_web' || selectedLang.id === 'nodejs'
                              ? getNodePreviewDoc(code)
                              : selectedLang.type === LanguageType.WEB || selectedLang.id === 'html' || selectedLang.id === 'css'
                              ? code
                              : `<html><body style="font-family: sans-serif; padding: 40px; background: white;"><h3 style="color:#2563eb">Execution Frame</h3><pre style="background: #f8fafc; padding: 20px; border-radius: 12px; font-size: 16px; border: 1px solid #e2e8f0;">${result?.output || 'Execution result will appear here.'}</pre></body></html>`
                          } 
                        />
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </main>

          {renderIntelligencePanel()}
         {!forceDesktop && (
           <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
             <div className="flex bg-slate-900/90 backdrop-blur-md rounded-2xl p-1.5 border border-slate-800 shadow-2xl">
               <button 
                 onClick={() => setViewMode('output')} 
                 className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all ${viewMode === 'output' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'text-slate-400 hover:text-white'}`}
               >
                 CODE
               </button>
               <button 
                 onClick={() => setViewMode('preview')} 
                 className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all ${viewMode === 'preview' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'text-slate-400 hover:text-white'}`}
               >
                 VIEW
               </button>
             </div>
           </div>
         )}
      </div>
    </div>
  );
};

export default App;