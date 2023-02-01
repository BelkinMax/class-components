<script>
import { Component } from 'vue-property-decorator'
import Keys from '@/components/modules/ButtonsGrid/Keys'
import UIButton from '@/components/ui/UIButton'

@Component({
  inject: {
    logRed: {
      from: Keys.LogRed
    }
  }
})
export default class RedButton extends UIButton {
  title = 'Red button'
  red = true
  onClick () {
    this.logRed()
  }
}
</script>
