import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  children: React.ReactNode;
}

export function Button({ variant = 'default', className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded font-semibold transition-all duration-200';
  
  const variantStyles = {
    default: 'bg-primary text-white hover:bg-primary/90',
    outline: 'border border-border text-foreground hover:bg-muted',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    />
  );
}
