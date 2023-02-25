<template>
  <v-container>
    <div>
      product {{ productId }}
    </div>
  </v-container>
</template>

<script setup lang="ts">
interface RouteParams {
  productId?: string;
}

const { productId }: RouteParams = useRoute().params;

const uri = 'https://fakestoreapi.com/products/' + productId;
const { data: product } = await useFetch(uri, { key: productId });

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true });
}
</script>

<style scoped>

</style>
