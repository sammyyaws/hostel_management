import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-full flex flex-col bg-surface text-on-surface">
      {children}
    </main>
  );
}
