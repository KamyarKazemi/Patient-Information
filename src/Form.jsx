import { GoDot, GoDotFill } from "react-icons/go";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormData } from "./FormContext";
import Wizard from "./Wizard";

function Form() {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormData();

  // Initialize with current context data for controlled inputs
  const [fullName, setFullName] = useState(formData.name || "");
  const [phone, setPhone] = useState(formData.phone || "");
  const [birthdate, setBirthdate] = useState(formData.birthdate || "");
  const [gender, setGender] = useState(formData.gender || "");

  // For dots active state, mark current tab active
  const isTab1 = true;
  const isTab2 = false;
  const isTab3 = false;
  const isTab4 = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData({
      name: fullName,
      phone,
      birthdate,
      gender,
    });
    navigate("/second");
  };

  return (
    <>
      <form className="container card" dir="rtl" onSubmit={handleSubmit}>
        <h1>مرحله اول</h1>

        <div className="input-group">
          <input
            type="text"
            id="name"
            className="form-input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <label htmlFor="name" className="form-label">
            نام کامل
          </label>
        </div>

        <div className="input-group">
          <input
            type="tel"
            id="phone"
            className="form-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            pattern="^\+?\d{10,15}$"
          />
          <label htmlFor="phone" className="form-label">
            شماره تماس
          </label>
        </div>

        <div className="input-group">
          <input
            type="date"
            id="birthdate"
            className="form-input"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <select
            id="gender"
            className="form-input"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="" disabled>
              انتخاب جنسیت
            </option>
            <option value="male">مرد</option>
            <option value="female">زن</option>
          </select>
        </div>

        <button className="form-button" type="submit">
          بعدی
        </button>

        <div className="dots">
          <Link to="/forth">{isTab4 ? <GoDotFill /> : <GoDot />}</Link>
          <Link to="/third">{isTab3 ? <GoDotFill /> : <GoDot />}</Link>
          <Link to="/second">{isTab2 ? <GoDotFill /> : <GoDot />}</Link>
          <Link to="/">{isTab1 ? <GoDotFill /> : <GoDot />}</Link>
        </div>
        <Wizard />
      </form>
    </>
  );
}

export default Form;
