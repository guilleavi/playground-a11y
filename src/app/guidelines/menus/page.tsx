import Link from "next/link";

const Menus = () => {
  return (
    <main>
      <header>
        <h1>Menus</h1>
        <p>
          See:{" "}
          <Link href="https://www.w3.org/WAI/tutorials/menus/structure/">
            https://www.w3.org/WAI/tutorials/menus/structure/
          </Link>
        </p>
      </header>
      <article>
        <section>
          <h2>Structure</h2>
          <h3>Menu Representation</h3>
          <ul>
            <li>
              <strong>Unordered List: </strong>use when the menu items are not
              in a specific order. Most types of menus, such as website
              navigation, fall in this category.
            </li>
            <li>
              <strong>Ordered List: </strong>use when the sequence of the menu
              items is important.
            </li>
          </ul>
          <h3>Identify Menus</h3>
          <p>
            Identify the menu, ideally using the HTML5 <code>nav</code> element
            to allow users access to the menu directly.
          </p>
          <h3>Label Menus</h3>
          <p>
            Label menus to make them easier to find and understand. Labels
            should be short but descriptive, to allow users to distinguish
            between multiple menus on a web page. Use a heading,{" "}
            <code>aria-label</code>, or
            <code>aria-labelledby</code> to provide the label.
          </p>
          <h3>Indicate the Current Item</h3>
          <p>
            Use markup to indicate the current item of a menu, such as the
            current page on a website, to improve orientation in the menu.
          </p>
          <ul>
            <li>
              <p>
                <strong>Using invisible text: </strong>
                provide an invisible label that is read aloud to screen reader
                users and used by other assistive technologies to mark the
                current item which allows custom label text. Remove the anchor,
                so users cannot interact with the current item. That avoids
                misunderstandings and emphasizes that the current menu item is
                active.
              </p>
              <p>
                In the following example, the menu item has the invisible text
                “Current Page:” and the <code>a</code> element is replaced by a{" "}
                <code>span</code> with a class current:
              </p>
              <pre>
                <code>
                  {`
                  <li>
                    <span class="current">
                      <span class="visuallyhidden">Current Page: </span>
                      Space Bears
                    </span>
                  </li>
                `}
                </code>
              </pre>
            </li>
            <li>
              <p>
                <strong>Using WAI-ARIA: </strong>Use the
                aria-current=&quot;page&quot; attribute to indicate the current
                page in the menu. This technique is particularly useful when the
                anchor cannot be removed from the HTML.
              </p>
              <p>
                In the following example the link in the navigation points to
                the main content of the page.
              </p>
              <pre>
                <code>
                  {`
                  <li>
                    <a href="#main" aria-current="page">
                      Space Bears
                    </a>
                  </li>
                  `}
                </code>
              </pre>
            </li>
          </ul>
        </section>
        <section>
          <h2>Menu Styling</h2>
          <h3>General Considerations</h3>
          <ul>
            <li>
              <p>
                <strong>Location: </strong>display the menu where the target
                audience of the website expects it. For example, on websites,
                the main navigation menu is commonly located either vertically
                on the left of the pages (in left-to-right languages), or
                horizontally across the top. Application menus are usually
                expected horizontally across the top.
              </p>
            </li>
            <li>
              <p>
                <strong>Identification: </strong>ensure that menus and their
                items are identifiable as such.
              </p>
              <p>
                Consider making the label of menus visible to everyone. For
                example, in these tutorials, the “Menus Tutorial”, “All
                Tutorials”, “On this page” are menu labels provided as visible
                headings that are available for all users.
              </p>
            </li>
            <li>
              <p>
                <strong>Readability: </strong>ensure appropriate sizing of menus
                and menu items to fit all text. The menu size should also adapt
                to varying text sizes, to accommodate languages with longer
                words and people who need larger text.{" "}
                <strong>
                  Where possible avoid all uppercase text, line breaks, and
                  hyphenation
                </strong>
                , as these are often distracting and hard to read.
              </p>
            </li>
            <li>
              <p>
                <strong>Size: </strong>Provide sufficient white space, like
                padding, to support people with reduced dexterity and small
                touch screens on mobile devices. At the same time, make sure
                that menus do not overlap themselves and other content of the
                page when users increase the text size or zoom the page.
              </p>
            </li>
          </ul>
          <h3>Menu Items</h3>
          <p>
            Convey menu items and their states by using color and other styling
            options. Don’t rely on color alone as some users will be unable to
            perceive such changes. For example, alter the shape of a menu item,
            or add an icon, in addition to changing its color when it is
            selected.
          </p>
          <ul>
            <li>
              <p>
                <strong>Default state: </strong>use distinct styling to visually
                indicate menu items as regions of the page that can be
                activated. However, avoid exaggerated text decoration, such as
                words in upper case or small caps, as these make text harder to
                read.
              </p>
            </li>
            <li>
              <p>
                <strong>Hover and Focus states: </strong>change hovered or
                focused menu items, which gives users visual guidance when
                navigating the menu.
              </p>
            </li>
            <li>
              <p>
                <strong>Active state: </strong>indicate the menu item that was
                activated through clicking, tapping, or keyboard selection.
                Users can identify unintended activation, for instance when they
                have clicked on the wrong menu item.
              </p>
            </li>
            <li>
              <p>
                <strong>Current state: </strong>visually indicate the current
                menu item.
              </p>
            </li>
            <li>
              <p>
                <strong>Visited state: </strong>for some types of menus, such as
                instructional steps, it may be useful to indicate menu items
                that a user had already visited. However, most menus are not
                expected to change based on the visited state.
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Fly-out (dropdown) Menus</h2>
          <p>
            Use fly-out (or drop-down) menus to provide an overview of a web
            site’s page hierarchy. It removes the need for multiple page loads
            provided that users know where to find the information. Application
            menus are implemented similarly, but with additional WAI-ARIA
            markup.
          </p>
          <p>
            People with reduced dexterity, such as tremors, often have trouble
            operating fly-out menus. For some, it might be impossible. Make sure
            to provide other ways to reach the submenu items, for example by
            repeating them on the page of the parent menu item.
          </p>
          <h3>Indicate Submenus</h3>
          <p>
            Indicate navigation menu items with submenus visually and using
            markup.
          </p>
          <p>
            In the following example, the submenu is indicated visually by an
            icon. The WAI-ARIA markup aria-expanded=&quot;false&quot; declares
            that the submenu navigation is presently hidden, or “collapsed”.
          </p>
          <pre>
            <code>
              {`
              <nav aria-label="Main">
                  <ul>
                      <li><a href="…">Home</a></li>
                      <li><a href="…">Shop</a></li>
                      <li class="has-submenu">
                          <a href="…" aria-expanded="false">
                            Space Bears
                          </a>
                          <ul>
                              <li><a href="…">Space Bear 6</a></li>
                              <li><a href="…">Space Bear 6 Plus</a></li>
                          </ul>
                      </li>
                      <li><a href="…">Mars Cars</a></li>
                      <li><a href="…">Contact</a></li>
                  </ul>
              </nav>
              `}
            </code>
          </pre>
          <h3>Fly-out Functionality</h3>
          <p>
            Submenus should not open when using the tab key to navigate through
            the menu, as keyboard users would then have to step through all
            submenu items to get to the next top-level item.
          </p>
          <ul>
            <li>
              <strong>Use parent as toggle: </strong>
              Use this approach in situations where the parent menu item only
              summarizes the submenu and doesn’t have to carry out a function.
            </li>
            <li>
              <strong>Use button as toggle: </strong>For situations when the
              parent menu item needs to carry out a function, such as linking to
              a web page, a separate button can be added to the parent item, to
              open and close the submenu.{" "}
            </li>
          </ul>
        </section>
        <section>
          <h2>Application Menus</h2>
          <p>Additional markup and keyboard behavior must be added.</p>
          <h3>Additional Markup</h3>
          <p>
            In addition to the aria-expanded and aria-haspopup attributes, the
            following WAI-ARIA roles are used to provide the necessary semantics
            of an application menu:
          </p>
          <ul>
            <li>
              <strong>menubar: </strong>represents a (usually horizontal) menu
              bar.
            </li>
            <li>
              <strong>menu: </strong>represents a set of links or commands in a
              menu bar, it is used for the fly-out menus.
            </li>
            <li>
              <strong>menuitem: </strong>represents an individual menu item.
            </li>
            <li>
              <strong>separator: </strong>represents a separator between two
              groups of menu items in a menu.
            </li>
          </ul>
          <pre>
            <code>
              {`
              <ul role="menubar" id="appmenu">
                …
                <li role="menuitem" aria-haspopup="true">
                  Edit
                  <ul role="menu">
                    <li role="menuitem">Undo</li>
                    <li role="menuitem">Redo</li>
                    <li role="separator"></li>
                    <li role="menuitem">Cut</li>
                    <li role="menuitem">Copy</li>
                    <li role="menuitem">Paste</li>
                    </ul>
                  </li>
                …
              </ul>
              `}
            </code>
          </pre>
        </section>
      </article>
    </main>
  );
};

export default Menus;
