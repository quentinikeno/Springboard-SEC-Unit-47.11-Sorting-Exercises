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

function radixSort(nums) {
	let maxDigitCount = mostDigits(nums);
	for (let k = 0; k < maxDigitCount; k++) {
		let digitBuckets = Array.from({ length: 10 }, () => []);
		for (let i = 0; i < nums.length; i++) {
			let num = nums[i];
			let digit = getDigit(num, k);
			digitBuckets[digit].push(num);
		}
		nums = [].concat(...digitBuckets);
	}
	return nums;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort };
