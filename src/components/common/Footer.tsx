import {Box, Container, Divider, Flex, HStack, Text} from '@chakra-ui/layout'
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
						<Image
							display={show}
							src={icons.dept.src}
							alt="Dept Logo"
							marginRight="50px"
						/>
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
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
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
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M12 8.52773C12.0926 9.15191 11.986 9.78939 11.6953 10.3495C11.4047 10.9096 10.9449 11.3638 10.3812 11.6475C9.8176 11.9312 9.17886 12.0299 8.55586 11.9297C7.93287 11.8294 7.35734 11.5353 6.91115 11.0891C6.46496 10.6429 6.17082 10.0674 6.07058 9.44439C5.97033 8.82139 6.06907 8.18265 6.35277 7.61901C6.63647 7.05537 7.09066 6.59553 7.65076 6.30491C8.21086 6.01428 8.84834 5.90767 9.47252 6.00023C10.1092 6.09464 10.6987 6.39132 11.1538 6.84646C11.6089 7.30159 11.9056 7.89103 12 8.52773Z"
								stroke="#0E0E0E"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M13.125 4.875H13.1325"
								stroke="#0E0E0E"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
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
