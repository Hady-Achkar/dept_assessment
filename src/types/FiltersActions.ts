import {IFilter} from './IFilter'

export const INIT_FILTER = 'INIT_FILTER'
export const ADD_CATEGORY_QUERY = 'ADD_CATEGORY_QUERY'
export const ADD_COMPANY_QUERY = 'ADD_COMPANY_QUERY'

export interface InitFilterActionType {
	type: typeof INIT_FILTER
}

export interface AddCategoryQueryActionType {
	type: typeof ADD_CATEGORY_QUERY
	category: string
}

export interface AddCompanyQueryActionType {
	type: typeof ADD_COMPANY_QUERY
	company: string
}

export type FiltersActions =
	| InitFilterActionType
	| AddCategoryQueryActionType
	| AddCompanyQueryActionType
