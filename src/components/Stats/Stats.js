import React from 'react';
import { Spring } from 'react-spring/renderprops';
import Styled from './styles';

const Stats = ({ total, active, done }) => {
	return (
		<Spring from={{ height: 0, opacity: 0 }} to={{ height: 'auto', opacity: 1 }}>
			{styles => (
				<Styled.Container style={styles}>
					{!!total && <Styled.BasicChip label={`All ${total}`} variant="outlined" />}
					{!!active && <Styled.BasicChip label={`Active ${active}`} variant="outlined" />}
					{!!done && <Styled.BasicChip label={`Completed ${done}`} variant="outlined" />}
				</Styled.Container>
			)}
		</Spring>
	);
};

export default Stats;
