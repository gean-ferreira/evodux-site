<template>
  <aside class="aside">
    <div class="aside__infos">
      <img class="aside__img" :src="MyPhoto" alt="Foto de perfil" />
      <h1 class="aside__name">Gean Ferreira</h1>
      <span class="aside__position"
        ><NuxtLink to="/">DEV FRONT-END</NuxtLink></span
      >
    </div>
    <Navbar />
  </aside>
</template>

<script setup lang="ts">
  import Navbar from 'sections/Navbar.vue'
  import MyPhoto from 'images/me.jpeg'

  defineProps({
    menuOpen: Boolean,
  })
</script>

<style lang="scss">
  .aside {
    padding: 64px 0;
    text-align: center;
    background-color: $grey-2;
    @media (min-width: map-get($breakpoints, lg)) {
      padding: 64px;
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
      max-width: 250px;
      max-height: 250px;
      border-radius: 50%;
    }
  }
</style>
