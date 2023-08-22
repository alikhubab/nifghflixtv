import React from "react";
import PropTypes from "prop-types";
import "./ProfileScreen.css";
import Nav from "../components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth, signOut } from "../services/firebase";
ProfileScreen.propTypes = {};

function ProfileScreen(props) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  function handleSignOut() {
    signOut(auth);
  }
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profiles</h1>
        <div className="profileScreen__info">
          <img
            src="https://t4.ftcdn.net/jpg/02/90/69/81/360_F_290698110_sjMP3qVdWlJnJfJuzhqGDhRCmTrR2jsl.jpg"
            alt="person avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>

              <button
                className="profileScreen__signOut"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
