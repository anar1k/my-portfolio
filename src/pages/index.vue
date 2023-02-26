<template>
  <div class="d-flex flex-column fill-height justify-center align-center text-white">
    <background-with-stars />

    <card-learn-more-about-me />
  </div>
</template>

<script setup lang="ts">
import BackgroundWithStars from '~/components/UI/BackgroundWithStars.vue';
import CardLearnMoreAboutMe from '~/components/Cards/CardLearnMoreAboutMe.vue';

definePageMeta({
  layout: 'index'
});

useHead({ title: 'Главная' });
</script>
