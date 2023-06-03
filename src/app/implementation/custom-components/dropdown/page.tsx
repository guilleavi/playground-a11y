"use client";
import { useRef, useState, KeyboardEvent, useEffect } from "react";
import styles from "./page.module.css";

interface CustomDropdownProps {
  activatorText: string;
  items: Array<{ text: string; url: string }>;
}

const CustomDropdown = ({
  activatorText = "Dropdown",
  items = [
    { text: "item 1", url: "test.com" },
    { text: "item 2", url: "test.com" },
    { text: "item 3", url: "test.com" },
  ],
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);

  // A11Y: close dropdown by keyboard
  const handleOnKeyUp = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = ({ target }: MouseEvent) => {
    if (
      (dropdownListRef.current! as Element).contains(target as Element) ||
      (activatorRef.current! as Element).contains(target as Element)
    ) {
      return;
    }

    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      // A11y: set focus on first item when dropdown is opened
      if (dropdownListRef) {
        (dropdownListRef.current! as Element).querySelector("a")?.focus();
      }

      // A11y: close dropdown when user click outside
      document.addEventListener("mouseup", handleClickOutside);
    } else {
      document.removeEventListener("mouseup", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <main>
      <h1>Custom Dropdown</h1>
      <section>
        <div className={styles["dropdown-wrap"]} onKeyUp={handleOnKeyUp}>
          <button
            className={styles["dropdown-activator"]}
            aria-controls="dropdown1" /* A11y: this button controls the elements with this id */
            aria-haspopup="true" /* A11y: this button popups other elements */
            data-testid="dropdown-activator"
            ref={activatorRef}
            onClick={handleOnClick}
          >
            {activatorText}
          </button>
          <ul
            className={`${styles["dropdown-itemList"]} ${
              isOpen && styles["active"]
            }`}
            id="dropdown1"
            role="list" /* A11y: this will make the screen reader to announce how many items are in the list (Safari) */
            data-testid="dropdown-itemList"
            ref={dropdownListRef}
          >
            {items.map((item, index) => {
              return (
                <li key={index} role="listitem">
                  <a href={item.url}>{item.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default CustomDropdown;
