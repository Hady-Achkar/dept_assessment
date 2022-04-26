import React, {Fragment, useEffect, useRef, useState} from 'react'
import {
	Flex,
	IconButton,
	Box,
	Divider,
	Heading,
	useBreakpointValue,
	Image,
	Text,
} from '@chakra-ui/react'
import {CloseIcon} from '@chakra-ui/icons'
import {Link} from 'react-router-dom'
import {countries, icons, navigation, socials} from '../../constants'
import CustomLink from './CustomLink'
import {motion, useAnimation} from 'framer-motion'
import {useIntersectionObserver} from '../../hooks'

const Header = () => {
	const variants = {
		containerVariants: {
			hidden: {opacity: 1, scale: 1},
			visible: {
				opacity: 1,
				scale: 1,
				transition: {
					duration: 0.5,
					delayChildren: 0.1,
					staggerChildren: 0.4,
				},
			},
		},
		listVariants: {
			hidden: {opacity: 0},
			visible: {
				opacity: 1,
				duration: 0.2,
			},
		},
		countriesVariants: {
			hidden: {opacity: 0},
			visible: {
				opacity: 1,
				duration: 1,
				transition: {
					delay: 2.8,
				},
			},
		},
		socialVariants: {
			hidden: {opacity: 0},
			visible: {
				opacity: 1,
				duration: 1,
				transition: {
					delay: 3.8,
				},
			},
		},
	}

	const controls = useAnimation()
	const menuControls = useAnimation()

	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})

	const isVisible = !!entry?.isIntersecting

	const [display, setDisplay] = useState<string>('none')

	useEffect(() => {
		if (isVisible) {
			controls.start('visible')
		} else {
			controls.start('hidden')
		}
		if (display === 'flex') {
			menuControls.start('visible')
		} else {
			menuControls.start('hidden')
		}
	}, [controls, isVisible, display, menuControls])

	const show = useBreakpointValue({base: 'none', md: 'flex'})

	return (
		<Box
			bgColor={useBreakpointValue({base: 'white', lg: 'transparent'})}
			paddingY="32px"
			paddingX="36px"
		>
			<Flex marginY="28px" justifyContent="space-between" alignItems="center">
				<Flex>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="73px"
						height="24px"
						viewBox="0 0 71 20"
						fill="none"
					>
						<g fill="currentColor">
							<path d="M 18.460938 9.789062 C 18.460938 4.824219 15.785156 1 8.976562 1 L 1.699219 1 L 1.699219 18.574219 L 8.976562 18.574219 C 15.785156 18.574219 18.460938 14.75 18.460938 9.789062 Z M 13.507812 9.789062 C 13.507812 13.257812 11.578125 14.546875 8.902344 14.546875 L 6.425781 14.546875 L 6.425781 5.027344 L 8.902344 5.027344 C 11.578125 5.027344 13.507812 6.320312 13.507812 9.789062 Z M 13.507812 9.789062 " />
							<path d="M 19.589844 18.574219 L 33.351562 18.574219 L 33.351562 14.574219 L 24.320312 14.574219 L 24.320312 11.558594 L 32.25 11.558594 L 32.25 7.761719 L 24.320312 7.761719 L 24.320312 5.003906 L 33.125 5.003906 L 33.125 1 L 19.589844 1 Z M 19.589844 18.574219 " />
							<path d="M 49.363281 7.105469 C 49.363281 2.671875 46.5625 1 42.210938 1 L 34.683594 1 L 34.683594 18.574219 L 39.410156 18.574219 L 39.410156 13.207031 L 42.210938 13.207031 C 46.5625 13.207031 49.363281 11.535156 49.363281 7.105469 Z M 44.464844 7.105469 C 44.464844 8.824219 43.664062 9.535156 41.738281 9.535156 L 39.410156 9.535156 L 39.410156 4.671875 L 41.738281 4.671875 C 43.664062 4.671875 44.464844 5.382812 44.464844 7.105469 Z M 44.464844 7.105469 " />
							<path d="M 49.882812 5.101562 L 55.359375 5.101562 L 55.359375 18.574219 L 60.085938 18.574219 L 60.085938 5.101562 L 65.566406 5.101562 L 65.566406 1 L 49.882812 1 Z M 49.882812 5.101562 " />
							<path d="M 63.601562 16.113281 C 63.601562 17.703125 64.875 18.992188 66.441406 18.992188 C 68.015625 18.992188 69.300781 17.703125 69.300781 16.113281 C 69.300781 14.523438 68.015625 13.222656 66.441406 13.222656 C 64.875 13.222656 63.601562 14.523438 63.601562 16.113281 Z M 64.148438 16.113281 C 64.148438 14.800781 65.171875 13.726562 66.441406 13.726562 C 67.714844 13.726562 68.75 14.800781 68.75 16.113281 C 68.75 17.425781 67.714844 18.488281 66.441406 18.488281 C 65.171875 18.488281 64.148438 17.425781 64.148438 16.113281 Z M 65.109375 17.539062 L 66.007812 17.539062 L 66.007812 16.558594 L 66.519531 16.558594 L 67.054688 17.539062 L 68.027344 17.539062 L 67.378906 16.378906 C 67.675781 16.253906 67.902344 15.914062 67.902344 15.53125 C 67.902344 14.867188 67.476562 14.546875 66.757812 14.546875 L 65.109375 14.546875 Z M 66.992188 15.546875 C 66.992188 15.785156 66.84375 15.886719 66.558594 15.886719 L 66.007812 15.886719 L 66.007812 15.257812 L 66.558594 15.257812 C 66.84375 15.257812 66.992188 15.332031 66.992188 15.546875 Z M 66.992188 15.546875 " />
						</g>
					</svg>
				</Flex>

				<Box
					onClick={() => setDisplay('flex')}
					cursor="pointer"
					display="flex"
					alignItems="center"
				>
					<Text
						color="black"
						className="font-teko"
						fontSize="18px"
						lineHeight="26px"
					>
						Menu
					</Text>
					<Image
						_hover={{
							opacity: '0.5',
							transform: 'rotate(180deg)',
							transition: 'all 0.8s ease-in-out',
						}}
						marginLeft="13px"
						src={icons.burger.src}
					/>
				</Box>

				<Flex
					w="100vw"
					display={display}
					bgColor="black"
					zIndex={20}
					h="100vh"
					pos="fixed"
					top="0"
					left="0"
					overflowY="auto"
					flexDir="column"
				>
					<Flex marginLeft="16px" align="center" justify="space-between">
						<Flex>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="73px"
								height="24px"
								viewBox="0 0 71 20"
								fill="white"
							>
								<g fill="white">
									<path d="M 18.460938 9.789062 C 18.460938 4.824219 15.785156 1 8.976562 1 L 1.699219 1 L 1.699219 18.574219 L 8.976562 18.574219 C 15.785156 18.574219 18.460938 14.75 18.460938 9.789062 Z M 13.507812 9.789062 C 13.507812 13.257812 11.578125 14.546875 8.902344 14.546875 L 6.425781 14.546875 L 6.425781 5.027344 L 8.902344 5.027344 C 11.578125 5.027344 13.507812 6.320312 13.507812 9.789062 Z M 13.507812 9.789062 " />
									<path d="M 19.589844 18.574219 L 33.351562 18.574219 L 33.351562 14.574219 L 24.320312 14.574219 L 24.320312 11.558594 L 32.25 11.558594 L 32.25 7.761719 L 24.320312 7.761719 L 24.320312 5.003906 L 33.125 5.003906 L 33.125 1 L 19.589844 1 Z M 19.589844 18.574219 " />
									<path d="M 49.363281 7.105469 C 49.363281 2.671875 46.5625 1 42.210938 1 L 34.683594 1 L 34.683594 18.574219 L 39.410156 18.574219 L 39.410156 13.207031 L 42.210938 13.207031 C 46.5625 13.207031 49.363281 11.535156 49.363281 7.105469 Z M 44.464844 7.105469 C 44.464844 8.824219 43.664062 9.535156 41.738281 9.535156 L 39.410156 9.535156 L 39.410156 4.671875 L 41.738281 4.671875 C 43.664062 4.671875 44.464844 5.382812 44.464844 7.105469 Z M 44.464844 7.105469 " />
									<path d="M 49.882812 5.101562 L 55.359375 5.101562 L 55.359375 18.574219 L 60.085938 18.574219 L 60.085938 5.101562 L 65.566406 5.101562 L 65.566406 1 L 49.882812 1 Z M 49.882812 5.101562 " />
									<path d="M 63.601562 16.113281 C 63.601562 17.703125 64.875 18.992188 66.441406 18.992188 C 68.015625 18.992188 69.300781 17.703125 69.300781 16.113281 C 69.300781 14.523438 68.015625 13.222656 66.441406 13.222656 C 64.875 13.222656 63.601562 14.523438 63.601562 16.113281 Z M 64.148438 16.113281 C 64.148438 14.800781 65.171875 13.726562 66.441406 13.726562 C 67.714844 13.726562 68.75 14.800781 68.75 16.113281 C 68.75 17.425781 67.714844 18.488281 66.441406 18.488281 C 65.171875 18.488281 64.148438 17.425781 64.148438 16.113281 Z M 65.109375 17.539062 L 66.007812 17.539062 L 66.007812 16.558594 L 66.519531 16.558594 L 67.054688 17.539062 L 68.027344 17.539062 L 67.378906 16.378906 C 67.675781 16.253906 67.902344 15.914062 67.902344 15.53125 C 67.902344 14.867188 67.476562 14.546875 66.757812 14.546875 L 65.109375 14.546875 Z M 66.992188 15.546875 C 66.992188 15.785156 66.84375 15.886719 66.558594 15.886719 L 66.007812 15.886719 L 66.007812 15.257812 L 66.558594 15.257812 C 66.84375 15.257812 66.992188 15.332031 66.992188 15.546875 Z M 66.992188 15.546875 " />
								</g>
							</svg>
						</Flex>
						<Flex>
							<IconButton
								mt={2}
								mr={2}
								aria-label="Open Menu"
								size="lg"
								backgroundColor="transparent"
								colorScheme="black"
								icon={
									<CloseIcon
										onClick={() => setDisplay('none')}
										color="whiteAlpha.900"
									/>
								}
								onClick={() => setDisplay('none')}
							/>
						</Flex>
					</Flex>
					<Flex flexDir="row-reverse" h="100vh">
						<Flex
							as={motion.div}
							ref={ref}
							animate={menuControls}
							initial="hidden"
							variants={variants.containerVariants}
							flexDir="column"
							textAlign="right"
							padding="1rem"
							flex="1"
							grow="inherit"
							overflow="scroll"
						>
							{navigation.map((item, index) => (
								<Fragment key={index}>
									<Box variants={variants.listVariants} as={motion.div}>
										<CustomLink to={item.href}>
											<Heading
												color="white"
												lineHeight="tall"
												size="3xl"
												letterSpacing="widest"
												width="100%"
												fontWeight="light"
											>
												{item.name.toUpperCase()}
											</Heading>
										</CustomLink>
										<Divider colorScheme="whiteAlpha" />
									</Box>
								</Fragment>
							))}
						</Flex>
						<Flex
							as={motion.div}
							ref={ref}
							animate={menuControls}
							initial="hidden"
							variants={variants.containerVariants}
							flexDir="column"
							display={show}
						>
							<Flex flexDir="column" textAlign="left" padding="1rem">
								<Link style={{textDecoration: 'none'}} to="#">
									<Heading
										color="gray.600"
										lineHeight="normal"
										size="sm"
										letterSpacing="wide"
										width="100%"
									>
										LADEN
									</Heading>
								</Link>
								{countries.map((item, index) => (
									<Box
										as={motion.div}
										variants={variants.countriesVariants}
										key={index}
									>
										<Link style={{textDecoration: 'none'}} to="#">
											<Heading
												color="white"
												lineHeight="normal"
												size="sm"
												letterSpacing="wide"
												width="100%"
											>
												{item.toUpperCase()}
											</Heading>
										</Link>
									</Box>
								))}
							</Flex>
							<Flex
								marginTop="auto"
								flexDir="column"
								textAlign="left"
								padding="1rem"
								as={motion.div}
								initial={'hidden'}
								animate={menuControls}
								variants={variants.containerVariants}
							>
								{socials.map((item, index) => (
									<Box
										as={motion.div}
										variants={variants.socialVariants}
										key={index}
									>
										<Link style={{textDecoration: 'none'}} to="#">
											<Heading
												color="white"
												lineHeight="normal"
												size="sm"
												letterSpacing="wide"
												width="100%"
											>
												{item.toUpperCase()}
											</Heading>
										</Link>
									</Box>
								))}
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
			<Divider marginRight="auto" color="#0E0E0E" />
		</Box>
	)
}
export default Header
