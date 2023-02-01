<script>
import { Component, Inject } from 'vue-property-decorator'
import Keys from '@/components/modules/ButtonsGrid/Keys'
import UIButton from '@/components/ui/UIButton'

@Component
export default class BlueButton extends UIButton {
  title = 'Blue button'
  blue = true
  @Inject({ from: Keys.LogBlue }) logBlue

  onClick () {
    this.logBlue()
  }
}
</script>
