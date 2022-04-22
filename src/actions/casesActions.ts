import {Dispatch} from 'redux'
import {AppState} from '../reducers'
import {
	CasesActions,
	FilterByCompanyActionType,
	FILTER_BY_COMPANY,
	GroupByCategoryActionType,
	GROUP_BY_CATEGORY,
	InitCasesActionType,
	INIT_CASES,
} from '../types/CasesActions'
import {ICase} from '../types/ICase'
import mockData from '../data/mock.json'

export const initCases = (cases: ICase[]): InitCasesActionType => ({
	type: INIT_CASES,
	cases,
})

export const groupByCategory = (
	category: string
): GroupByCategoryActionType => ({
	type: GROUP_BY_CATEGORY,
	category,
})

export const filterByCompany = (
	company: string
): FilterByCompanyActionType => ({
	type: FILTER_BY_COMPANY,
	company,
})

export const startinitCases = () => {
	return (dispatch: Dispatch<CasesActions>, _: () => AppState) => {
		const cases = mockData
		dispatch(initCases(cases))
	}
}
