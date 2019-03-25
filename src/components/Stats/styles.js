import styled from 'styled-components/macro';
import Chip from '@material-ui/core/Chip';

const BaseChip = styled(Chip)`
	height: 24px;
	margin-right: 10px;
`;

export default {
	Container: styled.div`
		margin-top: 5px;
		padding-top: 10px;
		border-top: 1px solid #9e9e9e;
		display: flex;
		align-items: center;
		width: 100%;
	`,
	BasicChip: styled(BaseChip)`
		border-color: #f24848;
		color: #f24848;
	`
};
