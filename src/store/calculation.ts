import Operator from '@/types/operator';
import { Module } from 'vuex'

interface ICalculationState {
    operator: Operator
    left: number,
    right: number
}

const SET_OPERATOR = 'SET_OPERATOR'

const calculation: Module<ICalculationState, {}> = {
    namespaced: true,
    state: {
        operator: Operator.add,
        left: 12,
        right: 24
    },
    mutations: {
        SET_OPERATOR(state, payload: Operator) {
            state.operator = payload
            console.log('SET_OPERATOR mutatione executed')
        }
    }
}

export {
    calculation,
    ICalculationState
}