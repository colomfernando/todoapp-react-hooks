export const initialState = {
	items: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'add':
			return Object.assign({}, state, {
				items: [...state.items, { value: action.payload, done: false, id: state.items.length + 1 }]
			});
		default:
			return state;
	}
};

export default reducer;
