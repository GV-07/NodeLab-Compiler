import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, LogIn, Sparkles, AlertCircle } from 'lucide-react';
import { FormInput } from './FormInput';

interface LoginFormProps {
  onSuccess: (email: string, name: string, emoji: string, color: string) => void;
  onSwitchToRegister: () => void;
  onSwitchToForgotPassword: (email: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSuccess,
  onSwitchToRegister,
  onSwitchToForgotPassword,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Pre-seed a default account in localStorage so they don't have to register first
  useEffect(() => {
    const mockUsers = JSON.parse(localStorage.getItem('mock_users') || '[]');
    const hasDefault = mockUsers.some((u: any) => u.email === 'guest@nodelab.com');
    if (!hasDefault) {
      mockUsers.push({
        fullName: 'NodeLab Guest',
        email: 'guest@nodelab.com',
        password: 'password123',
        avatarEmoji: '⚡️',
        avatarColor: 'bg-amber-500',
        signupDate: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      });
      localStorage.setItem('mock_users', JSON.stringify(mockUsers));
    }
  }, []);

  const validate = (): boolean => {
    setError('');
    if (!email) {
      setError('Email address is required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!password) {
      setError('Password is required');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    // Simulate network authentication lookup delay
    setTimeout(() => {
      const mockUsers = JSON.parse(localStorage.getItem('mock_users') || '[]');
      const user = mockUsers.find(
        (u: any) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
      );

      setIsLoading(false);

      if (user) {
        onSuccess(user.email, user.fullName, user.avatarEmoji || '🚀', user.avatarColor || 'bg-indigo-500');
      } else {
        // Double check if email exists at all to provide friendly contextual error
        const emailExists = mockUsers.some((u: any) => u.email.toLowerCase() === email.toLowerCase());
        if (emailExists) {
          setError('Invalid password. Please try again.');
        } else {
          setError('No account found with this email. Create one below!');
        }
      }
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="w-full flex flex-col"
      id="login-card"
    >
      <form onSubmit={handleSubmit} className="space-y-5" id="login-form">
        <div className="space-y-1.5 text-center" id="login-header-text">
          <h2 className="text-3xl font-extrabold text-white tracking-tight leading-none flex items-center justify-center gap-2">
            <span>Welcome back</span>
            <Sparkles size={20} className="text-amber-400 animate-pulse" />
          </h2>
          <p className="text-sm text-slate-400">
            Sign in to access your coding workspaces and assessments
          </p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-3.5 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-start gap-2.5 text-rose-400 text-xs font-semibold leading-relaxed"
            id="login-alert-container"
          >
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            <span id="login-alert-text">{error}</span>
          </motion.div>
        )}

        <div className="space-y-3.5" id="login-inputs">
          <FormInput
            id="login-email"
            label="Email Address"
            type="email"
            icon={Mail}
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />

          <div className="space-y-1.5" id="login-password-container">
            <div className="flex justify-between items-center" id="login-pwd-label-container">
              {/* Reset link helper */}
              <button
                type="button"
                id="login-forgot-pwd-link"
                onClick={() => onSwitchToForgotPassword(email)}
                className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold transition-colors ml-auto focus:outline-hidden"
              >
                Forgot Password?
              </button>
            </div>
            <FormInput
              id="login-password"
              label="Password"
              isPassword
              icon={Lock}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>
        </div>

        <button
          type="submit"
          id="login-submit-btn"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all duration-200 active:scale-[0.98] focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 shadow-lg shadow-indigo-600/20 disabled:opacity-50 disabled:pointer-events-none group mt-1"
        >
          {isLoading ? (
            <span className="flex items-center gap-2" id="login-loading-spinner">
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Authenticating session...
            </span>
          ) : (
            <>
              <span>Sign In</span>
              <LogIn size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </>
          )}
        </button>

        {/* Guest credentials helper notice */}
        <div className="p-3 bg-slate-900/30 border border-slate-800/40 rounded-xl text-[11px] text-slate-400 text-center leading-relaxed" id="guest-credential-tip">
          Demo Credential: <strong className="text-slate-200">guest@nodelab.com</strong> / password: <strong className="text-slate-200">password123</strong>
        </div>

        <div className="text-center pt-1" id="login-footer-text">
          <p className="text-xs text-slate-400">
            Don't have an account yet?{' '}
            <button
              type="button"
              id="login-signup-link"
              onClick={onSwitchToRegister}
              className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors focus:outline-hidden"
            >
              Sign Up For Free
            </button>
          </p>
        </div>
      </form>
    </motion.div>
  );
};
