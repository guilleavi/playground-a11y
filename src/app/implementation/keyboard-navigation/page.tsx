"use client";
import Rules from "./components/Rules";
import Tabindex from "./components/Tabindex";
import FocusDebbuging from "./components/FocusDebbuging";
import CustomInteractiveElement from "./components/CustomInteractiveElement";

export default function KeyboardNavigation() {
  return (
    <main>
      <article>
        <header>
          <h1>Keyboard Navigation</h1>
        </header>

        <Rules />
        <Tabindex />
        <CustomInteractiveElement />
        <FocusDebbuging />
      </article>
    </main>
  );
}
