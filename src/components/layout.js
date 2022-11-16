import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { MdMenu } from "react-icons/md";

export default function Layout() {
  const auth = useAuth();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(prev => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  

  return (
    <div className="main-header">
      <header className="container layout">
        <div className="logo">
          <div className="company-logo"></div>
          <h1 className="logo-text">Buildit</h1>
          
        </div>
        <nav className="navBar">
          <div className={navbarOpen ? "links" : "hideMenu"}>
            <NavLink to="/" end className="link" onClick={() => closeMenu()}>
              Home
            </NavLink>
            <NavLink to="/about" className="link" onClick={() => closeMenu()}>
              About
            </NavLink>
            <NavLink to="/projects" className="link" onClick={() => closeMenu()}>
              Projects
            </NavLink>
            <NavLink to="/profile" className="link" onClick={() => closeMenu()}>
              Profile
            </NavLink>
            <NavLink to="/contact-us" className="link" onClick={() => closeMenu()}>
              Contact Us
            </NavLink>
            {!auth.user && (
              <NavLink to="/login" className="project-btn links-2">
                Login
              </NavLink>
            )}
          </div>
          
          <button className="toggle-btn" onClick={handleToggle}>
            {" "}
            {navbarOpen ? (
              <MdClose
                style={{ color: "#fff", width: "40px", height: "40px" }}
              />
            ) : (
              <MdMenu  style={{ color: "#7b7b7b", width: "40px", height: "40px" }}/>
            )}{" "}
          </button>
        </nav>
      </header>
    </div>
  );
}
