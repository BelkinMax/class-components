<script>
import { Component, Inject } from 'vue-property-decorator'
import Keys from '@/components/modules/ButtonsGrid/Keys'
import UIButton from '@/components/ui/UIButton'

@Component
export default class GreenButton extends UIButton {
  title = 'Green button'
  green = true
  @Inject({ from: Keys.LogGreen }) logGreen

  onClick () {
    this.logGreen()
  }
}
</script>
