<template>
  <NuxtLayout :name="'content'">
    <template #meta>sobre mim</template>
    <template #title>quem sou eu?</template>
    <AboutMe />
  </NuxtLayout>
</template>

<script setup lang="ts">
  import AboutMe from 'sections/AboutMe'
  useHead({
    title: 'Sobre',
    meta: [
      {
        name: 'description',
        content:
          'Conheça Gean Ferreira, Desenvolvedor Front-End com mais de 2 anos de experiência. Descubra minha jornada, competências e como me tornei especialista em soluções tecnológicas.',
      },
    ],
  })
</script>
