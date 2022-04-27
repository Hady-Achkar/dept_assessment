import {ApiEndpoints} from '../constants'
import {ContactAxios} from '../lib'

type ContactPayload = {
	name: string
	email: string
	message: string
}

export const addContact = (payload: ContactPayload) => {
	return ContactAxios({
		method: ApiEndpoints.CONTACTS.ADD_CONTACT.METHOD,
		url: ApiEndpoints.CONTACTS.ADD_CONTACT.URL,
		data: payload,
	})
}
