<template>
  <div>
    <ui-breadcrumbs :items="itemsForBreadcrumbs" />

    <div class="text-h4 text-md-h3 my-4">
      Мои проекты
    </div>

    <v-row>
      <v-col
        v-for="(n, i) in 3"
        :key="i"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card :to="`/project/${i + 1}`">
          <v-img
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
          />

          <v-card-subtitle class="pt-4">
            Number 10
          </v-card-subtitle>

          <v-card-text>
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import UiBreadcrumbs from '~/components/Ui/UiBreadcrumbs.vue';

useHead({ title: 'Мои проекты' });

const itemsForBreadcrumbs = [
  {
    title: 'обо мне',
    to: '/about'
  },
  {
    title: 'проекты'
  }
];
</script>
