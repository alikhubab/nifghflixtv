import "./Nav.css";
import { useEffect, useState } from "react";
function Nav(props) {
  const [show, setShow] = useState(true);

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
        <img
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="night flix tv logo"
        />
        <img
          className="nav__avatar"
          src="https://t4.ftcdn.net/jpg/02/90/69/81/360_F_290698110_sjMP3qVdWlJnJfJuzhqGDhRCmTrR2jsl.jpg"
          alt="person avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
