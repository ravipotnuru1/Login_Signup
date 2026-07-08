import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { validateEmail, validatePassword } from "../utils/validation";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const valid =
    name &&
    validateEmail(email) &&
    validatePassword(password) &&
    password === confirm;

  const submit = (e) => {
    e.preventDefault();

    if (!valid) {
      toast.error("Please fill all fields correctly.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Account Created");
    }, 2000);
  };

  return (
    <div className="auth-page">
      <form onSubmit={submit} className="auth-card">
        <h2 className="auth-title">Create account</h2>
        <p className="auth-subtitle">Join us and start your journey</p>

        <div className="auth-form">
          <input
            className="auth-input"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            className="auth-input"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <PasswordInput
            placeholder="Confirm password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          <button disabled={!valid || loading} className="auth-button">
            {loading ? <Loader /> : "Create Account"}
          </button>
        </div>

        <p className="auth-footer">
          Already have an account?
          <Link to="/login" className="auth-switch-link">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;