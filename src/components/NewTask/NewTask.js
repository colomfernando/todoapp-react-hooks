import React from 'react';
import Input from 'components/Input';
import Styled from './styles';

const NewTask = () => {
	console.log('newtask');
	return (
		<Styled.Container>
			<Input />
		</Styled.Container>
	);
};

export default NewTask;
