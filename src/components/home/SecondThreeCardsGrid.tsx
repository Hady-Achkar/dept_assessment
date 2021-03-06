import React, {useEffect, useRef} from 'react'
import {useAnimation, motion} from 'framer-motion'
import {Box, Grid, GridItem, useBreakpointValue} from '@chakra-ui/react'
import {CaseCard} from '..'
import {cases} from '../../data/mock'
import {useIntersectionObserver} from '../../hooks'

const SecondThreeCardsGrid = () => {
	const containerVariants = {
		hidden: {opacity: 0, scale: 1},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 3,
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
			<Grid
				templateRows={useBreakpointValue({
					base: 'repeat(1, 1fr)',
					lg: 'repeat(3, 1fr)',
				})}
				templateColumns={useBreakpointValue({
					base: 'repeat(1, 1fr)',
					lg: 'repeat(20, 1fr)',
				})}
				rowGap={5}
				columnGap={useBreakpointValue({base: 1, lg: 5})}
				marginX="auto"
				marginY="80px"
			>
				<GridItem borderY="2px" borderColor="gray.100" colSpan={9} rowSpan={1}>
					<CaseCard data={cases.butlins} />
				</GridItem>
				<GridItem
					colSpan={11}
					rowSpan={useBreakpointValue({base: 1, lg: 3})}
					paddingRight={useBreakpointValue({base: '0', lg: '40px'})}
					paddingLeft="10px"
					borderBottom={useBreakpointValue({base: '2px', lg: 0})}
					borderColor="gray.100"
				>
					<CaseCard data={cases.florensis2} />
				</GridItem>
				<GridItem
					borderBottom="2px"
					borderColor="gray.100"
					colSpan={9}
					rowSpan={1}
				>
					<CaseCard data={cases.vananseselect} />
				</GridItem>
			</Grid>
		</Box>
	)
}

export default SecondThreeCardsGrid
