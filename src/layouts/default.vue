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
import { useThemeStore } from '~/stores/theme';
import { useContactsStore } from '~/stores/contacts';

const { fetchTheme } = useThemeStore();
const { fetchContacts } = useContactsStore();

await fetchContacts();
await fetchTheme();

const showDrawer = ref(false);

const setDrawer = (value = !showDrawer.value): void => {
  showDrawer.value = value;
};
</script>
