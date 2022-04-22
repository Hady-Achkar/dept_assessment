import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {CasePage, HomePage} from './pages'
import {Provider} from 'react-redux'
import {store} from './lib/store'

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/case/:id" element={<CasePage />} />
					<Route path="/" element={<HomePage />} />
				</Routes>
			</Router>
		</Provider>
	)
}

export default App
