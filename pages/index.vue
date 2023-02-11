<template>
  <Head>
    <Title>index</Title>
  </Head>

  <div>
    <div>
      <NuxtLink to="/about">about</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/products">products</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/products/product-1231">products/1213</NuxtLink>
    </div>

  </div>
</template>

<script setup lang="ts">
const test = ref<string>('test');

test.value = 'new test';
</script>

<style scoped>

</style>
