import React from 'react';

export function Input({ type = 'text', placeholder, value, onChange, required = false }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-rose-500"
    />
  );
}