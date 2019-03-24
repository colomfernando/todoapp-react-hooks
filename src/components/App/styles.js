import styled from 'styled-components/macro';
import Paper from '@material-ui/core/Paper';

export default {
	Container: styled(Paper)`
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column nowrap;
		margin-top: 30px;
		padding: 10px 20px;
		max-width: 500px;
		width: 100%;
		height: auto;
	`
};
