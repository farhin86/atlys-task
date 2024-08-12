import { useNavigate } from "react-router-dom";
import { Register } from "../../components/Register/Register";
import "./register.css";
import { LoginRegisterIcon } from "../../components/Icons";

export function RegisterPage() {
  const navigate = useNavigate();
  return (
    <div className="register-page">
      <LoginRegisterIcon />
      <Register
        onRegisterationComplete={() => {
          navigate("/");
        }}
        onLoginClick={() => {
          navigate("/login");
        }}
      />
    </div>
  );
}
