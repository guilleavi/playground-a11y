import { CSSProperties, forwardRef } from "react";
import styles from "./ButtonSample.module.css";

interface ButtonSampleProps {
  buttonTabIndex?: number;
  customStyles?: CSSProperties;
  labelTabIndex?: number;
  labelText?: string;
}

type Ref = HTMLButtonElement;

const ButtonSample = forwardRef<Ref, ButtonSampleProps>(function ButtonSample(
  { customStyles, buttonTabIndex = 0, labelTabIndex = 0, labelText = "Sample" },
  ref
) {
  return (
    <div className={styles["sample"]}>
      <label htmlFor="button-sample" tabIndex={labelTabIndex}>
        {labelText}:
      </label>
      <span>
        <button
          id="button-sample"
          ref={ref}
          type="button"
          tabIndex={buttonTabIndex}
          style={customStyles}
        >
          Test
        </button>
      </span>
    </div>
  );
});

export default ButtonSample;
