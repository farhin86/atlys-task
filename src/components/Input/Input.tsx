import { ComponentProps } from "react";
import "./Input.css";

interface Props extends ComponentProps<"input"> {
  label?: string;
}

export function Input({ label, ...inputProps }: Props) {
  const inputType = inputProps["type"];

  return (
    <label>
      {label && <div className="label">{label}</div>}
      <div className="input-wrapper">
        <input className="input" type="text" {...inputProps} />
        {inputType === "password" && (
          <img className="eye" src="./images/eye.svg" />
        )}
      </div>
    </label>
  );
}
