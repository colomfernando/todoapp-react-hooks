import React from 'react';
import { func, arrayOf, any } from 'prop-types';
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

Form.propTypes = {
	dispatch: func,
	items: arrayOf(any)
};

Form.defaultProps = {
	dispatch: () => {},
	items: []
};

export default Form;
