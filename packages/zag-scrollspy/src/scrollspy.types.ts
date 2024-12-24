import type { Machine, StateMachine as S } from "@zag-js/core";
import type {
  CommonProperties,
  DirectionProperty,
  PropTypes,
  RequiredBy,
} from "@zag-js/types";

export type ElementIds = Partial<{
  item(id: string): string;
}>;

interface PublicContext<V extends string>
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
  root: Element | Document | null;
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
  // elements: Record<string, number>;
  elements: { id: V; ratio: number }[];
  activeId: V | null;
}

type ComputedContext = Readonly<{}>;

export type UserDefinedContext<V extends string = string> = RequiredBy<
  PublicContext<V>,
  "id" | "items"
>;

export interface MachineContext<V extends string = string>
  extends PublicContext<V>,
    PrivateContext<V>,
    ComputedContext {}

export interface MachineState {
  value: "idle";
}

export type State<V extends string> = S.State<MachineContext<V>, MachineState>;

export type Send = S.Send<S.AnyEventObject>;

export type Service = Machine<MachineContext, MachineState, S.AnyEventObject>;

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
