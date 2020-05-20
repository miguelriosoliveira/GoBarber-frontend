import React from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
	<Container>
		<Background />

		<Content>
			<img src={logo} alt="GoBarber logo" />

			<form>
				<h1>Faça seu cadastro</h1>

				<Input name="name" icon={FiUser} placeholder="Nome" />
				<Input name="email" icon={FiMail} placeholder="E-mail" />
				<Input name="password" icon={FiLock} type="password" placeholder="Senha" />

				<Button type="submit">Cadastrar</Button>
			</form>

			<Link to="/signin">
				<FiArrowLeft />
				Voltar para logon
			</Link>
		</Content>
	</Container>
);

export default SignUp;
