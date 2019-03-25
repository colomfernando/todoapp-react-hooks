import React from 'react';
import Input from 'components/Input';
import Stats from 'components/Stats';
import Styled from './styles';

const Form = ({ dispatch, items }) => {
	const total = items.length;
	const active = items.filter(item => !item.done);
	const done = items.filter(item => item.done);

	return (
		<Styled.Container>
			<Input dispatch={dispatch} />
			{!!items.length && <Stats total={total} active={active.length} done={done.length} />}
		</Styled.Container>
	);
};

export default Form;
