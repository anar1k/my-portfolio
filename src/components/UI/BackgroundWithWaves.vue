<template>
  <div
    class="animate-background"
    :class="[fixedBackground ? 'position-fixed' : 'position-relative']"
  >
    <template v-if="showWives">
      <div class="animate-background__stars animate-background__stars--small" />
      <div class="animate-background__stars animate-background__stars--medium" />
      <div class="animate-background__stars animate-background__stars--big" />
    </template>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  fixedBackground: boolean,
  showWives?: boolean
}

withDefaults(defineProps<Props>(), {
  fixedBackground: true,
  showWives: true
});
</script>

<style lang="scss" scoped>
.animate-background {
  width: 100vw;
  height: 100vh;
  background-size: 300% 300%;
  background: radial-gradient(ellipse at bottom, rgba(195, 134, 252, 0.98) 0%, #090A0F 100%);
}

@function multiple-box-shadow($number) {
  $value: "#{random(2000)}px #{random(2000)}px #FFF";

  @for $i from 2 through $number {
    $value: "#{$value} , #{random(2000)}px #{random(2000)}px #FFF";
  }

  @return unquote($value);
}

@mixin stars ($width, $height, $box-shadow, $duration){
  width: $width;
  height: $height;
  box-shadow: multiple-box-shadow($box-shadow);
  animation-duration: $duration;

  &:after {
    width: $width;
    height: $height;
    box-shadow: multiple-box-shadow($box-shadow);
  }
}

.animate-background__stars {
  background: transparent;
  animation: animation-stars linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: -2000px;
    background: transparent;
  }
}

.animate-background__stars--small {
  @include stars(1px, 1px, 700, 50s);
}

.animate-background__stars--medium {
  @include stars(2px, 2px, 200, 100s);
}

.animate-background__stars--big {
  @include stars(3px, 3px, 100, 150s);
}

@keyframes animation-stars {
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(2000px);
  }
}
</style>
