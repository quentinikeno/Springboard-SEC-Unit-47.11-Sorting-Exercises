/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(array, pivot = 0) {
	function swap(array, idx1, idx2) {
		const temp = array[idx1];
		array[idx1] = array[idx2];
		array[idx2] = temp;
	}

	const pivotValue = array[pivot];
	let swapIdx = 0;

	for (let i = 1; i < array.length; i++) {
		if (array[i] < pivotValue) {
			swapIdx++;
			swap(array, swapIdx, i);
		}
	}

	swap(array, pivot, swapIdx);
	return swapIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort() {}

module.exports = { pivot, quickSort };
