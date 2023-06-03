import Link from "next/link";

const AccessibleMarkup = () => {
  return (
    <main role="main">
      <article>
        <header>
          <h1>Coding Accessible Markup</h1>
          <p>
            See:{" "}
            <Link href="https://www.w3.org/WAI/tips/developing/">
              https://www.w3.org/WAI/tips/developing/
            </Link>
          </p>
        </header>
        <fieldset>
          <legend>Checklist</legend>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-markup#check-1">
              Associate a label with every form control
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-markup#check-2">
              Include alternative text for images
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-markup#check-3">
              Identify page language and language changes
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-markup#check-4">
              Use mark-up to convey meaning and structure
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-markup#check-5">
              Help users avoid and correct mistakes
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-markup#check-6">
              Reflect the reading order in the code order
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-markup#check-7">
              Write code that adapts to the user’s technology
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-markup#check-8">
              Provide meaning for non-standard interactive elements
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-markup#check-9">
              Ensure that all interactive elements are keyboard accessible
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-markup#check-10">
              Avoid CAPTCHA where possible
            </Link>
          </label>
        </fieldset>
        <section>
          <h2 id="check-1">Associate a label with every form control</h2>
          <p>
            Use a <code>for</code> attribute on the <code>label</code> element
            linked to the <code>id</code> attribute of the form element, or
            using WAI-ARIA attributes. In specific situations it may be
            acceptable to hide <code>label</code> elements visually, but in most
            cases labels are needed to help all readers understand the required
            input.
          </p>
        </section>
        <section>
          <h2 id="check-2">Include alternative text for images</h2>
          <p>
            Ensure that alternative text for images is added to all
            informational and functional images. Use empty alternative text,
            <code>alt=&quot;&quot;</code> for decorative images, or include them
            in the CSS instead. Text alternatives are usually provided by those
            responsible for written content.
          </p>
        </section>
        <section>
          <h2 id="check-3">Identify page language and language changes</h2>
          <p>
            Indicate the primary language of every page by using the lang
            attribute in the html tag, for example{" "}
            <code>html lang=&quot;en&quot;</code>. Use the <code>lang</code>{" "}
            attribute on specific elements when the language of the element
            differs from the rest of the page.
          </p>
        </section>
        <section>
          <h2 id="check-4">Use mark-up to convey meaning and structure</h2>
          <p>
            Use appropriate mark-up for headings, lists, tables, etc. HTML5
            provides additional elements, such as <code>nav</code> and{" "}
            <code>aside</code>, to better structure your content. WAI-ARIA roles
            can provide additional meaning, for example, using{" "}
            <code>role=&quot;search&quot;</code> to identify search
            functionality.
          </p>
        </section>
        <section>
          <h2 id="check-5">Help users avoid and correct mistakes</h2>
          <p>
            Provide clear instructions, error messages, and notifications to
            help users complete forms on your site. When an error occurs:
          </p>
          <ul>
            <li>Help users find where the problem is</li>
            <li>Provide specific, understandable explanations</li>
            <li>Suggest corrections</li>
          </ul>
          <p>
            Be as forgiving of format as possible when processing user input.
            For example, accept phone numbers that include spaces and delete the
            spaces as needed.
          </p>
        </section>
        <section>
          <h2 id="check-6">Reflect the reading order in the code order</h2>
          <p>
            Ensure that the order of elements in the code matches the logical
            order of the information presented. One way to check this is to
            remove CSS styling and review that the order of the content makes
            sense.
          </p>
        </section>
        <section>
          <h2 id="check-7">Write code that adapts to the user’s technology</h2>
          <p>
            Use responsive design to adapt the display to different zoom states
            and viewport sizes, such as on mobile devices and tablets. When font
            size is increased by at least 200%, avoid horizontal scrolling and
            prevent any clipping of content. Use progressive enhancement to help
            ensure that core functionality and content is available regardless
            of technology being used.
          </p>
        </section>
        <section>
          <h2 id="check-8">
            Provide meaning for non-standard interactive elements
          </h2>
          <p>
            Use WAI-ARIA to provide information on function and state for custom
            widgets, such as accordions and custom-made buttons. For example,
            role=&quot;navigation&quot; and aria-expanded=&quot;true&quot;.
          </p>
        </section>
        <section>
          <h2 id="check-9">
            Ensure that all interactive elements are keyboard accessible
          </h2>
          <p>
            Think about keyboard access, especially when developing interactive
            elements, such as menus, mouseover information, collapsable
            accordions, or media players. Use tabindex=&quot;0&quot; to add an
            element that does not normally receive focus, such as{" "}
            <code>div</code> or <code>span</code>, into the navigation order
            when it is being used for interaction. Use scripting to capture and
            respond to keyboard events.
          </p>
        </section>
        <section>
          <h2 id="check-10">Avoid CAPTCHA where possible</h2>
          <p>
            CAPTCHAs create problems for many people. There are other means of
            verifying that user input was generated by a human that are easier
            to use, such as automatic detection or interface interactions. If
            CAPTCHA really needs to be included, ensure that it is simple to
            understand and includes alternatives for users with disabilities,
            such as:
          </p>
          <ul>
            <li>Providing more than two ways to solve the CAPTCHAs</li>
            <li>
              Providing access to a human representative who can bypass CAPTCHA
            </li>
            <li>Not requiring CAPTCHAs for authorized users.</li>
          </ul>
        </section>
      </article>
    </main>
  );
};

export default AccessibleMarkup;
