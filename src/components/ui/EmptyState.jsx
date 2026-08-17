const EmptyState = ({ children, className = '', ...props }) => {
  return (
    <div
      className={` min-h-40 text-center text-text-secondary text-sm py-8 bg-glass rounded-xl border border-glass-border transition-colors ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default EmptyState;
