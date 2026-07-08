import { useState } from "react";

function PasswordInput({ value, onChange, placeholder }) {
  const [show, setShow] = useState(false);

  return (
    <div className="auth-password-wrap">
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="auth-input"
      />

      <button
        type="button"
        className="auth-toggle-btn"
        onClick={() => setShow(!show)}
      >
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default PasswordInput;