import Link from "next/link";

const A11yPrinciples = () => {
  return (
    <main role="main">
      <article>
        <header>
          <h1>A11y Principles</h1>
          <p>
            See:{" "}
            <Link href="https://www.w3.org/WAI/fundamentals/accessibility-principles/">
              https://www.w3.org/WAI/fundamentals/accessibility-principles/
            </Link>
          </p>
        </header>
        <section>
          <h2>Perceivable information and user interface</h2>
          <ul>
            <li>Text alternatives for non-text content</li>
            <li>Captions and other alternatives for multimedia</li>
            <li>Content can be presented in different ways</li>
            <li>Content is easier to see and hear</li>
          </ul>
        </section>
        <section>
          <h2>Operable user interface and navigation</h2>
          <ul>
            <li>Functionality is available from a keyboard</li>
            <li>Users have enough time to read and use the content</li>
            <li>Content does not cause seizures and physical reactions</li>
            <li>
              Users can easily navigate, find content, and determine where they
              are
            </li>
            <li>Users can use different input modalities beyond keyboard</li>
          </ul>
        </section>
        <section>
          <h2>Understandable information and user interface</h2>
          <ul>
            <li>Text is readable and understandable</li>
            <li>Content appears and operates in predictable ways</li>
            <li>Users are helped to avoid and correct mistakes</li>
          </ul>
        </section>
        <section>
          <h2>Robust content and reliable interpretation</h2>
          <ul>
            <li>Content is compatible with current and future user tools</li>
          </ul>
        </section>
      </article>
    </main>
  );
};

export default A11yPrinciples;
