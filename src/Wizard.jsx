import { useLocation } from "react-router-dom";
import React from "react";

const steps = [
  { path: "/forth", label: "مرحله 4" },
  { path: "/third", label: "مرحله 3" },
  { path: "/second", label: "مرحله 2" },
  { path: "/", label: "مرحله 1" },
];

const Wizard = () => {
  const location = useLocation();

  return (
    <div className="wizard">
      {steps.map((step, index) => (
        <div
          key={step.path}
          className={`wizard-step ${
            location.pathname === step.path ? "active" : ""
          }`}
        >
          <span>{step.label}</span>
          {index < steps.length - 1 && <span className="arrow">→</span>}
        </div>
      ))}
    </div>
  );
};

export default Wizard;
