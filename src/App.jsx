import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { useAuthContext, AuthContext } from "./auth/context";
import { auth } from "./services/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
import Payment from "./components/Payment";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { uid, email } = user;
        return dispatch(
          login({
            uid,
            email,
          }),
        );
      }
      dispatch(logout());
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <AuthContext.Provider value={{ user }}>
        <Router>
          <Routes>
            {!user ? (
              <Route path={"/*"} element={<LoginScreen />} />
            ) : (
              <>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
                <Route path="/payment" element={<Payment />} />
              </>
            )}
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
