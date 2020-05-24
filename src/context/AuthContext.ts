import { createContext } from 'react';

interface AuthContext {
	name: string;
}

export default createContext<AuthContext>({} as AuthContext);
