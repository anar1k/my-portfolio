<template>
  <v-container>
    <div>
      project {{ id }}
    </div>
  </v-container>
</template>

<script setup lang="ts">
interface RouteParams {
  id?: string;
}

const { id }: RouteParams = useRoute().params;

const uri = 'https://fakestoreapi.com/products/' + id;
const { data: product } = await useFetch(uri, { key: id });

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true });
}
</script>

<style scoped>

</style>
