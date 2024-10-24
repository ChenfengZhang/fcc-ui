<script setup lang="ts">
import VButton from '@fcc-ui/components/button'
import '@fcc-ui/theme-chalk/src/index.scss'
</script>

<template>
   <div>
    <v-button></v-button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
