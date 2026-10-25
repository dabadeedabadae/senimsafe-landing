import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'SenimSafe — ближе, даже на расстоянии', description: 'Положение GPS-трекера, маршруты и события в одном приложении для родителей и близких. Узнайте, как подключить SenimSafe.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ru"><body>{children}</body></html>; }
