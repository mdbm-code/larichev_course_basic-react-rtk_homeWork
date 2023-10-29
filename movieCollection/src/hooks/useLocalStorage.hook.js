import { useEffect, useState } from 'react';

export function useLocalStorage(key) {
	const [data, setData] = useState();

	useEffect(() => {
		const value = localStorage.getItem(key);
		const res = value ? JSON.parse(value) : [];
		setData(res);
	}, []);


	const saveData = (newData) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	return [data, saveData];
}