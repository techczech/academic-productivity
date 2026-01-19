export type Category = 
  | 'Hardware' 
  | 'Software' 
  | 'eReader' 
  | 'Note-taking' 
  | 'PDF Reader' 
  | 'Reference Manager' 
  | 'Accessibility';

export type StrategyType = 
  | 'Listen' 
  | 'Enlarge' 
  | 'Outline' 
  | 'Dictate';

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: Category;
  cost: string;
  pros: string[];
  cons: string[];
  relatedStrategies: StrategyType[];
  imagePlaceholder?: string; // Just for visual structure in this demo
}

export interface Strategy {
  id: StrategyType;
  title: string;
  shortDescription: string;
  fullDescription: string;
  actionItems: string[];
  iconName: string;
}
