import { useNavigate } from "react-router-dom";
import { Login } from "../../components/Login/Login";
import "./login.css";
import { LoginRegisterIcon } from "../../components/Icons";

export function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="login-page">
      <LoginRegisterIcon />
      <Login
        onLoginComplete={() => {
          navigate("/");
        }}
        onRegisterClick={() => {
          navigate("/register");
        }}
      />
    </div>
  );
}
