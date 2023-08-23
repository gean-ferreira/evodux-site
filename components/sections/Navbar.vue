<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li @click="asideStore.close" class="navbar__item">
        <NuxtLink class="navbar__link" to="/">Home</NuxtLink>
      </li>
      <li @click="asideStore.close" class="navbar__item">
        <NuxtLink class="navbar__link" to="/sobre">Sobre</NuxtLink>
      </li>
      <li @click="asideStore.close" class="navbar__item">
        <NuxtLink class="navbar__link" to="/experiencias"
          >Experiências</NuxtLink
        >
      </li>
      <li @click="asideStore.close" class="navbar__item">
        <NuxtLink class="navbar__link" to="/projetos">Projetos</NuxtLink>
      </li>
      <li @click="asideStore.close" class="navbar__item">
        <NuxtLink class="navbar__link" to="/certificados"
          >Certificados</NuxtLink
        >
      </li>
      <li @click="asideStore.close" class="navbar__item">
        <NuxtLink class="navbar__link" to="/contato">Contato</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import { useAsideStore } from 'stores/aside'
  const asideStore = useAsideStore()
</script>

<style lang="scss">
  .navbar {
    &__list {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    &__link {
      position: relative;
      letter-spacing: 1px;

      &::after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 50%;
        width: 0;
        height: 1px;
        background-color: $secondary;
        transition: all 0.3s ease;
        transform: translateX(-50%);
      }

      &:hover,
      &.router-link-active {
        color: $secondary;
      }

      &:hover::after,
      &.router-link-active::after {
        width: 100%;
      }
    }
  }
</style>
