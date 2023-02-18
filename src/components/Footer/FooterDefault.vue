<template>
  <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      />
    </div>

    <div>
      {{ new Date().getFullYear() }} — <strong>Anarik</strong>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
const icons:string[] = [
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram'
];
</script>

<style scoped lang="scss">

</style>
