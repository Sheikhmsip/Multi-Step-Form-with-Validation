import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormStepThree = ({
  nextStep,
  previousStep,
  updateFormData,
  defaultValues,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const schema = z
    .object({
      username: z.string().min(4, "Username must be at least 4 characters"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      confirmPassword: z.string().min(1, "Confirm Password is required"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = (data) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <>
      <div className="shadow-xl/30 p-4 md:w-[50%] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("username")}
              id="username"
              placeholder=" "
              className="block py-2.5  w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer px-2 dark:text-white"
            />
            <label
              htmlFor="username"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Username
            </label>
          </div>
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              id="password"
              placeholder=" "
              className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer px-2 dark:text-white"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            >
              {showPassword ? "Hide" : "Show"}
            </span>
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>

          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type={showConfirm ? "text" : "password"}
              {...register("confirmPassword")}
              id="confirmPassword"
              placeholder=" "
              className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer px-2 dark:text-white"
            />
           <span
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-3 text-gray-500 cursor-pointer"
          >
            {showConfirm ? "Hide" : "Show"}
          </span>
            <label
              htmlFor="confirmPassword"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm Password
            </label>
          </div>

          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}

          <div className="flex justify-between">
            <button
              type="button"
              onClick={previousStep}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Previous
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormStepThree;
