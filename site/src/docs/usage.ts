const js = String.raw;

export const reactUsage = js`
import * as zagScrollspy from "@zag-js/zag-scrollspy";
import { useMachine, normalizeProps } from "@zag-js/solid";

function Avatar() {
  const service = useMachine(
    zagScrollspy.machine,
    {
      id: "1",
      items: ["section1", "section2", "section3"],
    }
  );

  const api = zagScrollspy.connect(service, normalizeProps);

  return (
    <div>
      <nav>
        <a {...api.getItemProps({ id: "section1" })}>Section 1</a>
        <a {...api.getItemProps({ id: "section2" })}>Section 2</a>
        <a {...api.getItemProps({ id: "section3" })}>Section 3</a>
      </nav>

      <main>
        <section id="section1">Section 1 Content</section>
        <section id="section2">Section 2 Content</section>
        <section id="section3">Section 3 Content</section>
      </main>
    </div>
  );
}
`;

export const solidUsage = js`
import * as zagScrollspy from "@zag-js/zag-scrollspy";
import { useMachine, normalizeProps } from "@zag-js/solid";

function Avatar() {
  const service = useMachine(
    zagScrollspy.machine,
    {
      id: "1",
      items: ["section1", "section2", "section3"],
    }
  );

  const api = createMemo(() => zagScrollspy.connect(service, normalizeProps))

  return (
    <div>
      <nav>
        <a {...api().getItemProps({ id: "section1" })}>Section 1</a>
        <a {...api().getItemProps({ id: "section2" })}>Section 2</a>
        <a {...api().getItemProps({ id: "section3" })}>Section 3</a>
      </nav>

      <main>
        <section id="section1">Section 1 Content</section>
        <section id="section2">Section 2 Content</section>
        <section id="section3">Section 3 Content</section>
      </main>
    </div>
  );
}
`;

export const vueUsage = js`
<script setup>
  import * as zagScrollspy from "@zag-js/zag-scrollspy";
  import { normalizeProps, useMachine } from "@zag-js/vue"
  import { computed } from "vue"

  const service = useMachine(
    zagScrollspy.machine,
    {
      id: "1",
      items: ["section1", "section2", "section3"],
    }
  )

  const api = computed(() => zagScrollspy.connect(service, normalizeProps))
</script>

<template>
  <nav>
    <a v-bind="api.getItemProps({ id: 'section1' })">Section 1</a>
    <a v-bind="api.getItemProps({ id: 'section2' })">Section 2</a>
    <a v-bind="api.getItemProps({ id: 'section3' })">Section 3</a>
  </nav>
  <main>
    <section id="section1">Section 1 Content</section>
    <section id="section2">Section 2 Content</section>
    <section id="section3">Section 3 Content</section>
  </main>
</template>
`;

export const svelteUsage = js`
<script lang="ts">
  import * as zagScrollspy from "@zag-js/zag-scrollspy";
  import { normalizeProps, useMachine } from "@zag-js/svelte"
  import { computed } from "vue"

  const service = useMachine(
    zagScrollspy.machine,
    {
      id: "1",
      items: ["section1", "section2", "section3"],
    }
  )

  const api = $derived(zagScrollspy.connect(service, normalizeProps))
</script>

<div>
  <nav>
    <a {...api.getItemProps({ id: "section1" })}>Section 1</a>
    <a {...api.getItemProps({ id: "section2" })}>Section 2</a>
    <a {...api.getItemProps({ id: "section3" })}>Section 3</a>
  </nav>

  <main>
    <section id="section1">Section 1 Content</section>
    <section id="section2">Section 2 Content</section>
    <section id="section3">Section 3 Content</section>
  </main>
</div>
`;
