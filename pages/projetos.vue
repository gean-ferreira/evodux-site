<template>
  <NuxtLayout :name="'content'">
    <template #meta>projetos</template>
    <template #title>realizações e inovações</template>
  </NuxtLayout>
</template>

<script setup lang="ts">
  useHead({
    title: 'Projetos',
    meta: [
      {
        name: 'description',
        content:
          'Navegue pelos projetos de Gean Ferreira, abrangendo soluções empresariais e projetos pessoais. Veja o impacto e a inovação em cada realização.',
      },
    ],
  })
</script>
