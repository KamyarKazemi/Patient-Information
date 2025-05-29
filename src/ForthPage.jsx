import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoDot, GoDotFill } from "react-icons/go";
import { useFormData } from "./FormContext";
import Wizard from "./Wizard";

function ForthPage() {
  const navigate = useNavigate();
  const { formData, updateFormData, sendFormData } = useFormData();

  const [description, setDescription] = useState(formData.description || "");
  const [guardianName, setGuardianName] = useState(formData.guardianName || "");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setDescription(formData.description || "");
    setGuardianName(formData.guardianName || "");
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Update context with last step data
    updateFormData({
      description,
      guardianName,
    });

    setLoading(true);
    const success = await sendFormData();
    setLoading(false);

    if (success) {
      alert("فرم با موفقیت ارسال شد.");
      navigate("/"); // back to start or confirmation page
    } else {
      setError("ارسال فرم با مشکل مواجه شد. لطفا دوباره تلاش کنید.");
    }
  };

  return (
    <form
      className="container card"
      dir="rtl"
      onSubmit={handleSubmit}
      noValidate
    >
      <h1>مرحله چهارم</h1>

      <div className="input-group">
        <textarea
          id="description"
          className="form-input"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label htmlFor="description" className="form-label">
          شرح مشکل
        </label>
      </div>

      <div className="input-group">
        <input
          type="text"
          id="guardianName"
          className="form-input"
          value={guardianName}
          onChange={(e) => setGuardianName(e.target.value)}
          required
        />
        <label htmlFor="guardianName" className="form-label-forth">
          نام سرپرست
        </label>
        <Wizard />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button className="form-button" type="submit" disabled={loading}>
        {loading ? "در حال ارسال..." : "ارسال فرم"}
      </button>

      <div className="dots">
        <Link to="/forth">
          <GoDotFill />
        </Link>
        <Link to="/third">
          <GoDot />
        </Link>
        <Link to="/second">
          <GoDot />
        </Link>
        <Link to="/">
          <GoDot />
        </Link>
      </div>
    </form>
  );
}

export default ForthPage;
