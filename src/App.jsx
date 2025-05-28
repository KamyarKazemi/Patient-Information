import Form from "./Form";
import { Routes, Route } from "react-router-dom";
import SecondPage from "./SecondPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/SecondPage" element={<SecondPage />} />
      </Routes>
    </>
  );
}

export default App;
