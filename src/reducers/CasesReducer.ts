import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import {
	CasesActions,
	FILTER_BY_WORK,
	GROUP_BY_INDUSTRY,
	INIT_CASES,
	LOAD_STATE,
	UNLOAD_STATE,
} from '../types/CasesActions'
import {GetCases} from '../services/casesService'

interface IState {
	cases: GetCases.Case[]
	loading: boolean
}

const initState: IState = {
	cases: [],
	loading: true,
}
const casesReducer = (state: IState = initState, action: CasesActions) => {
	switch (action.type) {
		case LOAD_STATE:
			return {
				...state,
				loading: true,
			}
		case UNLOAD_STATE:
			return {
				...state,
				loading: false,
			}
		case INIT_CASES:
			return {
				...state,
				cases: action?.cases,
			}
		case GROUP_BY_INDUSTRY:
			return {
				...state,
				cases: state.cases.filter((item) => item.industry === action.industry),
			}
		case FILTER_BY_WORK:
			return {
				...state,
				cases: state.cases.filter((item) => item.work === action.work),
			}

		default:
			return state
	}
}
const persistConfig = {
	keyPrefix: 'Dept-',
	key: 'CasesReducer',
	storage,
}
export default persistReducer(persistConfig, casesReducer)
