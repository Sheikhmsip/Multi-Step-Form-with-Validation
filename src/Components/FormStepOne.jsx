import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormStepOne = ({ nextStep, updateFormData, defaultValues }) => {
  const schema = z.object({
    fullName: z.string().min(1, "Full Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
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
    <div className="shadow-xl/30 p-4 md:w-[50%] mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="relative z-0 w-full mb-5 group">
          <input
            {...register("fullName")}
            id="fullName"
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer px-2 dark:text-white"
          />
          <label
            htmlFor="fullName"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Full Name
          </label>
        </div>

        {errors.fullName && (
          <p className="text-red-500">{errors.fullName.message}</p>
        )}
        <div className="relative z-0 w-full mb-5 group">
          <input
            {...register("email")}
            id="email"
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer px-2 dark:text-white"
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>

        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <div className="relative z-0 w-full mb-5 group">
          <input
            {...register("phone")}
            id="phone"
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer px-2 dark:text-white"
          />
          <label
            htmlFor="phone"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone Number
          </label>
        </div>
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default FormStepOne;
