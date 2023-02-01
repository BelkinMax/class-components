<template>
  <button
    class="button"
    :class="{
      red,
      blue,
      green,
      orange
    }"
    @click="$emit('buttonClick')"
  >
    <slot>
      Default text
    </slot>
  </button>
</template>

<script>
export default {
  name: 'TheButton',
  props: {
    red: {
      type: Boolean,
      default: false
    },
    blue: {
      type: Boolean,
      default: false
    },
    green: {
      type: Boolean,
      default: false
    },
    orange: {
      type: Boolean,
      default: false
    }
  }
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
