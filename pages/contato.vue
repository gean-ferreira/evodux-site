<template>
  <NuxtLayout :name="'content'">
    <template #meta>contato</template>
    <template #title>vamos conversar?</template>
  </NuxtLayout>
</template>

<script setup lang="ts">
  useHead({
    title: 'Contato',
    meta: [
      {
        name: 'description',
        content:
          'Entre em contato com Gean Ferreira. Vamos discutir oportunidades, projetos ou trocar ideias sobre o mundo da tecnologia.',
      },
    ],
  })
</script>
