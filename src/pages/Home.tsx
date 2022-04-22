import React, {useState, useCallback, useEffect, useMemo} from 'react'
import mockData from '../data/mock.json'
import {useLocation, useNavigate, useSearchParams, Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {AppState} from '../reducers'
import {useDispatch} from 'react-redux'
import {
	filterByCompany,
	groupByCategory,
	initCases,
	startinitCases,
} from '../actions'
import {
	addCategoryQuery,
	addCompanyQuery,
	initFilter,
} from '../actions/queryActions'

const Home = () => {
	const [data, setData] = useState(mockData)
	const [searchParams, setSearchParams] = useSearchParams()
	const location = useLocation()
	const query = useMemo(
		() => new URLSearchParams(location.search),
		[location.search]
	)

	const q = query.get('q')
	const navigate = useNavigate()

	const dispatch = useDispatch()

	// useEffect(() => {
	// 	if (query.has('q')) {
	// 		console.log(q)
	// 	} else {
	// 		console.log('nothing')
	// 	}
	// }, [query, q])
	// const handleClick = useCallback(() => {
	// 	setData(data.filter((item) => item.id <= 5))
	// }, [data])

	const filters = useSelector((state: AppState) => state.filter)

	console.log(Object.entries(filters))

	const handleClick = () => {
		dispatch(groupByCategory('Design'))
	}

	const handleClick2 = () => {
		dispatch(filterByCompany('Dept'))
	}

	const handleReset = () => {
		//@ts-ignore
		dispatch(startinitCases())
	}

	const [selectedCategory, setSelectedCategory] = useState('')
	const [selectedCompany, setSelectedCompany] = useState('')

	const [search, setSearch] = useState({
		company: '',
		category: '',
	})

	console.log(selectedCategory, selectedCompany)

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSearch({...search, [e.target.id]: e.target.value})
	}

	const cases = useSelector((state: AppState) => state.cases)

	const fetchCases = () => {
		//@ts-ignore
		return dispatch(startinitCases())
	}

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
	}, [dispatch, search, searchParams, setSearchParams])

	return (
		<div>
			{data.length}
			<img src={data[0].image} alt="" />
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
