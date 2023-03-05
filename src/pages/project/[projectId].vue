<template>
  <v-container>
    <div>
      project {{ projectId }}
    </div>
  </v-container>
</template>

<script setup lang="ts">
interface RouteParams {
  projectId?: string;
}

const { projectId }: RouteParams = useRoute().params;

const uri = 'https://fakestoreapi.com/products/' + projectId;
const { data: product } = await useFetch(uri, { key: projectId });

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true });
}
</script>

<style scoped>

</style>
