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
    <>
      <div className="profile">
        Welcome {auth.user}
        </div>
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
}