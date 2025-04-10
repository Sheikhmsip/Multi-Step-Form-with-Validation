import { useState } from "react";
import FormStepOne from "./Components/FormStepOne";
import FormStepTwo from "./Components/FormStepTwo";
import FormStepThree from "./Components/FormStepThree";
import FormSummary from "./Components/FormSummary";
import { useDarkMode } from "./contexts/darkMode";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const nextStep = () => setStep((previous) => previous + 1);
  const previousStep = () => setStep((previous) => previous - 1);

  const updateFormData = (data) => {
    setFormData((previous) => ({ ...previous, ...data }));
  };
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <>
      <div className="dark:bg-gradient-to-r from-black via-blue-950 to-purple-950 p-6  min-h-[100vh] bg-white text-gray-900 dark:text-white transition-colors duration-300">
      <div className="flex item-center justify-center gap-20">
      <h1 className="text-xl text-center dark:text-white py-2 font-bold">Multi-Step Form</h1> 
   
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded"
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
     
      </div>
             
        {step === 1 && (
          <FormStepOne
            nextStep={nextStep}
            updateFormData={updateFormData}
            defaultValues={formData}
          />
        )}

        {step === 2 && (
          <FormStepTwo
            nextStep={nextStep}
            previousStep={previousStep}
            updateFormData={updateFormData}
            defaultValues={formData}
          />
        )}

        {step === 3 && (
          <FormStepThree
            nextStep={nextStep}
            previousStep={previousStep}
            updateFormData={updateFormData}
            defaultValues={formData}
          />
        )}

        {step === 4 && (
          <FormSummary
            formData={formData}
            previousStep={previousStep}
            onSubmit={(data) => {
              console.log("Submitted data:", data);
              alert("Form submitted successfully!");
            }}
          />
        )}
      </div>
    </>
  );
};

export default App;
