import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const FormStepTwo = ({ nextStep, previousStep, updateFormData, defaultValues }) => {
    
  const schema = z.object({
    address: z.string().min(1, "Street Address is required"),
    city: z.string().min(1, "City is required"),
    zip: z
      .string()
      .min(5, "Zip Code must be at least 5 digits")
      .regex(/^\d+$/, "Zip Code must contain only numbers"),
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("address")}
          placeholder="Street Address"
          className="w-full border p-2"
        />
        {errors.address && (
          <p className="text-red-500">{errors.address.message}</p>
        )}

        <input
          {...register("city")}
          placeholder="City"
          className="w-full border p-2"
        />
        {errors.city && <p className="text-red-500">{errors.city.message}</p>}

        <input
          {...register("zip")}
          placeholder="Zip Code"
          className="w-full border p-2"
        />
        {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}

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
  );
};

export default FormStepTwo;
