import Link from "next/link";
import HiddingElementsWithCSS from "./components/HiddingElementsWithCSS";

const ElementsVisibility = () => {
  return (
    <main>
      <header>
        <h1>Elements Visibility</h1>
      </header>

      <aside>
        <nav>
          <ul>
            <li>
              <Link href="/elements-visibility/#hidding-elements-with-css">
                Hidding Elements With CSS
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <hr />
      <HiddingElementsWithCSS id="hidding-elements-with-css" />
    </main>
  );
};

export default ElementsVisibility;
