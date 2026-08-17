const Badge = ({ children, className = '', ...props }) => {
  return (
    <span
      className={`bg-surface border border-glass-border rounded-full px-3 py-1 text-xs text-text-primary font-medium inline-flex items-center transition-colors hover:bg-glass-hover disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
