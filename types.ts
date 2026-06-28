export enum LanguageType {
  PROGRAMMING = 'programming',
  WEB = 'web',
  DATABASE = 'databases',
  MACHINE_LEARNING = 'ml',
  POPULAR = 'popular'
}

export interface Language {
  id: string;
  name: string;
  icon: string;
  type: LanguageType;
  extension: string;
  monaco: string;
  defaultCode: string;
  isPopular?: boolean;
}

export interface ExecutionResult {
  output: string;
  error?: string;
  explanation?: string;
  timestamp: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  picture: string;
}
