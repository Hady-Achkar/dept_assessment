import React from 'react'
import {
	ClientsSection,
	Footer,
	FirstFourCardsGrid,
	HeroSection,
	FirstThreeCardsGrid,
	SecondThreeCardsGrid,
	SecondFourCardsGrid,
	Testimonial,
	TwoCardsGrid,
} from '../components'
import {Select} from '@chakra-ui/select'
import {Flex, HStack, SimpleGrid, Text} from '@chakra-ui/layout'
import {useBreakpointValue} from '@chakra-ui/media-query'
import {Container} from '@chakra-ui/react'
import Contact from '../components/home/Contact'

const Home = () => {
	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		console.log('Hello world')
	}

	const fontSize = useBreakpointValue({base: '24px', lg: '30px'})
	const flexFilterPosition = useBreakpointValue({
		base: 'flex-start',
		lg: 'flex-end',
	})
	return (
		<div>
			<HeroSection />

			<Container
				paddingX={useBreakpointValue({base: '36px', lg: '80px'})}
				maxW="full"
			>
				<Flex justify={flexFilterPosition} marginTop="70px" marginBottom="40px">
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
									placeholder="All Industries"
									style={{width: 200}}
									id="category"
									focusBorderColor="black"
								>
									<option value="Design">Design</option>
									<option value="Advertising">Advertising</option>
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
									id="company"
									style={{width: 200}}
									placeholder="All Work"
									focusBorderColor="black"
								>
									<option value="Google">Google</option>
									<option value="Dept">Dept</option>
								</Select>
							</HStack>
						</SimpleGrid>
					</Flex>
				</Flex>
				<FirstFourCardsGrid />
				<FirstThreeCardsGrid />
				<SecondFourCardsGrid />
				<SecondThreeCardsGrid />
				<Testimonial />
				<TwoCardsGrid />
			</Container>
			<ClientsSection />
			<Container
				maxW="full"
				paddingX={useBreakpointValue({base: '36px', lg: '80px'})}
			>
				<Contact />
			</Container>
			<Footer />
		</div>
	)
}

export default Home
