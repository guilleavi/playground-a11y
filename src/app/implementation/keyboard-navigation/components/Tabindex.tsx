import { useRef } from "react";
import ButtonSample from "@/components/ButtonSample/ButtonSample";

const Tabindex = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <section>
      <h2>tabindex</h2>
      <p>Make non-interactive elements focusable.</p>
      <ul>
        <li>
          <code>tabindex=&quot;0&quot;</code>: to make a non-interactive element
          focusable by keyboard and script.
        </li>
        <li>
          <code>tabindex=&quot;-1&quot;</code>: to remove the element from the
          tab navigation, you can still make it focused by script.
        </li>
        <li>
          <code>tabindex=&quot;99&quot;</code> (greater than 0):{" "}
          <span className="warn">NOT RECOMMENDED!</span> manually sets the tab
          order and moves the elements before to the natural tab order.
        </li>
      </ul>
      <menu>
        <ul>
          <li>
            <ButtonSample
              labelText="Button 1 - tabindex 99"
              labelTabIndex={0}
              buttonTabIndex={99}
            />
          </li>
          <li>
            <ButtonSample
              ref={buttonRef}
              labelText="Button 2 - tabindex -1"
              labelTabIndex={0}
              buttonTabIndex={-1}
            />
          </li>
          <li>
            <ButtonSample
              labelText="Button 3 - tabindex 98"
              labelTabIndex={0}
              buttonTabIndex={98}
            />
          </li>
          <li>
            <ButtonSample
              labelText="Button 4 - tabindex 97"
              labelTabIndex={0}
              buttonTabIndex={97}
            />
          </li>
          <li>
            <ButtonSample
              labelText="Button 5 - tabindex 96"
              labelTabIndex={0}
              buttonTabIndex={96}
            />
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                buttonRef.current?.focus();
              }}
            >
              Focus on Button 2 programatically
            </button>
          </li>
        </ul>
      </menu>
    </section>
  );
};

export default Tabindex;
