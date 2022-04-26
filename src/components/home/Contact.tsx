import {
	Box,
	Center,
	Container,
	Flex,
	SimpleGrid,
	Square,
} from '@chakra-ui/layout'
import {
	Button,
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
		<Container
			maxW="100%"
			display={useBreakpointValue({base: 'block', lg: 'flex'})}
			color="white"
			alignItems="center"
			marginY="72px"
			marginX="auto"
		>
			<Box
				className="font-teko"
				fontWeight="400"
				fontSize={useBreakpointValue({base: '30px', lg: '60px'})}
				flex="1"
				lineHeight="86px"
				color="black"
			>
				<Text
					textAlign="center"
					maxW={useBreakpointValue({base: 'auto', lg: '300px'})}
				>
					QUESTION? WE ARE HERE TO HELP!
				</Text>
			</Box>
			<Box flex="2">
				<form color="black" onSubmit={handleSubmit}>
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
					<Button
						bgColor="#1A18F7"
						color="white"
						width="154px"
						height="55px"
						marginTop="38px"
						borderRadius="0"
						type="submit"
						_hover={{opacity: 0.8}}
						fontWeight="bold"
						fontSize="15px"
					>
						SEND
					</Button>
				</form>
			</Box>
		</Container>
	)
}

export default Contact
