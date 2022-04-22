import {combineReducers} from 'redux'
import CasesReducer from './CasesReducer'
import FiltersReducer from './FiltersReducer'

const rootReducer = combineReducers({
	cases: CasesReducer,
	filter: FiltersReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer
