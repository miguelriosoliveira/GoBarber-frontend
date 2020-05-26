import React from 'react';

import { AuthProvider } from './context/AuthContext';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</>
	);
};

export default App;
