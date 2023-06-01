import Link from "next/link";

const AccessibleContent = () => {
  return (
    <main>
      <article>
        <header>
          <h1>Writing Accessible Content</h1>
          <p>
            See:{" "}
            <Link href="https://www.w3.org/WAI/tips/writing/">
              https://www.w3.org/WAI/tips/writing/
            </Link>
          </p>
        </header>
        <fieldset>
          <legend>Checklist</legend>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-content#check-1">
              Provide informative, unique page titles
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-content#check-2">
              Use headings to convey meaning and structure
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-content#check-3">
              Make link text meaningful
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-content#check-4">
              Write meaningful text alternatives for image
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-content#check-5">
              Create transcripts and captions for multimedia
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-content#check-6">
              Provide clear instructions
            </Link>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <Link href="checklist/accessible-content#check-7">
              Keep content clear and concise
            </Link>
          </label>
        </fieldset>
        <section>
          <h2 id="check-1">Provide informative, unique page titles</h2>
          <p>
            For each web page, provide a short title that describes the page
            content and distinguishes it from other pages. The page title is
            often the same as the main heading of the page. Put the unique and
            most relevant information first; for example, put the name of the
            page before the name of the organization. For pages that are part of
            a multi-step process, include the current step in the page title.
          </p>
          <p>
            <strong>Sample:</strong>{" "}
            <em>Buy Your Bear (Step 1 of 3) • Space Teddy Inc.</em>{" "}
          </p>
        </section>
        <section>
          <h2 id="check-2">Use headings to convey meaning and structure</h2>
          <p>
            Use short headings to group related paragraphs and clearly describe
            the sections. Good headings provide an outline of the content.
          </p>
        </section>
        <section>
          <h2 id="check-3">Make link text meaningful</h2>
          <p>
            Write link text so that it describes the content of the link target.
            Avoid using ambiguous link text, such as ‘click here’ or ‘read
            more’. Indicate relevant information about the link target, such as
            document type and size, for example, ‘Proposal Documents (RTF,
            20MB)’.
          </p>
        </section>
        <section>
          <h2 id="check-4">Write meaningful text alternatives for images</h2>
          <p>
            For every image, write alternative text that provides the
            information or function of the image. For purely decorative images,
            there is no need to write alternative text.
          </p>
          <p>
            <strong>Bad Sample:</strong>
            <em>&quot;Charging phone.&quot;</em>
          </p>
          <p>
            <strong>Good Sample:</strong>
            <em>&quot;Plug cable into the bottom edge of the phone.&quot;</em>
          </p>
        </section>
        <section>
          <h2 id="check-5">Create transcripts and captions for multimedia</h2>
          <p>
            For audio-only content, such as a podcast, provide a transcript. For
            audio and visual content, such as training videos, also provide
            captions. Include in the transcripts and captions the spoken
            information and sounds that are important for understanding the
            content, for example, ‘door creaks’. For video transcripts, also
            include a description of the important visual content, for example
            ‘Athan leaves the room’.
          </p>
        </section>
        <section>
          <h2 id="check-6">Provide clear instructions</h2>
          <p>
            Ensure that instructions, guidance, and error messages are clear,
            easy to understand, and avoid unnecessarily technical language.
            Describe input requirements, such as date formats.
          </p>
        </section>
        <section>
          <h2 id="check-7">Keep content clear and concise</h2>
          <p>
            Use simple language and formatting, as appropriate for the context.
            Write in short, clear sentences and paragraphs. Avoid using
            unnecessarily complex words and phrases. Expand acronyms on first
            use. For example, Web Content Accessibility Guidelines (WCAG).
            Consider providing a glossary for terms readers may not know. Use
            list formatting as appropriate. Consider using images,
            illustrations, video, audio, and symbols to help clarify meaning.
          </p>
        </section>
      </article>
    </main>
  );
};

export default AccessibleContent;
