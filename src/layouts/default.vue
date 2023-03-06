<template>
  <v-app>
    <NuxtLoadingIndicator />

    <header-default @open-drawer="setDrawer" />

    <header-mobile
      v-model="showDrawer"
      @update-value="setDrawer"
    />

    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>

    <footer-default />
  </v-app>
</template>

<script setup lang="ts">
import HeaderDefault from '~/components/TheHeader/HeaderDefault.vue';
import HeaderMobile from '~/components/TheHeader/HeaderMobile.vue';
import FooterDefault from '~/components/TheFooter/FooterDefault.vue';
import { useDefaultAppStore } from '~/stores/defaultApp';

const { fetchLayout } = useDefaultAppStore();

await fetchLayout();

const showDrawer = ref(false);

const setDrawer = (value = !showDrawer.value): void => {
  showDrawer.value = value;
};
</script>
