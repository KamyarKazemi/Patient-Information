import { Link } from "react-router-dom";
import { useState } from "react";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

function ThirdPage() {
  const [isTab1, setIsTab1] = useState(false);
  const [isTab2, setIsTab2] = useState(false);
  const [isTab3, setIsTab3] = useState(true);
  const [isTab4, setIsTab4] = useState(false);

  return (
    <>
      <form className="container card" dir="rtl" noValidate>
        <h1>مرحله سوم</h1>
        <div className="input-group">
          <input type="text" id="conditions" className="form-input" required />
          <label htmlFor="conditions" className="form-label">
            بیماری‌های زمینه‌ای
          </label>
        </div>

        <div className="input-group">
          <input type="text" id="medications" className="form-input" required />
          <label htmlFor="medications" className="form-label">
            داروهای مصرفی فعلی
          </label>
        </div>

        <div className="input-group">
          <input type="text" id="allergies" className="form-input" required />
          <label htmlFor="allergies" className="form-label">
            حساسیت دارویی یا غذایی
          </label>
        </div>

        <div className="input-group">
          <textarea
            id="description"
            className="form-input"
            rows="4"
            required
          ></textarea>
          <label htmlFor="description" className="form-label">
            توضیحات بیشتر یا شکایات اصلی بیمار
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

export default ThirdPage;
