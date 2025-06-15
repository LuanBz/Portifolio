<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-[#14191f]/80 backdrop-blur-md"
  >
    <UContainer class="flex h-16 items-center justify-between">
      <a class="text-[var(--primary-color)] text-xl font-bold" href="#"
        >Ethan Carter</a
      >

      <nav class="hidden md:flex items-center gap-x-2">
        <UButton
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          variant="link"
          color="white"
          :label="link.label"
          class="hover:text-[var(--primary-color)] transition-colors duration-300"
        />
      </nav>

      <div class="md:hidden">
        <UButton
          @click="isMobileMenuOpen = true"
          color="white"
          variant="ghost"
          icon="i-heroicons-bars-3-20-solid"
        />
      </div>
    </UContainer>

    <USlideover v-model="isMobileMenuOpen">
      <div class="p-4 flex-1 bg-[#14191f]">
        <div class="flex items-center justify-between mb-8">
          <h3 class="font-bold">Navegação</h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            @click="isMobileMenuOpen = false"
          />
        </div>
        <div class="flex flex-col items-center gap-y-4">
          <UButton
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            block
            size="xl"
            color="gray"
            variant="ghost"
            :label="link.label"
            @click="isMobileMenuOpen = false"
            class="w-full text-center"
          />
        </div>
      </div>
    </USlideover>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

const navLinks = [
  { label: "About Me", to: "#about-me" },
  { label: "Project 1", to: "#project-1" },
  { label: "Project 2", to: "#project-2" },
];
</script>
