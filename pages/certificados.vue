<template>
  <NuxtLayout :name="'content'">
    <template #meta>certificados</template>
    <template #title>minhas qualificações</template>
  </NuxtLayout>
</template>

<script setup lang="ts">
  useHead({
    title: 'Certificados',
    meta: [
      {
        name: 'description',
        content:
          'Veja os certificados e qualificações de Gean Ferreira, que validam minha expertise em desenvolvimento front-end e tecnologia.',
      },
    ],
  })
</script>
