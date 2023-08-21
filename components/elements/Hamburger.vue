<template>
  <div
    :class="['hamburger', asideStore.isOpen ? 'hamburger--open' : '']"
    @click="asideStore.toggle"
  >
    <span></span>
  </div>
</template>

<script setup lang="ts">
  import { useAsideStore } from 'stores/aside'
  const asideStore = useAsideStore()
</script>

<style lang="scss">
  .hamburger {
    position: fixed;
    top: 0;
    left: 24px;
    width: 56px;
    height: 56px;
    cursor: pointer;
    transition: left 0.3s ease;
    border-radius: 50%;
    padding: 15px 10px;
    margin: 20px 0;
    background-color: rgba(44, 152, 240, 0.4);

    @media (min-width: map-get($breakpoints, lg)) {
      display: none;
    }

    span {
      position: relative;
      display: block;
      top: 50%;
      width: 100%;
      height: 2px;
      background: $grey-1;
      transition: 0.3s;
      transform: translateY(-50%);
      border-radius: 10px;

      &:before,
      &:after {
        position: fixed;
        left: 0;
        width: 100%;
        height: 2px;
        background: $grey-1;
        content: '';
        transition: 0.3s;
        border-radius: 10px;
      }

      &:before {
        top: -10px;
      }

      &:after {
        bottom: -10px;
      }
    }

    &--open {
      z-index: 1;
      left: 65%;
      span {
        background: transparent;
        &:before {
          top: 0px;
          transform: rotate(45deg);
        }
        &:after {
          bottom: 1px;
          transform: rotate(-45deg);
        }
      }
    }
  }
</style>
