import { useState } from "react";
import { Link } from "react-router-dom";
import Passwordinput from "../components/Passwordinput";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { validateEmail } from "../utils/validation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const valid =
    validateEmail(email) &&
    password.length >= 8;

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 flex items-center justify-center px-4">

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 transition-all duration-300 hover:shadow-blue-300"
      >

        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        <input
          type="email"
          className="w-full border p-3 rounded-lg mb-4"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <PasswordInput
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <div className="flex justify-between mt-4 text-sm">

          <label className="flex gap-2">
            <input
              type="checkbox"
              checked={remember}
              onChange={()=>setRemember(!remember)}
            />
            Remember Me
          </label>

          <a href="#">Forgot Password?</a>

        </div>

        <button
          disabled={!valid || loading}
          className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-purple-700 transition rounded-lg text-white p-3 disabled:bg-gray-400"
        >

          {loading ? <Loader/> : "Login"}

        </button>

        <p className="text-center mt-5">
          Don't have an account?

          <Link
            to="/signup"
            className="text-blue-600 ml-1"
          >
            Sign Up
          </Link>

        </p>

      </form>

    </div>
  );
}

export default Login;
