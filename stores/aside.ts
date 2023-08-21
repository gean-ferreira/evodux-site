import { defineStore } from 'pinia'

export const useAsideStore = defineStore({
  id: 'aside',
  state: () => ({
    isOpen: false,
  }),
  actions: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    close() {
      this.isOpen = false
    },
  },
})
