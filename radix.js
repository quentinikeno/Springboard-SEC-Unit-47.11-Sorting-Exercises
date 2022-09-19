function getDigit(num, index) {
	return Math.floor(num / Math.pow(10, index)) % 10;
}

function digitCount(num) {
	return num === 0 ? 1 : Math.floor(Math.log10(num)) + 1;
}

function mostDigits(arr) {
	let maxDigits = 0;
	for (let num of arr) {
		const digits = digitCount(num);
		if (digits > maxDigits) maxDigits = digits;
	}
	return maxDigits;
}

function radixSort() {}

module.exports = { getDigit, digitCount, mostDigits, radixSort };
