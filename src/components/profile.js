import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
  return (
    <section className="profile-container">
      <div className="profile-main-text">
        Welcome {auth.user}!<span className="profile-main-text-2">You are logged in!</span> 
      </div>
      <button onClick={handleLogout} className="profile-btn profile-btn-res">Log Out</button>
    </section>
  );
}