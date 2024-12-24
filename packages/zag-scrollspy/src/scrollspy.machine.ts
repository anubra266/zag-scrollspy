import { createMachine } from "@zag-js/core";
import { compact } from "@zag-js/utils";
import type {
  MachineContext,
  MachineState,
  UserDefinedContext,
} from "./scrollspy.types";
import { dom } from "./scrollspy.dom";
import { findScrollContainer } from "./scrollspy.utils";

export function machine<V extends string>(userContext: UserDefinedContext<V>) {
  const ctx = compact(userContext);
  return createMachine<MachineContext<V>, MachineState>(
    {
      id: "scrollspy",
      initial: "idle",
      context: {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
        offsetTop: 0,
        offsetLeft: 0,
        behavior: "smooth",
        ...ctx,
        elements: ctx.items.map((id) => ({ id, ratio: 0 })),
        activeId: null,
      },

      activities: ["trackItemsPresence"],
      states: {
        idle: {
          on: {
            CLICK: {
              actions: ["handleClick"],
            },
          },
        },
      },
    },
    {
      activities: {
        trackItemsPresence: (ctx) => {
          const win = dom.getWin(ctx);

          const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
              const id = entry.target.getAttribute("id");
              const el = ctx.elements.find((el) => el.id === id);

              if (el)
                el.ratio = entry.isIntersecting ? entry.intersectionRatio : 0;
            });

            const maxRatio = Math.max(
              ...ctx.elements.map((el) => el.ratio),
              0.1
            );

            const entry = ctx.elements.find((el) => el.ratio === maxRatio);

            ctx.activeId = entry ? entry.id : null;
            ctx.onChangeActiveId?.(ctx.activeId);
          };

          const observerOpts = {
            root: ctx.root,
            threshold: ctx.threshold,
            rootMargin: ctx.rootMargin,
          };
          const observer = new win.IntersectionObserver(
            handleIntersect,
            observerOpts
          );

          for (const { id } of ctx.elements) {
            const content = document.getElementById(id);
            content && observer.observe(content);
          }

          return () => observer.disconnect();
        },
      },
      actions: {
        handleClick: (ctx, e) => {
          const content = dom.getById(ctx, e.id);
          if (!content) return;
          const container = findScrollContainer(content);

          container.scrollTo({
            top: content.offsetTop - container.offsetTop - ctx.offsetTop,
            left: content.offsetLeft - container.offsetLeft - ctx.offsetLeft,
            behavior: ctx.behavior,
          });
        },
      },
    }
  );
}
