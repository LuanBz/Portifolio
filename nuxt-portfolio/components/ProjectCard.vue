<template>
  <div class="flex flex-col md:flex-row gap-10 items-center">
    <div class="w-full md:w-1/2 flex gap-4 items-end justify-center">
      <NuxtImg
        :src="project.images.desktop"
        class="w-fit rounded-lg object-contain"
        alt="Versão para desktop do projeto"
        style="height: 500px"
      />
      <NuxtImg
        v-if="project.images.mobile"
        :src="project.images.mobile"
        class="w-fit rounded-lg object-contain"
        style="height: 400px"
      />
    </div>

    <div class="w-full md:w-1/2">
      <div class="flex justify-end items-center gap-3">
        <NuxtImg
          v-if="project.images.logo"
          :src="project.images.logo"
          class="w-fit object-contain"
          alt="Logo do projeto"
          style="height: 75px"
        />
        <h3 class="text-7xl font-bold text-[#F1ECD6] font-serif">
          {{ project.title }}
        </h3>
      </div>

      <p class="mt-4 text-right text-lg text-[#F1ECD6] font-sans">
        {{ project.description }}
      </p>

      <div class="flex justify-end items-center gap-6 mt-6">
        <div class="flex items-center gap-4 text-3xl text-[#F1ECD6]/70">
          <UIcon
            v-for="icon in project.technologies"
            :key="icon"
            :name="icon"
          />
        </div>
        <UButton
          :to="project.repoUrl"
          target="_blank"
          color="white"
          variant="link"
          class="bg-[#F1ECD6] p-4 rounded-3xl items-center flex gap-3 w-fit text-background hover:bg-[#F1ECD6]/80 transition-colors"
        >
          <span class="font-bold">ver repositório</span>
          <UIcon name="i-simple-icons-github" class="text-2xl" />
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
