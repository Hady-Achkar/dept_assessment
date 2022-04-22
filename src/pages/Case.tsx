import React from 'react'
import {useParams} from 'react-router-dom'
type Params = {
	id: string
}

const Case = () => {
	const {id: caseId} = useParams<Params>()
	return <div>Case: {caseId}</div>
}

export default Case
