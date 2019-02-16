import * as tsx from 'vue-tsx-support'
import { VNode } from 'vue'
import { Adder } from './components/Adder'

const App = tsx.component({
  name: 'App',

  render(): VNode {
    return (
      <Adder />
    )
  }
})

export default App