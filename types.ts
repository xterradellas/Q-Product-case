export interface CaseSection {
  id: string;
  title: string;
  description: string;
}

export interface Metric {
  label: string;
  value: string;
  description: string;
  trend?: 'up' | 'down' | 'neutral';
}

export enum ViewState {
  CONTEXT = 'context',
  PROBLEM_1 = 'problem-1',
  PROBLEM_2 = 'problem-2',
  PROFILE = 'profile',
}
