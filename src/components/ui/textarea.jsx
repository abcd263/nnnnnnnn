import React from 'react';

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={`border rounded-md p-2 resize-none ${className}`}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';

export { Textarea };