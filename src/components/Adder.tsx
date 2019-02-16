import './adder.css'
import * as tsx from 'vue-tsx-support'
import { VNode } from 'vue'
import Operator from '@/types/operator';

interface IEvents {
  onOperatorChange: (op: Operator) => void
}

interface IOperators {
  allowedOperators: Operator[]
}

//const Adder = tsx.component ({ // Changed to below signature to allow typesafe events
  const Adder = tsx.componentFactoryOf<IEvents>().create ({
  name: 'Adder',
  props: {
    selectedOperator: {
      type: String as () => Operator,
      required: true as true
    },
    left: {
      type: Number,
      required: true as true
    },
    right: {
      type: Number,
      required: true as true
    }
  },
  data(): IOperators {
    return {
      allowedOperators: [
        Operator.add,
        Operator.subtract,
        Operator.multiply,
        Operator.divide
      ]
    }
  },
  render(): VNode {
    const {allowedOperators, selectedOperator, left, right } = this
    return (
      <div class='wrapper'>
        <div class="inner">
          <div class="number">
            {left}
          </div>

          <div class="signs">
            {allowedOperators.map(operator =>
                <span class={operator === selectedOperator ? 'selected sign' : 'sign'}
                            onClick={()=> this.$emit('changeOperator', operator)}>
                  {operator}
                </span>
              )
            }
          </div>

          <div class="number">
            {right}
          </div>

          <div class="result">
            <span>
              Result: {this.$slots.result}
            </span>
          </div>
        </div>        

      </div>
    )
  }
})

export {
  Adder
}