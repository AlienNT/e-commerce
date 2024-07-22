<script setup lang="ts">
interface SearchFieldProps {
  placeholder: string,
  value?: string
}

withDefaults(defineProps<SearchFieldProps>(), {
  placeholder: 'What are you looking for?'
})
</script>

<template>
  <div class="search-field">
    <label class="search-label">
      <input
          class="search-input"
          type="search"
          :placeholder="placeholder"
      >
    </label>
  </div>
</template>

<style scoped lang="scss">
.search-label {
  padding: 7px 12px 7px 20px;
  background: $colorSecondaryLight;
  border-radius: 4px;
  cursor: pointer;
}

.search-input {
  &::placeholder {
    transition: .2s ease;
  }

  &:focus {
    &::placeholder {
      color: transparent;
    }
  }
}

</style>