import {Dispatch} from 'redux'
import {AppState} from '../reducers'
import {
	CasesActions,
	FilterByWorkActionType,
	FILTER_BY_WORK,
	GroupByIndustryActionType,
	GROUP_BY_INDUSTRY,
	InitCasesActionType,
	INIT_CASES,
	loadStateActionType,
	unloadStateActionType,
} from '../types/CasesActions'
import {getCases, GetCases} from '../services/casesService'

export const initCases = (cases: GetCases.Case[]): InitCasesActionType => ({
	type: INIT_CASES,
	cases,
})

export const loadState = (): loadStateActionType => ({
	type: 'LOAD_STATE',
})

export const unloadState = (): unloadStateActionType => ({
	type: 'UNLOAD_STATE',
})

export const groupByIndustry = (
	industry: string
): GroupByIndustryActionType => ({
	type: GROUP_BY_INDUSTRY,
	industry,
})

export const filterByWork = (work: string): FilterByWorkActionType => ({
	type: FILTER_BY_WORK,
	work,
})

export const startinitCases = () => {
	return (dispatch: Dispatch<CasesActions> | any, _: () => AppState) => {
		dispatch(loadState())
		getCases()
			.then(({data}) => {
				dispatch(initCases(data?.data))
				dispatch(unloadState())
			})
			.catch((err) => {
				console.log(err)
			})
	}
}
