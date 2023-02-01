<script>
import { Component, Inject } from 'vue-property-decorator'
import UIButton from '@/components/ui/UIButton'

@Component
export default class BlueButton extends UIButton {
  title = 'Blue button'
  blue = true
  @Inject({ from: 'logBlue' }) logBlue

  onClick () {
    this.logBlue()
  }
}
</script>
