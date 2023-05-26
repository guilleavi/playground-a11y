const focusedElementDebuggingCode = `
document.body.addEventListener('focusin', (event) => {
  console.log(document.activeElement)
})`

const focusedElementDebuggingComment = `
// It logs the current focused element in the console.`

export default function KeyboardNavigation() {
  return (
    <main>
      <article>
        <header>
          <h1>Keyboard Navigation</h1>
        </header>

        <figure>
          <figcaption>
            Focused Element Debugging
          </figcaption>
          <pre>
            <code className="comment">
              {focusedElementDebuggingComment}
            </code>
            <code>
              {focusedElementDebuggingCode}
            </code>
          </pre>
        </figure>

      </article>
    </main>
  )
}