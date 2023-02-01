<script>
import { Component, Provide } from 'vue-property-decorator'
import LogFactory from '~/factories/LogFactory'
import UIGrid from '~/components/ui/UIGrid.vue'
import RedButton from '~/components/modules/ButtonsGrid/components/RedButton.vue'
import BlueButton from '~/components/modules/ButtonsGrid/components/BlueButton.vue'
import GreenButton from '~/components/modules/ButtonsGrid/components/GreenButton.vue'
import OrangeButton from '~/components/modules/ButtonsGrid/components/OrangeButton.vue'

@Component
export default class ButtonsGrid extends UIGrid {
  itemsPerRow = 2
  componentList = [
    OrangeButton,
    GreenButton,
    BlueButton,
    RedButton
  ]

  @Provide('logRed') logRed = LogFactory.logColor('Red', 'red')
  @Provide('logBlue') logBlue = LogFactory.logColor('Blue', 'blue')
  @Provide('logGreen') logGreen = LogFactory.logColor('Green', 'green')
  @Provide('logOrange') logOrange = LogFactory.logColor('Orange', 'orange')
}
</script>
