<script setup lang="ts">

import TheMain from "@/components/TheMain.vue";
import TheTopHeader from "@/components/TheTopHeader.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <TheTopHeader/>
  <TheHeader/>
  <TheMain/>
  <TheFooter/>
</template>

<style lang="scss">
#app {
  position: relative;
  display: flex;
  flex-direction: column;
  background: $colorBackground;
}
.footer {
  margin-top: auto;
}
</style>
