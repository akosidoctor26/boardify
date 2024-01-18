import { type ClassValue, clsx } from 'clsx'; // A tiny (239B) utility for constructing className strings conditionally.
import { twMerge } from 'tailwind-merge'; // Utility function to efficiently merge Tailwind CSS classes in JS without style conflicts.

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
