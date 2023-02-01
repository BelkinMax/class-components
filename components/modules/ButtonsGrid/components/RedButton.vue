<script>
import { Component, Inject } from 'vue-property-decorator'
import Keys from '@/components/modules/ButtonsGrid/Keys'
import UIButton from '@/components/ui/UIButton'

@Component
export default class RedButton extends UIButton {
  title = 'Red button'
  red = true
  @Inject({ from: Keys.LogRed }) logRed

  onClick () {
    this.logRed()
  }
}
</script>
