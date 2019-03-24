import styled from 'styled-components/macro';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

export default {
	Container: styled(Paper)`
		display: grid;
		width: 100%;
		grid-template-columns: max-content 1fr max-content;
		column-gap: 10px;
		align-items: center;
		padding: 10px;
		margin-bottom: 5px;
		width: 100%;
	`,
	IconButton: styled(IconButton)``
};
