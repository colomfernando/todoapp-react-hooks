import React from 'react';
import Styled from './styles';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';

const Task = () => {
	return (
		<Styled.Container>
			<Styled.IconButton>
				<DoneIcon fontSize="small" />
			</Styled.IconButton>
			<p>Task</p>
			<Styled.IconButton>
				<DeleteIcon fontSize="small" />
			</Styled.IconButton>
		</Styled.Container>
	);
};

export default Task;
