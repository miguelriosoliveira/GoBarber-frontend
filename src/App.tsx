import React from 'react';

import AuthContext from './context/AuthContext';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			<AuthContext.Provider value={{ name: 'Miguel' }}>
				<Routes />
			</AuthContext.Provider>
		</>
	);
};

export default App;
