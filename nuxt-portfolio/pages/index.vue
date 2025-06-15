<template>
  <div>
    <div class="flex min-h-screen items-center pt-16">
      <div
        class="w-full lg:w-1/2 px-8 sm:px-12 md:px-20 lg:px-24 xl:px-32 py-10 z-10"
      >
        <div class="max-w-lg mx-auto lg:mx-0">
          <h1
            class="text-[var(--primary-color)] text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
          >
            Ethan Carter
          </h1>
          <h2
            class="text-stone-300 text-2xl sm:text-3xl font-semibold mt-3 md:mt-4 tracking-wide"
          >
            Software Developer
          </h2>
          <p
            class="text-stone-400 text-base sm:text-lg leading-relaxed mt-6 md:mt-8"
          >
            Ethan Carter is a seasoned software developer with a passion for
            crafting innovative solutions. With a background in computer science
            and a keen eye for detail, Ethan excels in creating efficient and
            user-friendly applications. His expertise spans various programming
            languages and frameworks, allowing him to tackle diverse projects
            with confidence and creativity.
          </p>
        </div>
      </div>
      <div
        class="hidden lg:block w-1/2 min-h-screen absolute right-0 top-0 bottom-0"
      >
        <NuxtImg
          src="/hero-image.jpg"
          class="w-full h-full object-cover object-center"
          alt="Developer workspace"
        />
        <div
          class="absolute inset-0 bg-stone-800/30"
          style="background-blend-mode: overlay"
        ></div>
      </div>
    </div>

    <section class="py-16 md:py-24 bg-[#1a2027]" id="project-1">
      <UContainer>
        <h2
          class="text-3xl sm:text-4xl font-bold text-[var(--primary-color)] text-center mb-8 md:mb-12"
        >
          Project 1
        </h2>
        <div class="max-w-3xl mx-auto text-stone-400 text-lg text-center">
          <p>
            Details about Project 1 will go here. This is a placeholder section.
          </p>
        </div>
      </UContainer>
    </section>

    <section class="py-16 md:py-24 bg-[#14191f]" id="project-2">
      <UContainer>
        <h2
          class="text-3xl sm:text-4xl font-bold text-[var(--primary-color)] text-center mb-8 md:mb-12"
        >
          Project 2
        </h2>
        <div class="max-w-3xl mx-auto text-stone-400 text-lg text-center">
          <p>
            Details about Project 2 will go here. This is a placeholder section.
          </p>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Ethan Carter - Software Developer",
  meta: [
    {
      name: "description",
      content: "Portfolio of Ethan Carter, a seasoned software developer.",
    },
  ],
});
</script>
