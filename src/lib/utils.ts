import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Build the entry URL for the application from environment configuration.
 * - NEXT_PUBLIC_APP_ORIGIN: base origin for the app (e.g., https://app.trustcollab.xyz or http://localhost:3001)
 * - NEXT_PUBLIC_APP_ENTRY_PATH: path to land on in the app (e.g., '/', '/dashboard', '/auth/login?next=/dashboard')
 */
export function getAppEntryUrl(): string {
  const origin = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.trustcollab.xyz'
  const path = process.env.NEXT_PUBLIC_APP_ENTRY_PATH || '/'
  if (!origin) return path
  const needsSlash = !origin.endsWith('/') && !path.startsWith('/')
  return `${origin}${needsSlash ? '/' : ''}${path}`
}
