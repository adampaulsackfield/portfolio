import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Layout from './components/Layout';

function App() {
	return (
		<div className='App'>
			<Navbar />

			<Routes>
				<Route path='/' element={<Layout />} />
			</Routes>
		</div>
	);
}

export default App;
