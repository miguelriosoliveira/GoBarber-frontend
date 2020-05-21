import React, { useCallback } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
	const onSubmit = useCallback(async (data: object) => {
		try {
			const schema = Yup.object().shape({
				name: Yup.string().required('Nome obrigatório'),
				email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
				password: Yup.string().min(6, 'No mínimo 6 dígitos'),
			});
			await schema.validate(data, { abortEarly: false });
		} catch (err) {
			console.log(err);
		}
	}, []);

	return (
		<Container>
			<Background />

			<Content>
				<img src={logo} alt="GoBarber logo" />

				<Form onSubmit={onSubmit}>
					<h1>Faça seu cadastro</h1>

					<Input name="name" icon={FiUser} placeholder="Nome" />
					<Input name="email" icon={FiMail} placeholder="E-mail" />
					<Input name="password" icon={FiLock} type="password" placeholder="Senha" />

					<Button type="submit">Cadastrar</Button>
				</Form>

				<Link to="/signin">
					<FiArrowLeft />
					Voltar para logon
				</Link>
			</Content>
		</Container>
	);
};

export default SignUp;
