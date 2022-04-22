import {ICase} from './ICase'

export const INIT_CASES = 'INIT_CASES'
export const GROUP_BY_CATEGORY = 'GROUP_BY_CATEGORY'
export const FILTER_BY_COMPANY = 'FILTER_BY_COMPANY'

export const REQUEST_PRODUCTS_PAGE = 'REQUEST_PRODUCTS_PAGE'

export interface InitCasesActionType {
	type: typeof INIT_CASES
	cases: ICase[]
}

export interface GroupByCategoryActionType {
	type: typeof GROUP_BY_CATEGORY
	category: string
}
export interface FilterByCompanyActionType {
	type: typeof FILTER_BY_COMPANY
	company: string
}

export type CasesActions =
	| InitCasesActionType
	| GroupByCategoryActionType
	| FilterByCompanyActionType
