function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		let swapped = false;
		for (let j = 0; j < array.length - i; j++) {
			if (array[j] > array[j + 1]) {
				const temp = array[j + 1];
				array[j + 1] = array[j];
				array[j] = temp;
				swapped = true;
			}
		}
		if (!swapped) break;
	}
	return array;
}

module.exports = bubbleSort;
