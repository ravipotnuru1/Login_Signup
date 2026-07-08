import { useState } from "react";
import { Link } from "react-router-dom";
import Passwordinput from "../components/Passwordinput";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import {
  validateEmail,
  validatePassword,
} from "../utils/validation";

function Signup() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirm,setConfirm]=useState("");
  const [loading,setLoading]=useState(false);

  const valid =
    name &&
    validateEmail(email) &&
    validatePassword(password) &&
    password===confirm;

  const submit=(e)=>{
    e.preventDefault();

    if(!valid){
      toast.error("Please fill all fields correctly.");
      return;
    }

    setLoading(true);

    setTimeout(()=>{
      setLoading(false);
      toast.success("Account Created");
    },2000);

  }

  return(

<div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-cyan-600 via-blue-700 to-purple-700 p-5">

<form
onSubmit={submit}
className="bg-white p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-purple-300 w-full max-w-md"
>

<h1 className="text-3xl font-bold text-center mb-6">
Sign Up
</h1>

<input
className="w-full border p-3 rounded-lg mb-4"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
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

<div className="mt-4"></div>

<PasswordInput
placeholder="Confirm Password"
value={confirm}
onChange={(e)=>setConfirm(e.target.value)}
/>

<button
disabled={!valid || loading}
className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-emerald-700 hover:to-teal-700"
>

{loading ? <Loader/> : "Create Account"}

</button>

<p className="text-center mt-5">

Already have an account?

<Link
to="/login"
className="text-blue-600 ml-2"
>
Login
</Link>

</p>

</form>

</div>

  )

}

export default Signup;
