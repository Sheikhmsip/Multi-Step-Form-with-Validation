import { useMutation } from "@tanstack/react-query";

const submitFormData = async (formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  console.log("Submitted API:", formData);
  return { success: true, message: "Form submitted successfully!" };
};

export const useSubmitForm = () => {
  return useMutation({
    mutationFn: submitFormData, 
  });
};
