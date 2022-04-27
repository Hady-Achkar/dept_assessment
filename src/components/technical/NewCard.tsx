import {
	Flex,
	Box,
	Image,
	useBreakpointValue,
	Text,
	HStack,
	VStack,
	Badge,
	Button,
	Center,
	Heading,
	Stack,
	useColorModeValue,
} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {icons} from '../../constants'
import {GetCases} from '../../services/casesService'

interface Props {
	data: GetCases.Case
	type?: 'Grid' | 'List'
}

const NewCard: React.FC<Props> = ({data, type}) => {
	const {_id, title, thumbnail, content} = data

	const imageWidth = useBreakpointValue({
		base: '400px',
		md: '400px',
		lg: '800px',
	})

	const isList = Boolean(type === 'List')
	return (
		<Box>
			{!isList ? (
				<Flex
					textAlign="left"
					w="full"
					alignItems="center"
					justifyContent="flex-start"
				>
					<Box>
						<Image
							src={thumbnail}
							objectFit="cover"
							height="450px"
							width={imageWidth}
							alt={`Picture of ${data.title}`}
						/>

						<Box paddingY="16px">
							<Flex mt="1" paddingBottom="16px">
								<Box
									fontSize="15px"
									fontWeight="700"
									lineHeight="18px"
									color="#939393"
									letterSpacing="wide"
									as="h4"
								>
									{title.toUpperCase()}
								</Box>
							</Flex>

							<Flex>
								<Box className="font-teko" fontSize="2xl">
									{content}
								</Box>
							</Flex>
							<HStack align="center" marginTop="1rem">
								<Image src={icons.arrowBlue.src} />
								<Link
									to={`/case/${_id}`}
									style={{
										fontWeight: '700',
										fontSize: '14px',
										color: '#1A18F7',
									}}
								>
									VIEW CASE
								</Link>
							</HStack>
						</Box>
					</Box>
				</Flex>
			) : (
				<Center py={6}>
					<Stack
						borderWidth="1px"
						borderRadius="lg"
						w={{sm: '100%', md: '1000px'}}
						height={{sm: '476px', md: '20rem'}}
						direction={{base: 'column', md: 'row'}}
						bg={'white'}
						padding={4}
					>
						<Flex flex={1} bg="blue.200">
							<Image objectFit="cover" boxSize="100%" src={thumbnail} />
						</Flex>
						<Stack
							flex={1}
							flexDirection="column"
							justifyContent="center"
							alignItems="center"
							p={1}
							pt={2}
						>
							<Box
								fontSize="15px"
								fontWeight="700"
								lineHeight="18px"
								color="#939393"
								letterSpacing="wide"
								as="h4"
							>
								{title}
							</Box>
							<Box className="font-teko" fontSize="2xl" color={'black'}>
								{content}
							</Box>
							<HStack align="center" marginTop="1rem">
								<Image src={icons.arrowBlue.src} />
								<Link
									to={`/case/${_id}`}
									style={{
										fontWeight: '700',
										fontSize: '14px',
										color: '#1A18F7',
									}}
								>
									VIEW CASE
								</Link>
							</HStack>
						</Stack>
					</Stack>
				</Center>
			)}
		</Box>
	)
}

export default NewCard
