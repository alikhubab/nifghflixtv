import React, { useState } from "react";
import PropTypes from "prop-types";
import "./LoginScreen.css";
import SignUpForm from "../components/SignUpForm";

LoginScreen.propTypes = {};

function LoginScreen(props) {
  const [isSignInVisible, setIsSignInVisible] = useState(false);

  function showSignInForm() {
    setIsSignInVisible(true);
  }
  return (
    <div className="loginScreen">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="night flix tv logo"
        className="loginScreen__logo"
      />
      <button className="loginScreen__button" onClick={showSignInForm}>
        Sign In
      </button>
      <div className="loginScreen__gradient"></div>
      <div className="loginScreen__body">
        {isSignInVisible ? (
          <SignUpForm />
        ) : (
          <>
            <h1>Unlimited Films, Tv programmes and more</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder={"Email Address"} />
                <button
                  className="loginScreen__btnGetStarted"
                  onClick={showSignInForm}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
