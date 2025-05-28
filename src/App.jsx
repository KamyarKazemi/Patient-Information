import Form from "./Form";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
