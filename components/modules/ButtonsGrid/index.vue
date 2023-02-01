<script>
import { Component, Provide } from 'vue-property-decorator'
import Keys from '@/components/modules/ButtonsGrid/Keys'
import FactoryKeys from '@/factories/FactoryKeys'
import UIGrid from '@/components/ui/UIGrid.vue'
import RedButton from '@/components/modules/ButtonsGrid/components/RedButton.vue'
import BlueButton from '@/components/modules/ButtonsGrid/components/BlueButton.vue'
import GreenButton from '@/components/modules/ButtonsGrid/components/GreenButton.vue'
import OrangeButton from '@/components/modules/ButtonsGrid/components/OrangeButton.vue'

@Component({
  inject: {
    $logFactory: {
      from: FactoryKeys.LogFactory
    }
  }
})
export default class ButtonsGrid extends UIGrid {
  itemsPerRow = 2
  componentList = [
    RedButton,
    BlueButton,
    GreenButton,
    OrangeButton
  ]

  @Provide(Keys.LogRed) logRed = this.$logFactory.logColor('Red')
  @Provide(Keys.LogBlue) logBlue = this.$logFactory.logColor('Blue')
  @Provide(Keys.LogGreen) logGreen = this.$logFactory.logColor('Green')
  @Provide(Keys.LogOrange) logOrange = this.$logFactory.logColor('Orange')
}
</script>
