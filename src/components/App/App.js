import React, { useReducer } from 'react';
import GlobalStyles from 'GlobalStyles';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import Styled from './styles';
import Form from 'components/Form';
import GroupTasks from 'components/GroupTasks';
import reducer, { initialState } from 'reducer';

const styleNode = document.createComment('insertion-point-jss');
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create({ ...jssPreset(), insertionPoint: 'insertion-point-jss' });

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<JssProvider jss={jss} generateClassName={generateClassName}>
			<React.Fragment>
				<GlobalStyles />
				<Styled.Container>
					<Form dispatch={dispatch} items={state.items} />
					{!!state.items.length && <GroupTasks dispatch={dispatch} items={state.items} />}
				</Styled.Container>
			</React.Fragment>
		</JssProvider>
	);
};

export default App;
