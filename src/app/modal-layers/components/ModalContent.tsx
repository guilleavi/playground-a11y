import styles from "./ModalContent.module.css";

const ModalContent = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={styles["modal"]}>
      <div>I am a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ModalContent;
