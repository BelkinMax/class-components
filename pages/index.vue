<template>
  <ButtonsGridModule />
</template>

<script>
import { logFactory } from '@/factories'
import FactoryKeys from '@/factories/FactoryKeys'
import ButtonsGridModule from '@/components/modules/ButtonsGrid/index.vue'
export default {
  name: 'IndexPage',
  components: {
    ButtonsGridModule
  },
  provide () {
    return {
      [FactoryKeys.LogFactory]: logFactory
    }
  }
}
</script>
