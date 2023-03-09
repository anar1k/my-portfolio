<template>
  <v-row class="hobby-information">
    <v-col
      cols="12"
      md="6"
    >
      <div class="text-h4 mb-2">
        Немного о себе:
      </div>

      <ol class="hobby-information__list">
        <li
          v-for="item in listInfoYourself"
          :key="item.id"
          class="mb-1 text-body-1"
        >
          <span>{{ item.text }}</span>

          <template v-if="typeof item.icon === 'string'">
            <v-icon
              :icon="item.icon"
              :color="item.colorForIcon"
              class="ml-2"
            />
          </template>

          <template v-else>
            <v-icon
              v-for="(icon, indexIcon) in item.icon"
              :key="icon + indexIcon"
              :icon="icon"
              :color="item.colorForIcon"
              class="ml-2"
            />
          </template>
        </li>
      </ol>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <div class="text-h4 mb-2">
        Навыки:
      </div>

      <div>
        <v-chip
          v-for="item in skills"
          :key="item.id"
          class="ma-2 ml-0"
          :color="item.color"
          :prepend-icon="item.icon"
        >
          {{ item.text }}
        </v-chip>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useSkillsStore } from '~/stores/skills';
import { useInfoMeStore } from '~/stores/infoMe';

const skills = computed(() => useSkillsStore().allSkills);
const listInfoYourself = computed(() => useInfoMeStore().infoAboutYourself);
</script>

<style scoped lang="scss">
.hobby-information__list {
  list-style-position: inside;
}
</style>
