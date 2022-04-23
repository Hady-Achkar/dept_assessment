import {combineReducers} from 'redux'
import CasesReducer from './CasesReducer'

const rootReducer = combineReducers({
	cases: CasesReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer
