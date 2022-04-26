import {
	Box,
	Center,
	Container,
	Flex,
	SimpleGrid,
	Square,
} from '@chakra-ui/layout'
import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
	Text,
	Textarea,
	useBreakpointValue,
} from '@chakra-ui/react'
import React, {useState} from 'react'

interface ContactData {
	email: string
	name: string
	message: string
}
const Contact: React.FC = () => {
	const [contactData, setContactData] = useState<ContactData>({
		email: '',
		name: '',
		message: '',
	})

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => setContactData({...contactData, [e.target.id]: e.target.value})

	const [isError, setIsErrorTo] = useState<boolean>(false)
	// Object.values(contactData).forEach((element) => {
	// 	element === '' && setIsErrorTo(true)
	// })

	const {email, name, message} = contactData
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
	}
	return (
		<Flex color="white" alignItems="center" marginY="72px">
			<Box
				textAlign="center"
				className="font-teko"
				fontWeight="400"
				fontSize="60px"
				flex="1"
				lineHeight="86px"
				color="black"
			>
				<Text>QUESTION?</Text>
				<Text> WE ARE HERE</Text>
				<Text> TO HELP!</Text>
			</Box>
			<Box flex="2">
				<form color="black" className="font-teko" onSubmit={handleSubmit}>
					<SimpleGrid columns={useBreakpointValue({base: 1, lg: 2})} gap="4">
						<FormControl isInvalid={isError}>
							<FormLabel color="black" htmlFor="name">
								Name
							</FormLabel>
							<Input
								id="name"
								type="text"
								value={name}
								variant="flushed"
								onChange={handleInputChange}
								color="black"
								focusBorderColor="black"
							/>
						</FormControl>
						<FormControl isInvalid={isError}>
							<FormLabel color="black" htmlFor="email">
								Email
							</FormLabel>
							<Input
								id="email"
								type="email"
								value={email}
								variant="flushed"
								onChange={handleInputChange}
								color="black"
								focusBorderColor="black"
							/>
						</FormControl>
						<FormControl>
							<FormLabel color="black" htmlFor="email">
								Message
							</FormLabel>
							<Textarea
								value={message}
								id="message"
								variant="flushed"
								onChange={handleInputChange}
								color="black"
								focusBorderColor="black"
							/>
						</FormControl>
					</SimpleGrid>
				</form>
			</Box>
		</Flex>
	)
}

export default Contact
