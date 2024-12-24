import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function codeblock(
  code: string,
  opts?: { lang?: string; highlights?: string[] }
) {
  const lang = opts?.lang || "ts";
  const highlights = opts?.highlights || [];
  return `\n\`\`\`${lang} ${
    highlights.length ? `{${highlights.join(",")}}` : ""
  }\n${code}\n\`\`\``;
}
