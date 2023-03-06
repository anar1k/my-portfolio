<template>
  <v-card-text class="mt-2 text-amber flex-grow-0">
    <div>
      <v-btn
        v-for="(item, index) in iconsSkills"
        :key="item + index"
        variant="text"
        density="compact"
        icon
        :ripple="false"
        class="justify-start"
      >
        <v-icon :color="item.color">
          {{ item.icon }}
        </v-icon>

        <v-tooltip
          activator="parent"
          location="bottom"
        >
          {{ item.text }}
        </v-tooltip>
      </v-btn>
    </div>

    <v-menu open-on-hover>
      <template #activator="{ props }">
        <div class="mt-2">
          <v-btn
            class="px-0"
            variant="plain"
            :ripple="false"
            v-bind="props"
          >
            Связаться со мной
          </v-btn>
        </div>
      </template>

      <v-list>
        <v-tooltip
          v-for="(item, index) in contactsItems"
          :key="index"
          :text="item.textForTooltip"
          close-on-content-click
        >
          <template #activator="{ props }">
            <v-list-item
              :href="item.href"
              target="_blank"
              v-bind="props"
            >
              <template #prepend>
                <v-icon :icon="item.icon" />
              </template>

              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </template>
        </v-tooltip>
      </v-list>
    </v-menu>
  </v-card-text>
</template>

<script setup lang="ts">
import { Skills } from '~/types/Skills';
import { useContactsStore } from '~/stores/contacts';

const iconsSkills: Skills = [
  {
    icon: 'mdi-language-javascript',
    text: 'JavaScript',
    color: 'amber'
  },
  {
    icon: 'mdi-language-typescript',
    text: 'TypeScript',
    color: 'blue-darken-1'
  },
  {
    icon: 'mdi-vuejs',
    text: 'Vuejs',
    color: 'green'
  },
  {
    icon: 'mdi-nuxt',
    text: 'Nuxt',
    color: 'green'
  },
  {
    icon: 'mdi-api',
    text: 'API',
    color: 'white'
  },
  {
    icon: 'mdi-git',
    text: 'Git',
    color: 'orange'
  },
  {
    icon: 'mdi-sass',
    text: 'Sass',
    color: 'purple-lighten-3'
  }
];

const contactsItems = computed(() => useContactsStore().contacts);
</script>
