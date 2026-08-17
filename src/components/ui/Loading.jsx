const Loading = ({ className = '', ...props }) => {
  return (
    <div
      className={`text-text-secondary text-sm text-center py-8 min-h-32 flex justify-center items-center ${className}`}
      {...props}
    >
      <span className="h-4 w-4 border-2 border-glass-border rounded-full border-t-text-primary border-b-text-primary animate-spin mr-2" />
      Loading...
    </div>
  );
};

export default Loading;
