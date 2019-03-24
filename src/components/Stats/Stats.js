import React from 'react';
import { Spring } from 'react-spring/renderprops';
import Styled from './styles';

const Stats = () => {
	console.log('Stats');
	return (
		<Spring from={{ height: 0 }} to={{ height: 'auto' }}>
			{styles => (
				<Styled.Container style={styles}>
					<Styled.BasicChip label="All" variant="outlined" />
					<Styled.BasicChip label="Active" variant="outlined" />
					<Styled.BasicChip label="Completed" variant="outlined" />
				</Styled.Container>
			)}
		</Spring>
	);
};

export default Stats;
