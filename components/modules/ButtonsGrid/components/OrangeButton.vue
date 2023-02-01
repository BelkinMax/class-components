<script>
import { Component } from 'vue-property-decorator'
import Keys from '@/components/modules/ButtonsGrid/Keys'
import UIButton from '@/components/ui/UIButton'

@Component({
  inject: {
    logOrange: {
      from: Keys.LogOrange
    }
  }
})
export default class OrangeButton extends UIButton {
  title = 'Orange button'
  orange = true
  onClick () {
    this.logOrange()
  }
}
</script>
