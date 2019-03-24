import React, { Component } from 'react';
import GlobalStyles from 'GlobalStyles';
import Styled from './styles';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<GlobalStyles />
				<Styled.Container />
			</React.Fragment>
		);
	}
}

export default App;
