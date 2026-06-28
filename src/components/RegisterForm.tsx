import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Lock, Sparkles, AlertCircle, ArrowLeft } from 'lucide-react';
import { FormInput } from './FormInput';

interface RegisterFormProps {
  onSuccess: (email: string, name: string, emoji: string, color: string) => void;
  onSwitchToLogin: () => void;
}

const EMOJIS = ['💻', '🚀', '🧠', '🧙‍♂️', '👾', '🔥', '🎨', '🦁', '🦉', '🐍', '⚡️', '🌟'];
const COLORS = [
  'bg-indigo-500',
  'bg-blue-500',
  'bg-teal-500',
  'bg-emerald-500',
  'bg-amber-500',
  'bg-rose-500',
  'bg-violet-500',
  'bg-pink-500',
];

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess, onSwitchToLogin }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('💻');
  const [selectedColor, setSelectedColor] = useState('bg-indigo-500');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validate = (): boolean => {
    setError('');
    if (!fullName.trim()) {
      setError('Full Name is required');
      return false;
    }
    if (!email.trim()) {
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
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    setTimeout(() => {
      const mockUsers = JSON.parse(localStorage.getItem('mock_users') || '[]');
      const emailExists = mockUsers.some(
        (u: any) => u.email.toLowerCase() === email.toLowerCase()
      );

      if (emailExists) {
        setError('An account with this email already exists.');
        setIsLoading(false);
        return;
      }

      const newUser = {
        fullName: fullName.trim(),
        email: email.trim(),
        password: password,
        avatarEmoji: selectedEmoji,
        avatarColor: selectedColor,
        signupDate: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      };

      mockUsers.push(newUser);
      localStorage.setItem('mock_users', JSON.stringify(mockUsers));
      setIsLoading(false);
      onSuccess(newUser.email, newUser.fullName, newUser.avatarEmoji, newUser.avatarColor);
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="w-full flex flex-col"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5 text-center">
          <h2 className="text-3xl font-extrabold text-white tracking-tight leading-none flex items-center justify-center gap-2">
            <span>Create account</span>
            <Sparkles size={20} className="text-indigo-400" />
          </h2>
          <p className="text-sm text-slate-400">Join NodeLab to start learning and tracking credentials</p>
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
            id="register-name"
            label="Full Name"
            icon={User}
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={isLoading}
          />

          <FormInput
            id="register-email"
            label="Email Address"
            type="email"
            icon={Mail}
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />

          <FormInput
            id="register-password"
            label="Password (min. 6 characters)"
            isPassword
            icon={Lock}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />

          {/* Avatar customizer built directly in */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-400">Choose Profile Identity</label>
            <div className="flex gap-3 items-center p-3 bg-slate-900/40 border border-slate-800 rounded-xl">
              <div className={`w-11 h-11 rounded-full ${selectedColor} flex items-center justify-center text-xl shadow-inner shrink-0`}>
                {selectedEmoji}
              </div>
              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                  {EMOJIS.map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setSelectedEmoji(emoji)}
                      className={`text-sm p-1 rounded-md transition-all hover:bg-slate-800 ${
                        selectedEmoji === emoji ? 'bg-slate-800 ring-1 ring-indigo-500 scale-110' : 'opacity-80'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
                <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                  {COLORS.map((col) => (
                    <button
                      key={col}
                      type="button"
                      onClick={() => setSelectedColor(col)}
                      className={`w-3.5 h-3.5 rounded-full transition-all ${col} ${
                        selectedColor === col ? 'ring-2 ring-white scale-110' : 'opacity-85 hover:scale-105'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all duration-200 active:scale-[0.98] focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 shadow-lg shadow-indigo-600/20 disabled:opacity-50 disabled:pointer-events-none group"
        >
          {isLoading ? 'Creating account...' : 'Sign Up'}
        </button>

        <div className="text-center">
          <p className="text-xs text-slate-400">
            Already have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors focus:outline-hidden"
            >
              Sign In Instead
            </button>
          </p>
        </div>
      </form>
    </motion.div>
  );
};
