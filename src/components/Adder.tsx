import * as tsx from 'vue-tsx-support'
import { VNode } from 'vue'


const Adder = tsx.component ({
  name: 'Adder',
  render(): VNode {
    return (
      <div>Adder</div>
    )
  }
})

export {
  Adder
}