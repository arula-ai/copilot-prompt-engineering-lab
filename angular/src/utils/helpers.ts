// Utility functions for the lab exercises

export function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
