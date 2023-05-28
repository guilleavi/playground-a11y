import { useEffect, useRef } from "react";
import styles from "./ModalContent.module.css";

const ModalContent = ({ onClose }: { onClose: () => void }) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <section className={styles["modal"]}>
      <p>I am a modal dialog</p>
      <p>See how the Close button is autofocused.</p>
      <button onClick={onClose} ref={ref}>
        Close
      </button>
    </section>
  );
};

export default ModalContent;
