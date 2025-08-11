import React from "react";

const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="/login" method="POST">
        <h1>Login</h1>

        <div className="input-box">
          Email
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
          />
          <i className="fas fa-envelope"></i>
        </div>

        <div className="input-box">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <i className="fas fa-lock"></i>
        </div>

        <div className="rember-forgot">
          <label htmlFor="remember-me">
            <input type="checkbox" id="remember-me" /> Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit" className="btn">
          Login
        </button>

        <div className="register-link">
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
