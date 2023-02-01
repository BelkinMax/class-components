<script>
import { Component, Inject } from 'vue-property-decorator'
import UIButton from '@/components/ui/UIButton'

@Component
export default class OrangeButton extends UIButton {
  title = 'Orange button'
  orange = true
  @Inject({ from: 'logOrange' }) logOrange

  onClick () {
    this.logOrange()
  }
}
</script>
