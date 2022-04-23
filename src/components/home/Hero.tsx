import {
	Flex,
	useBreakpointValue,
	Box,
	Heading,
	Container,
	Text,
	Button,
} from '@chakra-ui/react'
import Header from '../common/Header'

const Hero = () => {
	const HeaderImage = require('../../assets/images/Header.jpg')
	return (
		<Box
			padding="1rem"
			maxW={'full'}
			h={'100vh'}
			backgroundImage={HeaderImage}
			backgroundSize={'cover'}
			backgroundPosition={'center center'}
			marginX="auto"
		>
			<Header />
			<Flex justifyContent={'center'} maxW={'4xl'} h="75vh">
				<Heading
					color={'blackAlpha.900'}
					fontWeight="normal"
					lineHeight={1.2}
					marginY="auto"
					fontSize={useBreakpointValue({
						base: '64px',
						md: '128px',
						lg: '256px',
					})}
				>
					WORK
				</Heading>
			</Flex>
			<Flex
				justifyContent={useBreakpointValue({base: 'center', md: 'flex-end'})}
				maxW="7xl"
			>
				<Button borderRadius="0" paddingX="3rem" bgColor="black" color="white">
					Show Case
				</Button>
			</Flex>
		</Box>
	)
}
export default Hero
