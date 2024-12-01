export interface AudioSegment {
  id: string;
  url: string;
  timestamp: number;
  duration: number;
  childId: string;
  transcript?: string;
}

export interface Child {
  id: string;
  name: string;
  parentId: string;
}

export interface User {
  id: string;
  email: string;
  role: 'parent' | 'guardian';
  name: string;
}