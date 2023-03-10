<template>
  <div v-if="items.length">
    <v-breadcrumbs
      class="pl-0"
      :items="items"
    >
      <template #title="{ item }">
        {{ setFirstLetterCapital(item.title) }}
      </template>
    </v-breadcrumbs>

    <v-divider />
  </div>
</template>

<script setup lang="ts">
interface IProps {
  items?: {
    title: string,
    to?: string
  }[],
}

withDefaults(defineProps<IProps>(), {
  items: () => []
});

const setFirstLetterCapital = (str:string) => {
  return str[0].toUpperCase() + str.slice(1);
};
</script>
