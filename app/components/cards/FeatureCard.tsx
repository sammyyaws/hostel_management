import React from "react";

interface FeatureCardProps {
  title: string;
  description?: string;
  icon?: string;
}

export default function FeatureCard({ title, description, icon = "check_circle" }: FeatureCardProps) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 shadow-sm flex flex-col md:flex-row gap-4 items-start">
      <div className="text-primary">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <div>
        <h4 className="font-headline-sm text-headline-sm mb-1">{title}</h4>
        {description && <p className="font-body-sm text-body-sm text-on-surface-variant">{description}</p>}
      </div>
    </div>
  );
}
