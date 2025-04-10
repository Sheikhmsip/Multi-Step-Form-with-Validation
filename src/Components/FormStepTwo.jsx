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
    <div className="shadow-xl/30 p-4 md:w-[50%] mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

      <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("address")}
              id="address"
              placeholder=" "
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer px-2 dark:text-white"
            />
            <label
              for="address"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Street Address
            </label>
          </div>

        {errors.address && (
          <p className="text-red-500">{errors.address.message}</p>
        )}
 <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("city")}
              id="city"
              placeholder=" "
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer px-2 dark:text-white"
            />
            <label
              for="city"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              City
            </label>
          </div>
        
        {errors.city && <p className="text-red-500">{errors.city.message}</p>}


        <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("zip")}
              id="zip"
              placeholder=" "
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer px-2 dark:text-white"
            />
            <label
              for="zip"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             Zip Code
            </label>
          </div>
        
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
