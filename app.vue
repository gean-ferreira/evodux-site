<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  useHead({
    titleTemplate: (productCategory: string) => {
      return productCategory ? `${productCategory} | Evodux` : 'Evodux'
    },
  })
</script>
