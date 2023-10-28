import { useContext } from 'react';
import { AppContext } from '../context/app.context';

export function useLogin() {
	const { userName, login, logout } = useContext(AppContext);

	const setUser = (value) => {
		if (value) {
			login(value);
		} else {
			logout();
		}
	};

	return [userName, setUser];
}