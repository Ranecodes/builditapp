import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";


export default function Layout() {
  const auth = useAuth();



  return (
  
    <div className="main-header">
     <header className="container layout">
   <div className="logo">
        <div className="company-logo"></div>
        <h1 className="logo-text">Buildit</h1>
      </div>
      <nav className="navBar">
        <div className="links">
        <NavLink to="/" end className="link">
          Home
        </NavLink>
        <NavLink to="/users" className="link">
          Contact Us
        </NavLink>
        <NavLink to="/about" className="link">
          About
        </NavLink>
        <NavLink to="/projects" className="link">Projects</NavLink>
        <NavLink to="/profile" className="link">Profile</NavLink>
        

        </div>
      {/* <button className="project-btn">Need a project?</button> */}
      {!auth.user && <NavLink to="/login" className="project-btn">Login</NavLink>}
      </nav>
    </header>
   </div>

  );
}
