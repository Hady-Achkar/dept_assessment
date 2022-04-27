import {GetCases} from '../services/casesService'

export const INIT_CASES = 'INIT_CASES'
export const LOAD_STATE = 'LOAD_STATE'
export const UNLOAD_STATE = 'UNLOAD_STATE'
export const GROUP_BY_INDUSTRY = 'GROUP_BY_INDUSTRY'
export const FILTER_BY_WORK = 'FILTER_BY_WORK'

export const REQUEST_PRODUCTS_PAGE = 'REQUEST_PRODUCTS_PAGE'

export interface InitCasesActionType {
	type: typeof INIT_CASES
	cases: GetCases.Case[]
}

export interface GroupByIndustryActionType {
	type: typeof GROUP_BY_INDUSTRY
	industry: string
}
export interface FilterByWorkActionType {
	type: typeof FILTER_BY_WORK
	work: string
}
export interface loadStateActionType {
	type: typeof LOAD_STATE
}

export interface unloadStateActionType {
	type: typeof UNLOAD_STATE
}

export type CasesActions =
	| InitCasesActionType
	| GroupByIndustryActionType
	| FilterByWorkActionType
	| loadStateActionType
	| unloadStateActionType
