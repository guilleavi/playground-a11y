import { useEffect, useRef } from "react";
import styles from "./ModalContent.module.css";

const ModalContent = ({ onClose }: { onClose: () => void }) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div className={styles["modal"]}>
      <div>I am a modal dialog</div>
      <button onClick={onClose} ref={ref}>
        Close
      </button>
    </div>
  );
};

export default ModalContent;
