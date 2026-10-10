import './globals.css';
import { Inter } from 'next/font/google';
import ChatwootWidget from '@/components/ChatwootWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Automation Platform',
  description: 'A startup-ready automation platform with Framer Motion and Chatwoot support.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ChatwootWidget />
      </body>
    </html>
  );
}
