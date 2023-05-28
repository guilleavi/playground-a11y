const ModalLayers = ({ id }: { id: string }) => {
  return (
    <article id={id}>
      <header>
        <h2>Modal Layers: disabling background content</h2>
      </header>
      <section>
        <p>
          When a modal gets open, the content in the background should stop
          being interactive.
        </p>
        <p>Ways to do that:</p>
        <ol>
          <li>
            <code>aria-hidden=&quote;true&quote;</code>
            and
            <code>tabindex=&quote;-1&quote;</code>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default ModalLayers;
