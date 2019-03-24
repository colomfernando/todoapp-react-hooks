import styled from 'styled-components/macro';
import Input from '@material-ui/core/Input';

export default {
	Container: styled(Input)`
		width: 100%;
		&:placeholder {
			color: #7b7c7c;
		}
		&:before,
		&:after {
			border-bottom: none;
		}
		&:hover:before {
			border-bottom: none !important;
		}
	`
};
