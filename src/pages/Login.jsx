import { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from '../assets/images/login1.png'
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";

const Login = ({ setIsLoggedIn }) => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "user@skillrise.com" && password === "123456") {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      navigate("/");
    } else {
      setError("Email or Password is incorrect");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 pt-40 pb-20">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-2">

        <div className="p-8 md:p-10 flex flex-col justify-center">


          <SectionHeader
            title="Welcome Back"
            subtitle="Login to continue your learning journey"
            align="center"
          />

          <form onSubmit={handleLogin}>

            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg mb-4 focus:border-gray-600 border-gray-300 outline-none transition"
              placeholder="Enter your email"
              required
            />

            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg mb-4 focus:border-gray-600 border-gray-300 outline-none transition"
              placeholder="Enter your password"
              required
            />

            {error && <p className="text-red-500 mb-3">{error}</p>}


            <Button className="w-full" type="submit" variant="primary" size="md">
              Login
            </Button>
          </form>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Don’t have an account?
            <span className="text-[#0c448d] font-semibold cursor-pointer"> Sign Up</span>
          </p>
        </div>

        <div className="w-full md:flex  items-center justify-center">
          <img
            src={login}
            alt="Learning Illustration"
            className="w-100"
          />
        </div>

      </div>
    </div>

  )
}

export default Login
