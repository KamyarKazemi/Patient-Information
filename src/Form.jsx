import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
import { Link } from "react-router-dom";

function Form() {
  const [isTab1, setIsTab1] = useState(true);
  const [isTab2, setIsTab2] = useState(false);
  const [isTab3, setIsTab3] = useState(false);
  const [isTab4, setIsTab4] = useState(false);

  return (
    <>
      <form className="container card" dir="rtl" noValidate>
        <h1>مرحله اول</h1>

        <div className="input-group">
          <input type="text" id="name" className="form-input" required />
          <label htmlFor="name" className="form-label">
            نام کامل
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
