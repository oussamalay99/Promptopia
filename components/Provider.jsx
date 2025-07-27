"use client";
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '@node_modules/next-themes/dist';

const Provider = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </SessionProvider>
  )
}

export default Provider