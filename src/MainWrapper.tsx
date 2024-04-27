import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'src/redux/store.ts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type MainWrapperProps = {
	children: ReactNode;
};

export const MainWrapper = ({ children }: MainWrapperProps) => {
	return (
		<>
			<React.StrictMode>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<BrowserRouter basename="redux-todo">{children}</BrowserRouter>
					</PersistGate>
				</Provider>
			</React.StrictMode>
			<ToastContainer />
		</>
	);
};
