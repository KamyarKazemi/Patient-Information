import { createContext, useContext, useState, useEffect } from "react";
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
  guardianName: "", // added here to hold 4th step data
};

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [information, setInformation] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("formData");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const updateFormData = (newData) => {
    setFormData((prev) => {
      const updated = { ...prev, ...newData };
      localStorage.setItem("formData", JSON.stringify(updated));
      return updated;
    });
  };

  // This is called ONLY at the last step to submit entire data
  const sendFormData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/information",
        formData
      );
      console.log("Form data successfully saved:", response.data);
      setInformation(response.data);
      localStorage.removeItem("formData"); // clear storage on success
      setFormData(initialFormData); // reset formData state
      return true; // signal success
    } catch (error) {
      console.error("Failed to send form data:", error);
      return false; // signal failure
    }
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        sendFormData,
        information,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormData = () => useContext(FormContext);
