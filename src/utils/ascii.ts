const alphabet = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'x',
	'y',
	'z',
];
const randomInt = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomLetters = (numLetters: number) => {
	return Array.from({ length: numLetters - 1 }).map(
		() => alphabet[randomInt(0, 25)]
	);
};
