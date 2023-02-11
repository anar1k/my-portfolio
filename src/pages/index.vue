<template>
  <Head>
    <Title>index</Title>
  </Head>

  <div>
    <p>sadsads</p>

    <div>test</div>

    <div>
      <NuxtLink to="/about">
        about
      </NuxtLink>
    </div>
    <div>
      <NuxtLink to="/products">
        products
      </NuxtLink>
    </div>
    <div>
      <NuxtLink to="/products/1213">
        products/1213
      </NuxtLink>
    </div>

    <button v-if="testRef" class="test" @click="testFun">
      test
    </button>

    <img src="@/assets/test-img.png" alt="photo">
  </div>
</template>

<script setup lang="ts">
const testRef = ref<string | number>('')

const testFun = ():string => {
  console.log(testRef)

  return 'test'
}

console.log(testFun())
</script>

<style scoped>

</style>
