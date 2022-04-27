import {AxiosResponse} from 'axios'
import {ApiEndpoints} from '../constants'
import {CasesAxios} from '../lib'

export const getCases = (): Promise<AxiosResponse<GetCases.RootObject>> => {
	return CasesAxios({
		method: ApiEndpoints.CASES.GET_CASES.METHOD,
		url: ApiEndpoints.CASES.GET_CASES.URL,
	})
}

export const addCase = (
	payload: CasePayload
): Promise<AxiosResponse<AddCase.RootObject>> => {
	return CasesAxios({
		method: ApiEndpoints.CASES.ADD_CASE.METHOD,
		url: ApiEndpoints.CASES.ADD_CASE.URL,
		data: payload,
	})
}

export const getCaseById = (
	id: string
): Promise<AxiosResponse<GetCaseById.RootObject>> => {
	return CasesAxios({
		method: ApiEndpoints.CASES.GET_CASE.METHOD,
		url: ApiEndpoints.CASES.GET_CASE.URL,
		params: {
			caseId: id,
		},
	})
}

export type CasePayload = {
	title: string
	content: string
	thumbnail: string
	work: string
	industry: string
	image: string
	description: string
}

export declare namespace GetCases {
	export interface Case {
		_id: string
		title: string
		content: string
		thumbnail: string
		image: string
		description: string
		work: string
		industry: string
	}

	interface RootObject {
		message: string
		status: string
		data: Case[]
	}
}

export declare namespace AddCase {
	export interface RootObject {
		message: string
		data: string
	}
}

export declare namespace GetCaseById {
	export interface Data {
		_id: string
		title: string
		content: string
		thumbnail: string
		description: string
		work: string
		industry: string
		createdAt: Date
		updatedAt: Date
		image: string
	}

	export interface RootObject {
		message: string
		status: string
		data: Data
	}
}
