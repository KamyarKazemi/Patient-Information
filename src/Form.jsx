function Form() {
  return (
    <>
      <form className="container card">
        <h1>First Step</h1>
        <div className="input-group">
          <input type="text" id="name" className="form-input" required />
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
        </div>
        <div className="input-group">
          <input type="text" id="email" className="form-input" required />
          <label htmlFor="email" className="form-label">
            Your Email
          </label>
        </div>
        <button className="form-button">Submit</button>
      </form>
    </>
  );
}

export default Form;
