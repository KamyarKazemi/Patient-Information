import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { GoDot, GoDotFill } from "react-icons/go";
import { useFormData } from "./FormContext";
import Wizard from "./Wizard";

function SecondPage() {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormData();

  const [formValues, setFormValues] = useState({
    nationalId: formData.nationalId || "",
    address: formData.address || "",
    symptoms: formData.symptoms || "",
    maritalStatus: formData.maritalStatus || "",
  });

  useEffect(() => {
    // sync with formData if changed outside
    setFormValues({
      nationalId: formData.nationalId || "",
      address: formData.address || "",
      symptoms: formData.symptoms || "",
      maritalStatus: formData.maritalStatus || "",
    });
  }, [formData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData(formValues);
    navigate("/third");
  };

  return (
    <>
      <form
        className="container card"
        dir="rtl"
        onSubmit={handleSubmit}
        noValidate
      >
        <h1>مرحله دوم</h1>

        <div className="input-group">
          <input
            type="number"
            id="nationalId"
            className="form-input"
            required
            pattern="^\d{10}$"
            value={formValues.nationalId}
            onChange={handleChange}
          />
          <label htmlFor="nationalId" className="form-label">
            شماره ملی
          </label>
        </div>

        <div className="input-group">
          <input
            type="text"
            id="address"
            className="form-input"
            required
            value={formValues.address}
            onChange={handleChange}
          />
          <label htmlFor="address" className="form-label">
            نشانی
          </label>
        </div>

        <div className="input-group">
          <textarea
            id="symptoms"
            className="form-input"
            rows="4"
            required
            value={formValues.symptoms}
            onChange={handleChange}
          />
          <label htmlFor="symptoms" className="form-label">
            شرح علائم
          </label>
        </div>

        <div className="input-group">
          <select
            id="maritalStatus"
            className="form-input"
            value={formValues.maritalStatus}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              وضعیت تأهل
            </option>
            <option value="single">مجرد</option>
            <option value="married">متأهل</option>
          </select>
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
            <GoDot />
          </Link>
          <Link to="/second">
            <GoDotFill />
          </Link>
          <Link to="/">
            <GoDot />
          </Link>
        </div>
      </form>
    </>
  );
}

export default SecondPage;
