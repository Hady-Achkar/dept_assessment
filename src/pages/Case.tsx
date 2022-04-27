import {ArrowBackIcon} from '@chakra-ui/icons'
import {Box, Text, Flex, Image, IconButton, HStack} from '@chakra-ui/react'
import {motion, useAnimation} from 'framer-motion'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {Footer, Header} from '../components'
import {useIntersectionObserver} from '../hooks'
import {getCaseById, GetCases} from '../services/casesService'
type Params = {
	id: string
}

const Case = () => {
	const {id: caseId} = useParams<Params>()
	const TextVariants = {
		hidden: {opacity: 0, fontWeight: '0'},
		visible: {
			opacity: 1,
			fontWeight: '400',
			transition: {
				delay: 1,
				duration: 1,
			},
		},
	}
	const controls = useAnimation()

	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})
	const isVisible = !!entry?.isIntersecting

	useEffect(() => {
		if (isVisible) {
			controls.start('visible')
		} else {
			controls.start('hidden')
		}
	}, [controls, isVisible])

	console.log(isVisible)

	const initialState: GetCases.Case = {
		_id: '',
		title: '',
		work: '',
		industry: '',
		thumbnail: '',
		image: '',
		description: '',
		content: '',
	}
	const [caseData, setCaseData] = useState(initialState)

	const fetchCase = useCallback(() => {
		if (caseId) {
			return getCaseById(caseId)
				.then((res) => {
					setCaseData(res?.data?.data)
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}, [caseId])

	useEffect(() => {
		fetchCase()
	}, [fetchCase])

	const navigate = useNavigate()
	return (
		<Box>
			<Header />
			<Flex align="center" justify="space-between" paddingX="40px">
				<IconButton
					_hover={{opacity: 0.9, cursor: 'pointer'}}
					onClick={() => navigate(-1)}
					aria-label="go-back"
					icon={<ArrowBackIcon />}
				/>
				<Flex marginY="25px" marginX="auto" justify="flex-start">
					<Box>
						<Text fontWeight="400px" color="#939393">
							{caseData.title}
						</Text>
						<br />
						<Text color={'black'} fontWeight="500px" fontSize="32px">
							{caseData.content}
						</Text>
					</Box>
				</Flex>
			</Flex>
			<Box height="100%">
				<Image src={caseData.image} objectFit="cover" w="100%" height="auto" />
			</Box>
			<Box marginX="auto" lineHeight="taller" padding="100px" w="full">
				<Text
					marginY="20px"
					as={motion.div}
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={TextVariants}
					maxW="4xl"
					color="black"
					fontWeight="300"
					fontSize={'24px'}
				>
					{caseData.description}
				</Text>
			</Box>

			<Footer />
		</Box>
	)
}

export default Case
