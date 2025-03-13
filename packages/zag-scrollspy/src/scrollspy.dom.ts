import type { Scope } from "@zag-js/core";

export const getContentEl = (ctx: Scope, id: string) => ctx.getById(id);
