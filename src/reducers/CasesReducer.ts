import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import {ICase} from '../types/ICase'
import {
	CasesActions,
	FILTER_BY_COMPANY,
	GROUP_BY_CATEGORY,
	INIT_CASES,
} from '../types/CasesActions'

interface IState {
	cases: ICase[]
}

const initState: IState = {
	cases: [],
}
const casesReducer = (state: IState = initState, action: CasesActions) => {
	switch (action.type) {
		case INIT_CASES:
			return {
				...state,
				cases: action?.cases,
			}
		case GROUP_BY_CATEGORY:
			return {
				...state,
				cases: state.cases.filter((item) => item.category === action.category),
			}
		case FILTER_BY_COMPANY:
			return {
				...state,
				cases: state.cases.filter((item) => item.company === action.company),
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
