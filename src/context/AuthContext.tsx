import React, { createContext, useCallback } from 'react';

import api from '../services/api';

interface Credentials {
	email: string;
	password: string;
}

interface AuthContextProps {
	name: string;
	signIn(credentials: Credentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
	const signIn = useCallback(async ({ email, password }) => {
		const response = await api.post('sessions', { email, password });
		console.log(response.data);
	}, []);

	return <AuthContext.Provider value={{ name: 'Miguel', signIn }}>{children}</AuthContext.Provider>;
};
