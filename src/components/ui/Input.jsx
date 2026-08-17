const Input = ({
  value,
  type = 'text',
  onChange,
  placeHolder,
  name,
  id = name,
  label,
  className = '',
  ...props
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-medium text-text-primary"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        name={name}
        id={id}
        aria-label={label}
        className={`bg-glass border border-glass-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-glass-border-hover transition-colors disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-glass-hover ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
