import styled, { css } from 'styled-components';

export const Container = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	padding: 30px;
	overflow: hidden;
`;

interface ToastProps {
	type?: 'info' | 'success' | 'error';
	noDescription?: boolean;
}

const toastVariants = {
	info: css`
		background: #ebf8ff;
		color: #3172b7;
	`,
	success: css`
		background: #e6fffa;
		color: #2e656a;
	`,
	error: css`
		background: #fddede;
		color: #c53030;
	`,
};

export const Toast = styled.div<ToastProps>`
	width: 360px;
	position: relative;
	padding: 16px;
	border-radius: 10px;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
	display: flex;

	${props => toastVariants[props.type || 'info']}

	${props =>
		props.noDescription &&
		css`
			align-items: center;
		`}

	& + div {
		margin-top: 8px;
	}

	> svg {
		margin: auto 0;
	}

	div {
		flex: 1;
		padding: 0 12px;
		p {
			margin-top: 4px;
			font-size: 14px;
			opacity: 0.8;
			line-height: 20px;
		}
	}

	button {
		margin-top: 4px;
		height: fit-content;
		background: transparent;
		opacity: 0.6;
		border: 0;
		color: inherit;
	}
`;
