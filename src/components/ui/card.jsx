import React from "react";

export function Card({ children, className, ...props }) {
  return (
    <div className={`rounded-lg shadow-md bg-white p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }) {
  return (
    <div className={`border-b pb-2 mb-2 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className, ...props }) {
  return (
    <h3 className={`text-lg font-bold ${className}`} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className, ...props }) {
  return (
    <p className={`text-sm text-gray-600 ${className}`} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={`mt-2 ${className}`} {...props}>
      {children}
    </div>
  );
}