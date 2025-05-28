import { Link } from "react-router-dom";
import { useState } from "react";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

function ForthPage() {
  const [isTab1, setIsTab1] = useState(false);
  const [isTab2, setIsTab2] = useState(false);
  const [isTab3, setIsTab3] = useState(false);
  const [isTab4, setIsTab4] = useState(true);

  return (
    <>
      <form className="container card" dir="rtl" noValidate>
        <h1>مرحله چهارم</h1>
        <div className="input-group">
          <input
            type="text"
            id="guardianName"
            className="form-input"
            required
          />
          <label htmlFor="guardianName" className="form-label">
            نام و نام خانوادگی فرد تأیید کننده
          </label>
        </div>

        <div className="input-group">
          <input
            type="text"
            id="relationship"
            className="form-input"
            required
          />
          <label htmlFor="relationship" className="form-label">
            نسبت با بیمار
          </label>
        </div>

        <div className="input-group">
          <input
            type="text"
            id="confirmationCode"
            className="form-input"
            required
          />
          <label htmlFor="confirmationCode" className="form-label">
            کد تأیید
          </label>
        </div>

        <div className="input-group">
          <input type="text" id="signature" className="form-input" required />
          <label htmlFor="signature" className="form-label">
            کد ملی بیمار برای تأیید نهایی
          </label>
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

export default ForthPage;
