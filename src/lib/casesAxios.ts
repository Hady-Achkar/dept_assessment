import axios from 'axios'
import {ApiEndpoints} from '../constants'

const CasesAxios = axios.create({
	baseURL: ApiEndpoints.CASES.BASE_URL,
})

export default CasesAxios
