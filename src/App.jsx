import './App.scss';

// Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Containers
import Layout from './containers/LayoutContainer/LayoutContainer';

// Components
import Navbar from './components/Navbar/Navbar';

function App() {
	return (
		<BrowserRouter>
			<header className='header'>
				<Navbar />
			</header>

			<Routes>
				<Route path='/' element={<Layout />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
