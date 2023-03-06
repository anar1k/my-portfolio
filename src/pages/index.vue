<template>
  <div class="d-flex flex-column fill-height justify-center align-center text-white">
    <main-background-with-stars />

    <main-card />
  </div>
</template>

<script setup lang="ts">
import MainBackgroundWithStars from '~/components/MainBackground/MainBackgroundWithStars.vue';
import MainCard from '~/components/MainBlockCard/MainCard.vue';
import { useSkillsStore } from '~/stores/skills';
import { useContactsStore } from '~/stores/contacts';

definePageMeta({
  layout: 'index'
});

useHead({ title: 'Главная' });

const { fetchSkills } = useSkillsStore();
const { fetchContacts } = useContactsStore();

await fetchSkills();
await fetchContacts();
</script>
