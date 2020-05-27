import React from 'react';
import { FiAlertCircle, FiX } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
	return (
		<Container>
			<Toast>
				<FiAlertCircle size={20} />
				<div>
					<strong>Aconteceu um erro</strong>
					<p>Aconteceu um erro Aconteceu um erro</p>
				</div>
				<button type="button">
					<FiX size={18} />
				</button>
			</Toast>

			<Toast noDescription>
				<FiAlertCircle size={20} />
				<div>
					<strong>Sem descrição</strong>
				</div>
				<button type="button">
					<FiX size={18} />
				</button>
			</Toast>

			<Toast type="success">
				<FiAlertCircle size={20} />
				<div>
					<strong>Aconteceu um erro</strong>
					<p>Aconteceu um erro Aconteceu um erro</p>
				</div>
				<button type="button">
					<FiX size={18} />
				</button>
			</Toast>

			<Toast type="error">
				<FiAlertCircle size={20} />
				<div>
					<strong>Aconteceu um erro</strong>
					<p>Aconteceu um erro Aconteceu um erro</p>
				</div>
				<button type="button">
					<FiX size={18} />
				</button>
			</Toast>
		</Container>
	);
};

export default ToastContainer;
