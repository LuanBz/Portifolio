<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-[#F1ECD6]">
    <UContainer class="flex h-16 p-12 items-center justify-center">
      <div class="flex justify-between w-2/3">
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
            class="text-lg hover:text-accent transition-transform duration-300 transform hover:-translate-y-1"
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
      </div>
    </UContainer>
  </header>
</template>

<script setup>
const navLinks = [
  { label: "Projetos", to: "#projetos" },
  { label: "Sobre Mim", to: "#sobre" },
];
</script>
