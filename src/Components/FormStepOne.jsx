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
    <div className="w-[50%] mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("fullName")}
          placeholder="Full Name"
          className="w-full border p-2 text-black dark:text-white"
        />
        {errors.fullName && (
          <p className="text-red-500">{errors.fullName.message}</p>
        )}

        <input
          {...register("email")}
          placeholder="Email"
          className="w-full border p-2 text-black dark:text-white"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          {...register("phone")}
          placeholder="Phone Number"
          className="w-full border p-2 text-black dark:text-white"
        />
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
