<template>
  <aside class="aside" :class="{ 'aside--open': asideStore.isOpen }">
    <div class="aside__infos">
      <img class="aside__img" :src="MyPhoto" alt="Foto de perfil" />
      <h1 @click="asideStore.close" class="aside__name">
        <NuxtLink to="/">Gean Ferreira</NuxtLink>
      </h1>
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
    width: 60%;
    height: 100vh;
    transition: left 0.3s;
    text-align: center;
    background-color: $grey-2;
    padding-top: 32px;

    @media (min-width: map-get($breakpoints, lg)) {
      padding-top: 64px;
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
      width: 150px;
      height: 150px;
      border-radius: 50%;

      @media (min-width: map-get($breakpoints, xl)) {
        width: 250px;
        height: 250px;
      }
    }
  }
</style>
