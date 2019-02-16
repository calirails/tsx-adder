import * as tsx from 'vue-tsx-support'
import { VNode } from 'vue'
import { Adder } from './components/Adder'
import Operator from './types/operator';

const App = tsx.component({
  name: 'App',
  data() {
    return {
      result: 0,
      operator: Operator.multiply
    }
  },
  render(): VNode {
    return (
      <Adder left={3} selectedOperator={this.operator} right={4}
        onOperatorChange={this.operatorChanged}/>
    )
  },
  methods: {
    operatorChanged(op: Operator) {
      this.operator = op
    }
  }
})

export default App