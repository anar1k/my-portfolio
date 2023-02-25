<template>
  <v-navigation-drawer
    :model-value="drawerCondition"
    location="bottom"
    temporary
  >
    test
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { Drawer } from '~/types/Drawer';

withDefaults(defineProps<Drawer>(), {
  drawerCondition: false
});
</script>

<style scoped>

</style>
