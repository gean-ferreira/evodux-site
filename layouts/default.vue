<template>
  <section class="app container">
    <Aside />
    <section class="content">
      <slot />
    </section>
  </section>
  <Footer />
</template>

<script setup lang="ts">
  import { Aside, Footer } from 'sections'
</script>

<style lang="scss" scoped>
  .app {
    @media (min-width: map-get($breakpoints, lg)) {
      display: flex;
    }


    .content {
      min-height: 100vh;
    }
  }
</style>
