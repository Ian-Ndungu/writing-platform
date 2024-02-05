import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("", {
        email,
        password,
      });

      console.log("User logged in successfully:", response.data);

      setEmail("");
      setPassword("");

      navigate("/");
    } catch (err) {
      console.error("Login failed:", err.response.data);
    }
  };

  const signup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("", {
        email: signupEmail,
        password: signupPassword,
        userName: signupName,
      });

      console.log("User signed up successfully:", response.data);

      setSignupEmail("");
      setSignupPassword("");
      setSignupName("");
      alert("Account created!");

      navigate("/");
    } catch (err) {
      console.error("Signup failed:", err.response.data);
    }
  };

  const [showLogIn, setShowLogIn] = useState("LogIn");

  return (
    <div className="flex flex-col items-center border-2 my-auto justify-center h-screen">
      <h2 className="text-3xl ">Andika Platform</h2>
      <div className="flex items-center justify-between p-[10px]">
        <button className="text-xl mb-2" onClick={() => setShowLogIn("LogIn")}>
          Login
        </button>
        <button
          className="text-xl mb-2 mx-4"
          onClick={() => setShowLogIn("Register")}
        >
          Signup
        </button>
      </div>
      {showLogIn === "LogIn" && (
        <div className="mb-8">
          <form autoComplete="off" className="w-64" onSubmit={login}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="form-input h-[50px] mt-1 block w-full rounded-md border-2"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="form-input h-[50px] mt-1 block w-full rounded-md border-2"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button
              type="submit"
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700"
            >
              LOGIN
            </button>
          </form>
        </div>
      )}
      {showLogIn === "Register" && (
        <form autoComplete="off" className="w-[60%] h-[60%]" onSubmit={signup}>
          <div className="mb-4">
            <label htmlFor="signup-name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="signup-name"
              className="form-input h-[50px] mt-1 block w-full rounded-md border-2"
              required
              onChange={(e) => setSignupName(e.target.value)}
              value={signupName}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="signup-email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="signup-email"
              className="form-input h-[50px] mt-1 block w-full rounded-md border-2"
              required
              onChange={(e) => setSignupEmail(e.target.value)}
              value={signupEmail}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="signup-password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="signup-password"
              className="form-input h-[50px] mt-1 block w-full rounded-md border-2"
              required
              onChange={(e) => setSignupPassword(e.target.value)}
              value={signupPassword}
            />
          </div>
          <button
            type="submit"
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700"
          >
            SIGN UP
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
