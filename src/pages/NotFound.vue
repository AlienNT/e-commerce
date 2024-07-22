<script setup lang="ts">

</script>

<template>
<div class="not-found-page">
  <div class="not-found-page__title">404 Not Found</div>
  <div class="not-found-page__content">Your visited page not found. You may go home page.</div>
  <button
      type="button"
      class="not-found-page__button"
      @click.stop="$router.push('/')"
  >
    Back to home page
  </button>
</div>
</template>

<style scoped lang="scss">

</style>