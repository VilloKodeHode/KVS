export const InputWithLabel = ({ name, type, placeholder, value, children, onChange }) => {
  
  const InputComponent = type === `textarea` ? `textarea` : `input`;
  return (
    <div className="mb-4 w-full">
      <label
        htmlFor={name}
        className={`block font-bold mb-2 text-Villo-light-black"`}
      >
        {children}
      </label>
      <InputComponent
        type={type === `textarea` ? undefined : type}
        name={name}
        className={`text-KVS-white bg-KVS-primary border-KVS-black border-2 focus:border-KVS-secondary focus:outline-KVS-primary w-full px-4 py-2 rounded-lg focus:outline `}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        rows={type === `textarea` ? 4 : undefined}
      />
    </div>
  );
};
