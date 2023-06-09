import Link from "next/link";

const Home = () => {
  return (
    <main role="main">
      <article>
        <header>
          <h1>Accessibility</h1>
        </header>
        <nav role="navigation" aria-labelledby="index-heading">
          <h2 id="index-heading">Index</h2>
          <ul>
            <li>
              <Link href={"./a11y-principles"}>A11y Principles</Link>
            </li>
            <li>
              <Link href={"./interim-repairs"}>
                Approaches for Interim Repairs
              </Link>
            </li>
            <li>
              Guidelines
              <ul>
                <li>
                  <Link href={"./guidelines/page-structure"}>
                    Page Structure
                  </Link>
                </li>
                <li>
                  <Link href={"./guidelines/menus"}>Menus</Link>
                </li>
                <li>
                  <Link href={"./guidelines/old-people"}>Old People</Link>
                </li>
                <li>
                  <Link href={"https://www.w3.org/WAI/media/av/"}>
                    Audio and Video Media
                  </Link>
                  (external link)
                </li>
              </ul>
            </li>
            <li>
              Checklists
              <ul>
                <li>
                  <Link href={"./checklist/accessible-content"}>
                    Writing accessible content
                  </Link>
                </li>
                <li>
                  <Link href={"./checklist/accessible-design"}>
                    Designing accessible pages
                  </Link>
                </li>
                <li>
                  <Link href={"./checklist/accessible-markup"}>
                    Coding accessible markup
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              Implementation
              <ul>
                <li>
                  <Link href={"./implementation/elements-visibility"}>
                    Elements Visibility
                  </Link>
                </li>
                <li>
                  <Link href={"./implementation/keyboard-navigation"}>
                    Keyboard Navigation
                  </Link>
                </li>
                <li>
                  <Link href={"./implementation/modal-layers"}>
                    Modal Layers
                  </Link>
                </li>
                <li>
                  Custom Components
                  <ul>
                    <li>
                      <Link
                        href={"./implementation/custom-components/dropdown"}
                      >
                        Dropdown
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Courses
              <ul>
                <li>
                  <Link
                    href={"https://www.w3.org/WAI/courses/foundations-course/"}
                  >
                    Digital Accessibility Foundations Free Online Course
                  </Link>
                </li>
                <li>
                  <Link href={"https://www.w3.org/WAI/courses/list/"}>
                    Course List - Digital Accessibility Education, Training, and
                    Certification
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"./terminology"}>Terminology</Link>
            </li>
          </ul>
        </nav>
      </article>
    </main>
  );
};

export default Home;
