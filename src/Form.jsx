function Form() {
  return (
    <>
      <form className="container card" dir="rtl">
        <h1>مرحله اول</h1>
        <div className="input-group">
          <input type="text" id="name" className="form-input" required />
          <label htmlFor="name" className="form-label">
            نام شما
          </label>
        </div>
        <div className="input-group">
          <input type="text" id="email" className="form-input" required />
          <label htmlFor="email" className="form-label">
            ایمیل شما
          </label>
        </div>
        <button className="form-button">ارسال</button>
      </form>
    </>
  );
}

export default Form;
