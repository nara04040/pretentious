'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';

interface ClientLayoutProps {
  children: React.ReactNode;
  geistSans: string;
  geistMono: string;
}

export default function ClientLayout({ children, geistSans, geistMono }: ClientLayoutProps) {
  return (
    <body
      className={`${geistSans} ${geistMono} antialiased bg-white text-gray-900 transition-colors dark:bg-gray-900 dark:text-gray-100`}
    >
      <ThemeProvider>
        <ThemeToggle />
        {children}
      </ThemeProvider>
    </body>
  );
} 