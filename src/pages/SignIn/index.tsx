import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
	function onSubmit(data: object): void {
		console.log(data);
	}

	return (
		<Container>
			<Content>
				<img src={logo} alt="GoBarber logo" />

				<Form onSubmit={onSubmit}>
					<h1>Faça seu logon</h1>

					<Input name="email" icon={FiMail} placeholder="E-mail" />
					<Input name="password" icon={FiLock} type="password" placeholder="Senha" />

					<Button type="submit">Entrar</Button>

					<Link to="/forgot">Esqueci minha senha</Link>
				</Form>

				<Link to="/signup">
					<FiLogIn />
					Criar conta
				</Link>
			</Content>

			<Background />
		</Container>
	);
};

export default SignIn;
