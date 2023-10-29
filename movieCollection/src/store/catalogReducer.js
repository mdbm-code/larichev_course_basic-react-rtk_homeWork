export const INITIAL_STATE = [
	{
		id: 1,
		title: 'Black Widow',
		rating: 324,
		image: '/images/fakeData/blackWidow.jpg',
		favorite: 1
	},
	{
		id: 2,
		title: 'Shang Chi',
		rating: 124,
		image: '/images/fakeData/ShangChi.jpg',
		favorite: 0
	},
	{
		id: 3,
		title: 'Loki',
		rating: 235,
		image: '/images/fakeData/Loki.jpg',
		favorite: 0
	},
	{
		id: 4,
		title: 'How I Met Your Mother',
		rating: 123,
		image: '/images/fakeData/HowIMetYourMother.jpg',
		favorite: 0
	},
	{
		id: 5,
		title: 'Money Heist',
		rating: 8125,
		image: '/images/fakeData/MoneyHeist.jpg',
		favorite: 0
	},
	{
		id: 6,
		title: 'Friends',
		rating: 123,
		image: '/images/fakeData/Friends.jpg',
		favorite: 0
	},
	{
		id: 7,
		title: 'The Big Bang Theory',
		rating: 12,
		image: '/images/fakeData/TheBigBangTheory.jpg',
		favorite: 0
	},
	{
		id: 8,
		title: 'Two And a Half Men',
		rating: 456,
		image: '/images/fakeData/TwoAndaHalfMen.jpg',
		favorite: 0
	}
];


export const catalogReducer = (state, action) => {
	switch (action.type) {
		case 'LOAD_ITEMS':
			return INITIAL_STATE;
		default:
			return state;
	}
};