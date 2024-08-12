import { ComponentProps } from "react";
import "./Button.css";

export function Button({ children, ...props }: ComponentProps<"button">) {
  return (
    <button {...props} className={`button ${props.className || ""}`}>
      {children}
    </button>
  );
}
