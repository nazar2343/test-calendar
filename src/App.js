import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

import './App.scss';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
