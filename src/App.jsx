import './App.scss';

// Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';

function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route to='/home' element={<Home />} />
				<Route to='/skills' element={<Home />} />
				<Route to='/portfolio' element={<Home />} />
				<Route to='/contact' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
