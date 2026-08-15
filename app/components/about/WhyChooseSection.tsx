import React from "react";
import { FaBed, FaShieldAlt, FaBook, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: FaBed,
    title: "Modern Living",
    description:
      "Thoughtfully designed rooms balancing privacy with comfort.",
    variant: "default",
    span: "",
  },
  {
    icon: FaShieldAlt,
    title: "Secure Environment",
    description:
      "24/7 security, biometric access, and comprehensive surveillance ensuring peace of mind for residents and parents alike.",
    variant: "primary",
    span: "md:col-span-2",
  },
  {
    icon: FaBook,
    title: "Academic Focus",
    description:
      "Dedicated quiet study zones, high-speed connectivity, and an atmosphere that respects academic dedication.",
    variant: "secondary",
    span: "md:col-span-2",
  },
  {
    icon: FaUsers,
    title: "Vibrant Community",
    description:
      "Engaging common areas and organized events to build lasting connections.",
    variant: "default",
    span: "",
  },
];

function WhyChooseCard({
  icon: Icon,
  title,
  description,
  variant,
  span,
}: (typeof features)[number]) {
  const styles = {
    default: {
      container:
        "bg-surface border border-outline-variant text-on-surface",
      icon: "text-primary",
      description: "text-on-surface-variant",
    },
    primary: {
      container: "bg-primary text-on-primary",
      icon: "text-on-primary",
      description: "text-on-primary/90",
    },
    secondary: {
      container:
        "bg-secondary-container text-on-secondary-container",
      icon: "text-on-secondary-container",
      description: "text-on-secondary-container/90",
    },
  };

  const style = styles[variant as keyof typeof styles];

  return (
    <div
      className={`${style.container} ${span} rounded-xl p-6 shadow-sm flex flex-col gap-4 items-start`}
    >
      <Icon className={`${style.icon} text-3xl`} />

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className={`text-sm ${style.description}`}>
        {description}
      </p>
    </div>
  );
}

export default function WhyChooseSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-container-padding py-16 bg-surface-container-low">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-headline-md text-headline-md text-primary text-center mb-12">
          Why Choose TYB
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <WhyChooseCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}