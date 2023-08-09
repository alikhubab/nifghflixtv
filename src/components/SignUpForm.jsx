import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./SignUpForm.css";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../services/firebase";
import { useAuthContext } from "../auth/context";

SignUpForm.propTypes = {};

function SignUpForm(props) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { setUser } = useAuthContext();

  async function register(e) {
    e.preventDefault();
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      );
      console.log(response.user);
    } catch (e) {
      alert(e.message);
    }
  }
  async function signIn(e) {
    e.preventDefault();

    try {
      const response = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      );
      setUser(response.user);
      console.log(response.user);
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className={"signUpForm"}>
      <form onSubmit={signIn}>
        <h1>Sign in</h1>
        <input ref={emailRef} type="email" placeholder={"Email"} />
        <input ref={passwordRef} type="password" placeholder={"Password"} />
        <button type="submit">Sign In</button>
        <h4>
          <span className={"text--gray"}>New to netflix?</span>{" "}
          <span className="text--link" onClick={register}>
            Sign up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpForm;
