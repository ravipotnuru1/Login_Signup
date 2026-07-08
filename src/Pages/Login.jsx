import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { validateEmail } from "../utils/validation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const valid = validateEmail(email) && password.length >= 8;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Invalid Email");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Login Successful");
    }, 2000);
  };

  return (
    <div className="auth-page">
      <form onSubmit={handleSubmit} className="auth-card">
        <h2 className="auth-title">Welcome back</h2>
        <p className="auth-subtitle">Sign in to continue to your account</p>

        <div className="auth-form">
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

          <div className="auth-row">
            <label className="auth-remember">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              Remember me
            </label>

            <a href="#" className="auth-link">
              Forgot password?
            </a>
          </div>

          <button disabled={!valid || loading} className="auth-button">
            {loading ? <Loader /> : "Login"}
          </button>
        </div>

        <p className="auth-footer">
          Don&apos;t have an account?
          <Link to="/signup" className="auth-switch-link">
            Create account
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;