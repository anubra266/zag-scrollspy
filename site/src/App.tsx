import { sections } from "./sections";
import { normalizeProps, useMachine } from "@zag-js/react";
import { useId } from "react";
import * as scrollspy from "zag-scrollspy";
import { cn } from "./lib/utils";
import Markdown from "./components/markdown";

function App() {
  const service = useMachine(scrollspy.machine, {
    id: useId(),
    items: sections.map((section) => section.id),
    offsetTop: 64,
  });

  const api = scrollspy.connect(service, normalizeProps);
  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 bg-white py-4 px-20 border-b border-gray-200 z-10">
        <div className="container-auto-md flex gap-4">
          <a href="/" className="mr-auto font-bold text-xl">
            Zag Scrollspy
          </a>
          {sections.map((section) => (
            <a
              key={section.id}
              {...api.getItemProps({ id: section.id })}
              className="text-gray-700 hover:text-gray-900 [text-decoration:none] px-4 py-2 rounded-md hover:bg-gray-200 data-[active]:bg-gray-200 cursor-pointer"
            >
              {section.title}
            </a>
          ))}
        </div>
      </nav>

      <main>
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={cn(
              "py-16 px-20 container-auto-md",
              section.backgroundColor
            )}
          >
            <div className="container space-y-6 px-24">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">
                  {section.title}
                </h2>
                <Markdown>{section.description}</Markdown>
              </div>
              {section.subSections && (
                <SubSection sections={section.subSections} />
              )}
            </div>
          </section>
        ))}
      </main>

      <footer className="py-20 px-20 text-center text-gray-500 text-lg tracking-widest">
        <span>
          With ❤️ from{" "}
          <a
            target="_blank"
            href="https://anubra266.dev"
            rel="noreferrer"
            className="text-gray-500 hover:text-gray-600 border-b border-cyan-400"
          >
            @anubra266
          </a>
        </span>
        <div className="mt-4">
          <a
            href="https://github.com/anubra266/zag-scrollspy/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-gray-600 border-b border-cyan-400 px-1"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

function SubSection({
  sections,
}: {
  sections: {
    id: string;
    title: string;
    content: string;
  }[];
}) {
  const service = useMachine(scrollspy.machine, {
    id: useId(),
    items: sections.map((section) => section.id),
    offsetTop: 120,
    offsetLeft: 20,
  });

  const api = scrollspy.connect(service, normalizeProps);
  return (
    <>
      <div className="flex gap-1 p-2 bg-white/50 rounded-lg mb-6">
        {sections.map((section) => (
          <a
            key={section.id}
            className="text-sm p-2 rounded-lg transition-colors hover:bg-slate-200 data-[active]:bg-slate-200 cursor-pointer"
            {...api.getItemProps({ id: section.id })}
          >
            {section.title}
          </a>
        ))}
      </div>
      <div className="flex flex-row fs-md overflow-x-auto gap-6">
        {sections.map((section) => (
          <section
            key={`${section.id}-content`}
            id={section.id}
            className="p-6 bg-white rounded-lg shadow-sm min-w-[800px]"
          >
            <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
            <div className="text-muted-foreground prose prose-sm max-w-none">
              <Markdown>{section.content}</Markdown>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
