<script setup lang="ts">
import {NavigationListItemInterface} from "@/types/navigation/types.ts";

interface NavigationListItemProps extends NavigationListItemInterface {
  activeClass?: string;
}

withDefaults(defineProps<NavigationListItemProps>(), {
  activeClass: 'link-active',
})

</script>

<template>
  <li class="navigation-list-item">
    <RouterLink
        :to="path"
        :active-class="activeClass"
        class="navigation-link"
    >
      {{ title || name }}
    </RouterLink>
  </li>
</template>

<style scoped lang="scss">
.navigation-link {
  /* Title/16PX Regular */
  color: rgb(0, 0, 0);
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  display: flex;
  transition: .2s ease;
  border-bottom: 2px solid transparent;
}
.link-active, .navigation-link:hover {
  border-bottom-color: rgba(0, 0, 0, 0.6);
}
</style>