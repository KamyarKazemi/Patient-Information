import Form from "./Form";
import { Routes, Route } from "react-router-dom";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import ForthPage from "./ForthPage";
import { FormProvider } from "./FormContext";
import Wizard from "./Wizard";

function App() {
  return (
    <>
      <FormProvider>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/third" element={<ThirdPage />} />
          <Route path="/forth" element={<ForthPage />} />
        </Routes>
      </FormProvider>
      <Wizard />
    </>
  );
}

export default App;
