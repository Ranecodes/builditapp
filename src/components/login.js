import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth";
import image from "../assets/images/Bg.png"

export const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const TogglePassword = () => {
    if (password === "password") {
      setPassword("text");
    } else {
      setPassword("password");
    }
  };

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <section className="login-container" style={{background:"linear-gradient(42.43deg, #C6DBFF 0%, #E1EBFA 52.25%)", backgroundImage: `url(${image})`, backgroundSize:"cover"}} >
      <div className="login-content-container">
        <div className="login-content-form">
          <h1 style={{ textAlign: "center", fontSize: "24px" }}>Login</h1>
          <p style={{ textAlign: "center", color: "grey" }}>
            Welcome to Buildit!
          </p>
          <label for="username" style={{ paddingTop: "30px", color: "grey" }}>
            Username
          </label>
          <input type="text" onChange={(e) => setUser(e.target.value)} />
          <label for="password" style={{ paddingTop: "30px", color: "grey" }}>
            Password
          </label>
          <input
            type={password}
            onChange={handlePasswordChange}
            value={passwordInput}
          />
          <div className="checkbox">
            <input type="checkbox" onClick={TogglePassword} />
            Show Password
          </div>
          <button
            onClick={handleLogin}
            className="project-btn"
            style={{ height: "50px" }}
          >
            Login
          </button>
        </div>
        <div className="login-content-text">
          <h1 classname= "anim-1">Owner</h1>
          <h1 style={{opacity: "0.8"}} className="anim-2">And</h1>
          <h1 style={{opacity: "0.8"}} className="anim-3">Investor</h1>
          <h1 style={{opacity: "0.8"}} className="anim-4">With</h1>
          <h1 style={{opacity: "0.8"}} className="anim-5">A Reputation</h1>
        </div>
      </div>
    </section>
  );
};
