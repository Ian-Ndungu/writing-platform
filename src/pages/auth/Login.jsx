import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { register } from "../../sdk/auth/register";
import { toast } from "react-toastify";
import { login } from "../../sdk/auth/login";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [showLogIn, setShowLogIn] = useState("LogIn");
  const [submitting, setSubmitting] = useState(false);
  const [submittingLogin, setSubmittingLogin] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(5, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const validationSchema = Yup.object().shape({
    registerName: Yup.string()
      .min(2, "Name must be minimum 2 characters")
      .max(100, "Name must not be more than 100 characters")
      .required("Name is required"),
    registerRole: Yup.string()
      .oneOf(["writer", "client"], 'Role must be either "writer" or "client"')
      .required("Role is required"),
    registerEmail: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    registerPhoneNumber: Yup.string()
      .min(9, "Name must be minimum 9 characters")
      .required("Phone number is required"),
    registerPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmRegisterPassword: Yup.string()
      .oneOf([Yup.ref("registerPassword")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const HandleLogin = async (values) => {
    try {
      setSubmittingLogin(true);
      const response = await login(values.email, values.password);
      if (response.status === 201 || response.statusCode === 201) {
        loginFormik.resetForm();
        toast.success("Welcome to TopRatedWriters");
        setAuth({ user: response?.data });
        navigate("/dashboard");
        setSubmittingLogin(false);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
      setSubmittingLogin(false);
    }
  };
  const handleSubmit = async (values) => {
    try {
      setSubmitting(true);
      const response = await register(
        values.registerName,
        values.registerEmail,
        values.registerRole,
        values.registerPhoneNumber,
        values.registerPassword
      );
      if (response.status === 201 || response.statusCode === 201) {
        formik.resetForm();
        toast.success("User registered successfully");
        setShowLogIn("LogIn");
        setSubmitting(false);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
      setSubmitting(false);
    }
  };

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: HandleLogin,
  });

  const formik = useFormik({
    initialValues: {
      registerName: "",
      registerRole: "",
      registerEmail: "",
      registerPassword: "",
      confirmRegisterPassword: "",
      registerPhoneNumber: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="w-[100%] mx-auto mt-[140px]">
      <div className="flex w-[90%] mx-auto min-h-[80vh]">
        <div className="w-[50%] flex flex-col items-center justify-center">
          <h2 className="text-3xl">TopRatedWriters</h2>
          <div className="flex items-center p-[10px]">
            <button
              className="text-xl h-[48px] w-[120px] bg-[#0177D5] text-white"
              onClick={() => setShowLogIn("LogIn")}
            >
              Login
            </button>
            <button
              className="text-xl h-[48px] w-[120px] bg-[#FFA502]"
              onClick={() => setShowLogIn("Register")}
            >
              Signup
            </button>
          </div>
        </div>
        <div className="w-[50%] h-full">
          {showLogIn === "LogIn" && (
            <div className="w-[100%] h-full">
              <form
                autoComplete="off"
                onSubmit={loginFormik.handleSubmit}
                className="w-[70%] h-full min-h-[80vh] mx-auto border-2 p-[20px] shadow-md"
              >
                <p className="text-[28px] font-bold">
                  Welcome back, Participant!
                </p>
                <p className="text-[22px] font-bold mb-[20px]">
                  Log in to access new orders.
                </p>
                <div className="w-full flex items-center justify-between">
                  <button className="h-[48px] flex items-center justify-center gap-[10px] w-[45%] px-[20px] border-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path
                          fill="currentColor"
                          d="M4 12a8 8 0 1 1 9 7.938V14h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 1 1-1h.5a1 1 0 1 0 0-2H14a3 3 0 0 0-3 3v2H9a1 1 0 1 0 0 2h2v5.938A8.001 8.001 0 0 1 4 12m8 10c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"
                        />
                      </g>
                    </svg>
                    Login with Facebook
                  </button>
                  <button className="h-[48px] w-[45%] px-[20px] flex items-center justify-center gap-[10px] border-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path
                          fill="currentColor"
                          d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M8 10a1 1 0 0 1 .993.883L9 11v5a1 1 0 0 1-1.993.117L7 16v-5a1 1 0 0 1 1-1m3-1a1 1 0 0 1 .984.821a5.82 5.82 0 0 1 .623-.313c.667-.285 1.666-.442 2.568-.159c.473.15.948.43 1.3.907c.315.425.485.942.519 1.523L17 12v4a1 1 0 0 1-1.993.117L15 16v-4c0-.33-.08-.484-.132-.555a.548.548 0 0 0-.293-.188c-.348-.11-.849-.052-1.182.09c-.5.214-.958.55-1.27.861L12 12.34V16a1 1 0 0 1-1.993.117L10 16v-6a1 1 0 0 1 1-1M8 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2"
                        />
                      </g>
                    </svg>
                    Login with LinkedIn
                  </button>
                </div>
                <div className="border-2 my-[20px]"></div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-input h-[50px] mt-1 block w-full rounded-md border-2 px-[10px] text-[#000] focus:outline-none"
                    value={loginFormik.values.email}
                    onChange={loginFormik.handleChange}
                  />
                  {loginFormik.touched.email && loginFormik.errors.email && (
                    <div className="text-[#f00]">
                      {loginFormik.errors.email}
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-input h-[50px] mt-1 block w-full rounded-md border-2 px-[10px] text-[#000] focus:outline-none"
                    value={loginFormik.values.password}
                    onChange={loginFormik.handleChange}
                  />
                  {loginFormik.touched.password &&
                    loginFormik.errors.password && (
                      <div className="text-[#f00]">
                        {loginFormik.errors.password}
                      </div>
                    )}
                </div>
                <div className="my-[10px]">
                  <NavLink to="forgot-password">Forgot Password</NavLink>
                </div>
                <button
                  type="submit"
                  className="bg-[#0177D5] flex items-center justify-center gap-[10px] text-white px-4 h-[48px] w-full hover:bg-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M15 3H9a3 3 0 0 0-3 3v4h1V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4H6v4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M3 12h10.25L10 8.75l.66-.75l4.5 4.5l-4.5 4.5l-.66-.75L13.25 13H3z"
                    />
                  </svg>
                  LOGIN
                </button>
                <div className="border-2 my-[20px]"></div>
                <div>
                  <p>
                    Don't have an account? &nbsp;
                    <Link to="/register">Register here</Link>
                  </p>
                </div>
              </form>
            </div>
          )}
          {showLogIn === "Register" && (
            <div className="w-[100%] h-full">
              <form
                autoComplete="off"
                onSubmit={formik.handleSubmit}
                className="w-[70%] h-full mx-auto border-2 p-[20px] shadow-md"
              >
                <p className="text-[28px] font-bold text-[#000 justify">
                  Create a New Writer Account
                </p>
                <p className="text-[20px] font-normal justify mb-[20px]">
                  Get paid for writing valuable insight articles and essays
                </p>
                <div className="mb-4">
                  <label htmlFor="registerName" className="block text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="registerName"
                    name="registerName"
                    className="form-input h-[50px] mt-1 block w-full rounded-md border-2 px-[10px] text-[#000] focus:outline-none"
                    value={formik.values.registerName}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.registerName &&
                    formik.errors.registerName && (
                      <div className="text-[#f00]">
                        {formik.errors.registerName}
                      </div>
                    )}
                </div>
                <div className="mb-4">
                  <label htmlFor="registerRole" className="block text-gray-700">
                    Role
                  </label>
                  <select
                    id="registerRole"
                    name="registerRole"
                    className="form-select h-[50px] mt-1 block w-full rounded-md border-2 px-[10px] text-[#000] focus:outline-none"
                    value={formik.values.registerRole}
                    onChange={formik.handleChange}
                  >
                    <option value="" label="Select a role" />
                    <option value="writer" label="Writer" />
                    <option value="client" label="Client" />
                  </select>
                  {formik.touched.registerRole &&
                    formik.errors.registerRole && (
                      <div className="text-[#f00]">
                        {formik.errors.registerRole}
                      </div>
                    )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="registerEmail"
                    className="block text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="registerEmail"
                    name="registerEmail"
                    className="form-input h-[50px] mt-1 block w-full rounded-md border-2 px-[10px] text-[#000] focus:outline-none"
                    value={formik.values.registerEmail}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.registerEmail &&
                    formik.errors.registerEmail && (
                      <div className="text-[#f00]">
                        {formik.errors.registerEmail}
                      </div>
                    )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="registerPhoneNumber"
                    className="block text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="registerPhoneNumber"
                    name="registerPhoneNumber"
                    className="form-input h-[50px] mt-1 block w-full rounded-md border-2 px-[10px] text-[#000] focus:outline-none"
                    value={formik.values.registerPhoneNumber}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.registerPhoneNumber &&
                    formik.errors.registerPhoneNumber && (
                      <div className="text-[#f00]">
                        {formik.errors.registerPhoneNumber}
                      </div>
                    )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="registerPassword"
                    className="block text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="registerPassword"
                    name="registerPassword"
                    className="form-input h-[50px] mt-1 block w-full rounded-md border-2 px-[10px] text-[#000] focus:outline-none"
                    value={formik.values.registerPassword}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.registerPassword &&
                    formik.errors.registerPassword && (
                      <div className="text-[#f00]">
                        {formik.errors.registerPassword}
                      </div>
                    )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="confirmRegisterPassword"
                    className="block text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmRegisterPassword"
                    name="confirmRegisterPassword"
                    className="form-input h-[50px] mt-1 block w-full rounded-md border-2 px-[10px] text-[#000] focus:outline-none"
                    value={formik.values.confirmRegisterPassword}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.confirmRegisterPassword &&
                    formik.errors.confirmRegisterPassword && (
                      <div className="text-[#f00]">
                        {formik.errors.confirmRegisterPassword}
                      </div>
                    )}
                </div>
                <div className="flex items-center gap-[10px] my-[10px]">
                  <input type="checkbox" name="terms" id="terms" />
                  <label htmlFor="terms">
                    I agree to Top Writers &nbsp;
                    <Link to="terms">Terms and condition </Link> and &nbsp;
                    <Link to="privacy policy">privacy policy</Link>
                  </label>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-[#0177D5]  text-white px-4 h-[48px] w-full hover:bg-gray-700"
                  >
                    Create an Account
                  </button>
                  {/* <button
                    type="button"
                    className="bg-white border-2 text-[#000] px-4 h-[48px] w-full hover:bg-gray-700"
                  >
                    Continue with facebook
                  </button>
                  <button
                    type="button"
                    className="bg-white border-2 text-[#000] px-4 h-[48px] w-full hover:bg-gray-700"
                  >
                    Continue with LinkedIn
                  </button> */}
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
