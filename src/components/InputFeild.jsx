function InputField({
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border p-3 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
    />
  );
}

export default InputField;