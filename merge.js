function merge(arr1, arr2) {
	const result = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			i = pushAndIncrement(arr1, i);
		} else {
			j = pushAndIncrement(arr2, j);
		}
	}
	while (i < arr1.length) {
		i = pushAndIncrement(arr1, i);
	}
	while (j < arr2.length) {
		j = pushAndIncrement(arr2, j);
	}

	function pushAndIncrement(arr, incrementor) {
		result.push(arr[incrementor]);
		return incrementor + 1;
	}

	return result;
}

function mergeSort(arr) {
	// base case
	if (arr.length <= 1) return arr;

	//typical case
	const mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

module.exports = { merge, mergeSort };
