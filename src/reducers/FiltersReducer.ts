import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import {ICase} from '../types/ICase'
import {
	CasesActions,
	FILTER_BY_COMPANY,
	GROUP_BY_CATEGORY,
	INIT_CASES,
} from '../types/CasesActions'
import {
	ADD_CATEGORY_QUERY,
	ADD_COMPANY_QUERY,
	FiltersActions,
	INIT_FILTER,
} from '../types/FiltersActions'
import {filterByCompany} from '../actions'

interface IState {
	company: string
	category: string
}

const params = new URLSearchParams()

const initState: IState = {
	company: params.get('company') || '',
	category: params.get('category') || '',
}
const filtersReducer = (state: IState = initState, action: FiltersActions) => {
	switch (action.type) {
		case INIT_FILTER:
			return {
				...state,
			}
		case ADD_CATEGORY_QUERY:
			return {
				...state,
				category: action.category,
			}
		case ADD_COMPANY_QUERY:
			return {
				...state,
				company: action.company,
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
export default persistReducer(persistConfig, filtersReducer)
