import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
import { Link } from "react-router-dom";

function Form() {
  const [isTab1, setIsTab1] = useState(true);

  const handleTabRoute = () => {
    setIsTab1((prev) => !prev);
  };

  return (
    <>
      <form className="container card" dir="rtl" noValidate>
        <h1>مرحله اول</h1>

        <div className="input-group">
          <input type="text" id="name" className="form-input" required />
          <label htmlFor="name" className="form-label">
            نام شما
          </label>
        </div>

        <div className="input-group">
          <input
            type="tel"
            id="phone"
            className="form-input"
            required
            pattern="^\+?\d{10,15}$"
          />
          <label htmlFor="phone" className="form-label">
            شماره تماس
          </label>
        </div>

        <div className="input-group">
          <input type="date" id="birthdate" className="form-input" required />
        </div>

        <div className="input-group">
          <select id="gender" className="form-input" required defaultValue="">
            <option value="" disabled>
              انتخاب جنسیت
            </option>
            <option value="male">مرد</option>
            <option value="female">زن</option>
          </select>
        </div>

        <div className="input-group">
          <input
            type="text"
            id="nationalId"
            className="form-input"
            required
            pattern="^\d{10}$"
          />
          <label htmlFor="nationalId" className="form-label">
            شماره ملی
          </label>
        </div>

        <div className="input-group">
          <input type="text" id="address" className="form-input" required />
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
          ></textarea>
          <label htmlFor="symptoms" className="form-label">
            علائم یا توضیحات
          </label>
        </div>

        <button className="form-button" type="submit">
          ارسال
        </button>
        <div className="dots">
          <GoDot />
          <GoDot />
          <Link to="/SecondPage">
            <GoDot />
          </Link>
          <Link to="/">{isTab1 ? <GoDotFill /> : <GoDot />}</Link>
        </div>
      </form>
    </>
  );
}

export default Form;
