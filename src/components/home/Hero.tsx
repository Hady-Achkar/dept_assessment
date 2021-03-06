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
import {useEffect, useRef} from 'react'
import {useNavigate} from 'react-router'
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

	const controls = useAnimation()

	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})

	const isVisible = !!entry?.isIntersecting
	const [isDesktopView] = useMediaQuery('(min-width: 700px)')
	const headerControls = useAnimation()

	useEffect(() => {
		headerControls.start('visible')
		if (isVisible) {
			controls.start('visible')
		}
	}, [controls, headerControls, isVisible])

	const headerVariant = {
		hidden: {y: -1000},
		visible: {
			y: 0,
			transition: {
				delay: 0.1,
				duration: 1,
			},
		},
	}

	const navigate = useNavigate()
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
						as={motion.div}
						ref={ref}
						animate={headerControls}
						initial="hidden"
						variants={headerVariant}
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
					<Container paddingX={'80px'}>
						<Button
							marginX="auto"
							position={'absolute'}
							bottom={'10'}
							right={'10'}
							height="55px"
							width={'169px'}
							borderRadius="0"
							bgColor="black"
							color="white"
							_hover={{bgColor: 'gray.800'}}
							onClick={() => navigate('/werk')}
						>
							VIEW CASE
						</Button>
					</Container>
				)}
			</Box>
			{!isDesktopView && (
				<Container paddingX={'36px'}>
					<Button
						marginTop="20px"
						marginX="auto"
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
