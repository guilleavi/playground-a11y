const OldPeople = () => {
  return (
    <main>
      <article>
        <header>
          <h1>Old People A11y Guideline</h1>
          <p>Devs Guidelines</p>
          <p>
            See:{" "}
            <a href="https://www.w3.org/WAI/older-users/developing/">
              https://www.w3.org/WAI/older-users/developing/
            </a>
          </p>
          <p>Percentage of old people with different disabilities</p>
          <p>
            See:{" "}
            <a href="https://www.w3.org/WAI/older-users/literature/">
              https://www.w3.org/WAI/older-users/literature/
            </a>
          </p>
        </header>

        <ul>
          <li>
            Perceivable information and user interface
            <ul>
              <li>Text Size</li>
              <li>Text style and text layout</li>
              <li>Color contrast</li>
              <li>Multimedia</li>
              <li>Text-to-speech</li>
              <li>CAPTCHA</li>
            </ul>
          </li>
          <li>
            Operable user interface and navigation
            <ul>
              <li>Links</li>
              <li>Navigation and location</li>
              <li>Mouse use</li>
              <li>Keyboard use and tabbing</li>
              <li>Distractions</li>
              <li>Sufficient time</li>
            </ul>
          </li>
          <li>
            Understandable information and user interface
            <ul>
              <li>Page organization</li>
              <li>Understandable language</li>
              <li>Consistent navigation and labeling</li>
              <li>Pop-ups and new windows</li>
              <li>Page refresh and updates</li>
              <li>Instructions and input assistance</li>
              <li>Error prevention and recovery for forms</li>
            </ul>
          </li>
          <li>
            Robust content and reliable interpretation
            <ul>
              <li>Older equipment/software</li>
            </ul>
          </li>
        </ul>
      </article>
    </main>
  );
};

export default OldPeople;
