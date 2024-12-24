import React, { ComponentPropsWithoutRef } from "react";

import { createHighlighterCore } from "shiki/core";
import MarkdownIt from "markdown-it";
import { fromHighlighter } from "@shikijs/markdown-it/core";

type Highlighter = Parameters<typeof fromHighlighter>[0];

const highlighter = await createHighlighterCore({
  themes: [import("shiki/themes/min-light.mjs")],
  langs: [
    import("shiki/langs/javascript.mjs"),
    import("shiki/langs/jsx.mjs"),
    import("shiki/langs/ts.mjs"),
    import("shiki/langs/css.mjs"),
    import("shiki/langs/sh.mjs"),
  ],
  loadWasm: import("shiki/wasm"),
});

const md = MarkdownIt();

md.use(
  fromHighlighter(highlighter as Highlighter, {
    themes: {
      light: "min-light",
    },
  })
);

const Markdown: React.FC<ComponentPropsWithoutRef<"div">> = ({ children }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: md.render(children?.toString() ?? ""),
      }}
    />
  );
};

export default Markdown;
