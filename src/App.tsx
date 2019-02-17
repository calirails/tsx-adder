import * as tsx from 'vue-tsx-support'
import { VNode } from 'vue'
import { Adder } from './components/Adder'
import Operator from './types/operator';
import { IStoreCompositeState } from '@/store/index'

const App = tsx.component({
  name: 'App',
  computed: {
    operator(): Operator {
      return (this.$store.state as IStoreCompositeState).calculation.operator
    },
    left(): number {
      return (this.$store.state as IStoreCompositeState).calculation.left
    },
    right(): number {
      return (this.$store.state as IStoreCompositeState).calculation.right
    },
    result(): number {
      switch (this.operator) {
        case Operator.add:
          return this.left + this.right
        case Operator.subtract:
          return this.left - this.right
        case Operator.multiply:
          return this.left * this.right
        case Operator.divide:
          return this.left / this.right
        default:
          return 0
      }
    }
  },
  render(): VNode {
    return (
      <Adder left={this.left} selectedOperator={this.operator} right={this.right}
        onOperatorChanged={this.operatorChanged}>
          <div slot='result'>
            {this.result}
          </div>
      </Adder>
    )
  },
  methods: {
    operatorChanged(op: Operator) {
      this.$store.commit('calculation/SET_OPERATOR', op) // NOTE: no typechecking on .commit method here:(
      console.log('calling $store.commit to run Update Operator mutation')
    }
  }
})

export default App