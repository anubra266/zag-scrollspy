import type { Machine, Service } from "@zag-js/core";
import type {
  CommonProperties,
  DirectionProperty,
  PropTypes,
  RequiredBy,
} from "@zag-js/types";

/* -----------------------------------------------------------------------------
 * Machine context
 * -----------------------------------------------------------------------------*/

export type ElementIds = Partial<{
  item(id: string): string;
}>;

export interface ScrollSpyProps<V extends string = string>
  extends DirectionProperty,
    CommonProperties {
  /**
   * The ids of the elements in the combobox. Useful for composition.
   */
  ids?: ElementIds | undefined;
  /**
   * The ids of items to be used as the scrollspy targets.
   */
  items: V[];
  /**
   * Root element for the observer.
   * https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options
   */
  getRootEl?: (() => Element | Document | null) | undefined;
  /**
   * Root margin for the observer.
   * https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options
   * @default "0px"
   */
  rootMargin: string;
  /**
   * Thresholds for the observer.
   * https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options
   * @default "[0, 0.25, 0.5, 0.75, 1]""
   */
  threshold: number | number[];
  /**
   * Scroll offset position from the top in pixels
   * @default 0
   */
  offsetTop: number;
  /**
   * Scroll offset position from the left in pixels
   * @default 0
   */
  offsetLeft: number;
  /**
   * The scroll behaviour when an item is clicked
   * @default "smooth"
   */
  behavior: ScrollBehavior;
  /**
   * Function called when the active id changes
   */
  onChangeActiveId?: (id: V | null) => void;
}

interface PrivateContext<V extends string = string> {
  elements: { id: V; ratio: number }[];
  activeId: V | null;
}

export interface MachineState {
  value: "idle";
}

type PropsWithDefault =
  | "rootMargin"
  | "threshold"
  | "offsetTop"
  | "offsetLeft"
  | "behavior"
  | "items";

export interface ScrollSpySchema<V extends string = string> {
  props: RequiredBy<ScrollSpyProps<V>, PropsWithDefault>;
  context: PrivateContext;
  initial: "idle";
  action: "handleClick";
  event: { type: "CLICK"; id: V };
  state: "idle";
  effect: "trackItemsPresence";
}

export type ScrollSpyService<V extends string = string> = Service<
  ScrollSpySchema<V>
>;

export type ScrollSpyMachine<V extends string = string> = Machine<
  ScrollSpySchema<V>
>;

export interface ItemProps<V extends string = string> {
  id: V;
}

export interface MachineApi<
  T extends PropTypes = PropTypes,
  V extends string = string
> {
  /**
   * The current active id of the scrollspy
   */
  activeId: V | null;
  getItemProps(props: ItemProps<V>): T["element"];
}
