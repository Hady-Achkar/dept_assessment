import React, {useEffect, useRef} from 'react'
import {useAnimation, motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {Box, SimpleGrid, useBreakpointValue} from '@chakra-ui/react'
import {CaseCard} from '..'
import {cases} from '../../data/mock'
import {useIntersectionObserver} from '../../hooks'

const FourCardsGrid = () => {
	const squareVariants = {
		visible: {opacity: 1, transition: {duration: 3}},
		hidden: {opacity: 0},
	}
	const containerVariants = {
		hidden: {opacity: 1, scale: 1},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				delayChildren: 0.3,
				staggerChildren: 0.8,
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
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={containerVariants}
		>
			<SimpleGrid
				columns={useBreakpointValue({base: 1, lg: 2})}
				marginX="auto"
				spacingY="3"
				spacingX="10"
			>
				<Box variants={cardVariants} as={motion.div}>
					<CaseCard data={cases.bolcom} />
				</Box>
				<Box variants={cardVariants} as={motion.div}>
					<CaseCard data={cases.kempen} />
				</Box>
				<Box variants={cardVariants} as={motion.div}>
					<CaseCard data={cases.philips} />
				</Box>
				<Box variants={cardVariants} as={motion.div}>
					<CaseCard data={cases.gemeentemuseum} />
				</Box>
			</SimpleGrid>
		</Box>
	)
}

export default FourCardsGrid
