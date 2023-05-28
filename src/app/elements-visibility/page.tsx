import Link from "next/link";
import HiddingElementsWithCSS from "./components/HiddingElementsWithCSS";
import ModalLayers from "./components/ModalLayers";

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
            <li>
              <Link href="/elements-visibility/#modal-layers">
                Modal Layers
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <hr />
      <HiddingElementsWithCSS id="hidding-elements-with-css" />
      <hr />
      <ModalLayers id="modal-layers" />
    </main>
  );
};

export default ElementsVisibility;
