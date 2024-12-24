import type { NormalizeProps, PropTypes } from "@zag-js/types";
import type { State, Send, MachineApi } from "./scrollspy.types";
import { parts } from "./scrollspy.anatomy";
import { dataAttr } from "@zag-js/dom-query";

export function connect<T extends PropTypes, V extends string>(
  state: State<V>,
  send: Send,
  normalize: NormalizeProps<T>
): MachineApi<T, V> {
  return {
    activeId: state.context.activeId,

    getItemProps({ id }) {
      return normalize.element({
        ...parts.item.attrs,
        "data-active": dataAttr(state.context.activeId === id),
        onClick(evt) {
          evt.preventDefault();
          send({ type: "CLICK", id });
        },
      });
    },
  };
}
