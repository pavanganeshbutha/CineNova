const variantStyles = {
  primary: 'bg-primary text-text-primary hover:bg-secondary',
  secondary: 'bg-glass text-text-primary hover:bg-glass-hover',
  ghost: 'bg-transparent text-text-primary hover:bg-glass',
  danger: 'bg-error text-text-primary hover:bg-error/80',
};

const sizeStyles = {
  small: 'px-3 py-1.5 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}) => {
  return (
    <button
      className={`rounded-lg ${variantStyles[variant]} ${sizeStyles[size]} px-4 py-2 font-body font-medium  transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-primary ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
