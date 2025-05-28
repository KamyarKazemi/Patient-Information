import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useFormData } from "./FormContext";

function Form() {
  const [isTab1, setIsTab1] = useState(true);
  const [isTab2, setIsTab2] = useState(false);
  const [isTab3, setIsTab3] = useState(false);
  const [isTab4, setIsTab4] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleBirthdate = (e) => {
    setBirthdate(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    //somehow using useFormDAta and then:
    setFullName("");
    setPhone("");
    setBirthdate("");
    setGender("");
  };

  return (
    <>
      <form
        className="container card"
        dir="rtl"
        onSubmit={handleForm}
        noValidate
      >
        <h1>مرحله اول</h1>

        <div className="input-group">
          <input
            type="text"
            id="name"
            className="form-input"
            value={fullName}
            onChange={handleFullName}
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
            onChange={handlePhone}
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
            onChange={handleBirthdate}
            required
          />
        </div>

        <div className="input-group">
          <select
            id="gender"
            className="form-input"
            value={gender}
            onChange={handleGender}
            required
            defaultValue=""
          >
            <option value="" disabled>
              انتخاب جنسیت
            </option>
            <option value="male">مرد</option>
            <option value="female">زن</option>
          </select>
        </div>

        <button className="form-button" type="submit">
          ارسال
        </button>
        <div className="dots">
          <Link to="/forth">{isTab4 ? <GoDotFill /> : <GoDot />}</Link>
          <Link to="/third">{isTab3 ? <GoDotFill /> : <GoDot />}</Link>
          <Link to="/second">{isTab2 ? <GoDotFill /> : <GoDot />}</Link>
          <Link to="/">{isTab1 ? <GoDotFill /> : <GoDot />}</Link>
        </div>
      </form>
    </>
  );
}

export default Form;
