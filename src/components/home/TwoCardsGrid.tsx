import React, {useEffect, useRef} from 'react'
import {useAnimation, motion} from 'framer-motion'
import {Box, SimpleGrid, useBreakpointValue} from '@chakra-ui/react'
import {CaseCard} from '..'
import {cases} from '../../data/mock'
import {useIntersectionObserver} from '../../hooks'

const FourCardsGrid = () => {
	const containerVariants = {
		hidden: {opacity: 0},
		visible: {
			opacity: 1,
			transition: {
				delay: 0.2,
				duration: 1,
			},
		},
	}

	const controls = useAnimation()

	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})

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
				className="container"
				columns={useBreakpointValue({base: 1, lg: 2})}
				marginX="auto"
				spacingY="3"
				spacingX="10"
			>
				<CaseCard data={cases.libertyGlobal} />
				<CaseCard data={cases.arla} />
			</SimpleGrid>
		</Box>
	)
}

export default FourCardsGrid
