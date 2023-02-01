<script>
import { Component } from 'vue-property-decorator'
import Keys from '@/components/modules/ButtonsGrid/Keys'
import UIButton from '@/components/ui/UIButton'

@Component({
  inject: {
    logGreen: {
      from: Keys.LogGreen
    }
  }
})
export default class GreenButton extends UIButton {
  title = 'Green button'
  green = true
  onClick () {
    this.logGreen()
  }
}
</script>
