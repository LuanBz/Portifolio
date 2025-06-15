<template>
  <div class="bg-[#14191f] text-stone-300 min-h-screen">
    <AppHeader />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import AppHeader from "~/components/AppHeader.vue";

useHead({
  bodyAttrs: {
    style: `font-family: 'Space Grotesk', 'Noto Sans', sans-serif;`,
  },
  style: [
    {
      innerHTML: `
        :root {
          --primary-color: #dce7f3;
        }
      `,
    },
  ],
});
</script>
