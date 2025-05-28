import { createContext, useContext, useState } from "react";
import axios from "axios";

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

  const [information, setInformation] = useState([]);

  const addInformation = async () => {
    try {
      const ressponse = await axios.post(
        "http://localhost:3001/information",
        formData
      );
      setInformation(ressponse.data);
      console.log("saved");
    } catch (error) {
      console.error("failed to send data", error);
    }
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, addInformation }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormData = () => useContext(FormContext);
