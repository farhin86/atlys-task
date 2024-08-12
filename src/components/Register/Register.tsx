import { setUserLoggedIn } from "../../auth";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import "./Register.css";

interface Props {
  onLoginClick: () => void;
  onRegisterationComplete: () => void;
}

export function Register({ onLoginClick, onRegisterationComplete }: Props) {
  return (
    <div className="register-wrapper">
      <div className="welcome">SIGN UP</div>
      <h2 className="title">Create an account to continue</h2>
      <div className="register-input-section">
        <Input label="Email" type="text" placeholder="Enter your email" />
        <Input
          label="Username"
          type="text"
          placeholder="Choose a preferred username"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Choose a strong password"
        />
      </div>
      <Button
        className="register-button"
        onClick={() => {
          setUserLoggedIn();
          onRegisterationComplete();
        }}
      >
        Continue
      </Button>
      <div className="login">
        <div className="login-txt">Already have an account?</div>
        <button className="login-btn" onClick={onLoginClick}>
          Login →
        </button>
      </div>
    </div>
  );
}
