import React from "react";

interface InfoCardProps {
  title: string;
  children?: React.ReactNode;
  variant?: "primary" | "default";
}

export default function InfoCard({ title, children, variant = "primary" }: InfoCardProps) {
  return (
    <div className={`rounded-xl p-6 ${variant === "primary" ? "bg-primary text-on-primary" : "bg-surface-container-lowest"} shadow-sm`}>
      <h3 className="font-headline-sm text-headline-sm mb-2">{title}</h3>
      <div className={variant === "primary" ? "text-on-primary/90" : "text-on-surface-variant"}>{children}</div>
    </div>
  );
}
