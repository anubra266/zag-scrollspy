import { createMachine } from "@zag-js/core";
import type { ScrollSpySchema } from "./scrollspy.types";
import { getContentEl } from "./scrollspy.dom";
import { findScrollContainer } from "./scrollspy.utils";

export const machine = createMachine<ScrollSpySchema>({
  props({ props }) {
    return {
      rootMargin: "0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
      offsetTop: 0,
      offsetLeft: 0,
      behavior: "smooth",
      items: [],
      ...props,
    };
  },

  initialState({}) {
    return "idle";
  },

  effects: ["trackItemsPresence"],

  context({ prop, bindable }) {
    return {
      elements: bindable(() => ({
        defaultValue: prop("items").map((id) => ({ id, ratio: 0 })),
      })),
      activeId: bindable<string | null>(() => ({
        defaultValue: null,
        onChange(value) {
          prop("onChangeActiveId")?.(value);
        },
      })),
    };
  },

  states: {
    idle: {
      on: {
        CLICK: {
          actions: ["handleClick"],
        },
      },
    },
  },

  implementations: {
    effects: {
      trackItemsPresence: ({ scope, context, prop }) => {
        const win = scope.getWin();

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
            const el = context.get("elements").find((el) => el.id === id);

            if (el)
              el.ratio = entry.isIntersecting ? entry.intersectionRatio : 0;
          });

          const maxRatio = Math.max(
            ...context.get("elements").map((el) => el.ratio),
            0.1
          );

          const entry = context
            .get("elements")
            .find((el) => el.ratio === maxRatio);

          context.set("activeId", entry ? entry.id : null);
        };

        const observerOpts = {
          root: prop("getRootEl")?.() ?? null,
          threshold: prop("threshold"),
          rootMargin: prop("rootMargin"),
        };
        const observer = new win.IntersectionObserver(
          handleIntersect,
          observerOpts
        );

        for (const { id } of context.get("elements")) {
          const content = getContentEl(scope, id);
          content && observer.observe(content);
        }

        return () => observer.disconnect();
      },
    },
    actions: {
      handleClick: ({ prop, scope, event }) => {
        const content = getContentEl(scope, event.id);
        if (!content) return;
        const container = findScrollContainer(content);

        container.scrollTo({
          top: content.offsetTop - container.offsetTop - prop("offsetTop"),
          left: content.offsetLeft - container.offsetLeft - prop("offsetLeft"),
          behavior: prop("behavior"),
        });
      },
    },
  },
});
