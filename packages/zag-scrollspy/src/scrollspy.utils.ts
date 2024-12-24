export const findScrollContainer = (el: HTMLElement): HTMLElement => {
  if (el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth) {
    return el;
  } else if (el.parentElement) {
    return findScrollContainer(el.parentElement);
  } else {
    return (document.scrollingElement ||
      document.documentElement) as HTMLElement;
  }
};
