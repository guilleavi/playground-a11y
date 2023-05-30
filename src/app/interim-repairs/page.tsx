import Link from "next/link";

const InterimRepairs = () => {
  return (
    <main>
      <header>
        <h1>Approaches for Interim Repairs</h1>
        <p>
          See:{" "}
          <Link href="https://www.w3.org/WAI/planning/interim-repairs/">
            https://www.w3.org/WAI/planning/interim-repairs/
          </Link>
        </p>
      </header>
      <section>
        <h2>Consider the Scope</h2>
        <p>
          You may not be able to address all the issues on every part of your
          website at once. To determine which parts you want to improve right
          away, and which to address in later stages, consider prioritizing:
        </p>
        <ul>
          <li>
            <strong>Key tasks</strong>, such as registration, search, submit, or
            checkout processes. Include all steps involved to complete each
            task.
          </li>
          <li>
            <strong>Key content</strong>, such as frequently accessed content
            and content that is relevant to people with disabilities.
          </li>
          <li>
            <strong>Reported content</strong>, that has known barriers; for
            example, from user comments submitted through the website feedback
            form.
          </li>
          <li>
            <strong>In-development content</strong>, such as areas of the
            website that are currently being redesigned, to avoid the creation
            of new barriers.
          </li>
        </ul>
        <p>
          Within your scope of repair, consider prioritizing what you repair
          first by focusing on:
        </p>
        <ul>
          <li>
            <strong>High-impact repairs</strong>
            <ul>
              <li>Appear on multiple web pages, such as navigation bars</li>
              <li>
                Appear on frequently-used web pages, such as the home page
              </li>
              <li>
                Are critical to complete processes, such as purchase forms
              </li>
              <li>
                Web Content Accessibility Guidelines (WCAG) Level A issues
              </li>
            </ul>
          </li>
          <li>
            <strong>Low-effort repairs</strong>
            <ul>
              <li>Require less time, cost, or skills to repair</li>
              <li>Requires less testing and validation</li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <h2>Set your Accessibility Target Level</h2>
        <p>
          The generally accepted target for accessibility is the latest version
          of{" "}
          <Link href="https://www.w3.org/WAI/standards-guidelines/wcag/">
            Web Content Accessibility Guidelines (WCAG)
          </Link>{" "}
          Level AA.
        </p>
        <p>
          You may need to define a phased approach with different dates for
          different levels. For example, meet particular WCAG success criteria
          in the next release, and meet all Level A and Level AA success
          criteria in the following release.
        </p>
        <p>
          Note that in some cases, some Level AAA success criteria may be fairly
          easy to meet. For example, refining appropriate link text (2.4.4,
          Level A) and heading structure (2.4.10, Level AAA) may be easy to
          address together when revising content.
        </p>
      </section>
    </main>
  );
};

export default InterimRepairs;
