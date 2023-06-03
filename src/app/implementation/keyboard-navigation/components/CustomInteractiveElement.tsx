import styles from "./CustomInteractiveElement.module.css";

const InteractiveElementCode = `
<div
  tabIndex={0}
  role="button"
  aria-label="Close"
  onClick={clickHandler}
  onKeyDown={keydownHandler}
>
</div>
`;

const CustomInteractiveElement = () => {
  const clickHandler = () => console.log("Custom Interactive Button activated");
  const keydownHandler = () =>
    console.log("Custom Interactive Button activated");

  return (
    <section>
      <h2>Custom Interactive Element</h2>
      <p>To make it fully interactive and accessible it needs:</p>
      <ul>
        <li>ARIA Role</li>
        <li>tabindex=&quote;0&quote;</li>
        <li>aria-label</li>
        <li>handle on-click and on-key-down events</li>
        <li>show focus with styles</li>
      </ul>

      <div
        className={styles["custom-button"]}
        tabIndex={0}
        role="button"
        aria-label="Close"
        onClick={clickHandler}
        onKeyDown={keydownHandler}
      >
        Custom Interactive Button
      </div>

      <pre>
        <code>{InteractiveElementCode}</code>
      </pre>
    </section>
  );
};

export default CustomInteractiveElement;
