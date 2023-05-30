import Link from "next/link";

const Home = () => {
  return (
    <main>
      <h1>Accessibility</h1>
      <nav>
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
            <Link href={"./terminology"}>Terminology</Link>
          </li>
        </ul>
      </nav>
      <h2>A11y Fundamentals</h2>
      <nav>
        <ul>
          <li>
            <Link href={"./aria"}>ARIA</Link>
          </li>
          <li>
            <Link href={"./"}>Clear Layout and Design</Link>
          </li>
          <li>
            <Link href={"./color-contrast"}>Color Contrast</Link>
          </li>
          <li>
            <Link href={"./customizable-text"}>Customizable Text</Link>
          </li>
          <li>
            <Link href={"./elements-visibility"}>Elements Visibility</Link>
          </li>
          <li>
            <Link href={"./keyboard-navigation"}>Keyboard Navigation</Link>
          </li>
          <li>
            <Link href={"./"}>Large Links, Buttons, and Controls</Link>
          </li>
          <li>
            <Link href={"./modal-layers"}>Modal Layers</Link>
          </li>
          <li>
            <Link href={"./"}>Notifications and Feedback</Link>
          </li>
          <li>
            <Link href={"./"}>Speech Recognition</Link>
          </li>
          <li>
            <Link href={"./"}>Text to Speech</Link>
          </li>
          <li>
            <Link href={"./"}>Understandable Content</Link>
          </li>
          <li>
            <Link href={"./"}>Video Captions</Link>
          </li>
        </ul>
      </nav>
      <h2>A11y Guidelines</h2>
      <nav>
        <ul>
          <li>
            <Link href={"./guidelines/old-people"}>Old People</Link>
          </li>
        </ul>
      </nav>
      <h2>A11y Courses</h2>
      <nav>
        <ul>
          <li>
            <Link href={"https://www.w3.org/WAI/courses/foundations-course/"}>
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
      </nav>
    </main>
  );
};

export default Home;
