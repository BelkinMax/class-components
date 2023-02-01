<script>
import { Component } from 'vue-property-decorator'
import Keys from '@/components/modules/ButtonsGrid/Keys'
import UIButton from '@/components/ui/UIButton'

@Component({
  inject: {
    logBlue: {
      from: Keys.LogBlue
    }
  }
})
export default class BlueButton extends UIButton {
  title = 'Blue button'
  blue = true
  onClick () {
    this.logBlue()
  }
}
</script>
