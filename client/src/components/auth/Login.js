import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div>
        <Link to="/register">Don't have an account Register</Link>
      </div>
      Login Page
    </div>
  );
};

export default Login;
