import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    logIn(data.email, data.password)
      .then((result) => {
        const logged = result.user;
        console.log(logged);
        Swal.fire("Successfully!", "You are Logged in now", "success");
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="w-full container mx-auto my-10 lg:max-w-xl p-10 space-y-8 sm:p-10 bg-gradient-to-r from-slate-100 to-cyan-50 rounded-lg shadow-2xl dark:bg-gray-800">
        <h2 className="text-3xl text-center font-bold text-gray-900 dark:text-white">
          Sign in to CampusHive
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              {...register("email")}
              className="bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              {...register("password")}
              placeholder="your password"
              className="bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <a className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              Forget Password?
            </a>
          </div>
          <div className="text-center">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Login to your account
              </span>
            </button>
          </div>
          <SocialLogin/>
          <div className="text-sm text-center font-medium text-black dark:text-white">
            Not registered yet?{" "}
            <Link
              to="/signup"
              className="text-blue-600 cursor-pointer hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
