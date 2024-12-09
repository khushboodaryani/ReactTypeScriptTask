import React from "react";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";

import './styles/styles.css';  // Corrected import statement
  // Add this at the top of your App.tsx


const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="form-section">
        <h1>Sign Up</h1>
        <SignUpForm />
      </div>
      <div className="form-section">
        <h1>Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default App;



