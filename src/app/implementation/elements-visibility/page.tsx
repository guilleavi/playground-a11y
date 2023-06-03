import ButtonSample from "@/components/ButtonSample/ButtonSample";
const Space = () => <span className="space">[___]</span>;
const NoSpace = () => <span className="no-space">[]</span>;

const visuallyHiddenCSSSnippet = `
.visually-hidden { 
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
`;

const ElementsVisibility = () => {
  return (
    <main role="main">
      <article>
        <header>
          <h1>Elements Visibility</h1>
        </header>

        <h2>Hidding elements with CSS</h2>
        <aside className="references">
          <p className="note">
            <Space /> - Save element space inside the document
          </p>
          <p className="note">
            <NoSpace /> - DOES NOT save element space inside the document
          </p>
        </aside>

        <section>
          <h3>Keep in the Accessibility Tree</h3>
          <p className="note">
            <span className="warn">NOT RECOMMENDED!</span> Keeping an invisible
            element in the Accessibility Tree will make the Screen Reader to
            still read it.
          </p>
          <ol>
            <li>
              Setting <code>opacity 0;</code>
              <Space />
              <ButtonSample customStyles={{ opacity: "0" }} />
            </li>
            <li>
              Removing the element from the document flow.
              <NoSpace />
              <pre>
                <code>{visuallyHiddenCSSSnippet}</code>
              </pre>
              <ButtonSample
                customStyles={{
                  border: "0",
                  clip: "rect(0 0 0 0)",
                  height: "1px",
                  margin: "-1px",
                  overflow: "hidden",
                  padding: "0",
                  position: "absolute",
                  width: "1px",
                }}
              />
            </li>
          </ol>
        </section>

        <section>
          <h3>Remove from the Accessibility Tree</h3>
          <ol>
            <li>
              Setting <code>visibility: hidden;</code>
              <Space />
              <ButtonSample customStyles={{ visibility: "hidden" }} />
            </li>
            <li>
              Setting <code>display: none;</code>
              <NoSpace />
              <ButtonSample customStyles={{ display: "none" }} />
            </li>
          </ol>
        </section>
      </article>
    </main>
  );
};

export default ElementsVisibility;
