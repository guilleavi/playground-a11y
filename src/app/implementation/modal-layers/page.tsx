"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./components/ModalContent";

const ModalLayers = ({ id }: { id: string }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <main role="main">
      <article id={id} {...(showModal && { ["aria-hidden"]: true })}>
        <header>
          <h1>Modal Layers</h1>
        </header>
        <section>
          <h2>Disabling background content</h2>
          <p>
            When a modal gets open, the content in the background should stop
            being interactive.
          </p>
          <p>Ways to do that:</p>
          <ol>
            <li>
              <code>aria-hidden=&quot;true&quot;</code>
              and
              <code>tabindex=&quot;-1&quot;</code>
            </li>
            <li>inert + polyfill</li>
            <li>
              <code>display: none;</code>
            </li>
          </ol>
          <p>
            And the first interactive element inside the modal, has to get the
            focus automatically.
          </p>
          <button
            onClick={() => setShowModal(true)}
            tabIndex={showModal ? -1 : 0}
          >
            Show modal using a portal
          </button>
          {showModal &&
            createPortal(
              <ModalContent onClose={() => setShowModal(false)} />,
              document.body
            )}
        </section>
      </article>
    </main>
  );
};

export default ModalLayers;
