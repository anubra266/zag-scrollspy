import type { NormalizeProps, PropTypes } from "@zag-js/types";
import type { ScrollSpyService, ScrollSpyApi } from "./scrollspy.types";
import { parts } from "./scrollspy.anatomy";
import { dataAttr } from "@zag-js/dom-query";

export function connect<T extends PropTypes, V extends string = string>(
  service: ScrollSpyService<V>,
  normalize: NormalizeProps<T>
): ScrollSpyApi<T, V> {
  const { send, context } = service;

  return {
    activeId: context.get("activeId") as V | null,

    getItemProps({ id }) {
      return normalize.element({
        ...parts.item.attrs,
        "data-active": dataAttr(context.get("activeId") === id),
        onClick(evt) {
          evt.preventDefault();
          send({ type: "CLICK", id });
        },
      });
    },
  };
}
