import './App.scss';

// Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';

function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route path='/' element={<Layout />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
