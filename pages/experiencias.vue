<template>
  <NuxtLayout :name="'content'">
    <template #meta>experiências</template>
    <template #title>minha Trajetória Profissional</template>
  </NuxtLayout>
</template>

<script setup lang="ts">
  useHead({
    title: 'Experiências',
    meta: [
      {
        name: 'description',
        content:
          'Explore as experiências profissionais de Gean Ferreira em desenvolvimento front-end e tecnologia. Veja onde minha expertise foi aplicada e os projetos que conduzi.',
      },
    ],
  })
</script>
