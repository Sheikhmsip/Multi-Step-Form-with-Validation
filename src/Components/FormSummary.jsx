import React from 'react';

const FormSummary = ({ formData, previousStep, onSubmit }) => {
    return (
        <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Review Your Information</h2>

      <div className="bg-gray-100 p-4 rounded space-y-2">
        <div><strong>Full Name:</strong> {formData.fullName}</div>
        <div><strong>Email:</strong> {formData.email}</div>
        <div><strong>Phone:</strong> {formData.phone}</div>
        <div><strong>Address:</strong> {formData.address}</div>
        <div><strong>City:</strong> {formData.city}</div>
        <div><strong>Zip Code:</strong> {formData.zip}</div>
        <div><strong>Username:</strong> {formData.username}</div>
      
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
          onClick={() => onSubmit(formData)}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
    );
};

export default FormSummary;