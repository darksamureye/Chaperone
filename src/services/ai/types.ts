export interface AIResponse {
  text: string;
  confidence?: number;
  metadata?: Record<string, unknown>;
}

export interface AIError {
  code: string;
  message: string;
  details?: unknown;
}