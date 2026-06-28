import React, { useState } from 'react';
import { LucideIcon, Eye, EyeOff } from 'lucide-react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  icon?: LucideIcon;
  isPassword?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  icon: Icon,
  isPassword = false,
  type = 'text',
  className = '',
  disabled,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="space-y-1.5 w-full">
      <label htmlFor={id} className="block text-xs font-semibold text-slate-400">
        {label}
      </label>
      <div className="relative rounded-xl shadow-xs">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
            <Icon size={16} />
          </div>
        )}
        <input
          id={id}
          type={inputType}
          disabled={disabled}
          className={`block w-full rounded-xl border border-slate-800 bg-slate-900/60 py-2.5 ${
            Icon ? 'pl-10' : 'px-3.5'
          } ${
            isPassword ? 'pr-10' : 'pr-3.5'
          } text-sm text-slate-200 placeholder-slate-550 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 focus:outline-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-all ${className}`}
          {...props}
        />
        {isPassword && !disabled && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-550 hover:text-slate-400 focus:outline-hidden"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
    </div>
  );
};
