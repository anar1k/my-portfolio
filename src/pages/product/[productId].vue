<template>
  <div>test 211212</div>

  <div>
    {{ state.count }}
  </div>

  <button @click="increment">
    test
  </button>
</template>

<script setup lang="ts">
type Test = undefined | string

interface MyState<T = Test, E = string> {
  control: number;
  issue: T;
  test: E;
}

const state = reactive<MyState>({
  control: 1,
  issue: undefined,
  test: 'sadas'
});

const increment = ():number => state.control++;

onMounted(() => {
  console.log(123);
});
</script>

<style scoped>

</style>
