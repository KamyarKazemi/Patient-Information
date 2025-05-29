import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { GoDot, GoDotFill } from "react-icons/go";
import { useFormData } from "./FormContext";
import Wizard from "./Wizard";

function ThirdPage() {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormData();

  const [formValues, setFormValues] = useState({
    conditions: formData.conditions || "",
    medications: formData.medications || "",
    allergies: formData.allergies || "",
  });

  useEffect(() => {
    setFormValues({
      conditions: formData.conditions || "",
      medications: formData.medications || "",
      allergies: formData.allergies || "",
    });
  }, [formData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData(formValues);
    navigate("/forth");
  };

  return (
    <>
      <form className="container card" dir="rtl" onSubmit={handleSubmit}>
        <h1>مرحله سوم</h1>

        <div className="input-group">
          <textarea
            id="conditions"
            className="form-input"
            rows="4"
            value={formValues.conditions}
            onChange={handleChange}
          />
          <label htmlFor="conditions" className="form-label">
            وضعیت بیماری‌ها
          </label>
        </div>

        <div className="input-group">
          <textarea
            id="medications"
            className="form-input"
            rows="4"
            value={formValues.medications}
            onChange={handleChange}
          />
          <label htmlFor="medications" className="form-label">
            داروهای مصرفی
          </label>
        </div>

        <div className="input-group">
          <textarea
            id="allergies"
            className="form-input"
            rows="4"
            value={formValues.allergies}
            onChange={handleChange}
          />
          <label htmlFor="allergies" className="form-label">
            حساسیت‌ها
          </label>
          <Wizard />
        </div>

        <button type="submit" className="form-button">
          بعدی
        </button>

        <div className="dots">
          <Link to="/forth">
            <GoDot />
          </Link>
          <Link to="/third">
            <GoDotFill />
          </Link>
          <Link to="/second">
            <GoDot />
          </Link>
          <Link to="/">
            <GoDot />
          </Link>
        </div>
      </form>
    </>
  );
}

export default ThirdPage;
