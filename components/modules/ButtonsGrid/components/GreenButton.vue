<script>
import { Component, Inject } from 'vue-property-decorator'
import UIButton from '@/components/ui/UIButton'

@Component
export default class GreenButton extends UIButton {
  title = 'Green button'
  green = true
  @Inject({ from: 'logGreen' }) logGreen

  onClick () {
    this.logGreen()
  }
}
</script>
