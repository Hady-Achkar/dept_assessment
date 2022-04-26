import {
	Flex,
	useBreakpointValue,
	Box,
	Heading,
	Button,
	useMediaQuery,
	Container,
} from '@chakra-ui/react'
import {motion, useAnimation} from 'framer-motion'
import {useEffect, useRef, useState} from 'react'
import {images} from '../../constants'
import {useIntersectionObserver} from '../../hooks'
import Header from '../common/Header'

const Hero = () => {
	const HeaderImage = images.headerDesktop.src
	const mobileImage = images.headerMobile.src
	const containerVariants = {
		hidden: {opacity: 0},
		visible: {
			opacity: 1,
			transition: {
				delay: 0.1,
				duration: 0.7,
			},
		},
	}
	const cardVariants = {
		hidden: {opacity: 0},
		visible: {
			opacity: 1,
			duration: 0.6,
		},
	}
	const controls = useAnimation()

	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})

	const isVisible = !!entry?.isIntersecting
	const [isDesktopView] = useMediaQuery('(min-width: 700px)')

	useEffect(() => {
		if (isVisible) {
			controls.start('visible')
		}
	}, [controls, isVisible])
	return (
		<Box maxW={'100%'} maxH={'100vh'}>
			<Box
				as={motion.div}
				initial="hidden"
				animate={controls}
				ref={ref}
				variants={containerVariants}
				padding={useBreakpointValue({base: '0', lg: '1rem'})}
				backgroundImage={useBreakpointValue({
					base: mobileImage,
					lg: HeaderImage,
				})}
				backgroundSize={'cover'}
				backgroundPosition={'right'}
				backgroundRepeat="no-repeat"
				marginX="auto"
				position="relative"
			>
				<Header />
				<Flex justifyContent={'center'} maxW={'4xl'} h="75vh">
					<Heading
						color={'black'}
						fontWeight="normal"
						className="font-teko"
						lineHeight={'575px'}
						marginY="auto"
						fontSize={useBreakpointValue({
							base: '170px',
							lg: '400px',
						})}
					>
						WORK
					</Heading>
				</Flex>
				{isDesktopView && (
					<Button
						marginX={'15px'}
						position={'absolute'}
						bottom={'10'}
						right={'10'}
						height="55px"
						width={'169px'}
						borderRadius="0"
						bgColor="black"
						color="white"
					>
						VIEW CASE
					</Button>
				)}
			</Box>
			{!isDesktopView && (
				<Container>
					<Button
						marginTop="20px"
						height="55px"
						width={'100%'}
						borderRadius="0"
						bgColor="black"
						color="white"
					>
						VIEW CASE
					</Button>
				</Container>
			)}
		</Box>
	)
}
export default Hero
