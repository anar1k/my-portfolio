<template>
  <v-app class="error-page">
    <v-main class="error-page__content d-flex flex-column align-center bg-black pa-10">
      <svg-rocket-with-stars />

      <div class="error-page__text text-center mt-8 text-h5 text-md-h4">
        <div class="font-weight-bold">
          {{ error.statusCode }} Ошибка
        </div>

        <div>
          Ты потерялся в пространстве :(
        </div>

        <v-btn
          class="mt-4"
          append-icon="mdi-rocket-launch"
          @click="handleError"
        >
          Давай отвезём тебя обратно
        </v-btn>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';
import SvgRocketWithStars from '~/components/Svg/SvgRocketWithStars.vue';

interface IProps {
  error: Partial<NuxtError>,
}

defineProps<IProps>();

const handleError = () => clearError({ redirect: '/' });
</script>

<style scoped lang="scss">
.error-page__content{
  height: 100vh;
}

.error-page__text{
  opacity: 0;
  animation: appear 1s ease-in forwards;
  animation-delay: 1.3s;
}

@keyframes appear {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
</style>
