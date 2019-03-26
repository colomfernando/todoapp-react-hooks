import React from 'react';
import { string, func, oneOfType, number, bool } from 'prop-types';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import { Transition } from 'react-spring/renderprops';
import Styled from './styles';

const Task = ({ text, dispatch, id, done }) => {
	return (
		<Styled.Container>
			<Styled.IconButton onClick={() => dispatch({ type: 'complete', payload: id })}>
				<DoneIcon fontSize="small" />
			</Styled.IconButton>
			<Styled.WrapperText>
				<Transition items={done} from={{ x: 0 }} enter={{ x: 100 }} leave={{ x: 0 }}>
					{show => show && (props => <Styled.Line style={{ width: `${props.x}%` }} />)}
				</Transition>
				<Styled.Text done={done}>{text}</Styled.Text>
			</Styled.WrapperText>
			<Styled.IconButton onClick={() => dispatch({ type: 'delete', payload: id })}>
				<DeleteIcon fontSize="small" />
			</Styled.IconButton>
		</Styled.Container>
	);
};

Task.propTypes = {
	text: string,
	dispatch: func,
	id: oneOfType([string, number]),
	done: bool
};

Task.defaultProps = {
	text: '',
	dispatch: () => {},
	id: '',
	done: false
};

export default Task;
