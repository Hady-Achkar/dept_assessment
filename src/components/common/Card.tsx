import {
	Flex,
	Box,
	Image,
	useColorModeValue,
	useBreakpointValue,
	Text,
	HStack,
} from '@chakra-ui/react'
import {icons} from '../../constants'

interface Props {
	data: {
		title: string
		image?: string
		text: string
	}
}

const CaseCard: React.FC<Props> = ({data}) => {
	const {title, image, text} = data

	const imageWidth = useBreakpointValue({
		base: '400px',
		md: '400px',
		lg: '800px',
	})
	return (
		<Flex
			textAlign="left"
			w="full"
			alignItems="center"
			justifyContent="flex-start"
		>
			<Box>
				{image ? (
					<Image
						src={image}
						objectFit="cover"
						height="450px"
						width={imageWidth}
						alt={`Picture of ${data.title}`}
					/>
				) : null}

				<Box paddingY="6">
					<Flex mt="1">
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
					</Flex>

					<Flex>
						<Box
							className="font-teko"
							fontSize="2xl"
							color={useColorModeValue('gray.800', 'white')}
						>
							{text}
						</Box>
					</Flex>
					<HStack align="center" marginTop="1rem">
						<Image src={icons.arrowBlue.src} />
						<Text fontWeight="700" fontSize="14px" color="#1A18F7">
							VIEW CASE
						</Text>
					</HStack>
				</Box>
			</Box>
		</Flex>
	)
}

export default CaseCard
