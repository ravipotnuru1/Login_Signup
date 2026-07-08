import { useState } from "react";

function PasswordInput({ value, onChange, placeholder }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
    <input
  type={show ? "text" : "password"}
  value={value}
  onChange={onChange}
  placeholder={placeholder}
  className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-16"
/>
      <button
        type="button"
        className="absolute right-3 top-3 text-sm"
        onClick={() => setShow(!show)}
      >
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default PasswordInput;