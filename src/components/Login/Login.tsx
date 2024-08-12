import { setUserLoggedIn } from "../../auth";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import "./Login.css";
interface Props {
  onRegisterClick: () => void;
  onLoginComplete: () => void;
}

export function Login({ onRegisterClick, onLoginComplete }: Props) {
  return (
    <div className="login-wrapper">
      <div className="welcome">WELCOME BACK</div>
      <h2 className="title">Log into your account</h2>
      <div className="login-input-section">
        <Input
          label="Email or Username"
          type="text"
          placeholder="Enter your password"
        />
        <div className="password-wrapper">
          <Input
            label="Password"
            type="password"
            placeholder="Enter your email or username"
          />
          <span className="forgot-password"> Forgot password? </span>
        </div>
      </div>
      <Button
        className="login-button"
        onClick={() => {
          setUserLoggedIn();
          onLoginComplete();
        }}
      >
        Login now
      </Button>
      <div className="register">
        <div className="register-txt">Not registered yet?</div>
        <button className="register-btn" onClick={onRegisterClick}>
          Register →
        </button>
      </div>
    </div>
  );
}
