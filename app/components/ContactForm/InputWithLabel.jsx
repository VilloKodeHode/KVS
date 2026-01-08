export const InputWithLabel = ({
  name,
  type,
  placeholder,
  value,
  children,
  onChange,
}) => {
  const InputComponent = type === `textarea` ? `textarea` : `input`;
  return (
    <div className="mb-4 w-full">
      <label
        htmlFor={name}
        className="block font-medium mb-2 text-gray-200 ml-1">
        {children}
      </label>
      <InputComponent
        type={type === `textarea` ? undefined : type}
        name={name}
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-KVS-secondary/50 focus:ring-1 focus:ring-KVS-secondary/50 transition-all duration-200"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        rows={type === `textarea` ? 5 : undefined}
      />
    </div>
  );
};
