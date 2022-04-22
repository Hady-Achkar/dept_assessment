import {Dispatch} from 'redux'
import {AppState} from '../reducers'
import {
	AddCategoryQueryActionType,
	ADD_CATEGORY_QUERY,
	AddCompanyQueryActionType,
	ADD_COMPANY_QUERY,
	InitFilterActionType,
	INIT_FILTER,
} from '../types/FiltersActions'
import {IFilter} from '../types/IFilter'

export const initFilter = (): InitFilterActionType => ({
	type: INIT_FILTER,
})

export const addCategoryQuery = (
	category: string
): AddCategoryQueryActionType => ({
	type: ADD_CATEGORY_QUERY,
	category,
})

export const addCompanyQuery = (
	company: string
): AddCompanyQueryActionType => ({
	type: ADD_COMPANY_QUERY,
	company,
})
