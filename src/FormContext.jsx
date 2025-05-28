import { createContext, useContext, useState } from "react";

const initialFormData = {
  name: "",
  phone: "",
  birthdate: "",
  gender: "",
  nationalId: "",
  address: "",
  symptoms: "",
  maritalStatus: "",
  conditions: "",
  medications: "",
  allergies: "",
  description: "",
};

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialFormData);

  const updateFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormData = () => useContext(FormContext);
