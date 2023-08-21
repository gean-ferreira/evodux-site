<template>
  <section
    class="app container"
    :class="{ 'app--aside-open': asideStore.isOpen }"
  >
    <Aside />
    <Hamburger />
    <section @click="asideStore.close" class="content">
      <slot />
    </section>
  </section>
  <Footer />
</template>

<script setup lang="ts">
  import { Aside, Footer } from 'sections'
  import Hamburger from 'elements/Hamburger'
  import { useAsideStore } from 'stores/aside'
  const asideStore = useAsideStore()
</script>

<style lang="scss" scoped>
  .app {
    height: 100vh;
    display: flex;

    @media (min-width: map-get($breakpoints, lg)) {
      display: flex;
    }
    &.app--aside-open {
      overflow: hidden;
      @media (min-width: map-get($breakpoints, lg)) {
      }
    }
    &.app--aside-open .content {
      opacity: 0.3;
      transform: translateX(60%);
      overflow: hidden;
      @media (min-width: map-get($breakpoints, lg)) {
        transform: translateX(0);
        overflow: auto;
        opacity: 1;
      }
    }
    .content {
      padding: 96px 24px 64px 24px;
      overflow: auto;
      transition: transform 0.3s ease;
      flex: 2;
      scrollbar-color: $secondary transparent;

      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb {
        height: 200px;
        border-radius: 10px;
        background: linear-gradient(transparent, $secondary, transparent);
      }

      @media (min-width: map-get($breakpoints, lg)) {
        padding: 64px;
      }
    }
  }
</style>
