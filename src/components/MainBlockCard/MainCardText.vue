<template>
  <v-card-text class="mt-2 text-amber flex-grow-0">
    <div>
      <v-btn
        v-for="item in skills"
        :key="item.id"
        variant="text"
        density="compact"
        icon
        :ripple="false"
        class="mr-2"
        :aria-label="item.text"
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
          v-for="item in contactsItems"
          :key="item.id"
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
import { useContactsStore } from '~/stores/contacts';
import { useSkillsStore } from '~/stores/skills';

const skills = computed(() => useSkillsStore().mainSkills.reverse());
const contactsItems = computed(() => useContactsStore().contacts);
</script>
