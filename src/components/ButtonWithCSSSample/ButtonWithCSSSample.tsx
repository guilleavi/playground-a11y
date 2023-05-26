import { CSSProperties } from "react"
import styles from './ButtonWithCSSSample.module.css'

const ButtonWithCSSSample = (props: { customStyles: CSSProperties }) => {
  const { customStyles } = props
  return (
    <div className={styles['sample']}>
      <label htmlFor="button-sample">Sample:</label>
      <span>
        <button
          id="button-sample"
          type="button"
          style={customStyles}
        >
          Test
        </button>
      </span>
    </div>)
}

export default ButtonWithCSSSample