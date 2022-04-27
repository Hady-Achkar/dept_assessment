import {HStack, Image} from '@chakra-ui/react'
import React from 'react'
import {Link, LinkProps, useMatch, useResolvedPath} from 'react-router-dom'
import {icons} from '../../constants'

const CustomLink = ({children, to, ...props}: LinkProps) => {
	let resolved = useResolvedPath(to)
	let match = useMatch({path: resolved.pathname, end: true})

	return (
		<HStack justifyContent="flex-end" alignItems="center">
			{match && <Image width="22px" height="25px" src={icons.arrow.src} />}
			<Link style={{textDecoration: 'none'}} to={to} {...props}>
				{children}
			</Link>
		</HStack>
	)
}

export default CustomLink
