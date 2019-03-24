import React from 'react';
import Styled from './styles';

const Input = () => {
	const handleKeyPress = e => {
		if (e.key === 'Enter' && e.target.value) console.log(e.target.value);
	};
	return <Styled.Container placeholder="Create Task" onKeyPress={handleKeyPress} />;
};

export default Input;
