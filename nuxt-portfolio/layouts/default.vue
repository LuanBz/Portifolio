<template>
  <div class="bg-[#F1ECD6] text-primary font-sans">
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
</script>
