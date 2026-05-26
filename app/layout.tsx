import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yasharth Skills Cloud',
  description: 'Interactive skill cloud of my technical skills and tools.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
