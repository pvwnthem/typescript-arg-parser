import isUnicodeSupported from 'is-unicode-supported';

const main = {
	info: 'ℹ',
	success: '✔',
	warning: '⚠',
	error: '✖',
};

const fallback = {
	info: 'i',
	success: '√',
	warning: '‼',
	error: '×',
};

const logSymbols = isUnicodeSupported() ? main : fallback;

export default logSymbols;