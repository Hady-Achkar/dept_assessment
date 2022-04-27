import axios from 'axios'
import {ApiEndpoints} from '../constants'

const ContactAxios = axios.create({
	baseURL: ApiEndpoints.CONTACTS.BASE_URL,
})

export default ContactAxios
