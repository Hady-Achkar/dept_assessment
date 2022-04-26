import React, {useState, useCallback, useEffect} from 'react'
import {useSearchParams} from 'react-router-dom'
import {AppState} from '../reducers'
import {useDispatch, useSelector} from 'react-redux'
import {filterByCompany, groupByCategory, startinitCases} from '../actions'
import {
	CaseCard,
	ClientsSection,
	Footer,
	FirstFourCardsGrid,
	HeroSection,
	FirstThreeCardsGrid,
} from '../components'
import {Select} from '@chakra-ui/select'
import {Flex, HStack, SimpleGrid, Text} from '@chakra-ui/layout'
import {useBreakpointValue} from '@chakra-ui/media-query'
import {cases as mockCases} from '../data/mock'
import {Container, Grid, GridItem} from '@chakra-ui/react'
import Contact from '../components/home/Contact'
import {
	Animator,
	ScrollContainer,
	ScrollPage,
	batch,
	Fade,
	FadeIn,
	Move,
	MoveIn,
	MoveOut,
	Sticky,
	StickyIn,
	ZoomIn,
} from 'react-scroll-motion'
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

	const handleReset = () => {
		//@ts-ignore
		dispatch(startinitCases())
	}

	const FadeUp = batch(Fade(), Move())

	return (
		<div>
			<HeroSection />

			<Container paddingX="80px" maxW="full">
				<Flex justify="flex-end" marginTop="70px" marginBottom="40px">
					<Flex className="font-teko">
						<HStack
							fontSize="30px"
							style={{flexShrink: '0'}}
							alignItems="baseline"
							spacing="2"
						>
							<Text color="#A3A3A3">In</Text>
							<Select
								fontSize="30px"
								onChange={handleSelect}
								variant="flushed"
								colorScheme="blackAlpha"
								placeholder="All Industries"
								style={{width: 200}}
								id="category"
								focusBorderColor="black"
							>
								<option value="Design">Design</option>
								<option value="Advertising">Advertising</option>
							</Select>
							<Text color="#A3A3A3">Show</Text>
							<Select
								onChange={handleSelect}
								fontSize="30px"
								variant="flushed"
								id="company"
								style={{width: 200}}
								placeholder="All Work"
								focusBorderColor="black"
							>
								<option value="Google">Google</option>
								<option value="Dept">Dept</option>
							</Select>
						</HStack>
					</Flex>
				</Flex>
				{/* Cards */}
				<FirstFourCardsGrid />
				<FirstThreeCardsGrid />

				<SimpleGrid
					className="container"
					columns={useBreakpointValue({base: 1, lg: 2})}
					marginX="auto"
					spacingY="3"
					spacingX="10"
				>
					<CaseCard data={mockCases.chocomel} />
					<CaseCard data={mockCases.jbl} />
					<CaseCard data={mockCases.zalando} />
					<CaseCard data={mockCases.koninklijkeBibliotheek} />
				</SimpleGrid>
				<Grid
					templateRows={useBreakpointValue({
						base: 'repeat(2, 1fr)',
						lg: 'repeat(3, 1fr)',
					})}
					templateColumns={useBreakpointValue({
						base: 'repeat(1, 1fr)',
						lg: 'repeat(20, 1fr)',
					})}
					gap={5}
					marginX="auto"
					marginY="80px"
				>
					<GridItem
						borderY="2px"
						borderColor="gray.100"
						colSpan={9}
						rowSpan={1}
					>
						<CaseCard data={mockCases.butlins} />
					</GridItem>
					<GridItem
						paddingLeft="40px"
						paddingRight="10px"
						colSpan={11}
						rowSpan={3}
					>
						<CaseCard data={mockCases.florensis} />
					</GridItem>
					<GridItem
						borderBottom="2px"
						borderColor="gray.100"
						colSpan={9}
						rowSpan={1}
					>
						<CaseCard data={mockCases.vananseselect} />
					</GridItem>
				</Grid>
				<Container textAlign="center" maxW="4xl" marginY="48px">
					<Text
						fontWeight="400"
						fontSize="36px"
						lineHeight="52px"
						marginBottom="33px"
						className="font-teko"
					>
						“Dept helped us tell our story through a bold new identity and a
						robust online experience. To the tune of 60% growth in online
						bookings in just one month.”
					</Text>
					<Text fontSize="13px" lineHeight="15px" fontWeight="bold">
						MATTIJS TEN BRINK – CEO, TRANSAVIA
					</Text>
				</Container>
				<SimpleGrid
					className="container"
					columns={useBreakpointValue({base: 1, lg: 2})}
					marginX="auto"
					spacingY="3"
					spacingX="10"
				>
					<CaseCard data={mockCases.libertyGlobal} />
					<CaseCard data={mockCases.arla} />
				</SimpleGrid>
				<ClientsSection />
				<Contact />
			</Container>

			<Footer />
		</div>
	)
}

export default Home
