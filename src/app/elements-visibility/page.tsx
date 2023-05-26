import ButtonWithCSSSample from "@/components/ButtonWithCSSSample/ButtonWithCSSSample"

const Space = () => <span className="space">[___]</span>
const NoSpace = () => <span className="no-space">[]</span>

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
`

const ElementsVisibility = () => {
  return (
    <main>
      <article>
        <header>
          <h1>Elements Visibility</h1>
          <p>Hidding elements with CSS</p>
        </header>

        <aside>
          <p className="note"><Space /> - Save element space inside the document</p>
          <p className="note"><NoSpace /> - DOES NOT save element space inside the document</p>
        </aside>

        <section>
          <h2>Keep in the Accessibility Tree</h2>
          <p className="note">
            NOT RECOMMENDED!
            Keeping an invisible element in the Accessibility Tree
            will make the Screen Reader to still read it.
          </p>
          <ol>
            <li>
              Setting <code>opacity 0;</code><Space />
              <ButtonWithCSSSample customStyles={{ opacity: "0" }} />
            </li>
            <li>
              Removing the element from the document flow.<NoSpace />
              <pre>
                <code>{visuallyHiddenCSSSnippet}</code>
              </pre>
              <ButtonWithCSSSample customStyles={{
                border: "0",
                clip: "rect(0 0 0 0)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: "0",
                position: "absolute",
                width: "1px"
              }} />
            </li>
          </ol>
        </section>

        <section>
          <h2>Remove from the Accessibility Tree</h2>
          <ol>
            <li>
              Setting <code>visibility: hidden;</code><Space />
              <ButtonWithCSSSample customStyles={{ visibility: "hidden" }} />
            </li>
            <li>
              Setting <code>display: none;</code><NoSpace />
              <ButtonWithCSSSample customStyles={{ display: "none" }} />
            </li>
          </ol>
        </section>

      </article>
    </main>
  )
}

export default ElementsVisibility