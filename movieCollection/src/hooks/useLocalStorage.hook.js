import { useEffect, useState } from 'react';

export function useLocalStorage(key) {
	const [data, setData] = useState();

	useEffect(() => {
		const res = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
		setData(res);
	}, []);


	const saveData = (newData) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	return [data, saveData];
}