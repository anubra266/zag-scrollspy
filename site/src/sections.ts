import {
  behavior,
  id,
  items,
  offsetLeft,
  offsetTop,
  onChangeActiveId,
  root,
  rootMargin,
  styling,
  threshold,
} from "./docs/properties";
import { reactUsage, solidUsage, svelteUsage, vueUsage } from "./docs/usage";
import { codeblock } from "./lib/utils";

export const sections = [
  {
    id: "introduction",
    title: "Introduction",
    description:
      "This doc is very much a showcase of Zag Scrollspy. Feel free to do more **scrolling** than _reading_. 😉",
    backgroundColor: "bg-blue-50",
    subSections: [
      {
        id: "overview",
        title: "Overview",
        content:
          "zag-scrollspy is a powerful component that automatically updates navigation based on scroll position. It enhances user experience by providing visual feedback on the current section of a page.",
      },
      {
        id: "technology",
        title: "Technology",
        content:
          "The name probably gives it away, but zag-scrollspy is built with [Zag JS](https://zagjs.com/). It uses the Intersection Observer API to track the visibility of sections on a page. By tracking the scrollable container (or `window` by default), it calculates which item is most prominently visible and updates the active item.",
      },
      {
        id: "solution",
        title: "Solution",
        content:
          "**What problems does zag-scrollspy solve?**\n\n- Automatically highlights the active section as the user scrolls.\n- Smoothly scrolls to a specific item upon clicking a link.\n- Supports offset adjustments (for instance, to accommodate sticky headers).\n- Easy to integrate into any framework (React, Vue, Svelte, etc.) or even vanilla JS.",
      },
      {
        id: "features",
        title: "Key Features",
        content:
          "- **Customizable thresholds**: Define how sensitive the ScrollSpy is when elements come in and out of view.\n- **Offset**: Adjust the scroll position to accommodate fixed headers or navigations.\n- **Smooth scrolling**: Configure the scroll behavior to be smooth or auto.\n- **Minimal boilerplate**: Integrates seamlessly into your existing application.\n- **Framework-agnostic**: Works with any JavaScript framework or even vanilla JS.",
      },
    ],
  },
  {
    id: "installation",
    title: "Installation",
    description: "Get started with zag-scrollspy in your project.",
    backgroundColor: "bg-green-50",
    subSections: [
      {
        id: "npm",
        title: "npm",
        content:
          "To install zag-scrollspy using npm, run the following command:\n\n```sh\nnpm install zag-scrollspy\n```",
      },
      {
        id: "yarn",
        title: "yarn",
        content:
          "To install zag-scrollspy using yarn, use this command:\n\n```sh\nyarn add zag-scrollspy\n```",
      },
      {
        id: "pnpm",
        title: "pnpm",
        content:
          "To install zag-scrollspy using pnpm, use this command:\n\n```sh\npnpm add zag-scrollspy\n```",
      },
      {
        id: "bun",
        title: "bun",
        content:
          "To install zag-scrollspy using bun, use this command:\n\n```sh\nbun install zag-scrollspy\n```",
      },
    ],
  },
  {
    id: "framework-adapter",
    title: "Framework Adapter",
    description:
      "Add the zag js adapter for your js framework. See more info at [zagjs.com](https://zagjs.com/overview/installation)",
    backgroundColor: "bg-orange-100",
    subSections: [
      {
        id: "react",
        title: "React",
        content:
          "```sh\nnpm install @zag-js/react\n# or\nyarn add @zag-js/react",
      },
      {
        id: "solid",
        title: "Solid",
        content:
          "```sh\nnpm install @zag-js/solid\n# or\nyarn add @zag-js/solid",
      },
      {
        id: "vue",
        title: "Vue",
        content: "```sh\nnpm install @zag-js/vue\n# or\nyarn add @zag-js/vue",
      },
      {
        id: "svelte",
        title: "Svelte",
        content:
          "```sh\nnpm install @zag-js/svelte\n# or\nyarn add @zag-js/svelte",
      },
    ],
  },
  {
    id: "usage",
    title: "Usage",
    description: "Learn how to use zag-scrollspy in different frameworks.",
    backgroundColor: "bg-yellow-50",
    subSections: [
      {
        id: "react-usage",
        title: "React Usage",
        content: "```jsx\n" + reactUsage,
      },
      {
        id: "solid-usage",
        title: "Solid js Usage",
        content: "```jsx\n" + solidUsage,
      },
      {
        id: "vue-usage",
        title: "Vue Usage",
        content: "```js\n" + vueUsage,
      },
      {
        id: "svelte-usage",
        title: "Svelte Usage",
        content: "```js\n" + svelteUsage,
      },
    ],
  },
  {
    id: "properties",
    title: "Methods & Properties",
    description:
      "The following methods and properties are available for zag-scrollspy.",
    backgroundColor: "bg-pink-50",
    subSections: [
      {
        id: "id",
        title: "Id",
        content:
          "`String`\n\nThe unique identifier of the machine." + codeblock(id),
      },
      {
        id: "items",
        title: "Items",
        content:
          "`string[]`\n\nThe ids of items to be used as the scrollspy targets." +
          codeblock(items),
      },
      {
        id: "scrollspy-root",
        title: "Scrolling Root",
        content:
          "`Element | Document | null`\n\nRoot element for the observer." +
          codeblock(root),
      },
      {
        id: "rootMargin",
        title: "Root Margin",
        content:
          "`String`\n\nThe `rootMargin` can help you adjust how early or late an element is considered in view. \n\nFor instance, if you have a floating header or some margin you want to consider:" +
          codeblock(rootMargin),
      },
      {
        id: "threshold",
        title: "Threshold",
        content:
          "`number[]`\n\nThe default threshold array is `[0, 0.25, 0.5, 0.75, 1]`. This means the observer triggers when the element is in view at various extents. You can override this to something simpler or more fine-grained:" +
          codeblock(threshold),
      },
      {
        id: "offsetTop",
        title: "Offset Top",
        content:
          "`number`\n\nScroll offset position from the top in pixels." +
          codeblock(offsetTop),
      },
      {
        id: "offsetLeft",
        title: "Offset Left",
        content:
          "`number`\n\nScroll offset position from the left in pixels." +
          codeblock(offsetLeft),
      },
      {
        id: "behavior",
        title: "Behavior",
        content:
          '`ScrollBehavior`\n\nThe scroll behaviour when an item is clicked\n\nBy default, behavior is "smooth", but you can make it instant:' +
          codeblock(behavior),
      },
      {
        id: "onChangeActiveId",
        title: "onChangeActiveId",
        content:
          "`(id: string | null) => void`\n\nFor Listening to active ID changes.\n\nIf you need to store the active ID in a global store, or run an effect whenever the ID changes, pass the onChangeActiveId callback:" +
          codeblock(onChangeActiveId),
      },

      {
        id: "getRootNode",
        title: "Root Node",
        content:
          "`() => ShadowRoot | Node | Document`\n\nA root node to correctly resolve document in custom environments. E.x.: Iframes, Electron.",
      },
    ],
  },
  {
    id: "styling",
    title: "Styling",
    description:
      'Customize zag-scrollspy to fit your design.\n\nThe items by default have `data-scope="scrollspy"` and `data-part="item"` attributes. \n\nWhen an item is active, it receives the `data-active` attribute. You can style it as needed.' +
      codeblock(styling, { lang: "css" }),
  },
  {
    id: "faqs",
    title: "FAQs",
    description: "Some common pitfalls and questions.",
    backgroundColor: "bg-purple-50",
    subSections: [
      {
        id: "faq1",
        title: "Why is activeId always null",
        content:
          "Make sure your DOM elements have matching `id` attributes that correspond to the `items` you passed in. Also ensure that these elements exist in the DOM by the time the `zag-scrollspy` machine is setup.",
      },
      {
        id: "faq2",
        title: "The smooth scroll is not smooth in some browsers",
        content:
          "Make sure the container or the browser environment supports `scroll-behavior: smooth`. In some older browsers, you might need a polyfill.",
      },
      {
        id: "faq3",
        title: "Multiple active items",
        content:
          "Zag Scrollspy uses the highest intersection ratio approach, so only the single best candidate is marked active. If you want multiple active items for a sticky or large overlapping sections, you would need a custom approach.",
      },
      {
        id: "faq4",
        title: "I have sections bigger than the viewport",
        content:
          "That’s okay. Zag Scrollspy will handle large items. Just ensure the threshold array or approach suits your needs.",
      },
    ],
  },
];
