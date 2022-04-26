import {Container, Divider, Flex, HStack} from '@chakra-ui/layout'
import {Image} from '@chakra-ui/image'
import React from 'react'
import {Link} from 'react-router-dom'
import {icons, navigation} from '../../constants'

const Footer: React.FC = () => {
	return (
		<Container maxW="full" color="white" bgColor="black">
			<Flex
				marginX="36px"
				height="30vh"
				alignItems="center"
				justifyContent="space-between"
			>
				<Flex>
					<Image src={icons.dept.src} alt="Dept Logo" marginRight="50px" />
					<HStack spacing="4">
						{navigation.map((item, index) => {
							return (
								<Link
									className="font-teko"
									style={{
										fontWeight: '400',
										fontSize: '18px',
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
					</HStack>
				</Flex>

				<HStack spacing="4">
					<Image src={icons.facebook.src} alt="Dept - Facebook Icon" />
					<Image src={icons.instagram.src} alt="Dept - Instagram Icon" />
					<Image src={icons.twitter.src} alt="Dept - Twitter Icon" />
				</HStack>
			</Flex>
			<Divider />
		</Container>
	)
}

export default Footer
