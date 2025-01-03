import { createProps } from "@zag-js/types";
import { createSplitProps } from "@zag-js/utils";
import type { UserDefinedContext } from "./scrollspy.types";

export const props = createProps<UserDefinedContext>()([
  "dir",
  "getRootNode",
  "id",
  "ids",
  "onChangeActiveId",
  "threshold",
  "root",
  "rootMargin",
  "items",
  "offsetLeft",
  "offsetTop",
  "behavior",
]);
export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props);
