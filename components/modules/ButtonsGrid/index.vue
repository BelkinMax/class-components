<script>
import { Component, Provide } from 'vue-property-decorator'
import LogFactory from '@/factories/LogFactory'
import Keys from '@/components/modules/ButtonsGrid/Keys'
import UIGrid from '@/components/ui/UIGrid.vue'
import RedButton from '@/components/modules/ButtonsGrid/components/RedButton.vue'
import BlueButton from '@/components/modules/ButtonsGrid/components/BlueButton.vue'
import GreenButton from '@/components/modules/ButtonsGrid/components/GreenButton.vue'
import OrangeButton from '@/components/modules/ButtonsGrid/components/OrangeButton.vue'

@Component
export default class ButtonsGrid extends UIGrid {
  itemsPerRow = 2
  componentList = [
    RedButton,
    BlueButton,
    GreenButton,
    OrangeButton
  ]

  @Provide(Keys.LogRed) logRed = LogFactory.logColor('Red', 'red')
  @Provide(Keys.LogBlue) logBlue = LogFactory.logColor('Blue', 'blue')
  @Provide(Keys.LogGreen) logGreen = LogFactory.logColor('Green', 'green')
  @Provide(Keys.LogOrange) logOrange = LogFactory.logColor('Orange', 'orange')
}
</script>
