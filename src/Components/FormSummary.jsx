import React from "react";
import { useSubmitForm } from "../hooks/useSubmitForm";
const FormSummary = ({ formData, previousStep }) => {
  const { mutate, isLoading, isSuccess, isError, error } = useSubmitForm();

  const handleSubmit = () => {
    mutate(formData);
  };

  return (
    <div className="shadow-xl/30 p-4 space-y-4 md:w-[50%] mx-auto">
      <h2 className="text-xl font-bold mb-4">All Information Given by you </h2>
      <div className="bg-gray-100 text-black p-4 rounded space-y-2">
        <div>
          <strong>Full Name:</strong> {formData.fullName}
        </div>
        <div>
          <strong>Email:</strong> {formData.email}
        </div>
        <div>
          <strong>Phone:</strong> {formData.phone}
        </div>
        <div>
          <strong>Address:</strong> {formData.address}
        </div>
        <div>
          <strong>City:</strong> {formData.city}
        </div>
        <div>
          <strong>Zip Code:</strong> {formData.zip}
        </div>
        <div>
          <strong>Username:</strong> {formData.username}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={previousStep}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Previous
        </button>

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
      {isSuccess && (
        <p className="mt-4 text-green-500"> Submitted successfully!</p>
      )}
      {isError && <p className="mt-4 text-red-500"> Error: {error.message}</p>}
    </div>
  );
};

export default FormSummary;
