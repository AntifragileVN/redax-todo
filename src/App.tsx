import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'src/components/SharedLayout/SharedLayout';

const Home = lazy(() => import('src/pages/Home/Home'));
const Deleted = lazy(() => import('src/pages/Deleted/Deleted'));

function App() {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<Home />} />
				<Route path="deleted" element={<Deleted />} />
			</Route>
		</Routes>
	);
}

export default App;
