<template>
  <div class="pb-4">
    <about-welcome class="pb-4 pb-xl-0" />

    <v-divider />

    <about-first-experience class="py-4" />

    <v-divider />

    <about-hobby-information class="mt-4" />
  </div>
</template>

<script setup lang="ts">
import AboutWelcome from '~/components/About/AboutWelcome.vue';
import AboutFirstExperience from '~/components/About/AboutFirstExperience.vue';
import AboutHobbyInformation from '~/components/About/AboutHobbyInformation.vue';
import { useSkillsStore } from '~/stores/skills';
import { useInfoMeStore } from '~/stores/infoMe';

useHead({ title: 'Обо мне' });

const { fetchSkills } = useSkillsStore();
const { fetchInfoMe } = useInfoMeStore();

await fetchInfoMe();
await fetchSkills();
</script>
