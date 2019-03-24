import styled from 'styled-components/macro';
import Paper from '@material-ui/core/Paper';

export default {
	Container: styled.div`
		display: flex;
		flex-flow: column nowrap;
		max-width: 500px;
		width: 100%;
	`,
	WrapperForm: styled(Paper)`
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column nowrap;
		margin: 30px 0 20px;
		padding: 10px 20px;
		height: auto;
	`,
	WrapperTask: styled.div`
		display: flex;
		flex-flow: column nowrap;
	`
};
