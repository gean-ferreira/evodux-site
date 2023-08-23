<template>
  <NuxtLayout :name="'content'">
    <template #meta>home</template>
    <template #title>impulsionando soluções tecnológicas</template>
  </NuxtLayout>
</template>

<script setup lang="ts">
  useHead({
    meta: [
      {
        name: 'description',
        content:
          'Gean Ferreira: Soluções tecnológicas inovadoras para impulsionar seu projeto digital. Descubra o que posso oferecer!',
      },
    ],
  })
</script>
