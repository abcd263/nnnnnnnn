import React from 'react';

const Badge = ({ children, className, variant = 'default' }) => {
  const baseStyles = 'inline-flex items-center px-2 py-1 rounded text-sm font-medium';
  const variantStyles = {
    default: 'bg-gray-200 text-gray-800',
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-green-500 text-white',
    danger: 'bg-red-500 text-white',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;