import "./Nav.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Nav(props) {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  function transitionNavBar() {
    if (window.scrollY > 100) setShow(true);
    else setShow(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav--black"}`}>
      <div className="nav__content">
        <div
          onClick={() => navigate("/")}
          className={`nav__logo-container ${!show && "nav__logo--bordered"}`}
        >
          {/*<img*/}
          {/*  className="nav__logo"*/}
          {/*  src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"*/}
          {/*  alt="night flix tv logo"*/}
          {/*/>*/}
          <h1 className="logo-text">NIGHTFLIX TV</h1>
        </div>
        <img
          onClick={() => navigate("/profile")}
          className="nav__avatar"
          src="https://t4.ftcdn.net/jpg/02/90/69/81/360_F_290698110_sjMP3qVdWlJnJfJuzhqGDhRCmTrR2jsl.jpg"
          alt="person avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
