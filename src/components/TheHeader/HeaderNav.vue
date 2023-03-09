<template>
  <nav v-if="!isList">
    <v-btn
      v-for="btn in navItems"
      :key="btn.id"
      :to="btn.link"
      class="mx-2"
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
import { ILink } from '~/types/Link';

interface Props {
  isList?: boolean,
}

withDefaults(defineProps<Props>(), {
  isList: false
});

const navItems: ILink[] = [
  {
    id: 1,
    title: 'Обо мне',
    link: '/about'
  },
  {
    id: 2,
    title: 'Проекты',
    link: '/projects'
  }
];
</script>
