<template>
  <v-navigation-drawer
    :model-value="modelValue && mobile"
    location="bottom"
    temporary
    touchless
    @update:model-value="updateValue"
  >
    <header-nav :is-list="true" />
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import HeaderNav from '~/components/TheHeader/HeaderNav.vue';

interface Props {
  modelValue: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false
});

const emit = defineEmits<{(e: 'update-value', value: boolean): void}>();

const updateValue = () => {
  emit('update-value', !props.modelValue);
};

const { mobile } = useDisplay();
</script>
