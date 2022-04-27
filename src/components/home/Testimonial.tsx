import React from 'react'
import {Container, Text, useBreakpointValue} from '@chakra-ui/react'

const Testimonial = () => {
	return (
		<Container
			textAlign={useBreakpointValue({base: 'justify', lg: 'center'})}
			maxW="4xl"
			marginY="48px"
		>
			<Text
				fontWeight="400"
				fontSize={useBreakpointValue({base: '24px', lg: '36px'})}
				lineHeight="52px"
				marginBottom="33px"
				className="font-teko"
			>
				“Dept helped us tell our story through a bold new identity and a robust
				online experience. To the tune of 60% growth in online bookings in just
				one month.”
			</Text>
			<Text fontSize="13px" lineHeight="15px" fontWeight="bold">
				MATTIJS TEN BRINK – CEO, TRANSAVIA
			</Text>
		</Container>
	)
}

export default Testimonial
