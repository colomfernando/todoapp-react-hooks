import React from 'react';
import Styled from './styles';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import { Transition, config } from 'react-spring/renderprops';

const Task = ({ text, dispatch, id, done }) => {
	return (
		<Styled.Container>
			<Styled.IconButton onClick={() => dispatch({ type: 'complete', payload: id })}>
				<DoneIcon fontSize="small" />
			</Styled.IconButton>
			<Styled.WrapperText>
				<Transition items={done} from={{ x: 0 }} enter={{ x: 100 }} leave={{ x: 0 }}>
					{done => done && (props => <Styled.Line style={{ width: `${props.x}%` }} />)}
				</Transition>
				<Styled.Text done={done}>{text}</Styled.Text>
			</Styled.WrapperText>
			<Styled.IconButton onClick={() => dispatch({ type: 'delete', payload: id })}>
				<DeleteIcon fontSize="small" />
			</Styled.IconButton>
		</Styled.Container>
	);
};

export default Task;
