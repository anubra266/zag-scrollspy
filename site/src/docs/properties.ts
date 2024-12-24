const js = String.raw;
const css = String.raw;

export const id = js`
const [state, send] = useMachine(
  zagScrollspy.machine({
    // ...
    id: "navbar-scrollspy",
  }),
)
`;

export const items = js`
const [state, send] = useMachine(
  zagScrollspy.machine({
    // ...
    items: ["section1", "section2", "section3"],
  }),
)
`;

export const root = js`
const [state, send] = useMachine(
  zagScrollspy.machine({
    // ...
    root: document.querySelector("#container"),
  }),
)
`;

export const rootMargin = js`
const [state, send] = useMachine(
  zagScrollspy.machine({
    // ...
    rootMargin: "-60px 0px 0px 0px",
  }),
)
`;

export const threshold = js`
const [state, send] = useMachine(
  zagScrollspy.machine({
    // ...
    threshold: [0.25, 0.75], // only trigger at 25% and 75% visibility
  }),
)
`;

export const offsetTop = js`
const [state, send] = useMachine(
  zagScrollspy.machine({
    // ...
    offsetTop: 80, // for a sticky header of height 80px
  }),
)
`;

export const offsetLeft = js`
const [state, send] = useMachine(
  zagScrollspy.machine({
    // ...
    offsetLeft: 40, // for a fixed sidebar of width 40px
  }),
)
`;

export const behavior = js`
const [state, send] = useMachine(
  zagScrollspy.machine({
    // ...
    behavior: "auto",
  }),
)
`;

export const onChangeActiveId = js`
const [state, send] = useMachine(
  zagScrollspy.machine({
    // ...
    onChangeActiveId(id) {
        console.log("New active ID is:", id)
        // e.g. analytics event, Redux action, etc.
    },
  }),
)
`;

export const getRootNode = js`
const [state, send] = useMachine(
  zagScrollspy.machine({
    // ...
    getRootNode: () => document // could be an iframe or shadow root
  }),
)
`;

export const styling = css`
  [data-scope="scrollspy"][data-part="item"] {
    /* Styles for the scrollspy items by default */
  }

  [data-scope="scrollspy"][data-part="item"][data-active] {
    /* Styles for active scrollspy items */
  }
`;
