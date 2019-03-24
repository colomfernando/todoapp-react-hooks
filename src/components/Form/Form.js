import React from 'react';
import Input from 'components/Input';
import Stats from 'components/Stats';
import Styled from './styles';

const Form = () => {
	console.log('newtask');
	return (
		<Styled.Container>
			<Input />
			<Stats />
		</Styled.Container>
	);
};

export default Form;
