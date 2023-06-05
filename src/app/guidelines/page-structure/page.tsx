import Link from "next/link";

const NavigationCode = `
<nav aria-label="Main">
  …
</nav>
…
<nav aria-labelledby="regionheading">
  <h2 id="regionheading">On this page</h2>
  …
</nav>
`;

const html5Code = `
<header role="banner">…</header>
<main role="main">…</main>
<nav role="navigation">…</nav>
<footer role="contentinfo">…</footer>
`;

const PageStructure = () => {
  return (
    <main role="main">
      <article>
        <header>
          <h1>Page Structure</h1>
          <p>
            See:{" "}
            <Link href="w3.org/WAI/tutorials/page-structure/">
              w3.org/WAI/tutorials/page-structure/
            </Link>
          </p>
        </header>
        <section>
          <h2>Page Regions</h2>
          <h3>Page Header</h3>
          <p>
            Region at the top of every page that contains site-wide information,
            such as the website logo, search function, and navigation options.
            HTML5 provides the <code>header</code> element, which can be used to
            define such a region.
          </p>
          <p>
            <strong>Note:</strong> If the <code>header</code> element is used
            inside <code>article</code> and <code>section</code> elements, it is
            not associated to those elements. It does not get the WAI-ARIA
            banner role and does not have special behavior in assistive
            technologies.
          </p>
          <h3>Page Footer</h3>
          <p>
            Region at the bottom of every page that contains site-wide
            information, such as copyright information, privacy statements, or
            disclaimers. HTML5 provides the <code>footer</code> element, which
            can be used to define such a region.
          </p>
          <p>
            <strong>Note:</strong> If the <code>footer</code> element is used
            inside <code>article</code> and <code>section</code> elements, it is
            not associated to those elements. It does not get the WAI-ARIA
            banner role and does not have special behavior in assistive
            technologies.
          </p>
          <h3>Navigation</h3>
          <p>
            The HTML5 <code>nav</code> element can be used to identify a
            navigation menu. A web page can have any number of navigation menus.
            Use labels (<code>aria-label</code>, <code>aria-labelledby</code>)
            to identify each navigation menu.
          </p>
          <pre>
            <code>{NavigationCode}</code>
          </pre>
          <h3>Main Content</h3>
          <p>
            Use the HTML5 <code>main</code> element to identify the main content
            region of a web page or application.
          </p>
          <h3>Complementary Content</h3>
          <p>
            Use the HTML5 <code>aside</code> element to identify regions that
            support the main content, yet are separate and meaningful sections
            on their own.
          </p>
          <h3>Page Regions in HTML5 Using WAI-ARIA</h3>
          <p>
            Most current web browsers support the above HTML5 elements and
            convey the information to assistive technology through the
            accessibility APIs. However, to maximize compatibility with web
            browsers and assistive technologies that support WAI-ARIA but do not
            yet support HTML5, it is currently advisable to use both the HTML5
            elements and the corresponding WAI-ARIA roles.
          </p>
          <pre>
            <code>{html5Code}</code>
          </pre>
        </section>
        <section>
          <h2>Labeling Regions</h2>
          <p>
            Provide labels to distinguish two page regions of the same type,
            such as “main navigation” and “sub-navigation” menus using a{" "}
            <code>nav</code> element on the same page. Labels are also used to
            change the default identification of page regions, for example, to
            identify a <code>aside</code> region as “advertisement”. Regions
            that are unique, such as <code>main</code>, do not need additional
            labels.
          </p>
          <h3>Using aria-labelledby</h3>
          <p>
            Use aria-labelledby to point to an existing element by its (unique)
            id. The label of the region is the content of the referenced
            element. Every element can be a label this way. Labels should be
            short and descriptive. If a heading is present in the region,
            consider using it as the label.
          </p>
          <h3>Using aria-label</h3>
          <p>
            Use the WAI-ARIA aria-label attribute to label the region. Consider
            this approach if the label should not appear visually on the page.
          </p>
        </section>
        <section>
          <h2>Headings</h2>
          <p>
            Headings communicate the organization of the content on the page.
            Web browsers, plug-ins, and assistive technologies can use them to
            provide in-page navigation.
          </p>
          <h3>Heading ranks</h3>
          <p>
            Nest headings by their rank (or level). The most important heading
            has the rank 1, the least important heading rank 6. Skipping heading
            ranks can be confusing and should be avoided where possible.
          </p>
          <p>
            <strong>Exception for fixed page sections: </strong>
            in fixed sections of the page, for example in sidebars, the heading
            ranks should not change depending on the ranks in the content area.
            In those cases, consistency across pages is more important.
          </p>

          <h3>Headings that reflect the page organization</h3>
          <p>
            Headings are useful for labeling page regions. Use aria-labelledby
            to associate headings with their page region
          </p>
        </section>
        <section>
          <h2>Content Structure</h2>
          <p>
            Mark up website content semantically, so that the website is
            extensible. Valid semantics create content that is reusable and more
            meaningful to assistive technologies.
          </p>
          <h3>Articles</h3>
          <p>
            Represents a complete or self-contained composition in a web page.
            Examples of articles include an item at a shopping site or a news
            article on a news site.
          </p>
          <h3>Sections</h3>
          <p>
            Marks a general region of a web page or an article. It is used for
            thematic grouping of content.
          </p>
          <h3>Paragraphs</h3>
          <p>Mark up paragraphs of text.</p>
          <h3>Lists</h3>
          <p>
            Use different types of lists to group information according to its
            nature to provide orientation for users.
          </p>
          <h3>Quotes</h3>
          <p>
            Identifying a quotation helps clarify that the content is attributed
            to another author.
          </p>
          <p>
            <strong>blockquote: </strong>use the <code>blockquote</code> element
            for longer and more complex quotes. It can contain paragraphs,
            headings, and other text structure elements. Those should reflect
            the structure of the cited document. The <code>cite</code> element
            is used to refer to the source of the quote.
          </p>
          <p>
            <strong>q: </strong>for shorter quotes, that are usually embedded in
            another sentence, use the <code>q</code> element.
          </p>
          <h3>Figures</h3>
          <p>
            Figures are blocks with additional information set off from the main
            content of the page – sometimes referenced from the main text. They
            typically contain lists, images, tables, but can also include other
            content.
          </p>
          <h3>Images and illustrations</h3>
          <p>
            Images and illustrations are useful to create visual engagement for
            many users. They may also clarify text for people with reading
            disabilities. Where images or illustrations are used, proper
            alternative text needs to be added.
          </p>
          <h3>Tables</h3>
          <p>
            Data tables provide a useful way to display the data so that the
            structure of the table can be communicated to everyone. Proper table
            layout allows people to understand meaningful data relationships
            without seeing the grid.
          </p>
        </section>
      </article>
    </main>
  );
};

export default PageStructure;
