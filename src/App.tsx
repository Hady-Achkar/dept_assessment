import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {CasePage, HomePage} from './pages'
import {Provider} from 'react-redux'
import {store} from './lib/store'
import {ChakraProvider} from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
	return (
		<Provider store={store}>
			<ChakraProvider>
				<Router>
					<Routes>
						<Route path="/case/:id" element={<CasePage />} />
						<Route path="/" element={<HomePage />} />
					</Routes>
				</Router>
			</ChakraProvider>
		</Provider>
	)
}

export default App
