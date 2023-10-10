export const USERS_INITIAL_STATE = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

const saveState = (data) => {
	try {
		localStorage.setItem('users', JSON.stringify(data));
	} catch (error) {
		//or quota exceeded errors
		//or because the localStorage API is not supported in the browser
		//or because the localStorage API is being restricted when browsing in private mode in some browsers
	}

	return data;
};

export const usersReducer = (state, { type, payload }) => {
	switch (type) {
		case 'LOGIN': {
			const exist = state.find(user => user.name === payload);
			let newState;
			if (exist) {
				newState = state.map(user => user.name === payload ? { ...user, isLogined: true } : { ...user, isLogined: false });
			} else {
				newState = [...state.map(user => ({ ...user, isLogined: false })), {
					name: payload,
					isLogined: true,
					favorites: []
				}];
			}
			return saveState(newState);
		} case 'DELETE': {
			return saveState(state.filter(user => user.name !== payload));
		} case 'LOGOUT': {
			return saveState(state.map(user => ({ ...user, isLogined: false })));
		}
		default:
			return state;
	}
};