<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md"
  >
    <UContainer class="flex h-16 px-12 items-center justify-between">
      <a class="text-primary text-[#504C24] text-xl font-bold" href="#">
        LUAN BEZERRA
      </a>

      <nav class="hidden md:flex items-center gap-5">
        <UButton
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          variant="link"
          :padded="false"
          class="text-primary hover:text-accent transition-colors duration-300"
          :label="link.label"
        />
      </nav>

      <div class="md:hidden">
        <UButton
          @click="isMobileMenuOpen = true"
          variant="ghost"
          class="text-primary"
          icon="i-heroicons-bars-3-20-solid"
        />
      </div>
    </UContainer>
  </header>
</template>

<script setup>
const navLinks = [
  { label: "Contato", to: "#" },
  { label: "Projetos", to: "#projetos" },
];
</script>
