import {Image} from '@chakra-ui/image'
import {Container, Flex, Heading, SimpleGrid, Text} from '@chakra-ui/layout'
import {useBreakpointValue, useMediaQuery} from '@chakra-ui/media-query'
import React, {useEffect, useState} from 'react'
import {images} from '../../constants'

const Clients: React.FC = () => {
	const [isDesktopView] = useMediaQuery('(min-width: 960px)')
	const {logos} = images

	const [sliced, setSliced] = useState(logos)
	useEffect(() => {
		if (!isDesktopView) {
			setSliced((s) => s.filter((item, index) => index < 6))
		} else {
			setSliced(logos)
		}
	}, [isDesktopView, logos])

	return (
		<Flex
			alignItems="center"
			height={useBreakpointValue({base: 'auto', lg: '100vh'})}
			bgColor="#F0F4F4"
		>
			<Container marginY={useBreakpointValue({base: '26px', lg: 0})}>
				<Heading
					marginBottom="1rem"
					fontWeight="normal"
					size="3xl"
					textAlign="center"
					className="font-teko"
				>
					CLIENTS
				</Heading>
				<Container paddingY="1rem">
					<Text textAlign="center">
						We value a great working relationship with our clients above all
						else. It’s why they often come to our parties. It’s also why we’re
						able to challenge and inspire them to reach for the stars.
					</Text>
				</Container>

				<SimpleGrid
					spacingX="3"
					spacingY="10"
					columns={useBreakpointValue({base: 2, md: 3, lg: 4})}
					alignItems="center"
					justifyContent="center"
					paddingY="4rem"
				>
					{sliced.map((item, index) => {
						return (
							<Container key={index}>
								<Image
									marginY="auto"
									marginX="auto"
									textAlign="center"
									src={item}
								/>
							</Container>
						)
					})}
				</SimpleGrid>
			</Container>
		</Flex>
	)
}

export default Clients
