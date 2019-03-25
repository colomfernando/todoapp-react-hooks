import React from 'react';
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

export default Input;
