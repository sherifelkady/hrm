import './globals.css';
import type { Metadata } from 'next';
import { Tajawal } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const tajawal = Tajawal({ 
  subsets: ['arabic', 'latin'],
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal'
});

export const metadata: Metadata = {
  title: 'نظام إدارة الموارد البشرية',
  description: 'نظام شامل لإدارة الموارد البشرية',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${tajawal.variable} font-tajawal antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}