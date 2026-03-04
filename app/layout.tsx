import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adstera | Performance Marketing',
  description:
    'Adstera helps advertisers grow with clean acquisition, strict quality control and predictable results.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
