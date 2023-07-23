import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";
import axios from "axios";

const Signup = () => {
  const { newUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    newUser(data.email, data.password)
    .then(result=>{
      const registeredUser = result.user
      console.log(registeredUser)
      updateUserProfile(data.name, data.photo)
      .then(()=>{})
          axios.post("http://localhost:4560/users",{
            name: data.name, email: data.email
          })
          .then((data) => {
            console.log(data);
            if (data.data.insertedId) {
              reset()
              Swal.fire("Successfully!", "Your Account Is created", "success");
              navigate("/");
            }
          });
    })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="w-full container mx-auto my-10 lg:max-w-xl p-10 space-y-8 sm:p-10 bg-gradient-to-r from-slate-100 to-cyan-50 rounded-lg shadow-2xl dark:bg-gray-800">
        <h2 className="text-3xl text-center font-bold text-gray-900 dark:text-white">
          Create Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              {...register("name", { required: true })}
              className="bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Chris Evans"
              required
            />
          </div>
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
              {...register("password", {
                minLength: 6,
              })}
              placeholder="your password"
              className="bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {errors.password?.type === "minLength" && (
              <p className="text-red-600 text-sm" role="alert">
                Password must be started with 6 characters
              </p>
            )}
          </div>
          <div>
            <a className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              Forget Password?
            </a>
          </div>
          <div className="text-center">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Register new account
              </span>
            </button>
          </div>
          <SocialLogin />
          <div className="text-sm text-center font-medium text-black dark:text-white">
            Already Have Account?{" "}
            <Link
              to="/login"
              className="text-blue-600 cursor-pointer hover:underline dark:text-blue-500"
            >
              Please Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
