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
	useToast,
} from '@chakra-ui/react'
import React, {useState} from 'react'
import {addContact} from '../../services/contactsService'

interface ContactData {
	email: string
	name: string
	message: string
}
const Contact: React.FC = () => {
	const initContactData = {
		email: '',
		name: '',
		message: '',
	}
	const [contactData, setContactData] = useState<ContactData>(initContactData)
	const [showError, setShowError] = useState(false)

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setShowError(true)
		setContactData({...contactData, [e.target.id]: e.target.value})
	}

	const [isError, setIsErrorTo] = useState<boolean>(false)
	// Object.values(contactData).forEach((element) => {
	// 	element === '' && setIsErrorTo(true)
	// })

	const {email, name, message} = contactData
	const toast = useToast()
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		addContact(contactData)
			.then((res) => {
				toast({
					title: 'Contact was sent!',
					description: 'We will get back to you in no time!',
					status: 'success',
					duration: 4000,
					isClosable: true,
				})
				setContactData(initContactData)
			})
			.catch((err) => {
				toast({
					title: 'Error!',
					description: `Error ${err.message} sending the contact`,
					status: 'error',
					duration: 4000,
					isClosable: true,
				})
			})
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
						<FormControl isInvalid={showError && contactData.name === ''}>
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
							{showError && contactData.name === '' && (
								<FormErrorMessage>Name is required.</FormErrorMessage>
							)}
						</FormControl>
						<FormControl isInvalid={showError && contactData.email === ''}>
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
							{showError && contactData.email === '' && (
								<FormErrorMessage>Email is required.</FormErrorMessage>
							)}
						</FormControl>
						<FormControl isInvalid={showError && contactData.message === ''}>
							<FormLabel color="black" htmlFor="message">
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
							{showError && contactData.message === '' && (
								<FormErrorMessage>Message is required.</FormErrorMessage>
							)}
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
						disabled={
							contactData.email === '' ||
							contactData.name === '' ||
							contactData.message === ''
						}
					>
						SEND
					</Button>
				</form>
			</Box>
		</Container>
	)
}

export default Contact
