<script setup lang="ts">

import NavigationListItem from "@/components/Navigation/NavigationListItem.vue";
import {NavigationListItemInterface} from "@/types/navigation/types.ts";

interface NavigationListProps {
  navigationList: NavigationListItemInterface[]
}

defineProps<NavigationListProps>()
</script>

<template>
  <nav class="navigation">
    <ul class="navigation-list">
      <NavigationListItem
          v-for="({path, title, name}, index) in navigationList"
          :title="title"
          :path="path"
          :name="name"
          :key="index"
      />
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.navigation {
  display: flex;
  flex: 1;
}
.navigation-list {
  display: flex;
  gap: 15px;
  flex: 1;
  justify-content: space-around;
}
</style>