import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'src/components/SharedLayout/SharedLayout';

const Todo = lazy(() => import('src/pages/Todo/Todo'));

function App() {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<Todo />} />
			</Route>
		</Routes>
	);
}

export default App;
