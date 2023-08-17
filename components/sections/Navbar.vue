<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__item">
        <NuxtLink class="navbar__link" to="/">Home</NuxtLink>
      </li>
      <li class="navbar__item">
        <NuxtLink class="navbar__link" to="/sobre">Sobre</NuxtLink>
      </li>
      <li class="navbar__item">
        <NuxtLink class="navbar__link" to="/experiencias"
          >Experiências</NuxtLink
        >
      </li>
      <li class="navbar__item">
        <NuxtLink class="navbar__link" to="/projetos">Projetos</NuxtLink>
      </li>
      <li class="navbar__item">
        <NuxtLink class="navbar__link" to="/certificados"
          >Certificados</NuxtLink
        >
      </li>
      <li class="navbar__item">
        <NuxtLink class="navbar__link" to="/contato">Contato</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
  .navbar {
    &__list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    &__link {
      position: relative;
      color: inherit; // Herda a cor padrão do texto

      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 50%;
        width: 0;
        height: 1px;
        background-color: $primary;
        transition: all 0.3s ease;
        transform: translateX(-50%);
      }

      &:hover,
      &.router-link-active {
        color: $primary;
      }

      &:hover::after,
      &.router-link-active::after {
        width: 100%;
      }
    }
  }
</style>
