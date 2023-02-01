<template>
  <div
    class="grid"
    :style="gridTemplateColumns"
  >
    <div
      v-for="(component, idx) in componentList"
      :key="idx"
      class="grid-item"
    >
      <component :is="component" />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class UIGrid extends Vue {
  componentList = []
  itemsPerRow = 4
  get gridTemplateColumns () {
    return {
      gridTemplateColumns: `repeat(${this.itemsPerRow}, 1fr)`
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-gap: 1rem;
  margin: 1rem;
}
</style>
