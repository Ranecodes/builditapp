import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth";

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
    <section className="login-container">
      <div className="login-content-container">
        <div className="login-content-form">
          <h1 style={{textAlign: "center"}}>Login</h1>
          <p style={{textAlign: "center"}}>Welcome to Buildit!</p>
          <label for="username" style={{paddingTop: "30px"}}>Username</label>
          <input type="text" onChange={(e) => setUser(e.target.value)} />
          <label for="password" style={{paddingTop: "30px"}}>Password</label>
          <input
            type={password}
            onChange={handlePasswordChange}
            value={passwordInput}
          />
          <div className="checkbox">
          <input type="checkbox" onClick={TogglePassword}  />Show Password
          </div>
          <button onClick={handleLogin} className="project-btn">Login</button>
        </div>
        
      </div>
    </section>
  );
};
