import Link from "next/link";

const AccessibleDesign = () => {
  return (
    <main role="main">
      <article>
        <header>
          <h1>Designing Accessible Pages</h1>
          <p>
            See:{" "}
            <Link href="https://www.w3.org/WAI/tips/designing/">
              https://www.w3.org/WAI/tips/designing/
            </Link>
          </p>
        </header>
        <fieldset>
          <legend>Checklist</legend>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-design#check-1">
              Provide sufficient contrast between foreground and background
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-design#check-2">
              Don’t use color alone to convey information
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-design#check-3">
              Ensure that interactive elements are easy to identify
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-design#check-4">
              Provide clear and consistent navigation options
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-design#check-5">
              Ensure that form elements include clearly associated labels
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-design#check-6">
              Provide easily identifiable feedback
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-design#check-7">
              Use headings and spacing to group related content
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-design#check-8">
              Create designs for different viewport sizes
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-design#check-9">
              Include image and media alternatives in your design
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-design#check-10">
              Provide controls for content that starts automatically
            </Link>
          </label>
        </fieldset>
        <section>
          <h2 id="check-1">
            Provide sufficient contrast between foreground and background
          </h2>
          <p>
            Foreground text needs to have sufficient contrast with background
            colors. This includes text on images, background gradients, buttons,
            and other elements. This does not apply for logos, or incidental
            text, such as text that happens to be in a photograph.
          </p>
        </section>
        <section>
          <h2 id="check-2">Don’t use color alone to convey information</h2>
          <p>
            While color can be useful to convey information, color should not be
            the only way information is conveyed. When using color to
            differentiate elements, also provide additional identification that
            does not rely on color perception. For example, use an asterisk in
            addition to color to indicate required form fields, and use labels
            to distinguish areas on graphs.
          </p>
        </section>
        <section>
          <h2 id="check-3">
            Ensure that interactive elements are easy to identify
          </h2>
          <p>
            Provide distinct styles for interactive elements, such as links and
            buttons, to make them easy to identify. For example, change the
            appearance of links on mouse hover, keyboard focus, and touch-screen
            activation. Ensure that styles and naming for interactive elements
            are used consistently throughout the website.
          </p>
        </section>
        <section>
          <h2 id="check-4">Provide clear and consistent navigation options</h2>
          <p>
            Ensure that navigation across pages within a website has consistent
            naming, styling, and positioning. Provide more than one method of
            website navigation, such as a site search or a site map. Help users
            understand where they are in a website or page by providing
            orientation cues, such as breadcrumbs and clear headings.
          </p>
        </section>
        <section>
          <h2 id="check-5">
            Ensure that form elements include clearly associated labels
          </h2>
          <p>
            Ensure that all fields have a descriptive label adjacent to the
            field. For left-to-right languages, labels are usually positioned to
            the left or above the field, except for checkboxes and radio buttons
            where they are usually to the right. Avoid having too much space
            between labels and fields.
          </p>
        </section>
        <section>
          <h2 id="check-6">Provide easily identifiable feedback</h2>
          <p>
            Provide feedback for interactions, such as confirming form
            submission, alerting the user when something goes wrong, or
            notifying the user of changes on the page. Instructions should be
            easy to identify. Important feedback that requires user action
            should be presented in a prominent style.
          </p>
        </section>
        <section>
          <h2 id="check-7">
            Use headings and spacing to group related content
          </h2>
          <p>
            Use whitespace and proximity to make relationships between content
            more apparent. Style headings to group content, reduce clutter, and
            make it easier to scan and understand.
          </p>
        </section>
        <section>
          <h2 id="check-8">Create designs for different viewport sizes</h2>
          <p>
            Consider how page information is presented in different sized
            viewports, such as mobile phones or zoomed browser windows. Position
            and presentation of main elements, such as header and navigation can
            be changed to make best use of the space. Ensure that text size and
            line width are set to maximize readability and legibility.
          </p>
        </section>
        <section>
          <h2 id="check-9">
            Include image and media alternatives in your design
          </h2>
          <p>
            Provide a place in your design for alternatives for images and
            media. For example, you might need:
          </p>
          <ul>
            <li>Visible links to transcripts of audio</li>
            <li>Visible links to audio described versions of videos</li>
            <li>Text along with icons and graphical buttons</li>
            <li>Captions and descriptions for tables or complex graphs</li>
          </ul>
          <p>
            Work with content authors and developers to provide alternatives for
            non-text content.
          </p>
        </section>
        <section>
          <h2 id="check-10">
            Provide controls for content that starts automatically
          </h2>
          <p>
            Provide visible controls to allow users to stop any animations or
            auto-playing sound. This applies to carousels, image sliders,
            background sound, and videos.
          </p>
        </section>
      </article>
    </main>
  );
};

export default AccessibleDesign;
