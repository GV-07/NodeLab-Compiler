import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { FormInput } from './FormInput';

interface ForgotPasswordFormProps {
  initialEmail: string;
  onBack: () => void;
}

export const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  initialEmail,
  onBack,
}) => {
  const [email, setEmail] = useState(initialEmail);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validate = (): boolean => {
    setError('');
    if (!email.trim()) {
      setError('Email address is required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    // Simulate sending recovery mail link
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="w-full flex flex-col"
    >
      {isSent ? (
        <div className="space-y-5 text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckCircle2 size={24} />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-xl font-bold text-white">Reset Link Dispatched</h3>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
              We have sent a security recovery password link to <strong className="text-slate-200">{email}</strong>. 
              Please check your inbox or spam folders.
            </p>
          </div>
          <button
            type="button"
            onClick={onBack}
            className="w-full py-3 px-4 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-750 rounded-xl transition-all"
          >
            Back to Sign In
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5 text-center">
            <h2 className="text-2xl font-extrabold text-white tracking-tight leading-none">
              Reset Password
            </h2>
            <p className="text-sm text-slate-400">
              Provide your account email to receive your secure reset links
            </p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-start gap-2.5 text-rose-400 text-xs font-semibold leading-relaxed"
            >
              <AlertCircle size={16} className="shrink-0 mt-0.5" />
              <span>{error}</span>
            </motion.div>
          )}

          <div className="space-y-3">
            <FormInput
              id="forgot-email"
              label="Email Address"
              type="email"
              icon={Mail}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all disabled:opacity-50"
          >
            {isLoading ? 'Sending reset link...' : 'Send Recovery Email'}
          </button>

          <button
            type="button"
            onClick={onBack}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors focus:outline-hidden"
          >
            <ArrowLeft size={12} />
            <span>Return to Sign In</span>
          </button>
        </form>
      )}
    </motion.div>
  );
};
