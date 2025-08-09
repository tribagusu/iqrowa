import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "bordered" | "glass";
  hover?: boolean;
  onClick?: () => void;
}

const cardVariants: Record<NonNullable<CardProps["variant"]>, string> = {
  default: "bg-white border border-gray-200 shadow-sm",
  elevated: "bg-white shadow-lg border-0",
  bordered: "bg-white border-2 border-gray-200 shadow-none",
  glass: "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl",
};

export default function Card({
  children,
  className = "",
  variant = "default",
  hover = false,
  onClick,
}: CardProps) {
  const baseClasses = `rounded-xl p-6 ${cardVariants[variant]}`;
  const hoverClasses = hover
    ? "transition-all duration-300 hover:shadow-lg"
    : "";
  const clickableClasses = onClick ? "cursor-pointer" : "";

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`text-xl font-semibold text-gray-900 ${className}`}>
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`text-gray-600 mt-2 ${className}`}>{children}</p>;
}

export function CardContent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`${className}`}>{children}</div>;
}

export function CardFooter({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mt-6 pt-4 border-t border-gray-200 ${className}`}>
      {children}
    </div>
  );
}
