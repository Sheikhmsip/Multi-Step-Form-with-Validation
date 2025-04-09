import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormStepThree = ({ nextStep, previousStep, updateFormData, defaultValues }) => {

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
        nextStep(); // Move to Summary Step
      };

    return (
        <>
<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register("username")}
        placeholder="Username"
        className="w-full border p-2"
      />
      {errors.username && (
        <p className="text-red-500">{errors.username.message}</p>
      )}

      <input
        type="password"
        {...register("password")}
        placeholder="Password"
        className="w-full border p-2"
      />
      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}

      <input
        type="password"
        {...register("confirmPassword")}
        placeholder="Confirm Password"
        className="w-full border p-2"
      />
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
        </>
    )
};

export default FormStepThree;
