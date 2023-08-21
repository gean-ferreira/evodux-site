<template>
  <aside class="aside" :class="{ 'aside--open': asideStore.isOpen }">
    <div class="aside__infos">
      <img class="aside__img" :src="MyPhoto" alt="Foto de perfil" />
      <h1 @click="asideStore.close" class="aside__name"><NuxtLink to="/">Gean Ferreira</NuxtLink></h1>
      <span class="aside__position" @click="asideStore.close"
        ><NuxtLink to="/">DEV FRONT-END</NuxtLink></span
      >
    </div>
    <Navbar />
  </aside>
</template>

<script setup lang="ts">
  import Navbar from 'sections/Navbar.vue'
  import MyPhoto from 'images/me.jpeg'
  import { useAsideStore } from 'stores/aside'
  const asideStore = useAsideStore()
</script>

<style lang="scss">
  .aside {
    position: absolute;
    top: 0;
    left: -60%;
    height: 100vh;
    width: 60%;
    height: 100%;
    transition: left 0.3s;
    text-align: center;
    background-color: $grey-2;
    padding: 64px 0;

    @media (min-width: map-get($breakpoints, lg)) {
      position: static;
      flex: 1;
      left: 0;
    }

    &--open {
      left: 0;
    }

    &__infos {
      margin-bottom: 24px;
    }

    &__name {
      font-family: 'title-bold';
      font-size: 1.7em;
      margin-top: 24px;
      margin-bottom: 8px;
    }

    &__position {
      color: $secondary;
    }

    &__img {
      max-width: 150px;
      max-height: 150px;
      border-radius: 50%;

      @media (min-width: map-get($breakpoints, xl)) {
        max-width: 250px;
        max-height: 250px;
      }
    }
  }
</style>
