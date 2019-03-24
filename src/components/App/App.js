import React, { Component } from 'react';
import GlobalStyles from 'GlobalStyles';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import Styled from './styles';
import Form from 'components/Form';
import Task from 'components/Task';

const styleNode = document.createComment('insertion-point-jss');
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create({ ...jssPreset(), insertionPoint: 'insertion-point-jss' });

class App extends Component {
	render() {
		return (
			<JssProvider jss={jss} generateClassName={generateClassName}>
				<React.Fragment>
					<GlobalStyles />
					<Styled.Container>
						<Styled.WrapperForm>
							<Form />
						</Styled.WrapperForm>
						<Styled.WrapperTask>
							<Task />
							<Task />
							<Task />
						</Styled.WrapperTask>
					</Styled.Container>
				</React.Fragment>
			</JssProvider>
		);
	}
}

export default App;
