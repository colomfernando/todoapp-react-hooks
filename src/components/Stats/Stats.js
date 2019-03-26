import React from 'react';
import { oneOfType, number, string } from 'prop-types';
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

Stats.propTypes = {
	total: oneOfType([number, string]),
	active: oneOfType([number, string]),
	done: oneOfType([number, string])
};

Stats.defaultProps = {
	total: '',
	active: '',
	done: ''
};

export default Stats;
