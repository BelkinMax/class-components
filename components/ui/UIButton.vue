<template>
  <button
    class="button"
    :class="{
      red,
      blue,
      green,
      orange
    }"
    @click="onClick"
  >
    <slot>
      {{ title }}
    </slot>
  </button>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class UIButton extends Vue {
  title = 'Default value'
  red = false
  blue = false
  green = false
  orange = false
  onClick () {}
}
</script>

<style lang="scss" scoped>
.button {
  padding: 1rem;
  width: 100%;
  border: 0;
  border-radius: 0.25rem;
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &.red {
    background-color: #f56565;
    color: #fff;

    &:hover {
      background-color: #ed8936;
    }
  }

  &.blue {
    background-color: #4299e1;
    color: #fff;

    &:hover {
      background-color: #3182ce;
    }
  }

  &.green {
    background-color: #48bb78;
    color: #fff;

    &:hover {
      background-color: #38a169;
    }
  }

  &.orange {
    background-color: #ed8936;
    color: #fff;

    &:hover {
      background-color: #dd6b20;
    }
  }
}
</style>
