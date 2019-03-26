import React from 'react';
import { func } from 'prop-types';
import Styled from './styles';

const Input = ({ dispatch }) => {
	const handleKeyPress = e => {
		if (e.key === 'Enter' && e.target.value) {
			dispatch({ type: 'add', payload: e.target.value });
			e.target.value = '';
		}
	};
	return <Styled.Container placeholder="Create Task" onKeyPress={handleKeyPress} />;
};

Input.propTypes = {
	dispatch: func
};

Input.defaultProps = {
	dispatch: () => {}
};

export default Input;
