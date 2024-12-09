import React from "react";

interface Props {
  password: string;
}

const PasswordStrengthIndicator: React.FC<Props> = ({ password }) => {
  const calculateStrength = () => {
    if (password.length === 0) return "Weak";
    if (password.length < 6) return "Weak";
    if (/\d/.test(password) && /[a-z]/i.test(password)) return "Moderate";
    if (password.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(password)) return "Strong";
    return "Weak";
  };

  const strength = calculateStrength();
  return <div aria-live="polite">Password strength: {strength}</div>;
};

export default PasswordStrengthIndicator;
