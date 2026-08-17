const GlassCard = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`bg-glass rounded-2xl p-6 border border-glass-border backdrop-blur-md shadow-lg hover:bg-glass-hover transition-colors ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
