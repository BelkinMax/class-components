<script>
import { Component, Inject } from 'vue-property-decorator'
import UIButton from '@/components/ui/UIButton'

@Component
export default class RedButton extends UIButton {
  title = 'Red button'
  red = true
  @Inject({ from: 'logRed' }) logRed

  onClick () {
    this.logRed()
  }
}
</script>
