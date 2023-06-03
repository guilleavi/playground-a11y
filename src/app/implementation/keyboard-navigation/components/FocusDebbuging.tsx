const focusedElementDebuggingCode = `
document.body.addEventListener('focusin', (event) => {
  console.log(document.activeElement)
})`;

const focusedElementDebuggingComment = `
// It logs the current focused element in the console.`;

const FocusDebbuging = () => {
  return (
    <section>
      <h2>Focused Element Debugging</h2>
      <pre>
        <code className="comment">{focusedElementDebuggingComment}</code>
        <code>{focusedElementDebuggingCode}</code>
      </pre>
    </section>
  );
};

export default FocusDebbuging;
