import React, {useState, useCallback, useEffect} from 'react'
import {useSearchParams} from 'react-router-dom'
import {AppState} from '../reducers'
import {useDispatch, useSelector} from 'react-redux'
import {filterByCompany, groupByCategory, startinitCases} from '../actions'
import Header from '../components/common/Header'
import {HeroSection} from '../components'

const Home = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const cases = useSelector((state: AppState) => state.cases)
	const dispatch = useDispatch()

	const [search, setSearch] = useState({
		company: '',
		category: '',
	})

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSearch({...search, [e.target.id]: e.target.value})
	}

	const fetchCases = useCallback(() => {
		//@ts-ignore
		return dispatch(startinitCases())
	}, [dispatch])

	useEffect(() => {
		fetchCases()
		const {company, category} = search
		if (company !== '' || category !== '') {
			setSearchParams(search)
		}
		if (searchParams.has('company')) {
			const companyParam = searchParams.get('company')
			companyParam && dispatch(filterByCompany(companyParam))
		}
		if (searchParams.has('company')) {
			const categoryParam = searchParams.get('category')
			categoryParam && dispatch(groupByCategory(categoryParam))
		}
	}, [dispatch, search, searchParams, setSearchParams, fetchCases])

	return (
		<div>
			<HeroSection />
			<select
				onChange={handleSelect}
				className="ant-input selectBox"
				style={{width: 200}}
				placeholder="Select a person"
				id="category"
			>
				<option value="Design">Design</option>
				<option value="Advertising">Advertising</option>
			</select>

			<select
				onChange={handleSelect}
				id="company"
				className="ant-input selectBox"
				style={{width: 200}}
				placeholder="Select a person"
			>
				<option value="Google">Google</option>
				<option value="Dept">Dept</option>
			</select>
			{cases.cases.map((item, index) => (
				<h2 key={index}>
					{index + 1}-{item.title}
				</h2>
			))}
		</div>
	)
}

export default Home
