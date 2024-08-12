import { ReactNode, useEffect } from "react";
import "./modal.css";

interface ModalProps {
  children: ReactNode;
  onRequestClose: () => void;
}

export function Modal({ children, onRequestClose }: ModalProps) {
  useEffect(() => {
    // disable overflow on body when modal is open,
    // so the items behind modal does not scroll
    document.body.style.overflow = "hidden";

    return () => {
      // enable body scroll on unmount
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="modal-container">
      <div className="backdrop" onClick={onRequestClose}></div>
      <div className="modal">
        <button className="close-button" onClick={onRequestClose}>
          <img src="./images/cross.svg" />
        </button>
        {children}
      </div>
    </div>
  );
}
