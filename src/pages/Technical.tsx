import {
	Box,
	Container,
	Flex,
	HStack,
	SimpleGrid,
	Stack,
	Text,
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
	Textarea,
	VStack,
	useToast,
} from '@chakra-ui/react'
import React, {useCallback, useEffect, useState} from 'react'
import {Footer, Header, NewCard} from '../components'
import {
	IconButton,
	Radio,
	RadioGroup,
	Select,
	useBreakpointValue,
} from '@chakra-ui/react'
import {addCase, CasePayload} from '../services/casesService'
import {useSearchParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {AppState} from '../reducers'
import {useDispatch} from 'react-redux'
import {filterByWork, groupByIndustry, startinitCases} from '../actions'
import {DragHandleIcon, HamburgerIcon} from '@chakra-ui/icons'

type ViewType = 'Grid' | 'List'

const Technical = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [viewType, setViewType] = useState<ViewType>('Grid')

	// toast({
	// 	title: 'Account created.',
	// 	description: "We've created your account for you.",
	// 	status: 'success',
	// 	duration: 9000,
	// 	isClosable: true,
	// })

	const initSearchState = {
		industry: '',
		work: '',
	}
	const [search, setSearch] = useState(initSearchState)
	const {isOpen, onOpen, onClose} = useDisclosure()
	const toast = useToast()

	const initCaseData: CasePayload = {
		title: '',
		content: '',
		thumbnail: '',
		work: '',
		industry: '',
		image: '',
		description: '',
	}

	const [caseData, setCaseData] = useState<CasePayload>(initCaseData)
	const handleChangeCaseData = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		setCaseData({...caseData, [e.target.id]: e.target.value})
	}

	const handleAddCaseSubmit = () => {
		addCase(caseData)
			.then((res) => {
				onClose()
				toast({
					title: 'Case created!',
					description: "We've created a case for you.",
					status: 'success',
					duration: 4000,
					isClosable: true,
				})
				fetchCases()
			})
			.catch((err) => {
				toast({
					title: 'Error!',
					description: `The error ${err.message} occured when trying to create a case.`,
					status: 'error',
					duration: 4000,
					isClosable: true,
				})
			})
	}

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSearch({...search, [e.target.id]: e.target.value})
	}
	const dispatch = useDispatch()

	const {cases, loading} = useSelector((state: AppState) => state.cases)

	const fetchCases = useCallback(() => {
		//@ts-ignore
		return dispatch(startinitCases())
	}, [dispatch])

	const checkFilters = useCallback(() => {
		const {industry, work} = search
		if (industry !== '' || work !== '') {
			setSearchParams(search)
		}
		if (searchParams.has('work')) {
			const workParam = searchParams.get('work')
			workParam && dispatch(filterByWork(workParam))
		}
		if (searchParams.has('industry')) {
			const industryParam = searchParams.get('industry')
			industryParam && dispatch(groupByIndustry(industryParam))
		}
	}, [dispatch, search, searchParams, setSearchParams])

	useEffect(() => {
		if (cases.length === 0) {
			fetchCases()
		}
		checkFilters()
	}, [cases.length, checkFilters, fetchCases, setSearchParams])

	const fontSize = useBreakpointValue({base: '24px', lg: '30px'})

	const resetFilters = () => {
		setSearch(initSearchState)
		setSearchParams({})
		//@ts-ignore
		dispatch(startinitCases())
	}

	return (
		<Box>
			<Header />
			<Container
				maxW="full"
				paddingX={useBreakpointValue({base: '36px', lg: '80px'})}
			>
				<Flex justify={'space-between'} marginTop="70px" marginBottom="40px">
					<HStack spacing="4">
						<Button onClick={onOpen}>Create a case</Button>
						<Text className="font-teko" fontSize="24px">
							VIEW TYPE
						</Text>
						<IconButton
							onClick={() => setViewType('Grid')}
							aria-label="Grid"
							border={viewType === 'Grid' ? '2px' : '0'}
							borderColor="#1A18F7"
							icon={<DragHandleIcon />}
						/>
						<IconButton
							onClick={() => setViewType('List')}
							aria-label="List"
							border={viewType === 'List' ? '2px' : '0'}
							borderColor="#1A18F7"
							icon={<HamburgerIcon />}
						/>
					</HStack>
					<Flex className="font-teko">
						<SimpleGrid
							columns={useBreakpointValue({base: 1, lg: 2})}
							fontSize={fontSize}
							maxW={useBreakpointValue({base: '100%', lg: '2xl'})}
						>
							<HStack spacing="3">
								<Text color="#A3A3A3">In</Text>
								<Select
									fontSize={fontSize}
									maxW="100%"
									onChange={handleSelect}
									variant="flushed"
									colorScheme="blackAlpha"
									style={{width: 200}}
									id="industry"
									focusBorderColor="black"
								>
									<option style={{fontSize: '16px'}} value="All">
										All Industries
									</option>
									<option style={{fontSize: '16px'}} value="clothing">
										Clothing
									</option>
									<option style={{fontSize: '16px'}} value="technology">
										Technology
									</option>
								</Select>
							</HStack>

							<HStack spacing="3">
								<Text overflowWrap="normal" color="#A3A3A3">
									ShowMe
								</Text>
								<Select
									onChange={handleSelect}
									fontSize={fontSize}
									variant="flushed"
									maxW="100%"
									id="work"
									style={{width: 200}}
									placeholder="All Work"
									focusBorderColor="black"
								>
									<option style={{fontSize: '16px'}} value="All">
										All Work
									</option>
									<option style={{fontSize: '16px'}} value="branding">
										Branding
									</option>
									<option style={{fontSize: '16px'}} value="design">
										Design
									</option>
									<option style={{fontSize: '16px'}} value="media">
										Media
									</option>
								</Select>
								<Button onClick={resetFilters}>Reset</Button>
							</HStack>
						</SimpleGrid>
					</Flex>
				</Flex>
				<SimpleGrid
					marginBottom="40px"
					columns={useBreakpointValue({
						base: 1,
						lg: viewType === 'List' ? 1 : 2,
					})}
					spacing={10}
				>
					{cases.map((item) => (
						<NewCard type={viewType} key={item?._id} data={item} />
					))}
				</SimpleGrid>
			</Container>
			<Modal size="lg" isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>ADD A NEW CASE</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<VStack spacing="3" className="font-teko">
							<FormControl>
								<FormLabel>Company name:</FormLabel>
								<Input
									focusBorderColor="black"
									type="text"
									variant="flushed"
									id={'title'}
									onChange={handleChangeCaseData}
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Description:</FormLabel>
								<Input
									focusBorderColor="black"
									type="text"
									variant="flushed"
									id={'content'}
									onChange={handleChangeCaseData}
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Thumbnail:</FormLabel>
								<Input
									focusBorderColor="black"
									type="text"
									variant="flushed"
									id={'thumbnail'}
									onChange={handleChangeCaseData}
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Image:</FormLabel>
								<Input
									focusBorderColor="black"
									type="text"
									variant="flushed"
									id={'image'}
									onChange={handleChangeCaseData}
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Content:</FormLabel>
								<Textarea
									focusBorderColor="black"
									variant="flushed"
									id={'description'}
									onChange={handleChangeCaseData}
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Select industry:</FormLabel>
								<Select
									variant="flushed"
									id={'industry'}
									focusBorderColor="black"
									onChange={handleChangeCaseData}
									placeholder="Select industry"
								>
									<option style={{fontSize: '16px'}} value="clothing">
										Clothing
									</option>
									<option style={{fontSize: '16px'}} value="technology">
										Technology
									</option>
								</Select>
							</FormControl>
							<FormControl>
								<FormLabel>Select work:</FormLabel>
								<Select
									variant="flushed"
									focusBorderColor="black"
									id={'work'}
									onChange={handleChangeCaseData}
									placeholder="Select work"
								>
									<option style={{fontSize: '16px'}} value="branding">
										Branding
									</option>
									<option style={{fontSize: '16px'}} value="design">
										Design
									</option>
									<option style={{fontSize: '16px'}} value="media">
										Media
									</option>
								</Select>
							</FormControl>
						</VStack>
					</ModalBody>

					<ModalFooter>
						<Button
							onClick={handleAddCaseSubmit}
							bgColor="#1A18F7"
							color="white"
							borderRadius="0"
							mr={3}
						>
							Submit
						</Button>
						<Button borderRadius="0" onClick={onClose}>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
			<Footer />
		</Box>
	)
}

export default Technical
