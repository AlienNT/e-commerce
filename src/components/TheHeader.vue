<script setup lang="ts">

import VLogo from "@/components/UI/VLogo.vue";
import NavigationList from "@/components/Navigation/NavigationList.vue";

import {reactive} from "vue";
import {NavigationListItemInterface} from "@/types/navigation/types.ts";
import SearchField from "@/components/UI/SearchField.vue";

const state = reactive({
  navigationList: [
    {
      name: 'home',
      path: '/',
      title: 'Home'
    },
    {
      name: 'contact',
      path: '/contact',
      title: 'Contact'
    },
    {
      name: 'about',
      path: '/about',
      title: 'About'
    },
    {
      name: 'signUp',
      path: '/signUp',
      title: 'Sign Up'
    },
  ] as NavigationListItemInterface[]
})
</script>

<template>
  <header class="header">
    <div class="container">
      <VLogo text="Exclusive"/>
      <NavigationList
          :navigation-list="state.navigationList"
      />
      <SearchField/>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  padding-top: 25px;
  padding-bottom: 25px;
  background: $colorBackground;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.container {
  display: flex;
}
</style>