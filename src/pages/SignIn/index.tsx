import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
	<Container>
		<Content>
			<img src={logo} alt="GoBarber logo" />

			<form>
				<h1>Faça seu logon</h1>

				<input placeholder="E-mail" />
				<input type="password" placeholder="Senha" />

				<button type="submit">Entrar</button>

				<Link to="/forgot">Esqueci minha senha</Link>
			</form>

			<Link to="/signup">
				<FiLogIn />
				Criar conta
			</Link>
		</Content>

		<Background />
	</Container>
);

export default SignIn;
