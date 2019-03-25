import React from 'react';
import Styled from './styles';
import { Transition, animated, config } from 'react-spring/renderprops';
import Task from 'components/Task';

const GroupTasks = ({ items, dispatch }) => {
	return (
		<Styled.Container>
			<Transition
				items={items}
				keys={item => item.id}
				from={{ opacity: 0, height: 0, transform: 'translate3d(0,-50px,0)' }}
				enter={{ opacity: 1, height: 'auto', transform: 'translate3d(0,0px,0)' }}
				leave={{ opacity: 0, height: 0, transform: 'translate3d(0,-50px,0)' }}
				config={config.gentle}
			>
				{item => props => (
					<animated.div style={props}>
						<Task id={item.id} done={item.done} dispatch={dispatch} text={item.value} />
					</animated.div>
				)}
			</Transition>
		</Styled.Container>
	);
};

export default GroupTasks;
