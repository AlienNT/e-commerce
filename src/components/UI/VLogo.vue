<script setup lang="ts">
interface LogoPropsInterface {
  text: string
}

defineProps<LogoPropsInterface>()
</script>

<template>
  <div class="text-logo">
    {{ text }}
  </div>
</template>

<style scoped lang="scss">
.text-logo {
  /* Heading/24PX Bold */
  color: rgb(0, 0, 0);
  font-family: Inter,sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1px;
  text-align: left;
}
</style>