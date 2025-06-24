<template>
  <div class="items-center justify-center">
    <section id="sobre" class="min-h-screen flex items-center justify-center">
      <div class="w-2/3 relative">
        <UContainer>
          <div class="border-2 border-hero-border rounded-4xl relative">
            <div class="absolute top-4 right-6 text-6xl font-extrabold">
              &lt;/&gt;
            </div>

            <p class="max-w-2/3 text-2xl mt-80 pb-20 px-12">
              Movido pela curiosidade e pelo desafio de construir soluções
              completas, sou um estudante de Análise e Desenvolvimento de
              Sistemas com experiência prática em back-end com tecnologias .NET.
              Estou em uma jornada para expandir minhas habilidades no universo
              front-end, mergulhando em componentes e frameworks para criar
              experiências de usuário memoráveis. Gosto de trabalhar em
              ambientes ágeis, onde posso colaborar e transformar problemas em
              software de qualidade.
            </p>

            <div class="absolute bg-[#F1ECD6] top-30 -left-20 p-5">
              <h2 class="font-serif text-5xl">Olá, eu sou</h2>
              <h1 class="font-sans text-8xl font-bold animate-typing">
                Luan Bezerra
              </h1>
            </div>

            <div
              class="absolute bottom-5 right-10 flex items-center gap-3 mt-8"
            >
              <div
                class="w-5 h-5 bg-green-800 rounded-full animate-pulse"
              ></div>
              <span class="text-xl font-bold"
                >Disponível para novos projetos</span
              >
            </div>
          </div>

          <div class="mt-10 flex flex-wrap gap-4 items-center">
            <div
              class="border-2 border-hero-border rounded-4xl p-12 flex items-center gap-10 h-full"
            >
              <p class="font-medium text-2xl">Redes Sociais:</p>

              <UButton
                to="https://github.com/LuanBz"
                target="_blank"
                color="white"
                variant="outline"
                class="flex gap-2 text-4xl transition-transform duration-300 transform hover:scale-110"
                :ui="{
                  variant: {
                    outline:
                      'ring-transparent text-primary hover:bg-primary/10',
                  },
                }"
              >
                <UIcon name="i-simple-icons-github"></UIcon
              ></UButton>
              <UButton
                to="https://www.linkedin.com/in/luanbz/"
                target="_blank"
                color="white"
                variant="outline"
                class="flex gap-2 text-4xl transition-transform duration-300 transform hover:scale-110"
                :ui="{
                  variant: {
                    outline:
                      'ring-transparent text-primary hover:bg-primary/10',
                  },
                }"
              >
                <UIcon name="i-simple-icons-linkedin"></UIcon>
              </UButton>
            </div>
            <div
              class="border-2 border-hero-border rounded-4xl p-12 flex-1 flex items-center gap-10 h-full"
            >
              <p class="font-medium text-2xl">Tecnologias:</p>
              <div class="flex items-center gap-10 text-4xl">
                <UIcon name="i-simple-icons-nuxtdotjs" />
                <UIcon name="i-simple-icons-react" />
                <UIcon name="i-simple-icons-expo" />
                <UIcon name="i-simple-icons-dotnet" />
                <UIcon name="i-simple-icons-csharp" />
                <UIcon name="i-simple-icons-git" />
                <UIcon name="i-simple-icons-tailwindcss" />
                <UIcon name="i-simple-icons-mysql" />
              </div>
            </div>
          </div>
        </UContainer>
      </div>
    </section>
    <div class="bg-[#5A3B29] w-1/3 py-4 rounded-tr-full">
      <h2 class="text-4xl font-bold text-center text-[#F1ECD6]">Projetos</h2>
    </div>
    <UContainer
      id="projetos"
      class="bg-[#251E0C] flex items-center justify-center"
    >
      <div class="rounded-lg py-24 w-2/3 md:px-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>
    </UContainer>
  </div>
</template>
<script setup>
import ProjectCard from "~/components/ProjectCard.vue";

useHead({
  title: "Luan Bezerra - Portfólio",
  meta: [
    {
      name: "description",
      content: "Portfólio de Luan Bezerra, desenvolvedor de software.",
    },
  ],
});

const projects = [
  {
    title: "Habitum.",
    description:
      "Para combater a procrastinação e a dificuldade em manter rotinas saudáveis em um mundo de distrações digitais, o Habitum foi concebido como um sistema interativo.  O projeto utiliza uma abordagem de gamificação, unindo desafios, recompensas e notificações para engajar o usuário na construção de hábitos positivos.  O sistema é composto por uma API robusta em ASP.NET e um aplicativo móvel desenvolvido com React Native e Expo.",
    images: {
      desktop: "/img/habitumMobile1.png",
      mobile: "/img/habitumMobile2.png",
      logo: "/img/habitum.png",
    },
    repoUrl: "https://github.com/LuanBz/Habitum",
    technologies: [
      "i-simple-icons-csharp",
      "i-simple-icons-react",
      "i-simple-icons-tailwindcss",
      "i-simple-icons-typescript",
      "i-simple-icons-mysql",
    ],
  },
  {
    title: "Prato do Dia",
    description:
      "Para resolver a dificuldade comum de decidir o que cozinhar e evitar o desperdício de alimentos, o Prato do Dia foi desenvolvido. É um sistema interativo de receitas que ajuda os usuários a descobrir e compartilhar pratos com base nos ingredientes que já possuem em casa. O projeto foi desenvolvido utilizando ASP.NET MVC, C# e RazorPages, resultando em um MVP funcional entregue em 8 semanas.",
    images: {
      desktop: "/img/prato-do-dia-desktop.png",
      logo: "/img/prato-do-dia.png",
    },
    repoUrl: "https://github.com/LuanBz/Prato-do-Dia",
    technologies: [
      "i-simple-icons-csharp",
      "i-simple-icons-dotnet",
      "i-simple-icons-bootstrap",
      "i-simple-icons-mysql",
    ],
  },
];
</script>
