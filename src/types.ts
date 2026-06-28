export type PhotoStyle = 'rustic' | 'bright' | 'social';

export interface Dish {
  id: string;
  name: string;
  description: string;
  generatedImageUrl?: string;
}

export interface MenuData {
  restaurantName: string;
  dishes: Dish[];
}

export interface PasswordStrength {
  score: number;
  feedback: string[];
  label: 'Weak' | 'Fair' | 'Good' | 'Strong';
  color: string;
}
