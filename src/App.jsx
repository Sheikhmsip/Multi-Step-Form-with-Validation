import { useState } from "react"
import FormStepOne from "./Components/FormStepOne"
import FormStepTwo from "./Components/FormStepTwo"

const App = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const nextStep = () => setStep(previous => previous + 1)
  const previousStep = () => setStep(previous => previous - 1)

  const updateFormData = (data) => {
    setFormData(previous => ({ ...previous, ...data }))
  }
  return (
    <>
      <div className="max-w-xl mx-auto p-6">
      {step === 1 && <FormStepOne nextStep={nextStep}  updateFormData={updateFormData} defaultValues={formData} />}

      {step === 2 && <FormStepTwo nextStep={nextStep} previousStep={previousStep} updateFormData={updateFormData} defaultValues={formData} />}
    </div>
    </>
  )
}

export default App
