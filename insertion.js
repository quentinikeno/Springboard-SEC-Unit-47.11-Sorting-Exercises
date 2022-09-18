function insertionSort(array) {
	const result = array.length ? [array[0]] : [];

	for (let i = 1; i < array.length; i++) {
		const element = array[i];

		if (element >= result[result.length - 1]) {
			result.push(element);
		} else if (element <= result[0]) {
			result.unshift(element);
		} else {
			for (let j = 0; j < result.length; j++) {
				if (result[j] < element && result[j + 1] >= element) {
					result.splice(j + 1, 0, element);
					break;
				}
			}
		}
	}

	return result;
}

module.exports = insertionSort;
