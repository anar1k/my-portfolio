<template>
  <nav v-if="!isList">
    <v-btn
      v-for="(btn, index) in navItems"
      :key="btn.title + index"
      :to="btn.link"
      variant="text"
    >
      {{ btn.title }}
    </v-btn>
  </nav>

  <v-list
    v-else
    nav
    active-color="primary"
  >
    <v-list-item
      v-for="(item, index) in navItems"
      :key="item.title + index"
      :title="item.title"
      :to="item.link"
    />
  </v-list>
</template>

<script setup lang="ts">
import { Links } from '~/types/Link';

interface Props {
  isList?: boolean,
}

withDefaults(defineProps<Props>(), {
  isList: false
});

const navItems: Links = [
  {
    title: 'Обо мне',
    link: '/about'
  },
  {
    title: 'Проекты',
    link: '/projects'
  }
];
</script>
