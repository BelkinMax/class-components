<template>
  <div class="grid">
    <div class="grid-item">
      <TheButton
        red
        @buttonClick="logRed"
      >
        Red Button
      </TheButton>
    </div>
    <div class="grid-item">
      <TheButton
        blue
        @buttonClick="logBlue"
      >
        Blue Button
      </TheButton>
    </div>
    <div class="grid-item">
      <TheButton
        green
        @buttonClick="logGreen"
      >
        Green Button
      </TheButton>
    </div>
    <div class="grid-item">
      <TheButton
        orange
        @buttonClick="logOrange"
      >
        Orange Button
      </TheButton>
    </div>
  </div>
</template>

<script>
import TheButton from '~/components/TheButton.vue'
export default {
  name: 'IndexPage',
  components: {
    TheButton
  },
  methods: {
    logRed () {
      // eslint-disable-next-line no-console
      console.log('%c Red Button Clicked', 'background: red')
    },
    logBlue () {
      // eslint-disable-next-line no-console
      console.log('%c Blue Button Clicked', 'background: blue')
    },
    logGreen () {
      // eslint-disable-next-line no-console
      console.log('%c Green Button Clicked', 'background: green')
    },
    logOrange () {
      // eslint-disable-next-line no-console
      console.log('%c Orange Button Clicked', 'background: orange')
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin: 1rem;
}
</style>
