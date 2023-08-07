import React from "react";
import PropTypes from "prop-types";
import "./SignUpForm.css";

SignUpForm.propTypes = {};

function SignUpForm(props) {
  return (
    <div className={"signUpForm"}>
      <form>
        <h1>Sign in</h1>
        <input type="email" placeholder={"Email"} />
        <input type="password" placeholder={"Password"} />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignUpForm;
