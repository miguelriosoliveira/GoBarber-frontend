import React from 'react';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />

			<AuthProvider>
				<Routes />
			</AuthProvider>

			<ToastContainer />
		</>
	);
};

export default App;
