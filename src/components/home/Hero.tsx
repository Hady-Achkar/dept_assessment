import {Flex, useBreakpointValue, Box, Heading, Button} from '@chakra-ui/react'
import {motion, useAnimation} from 'framer-motion'
import {useEffect, useRef} from 'react'
import {useIntersectionObserver} from '../../hooks'
import Header from '../common/Header'

const Hero = () => {
	const HeaderImage = require('../../assets/images/Header.png')
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
	console.log(entry)

	const isVisible = !!entry?.isIntersecting

	useEffect(() => {
		if (isVisible) {
			controls.start('visible')
		}
	}, [controls, isVisible])
	return (
		<Box
			as={motion.div}
			initial="hidden"
			animate={controls}
			ref={ref}
			variants={containerVariants}
			padding="1rem"
			maxW={'full'}
			h={'100vh'}
			backgroundImage={HeaderImage}
			backgroundSize={'cover'}
			backgroundPosition={'center'}
			marginX="auto"
			position="relative"
		>
			<Header />
			<Flex justifyContent={'center'} maxW={'4xl'} h="75vh">
				<Heading
					color={'blackAlpha.900'}
					fontWeight="normal"
					className="font-teko"
					lineHeight={'575px'}
					marginY="auto"
					fontSize={useBreakpointValue({
						base: '64px',
						md: '128px',
						lg: '400px',
					})}
				>
					WORK
				</Heading>
			</Flex>
			<Flex
				justifyContent={useBreakpointValue({base: 'center', md: 'flex-end'})}
				maxW="7xl"
			>
				<Button
					marginX="15px"
					position="absolute"
					bottom="10"
					right="10"
					height="55px"
					width="169px"
					borderRadius="0"
					bgColor="black"
					color="white"
				>
					VIEW CASE
				</Button>
			</Flex>
		</Box>
	)
}
export default Hero
