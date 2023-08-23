<template>
  <header class="header-content">
    <small class="header-content__meta"><slot name="meta"></slot></small>
    <h1 class="header-content__title"><slot name="title"></slot></h1>
  </header>
  <main class="main-content">
    <slot />
  </main>
</template>

<style lang="scss" scoped>
  .header-content {
    letter-spacing: 5px;
    text-transform: uppercase;

    &__meta {
      display: block;
      margin-bottom: 16px;
      font-size: 0.7em;
    }

    &__title {
      margin-bottom: 72px;
      font-family: 'title-bold';
      font-size: 1.7em;
    }
  }
</style>
