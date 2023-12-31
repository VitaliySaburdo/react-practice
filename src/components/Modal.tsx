import { useEffect } from "react";
import cross from "../assets/cross.png";

type ModalProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ onClick, children }) => {
  useEffect(() => {
    const handleEscDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClick();
      }
    };
    window.addEventListener("keydown", handleEscDown);
    disableBodyScroll();
    return () => {
      window.removeEventListener("keydown", handleEscDown);
      enableBodyScroll();
    };
  }, [onClick]);

  function disableBodyScroll() {
    document.body.style.overflow = "hidden";
  }
  function enableBodyScroll() {
    document.body.style.overflow = "auto";
  }

  const handleBackdropClick = () => {
    onClick();
  };

  return (
    <>
      <div className="Overlay" onClick={handleBackdropClick}>
        <div className="Modal" onClick={(e) => e.stopPropagation()}>
          {/* <button onClick={handleBackdropClick} type="button" style={{display: 'flex', width: "20px", height: "20px"}}>
            <img src={cross} alt="cross" width={20} />
          </button> */}
          {children}
        </div>
      </div>
    </>
  );
};
