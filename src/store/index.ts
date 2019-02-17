import Vue from 'vue'
import Vuex from 'vuex'

import { calculation, ICalculationState } from './calculation'

Vue.use(Vuex)

interface IStoreCompositeState {
    calculation: ICalculationState
}

const store = new Vuex.Store<IStoreCompositeState>({
    modules: {
        calculation
    }
})

export { 
    store,
    IStoreCompositeState
}