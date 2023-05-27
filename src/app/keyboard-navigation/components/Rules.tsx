const Rules = () => {
  return (
    <section>
      <h2>Rules</h2>
      <ul>
        <li>All interactive elements must be focusable.</li>
        <li>All focusable elements must be interactive.</li>
        <li>
          All interactive elements must be able to be activated by keyboard.
        </li>
        <li>All focused elements must have focus styling.</li>
        <li>
          Keyboard focus should not get trapped in any part of the content.
        </li>
      </ul>
    </section>
  );
};

export default Rules;
