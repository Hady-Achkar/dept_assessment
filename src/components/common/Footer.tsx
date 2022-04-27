import {Box, Container, Divider, Flex, Text} from '@chakra-ui/layout'
import {Image} from '@chakra-ui/image'
import React from 'react'
import {Link} from 'react-router-dom'
import {icons, navigation} from '../../constants'
import {useBreakpointValue} from '@chakra-ui/media-query'

const Footer: React.FC = () => {
	const show = useBreakpointValue({base: 'none', lg: 'flex'})
	const linkSize = useBreakpointValue({base: '32px', lg: '18px'})
	return (
		<Container
			flexDir={'column'}
			display="flex"
			height={useBreakpointValue({base: '663px', lg: '310px'})}
			justifyContent="center"
			maxW="full"
			color="white"
			bgColor="black"
		>
			<Box marginX="36px">
				<Flex justifyContent="space-between">
					<Flex>
						<Box marginRight="50px" display={show}>
							<svg
								width="100"
								height="28"
								viewBox="0 0 100 28"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M0 27.9785H9.51315C18.5067 27.9785 25.0384 24.1818 25.0384 13.9892C25.0384 3.79663 18.5067 0 9.51315 0L0 0L0 27.9785ZM7.27648 21.4631L7.27648 6.51533L9.59055 6.51533C14.7031 6.51533 17.8358 8.43249 17.8358 13.9892C17.8358 19.5447 14.7031 21.4631 9.59055 21.4631H7.27648ZM29.2537 27.9785L49.0682 27.9785L49.0682 21.7031H36.5302V16.9479H48.9556V10.9514L36.5302 10.9514V6.27411L49.0682 6.27411V0L29.2537 0L29.2537 27.9785ZM54.2546 27.9785H61.5287L61.5287 18.8651H65.8589C72.3871 18.8651 76.7549 15.9077 76.7549 9.43253C76.7549 2.9574 72.3871 0 65.8589 0L54.2546 0L54.2546 27.9785ZM61.5287 12.8284V6.03667L65.7088 6.03667C68.3947 6.03667 69.7013 7.195 69.7013 9.43253C69.7013 11.6713 68.3947 12.8284 65.7088 12.8284H61.5287ZM85.4858 27.9785H92.7599V6.55553L100 6.55553V0L78.2468 0V6.55553L85.4858 6.55553V27.9785Z"
									fill="white"
								/>
							</svg>
						</Box>
						<Flex
							flexDir={useBreakpointValue({base: 'column', lg: 'row'})}
							gap="4"
						>
							{navigation.map((item, index) => {
								return (
									<Link
										className="font-teko"
										style={{
											fontWeight: '400',
											fontSize: linkSize,
											color: 'white',
											lineHeight: '26px',
										}}
										key={index}
										to="#"
									>
										{item.name.toUpperCase()}
									</Link>
								)
							})}
						</Flex>
					</Flex>

					<Flex
						flexDir={useBreakpointValue({base: 'column', lg: 'row'})}
						align={'center'}
						gap="4"
					>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.facebook.com/DeptAgency/"
						>
							<svg
								width="15"
								height="15"
								viewBox="0 0 15 26"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14.5 0.5H10.75C9.0924 0.5 7.50269 1.15848 6.33058 2.33058C5.15848 3.50269 4.5 5.0924 4.5 6.75V10.5H0.75V15.5H4.5V25.5H9.5V15.5H13.25L14.5 10.5H9.5V6.75C9.5 6.41848 9.6317 6.10054 9.86612 5.86612C10.1005 5.6317 10.4185 5.5 10.75 5.5H14.5V0.5Z"
									fill="white"
								/>
							</svg>
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://twitter.com/deptagency?lang=en"
						>
							<svg
								width="15"
								height="15"
								viewBox="0 0 27 23"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M25.875 1.37508C24.7977 2.13499 23.6049 2.71621 22.3425 3.09633C21.665 2.31728 20.7645 1.76511 19.7629 1.5145C18.7613 1.26389 17.7069 1.32693 16.7423 1.69509C15.7777 2.06326 14.9495 2.71878 14.3696 3.57301C13.7897 4.42724 13.4862 5.43896 13.5 6.47133V7.59633C11.523 7.6476 9.56393 7.20912 7.79738 6.31996C6.03084 5.4308 4.51161 4.11855 3.375 2.50008C3.375 2.50008 -1.125 12.6251 9 17.1251C6.68309 18.6978 3.92305 19.4864 1.125 19.3751C11.25 25.0001 23.625 19.3751 23.625 6.43758C23.624 6.12422 23.5938 5.81163 23.535 5.50383C24.6832 4.37151 25.4934 2.94188 25.875 1.37508Z"
									fill="white"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.instagram.com/deptagency/?hl=en"
						>
							<svg
								width="15"
								height="15"
								viewBox="0 0 18 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.75 1.5H5.25C3.17893 1.5 1.5 3.17893 1.5 5.25V12.75C1.5 14.8211 3.17893 16.5 5.25 16.5H12.75C14.8211 16.5 16.5 14.8211 16.5 12.75V5.25C16.5 3.17893 14.8211 1.5 12.75 1.5Z"
									fill="white"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M12 8.52773C12.0926 9.15191 11.986 9.78939 11.6953 10.3495C11.4047 10.9096 10.9449 11.3638 10.3812 11.6475C9.8176 11.9312 9.17886 12.0299 8.55586 11.9297C7.93287 11.8294 7.35734 11.5353 6.91115 11.0891C6.46496 10.6429 6.17082 10.0674 6.07058 9.44439C5.97033 8.82139 6.06907 8.18265 6.35277 7.61901C6.63647 7.05537 7.09066 6.59553 7.65076 6.30491C8.21086 6.01428 8.84834 5.90767 9.47252 6.00023C10.1092 6.09464 10.6987 6.39132 11.1538 6.84646C11.6089 7.30159 11.9056 7.89103 12 8.52773Z"
									stroke="#0E0E0E"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M13.125 4.875H13.1325"
									stroke="#0E0E0E"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>
					</Flex>
				</Flex>
				<Divider marginY="45px" bgColor={'#3E3E3E'} />
				<Flex
					fontSize="13px"
					color="#808080"
					justify={useBreakpointValue({
						base: 'flex-start',
						lg: 'space-between',
					})}
					flexDir={useBreakpointValue({base: 'column', lg: 'row'})}
					gap={4}
				>
					<Flex
						flexDir={useBreakpointValue({base: 'column', lg: 'row'})}
						gap="4"
					>
						<Text>Chamber of Commerce: 63464101</Text>
						<Text>VAT: NL 8552.47.502.B01</Text>
						<Text>Terms and conditions</Text>
					</Flex>

					<Text>© 2018 Dept Agency</Text>
				</Flex>
			</Box>
		</Container>
	)
}

export default Footer
