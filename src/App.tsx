import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {CasePage, HomePage} from './pages'
import {Provider} from 'react-redux'
import {ChakraProvider} from '@chakra-ui/react'
import Technical from './pages/Technical'
import {Store} from './lib'

function App() {
	return (
		<Provider store={Store}>
			<ChakraProvider>
				<Router>
					<Routes>
						<Route path="/case/:id" element={<CasePage />} />
						<Route path="/werk" element={<Technical />} />
						<Route path="/" element={<HomePage />} />
					</Routes>
				</Router>
			</ChakraProvider>
		</Provider>
	)
}

export default App
