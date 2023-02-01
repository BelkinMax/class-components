<script>
import { Component, Inject } from 'vue-property-decorator'
import Keys from '@/components/modules/ButtonsGrid/Keys'
import UIButton from '@/components/ui/UIButton'

@Component
export default class OrangeButton extends UIButton {
  title = 'Orange button'
  orange = true
  @Inject({ from: Keys.LogOrange }) logOrange

  onClick () {
    this.logOrange()
  }
}
</script>
