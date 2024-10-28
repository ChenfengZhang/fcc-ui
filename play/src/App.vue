<script setup lang="ts">
import VButton from '@fcc-ui/components/button'
import ZIcon from '@fcc-ui/components/icon'
import { AccessibilityOutline } from "@vicons/ionicons5";
</script>

<template>
   <div>
    <v-button></v-button>
    <ZIcon>
      <AccessibilityOutline></AccessibilityOutline>
    </ZIcon>
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
