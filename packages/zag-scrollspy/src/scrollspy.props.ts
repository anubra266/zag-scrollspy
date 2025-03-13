import { createProps } from "@zag-js/types";
import { createSplitProps } from "@zag-js/utils";
import type { ScrollSpyProps } from "./scrollspy.types";

export const props = createProps<ScrollSpyProps>()([
  "dir",
  "getRootNode",
  "id",
  "ids",
  "onChangeActiveId",
  "threshold",
  "getRootEl",
  "rootMargin",
  "items",
  "offsetLeft",
  "offsetTop",
  "behavior",
]);
export const splitProps = createSplitProps<Partial<ScrollSpyProps>>(props);
