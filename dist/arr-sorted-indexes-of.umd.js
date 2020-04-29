(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/arr-sort-comparator'), require('@bemoje/arr-sorted-index-of'), require('@bemoje/assert-args'), require('@bemoje/assert-type')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/arr-sort-comparator', '@bemoje/arr-sorted-index-of', '@bemoje/assert-args', '@bemoje/assert-type'], factory) :
	(global = global || self, global['arr-sorted-indexes-of'] = factory(global.arrSortComparator, global.arrSortedIndexOf, global.assertArgs, global.assertType));
}(this, (function (arrSortComparator, arrSortedIndexOf, assertArgs, assertType) { 'use strict';

	arrSortComparator = arrSortComparator && Object.prototype.hasOwnProperty.call(arrSortComparator, 'default') ? arrSortComparator['default'] : arrSortComparator;
	arrSortedIndexOf = arrSortedIndexOf && Object.prototype.hasOwnProperty.call(arrSortedIndexOf, 'default') ? arrSortedIndexOf['default'] : arrSortedIndexOf;
	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;

	/**
	 * Find all indexes at which an array element exists, by binary search.
	 * @param {*} element - The element to find
	 * @param {comparator|object} [compare]
	 * @param {boolean} [compare.numeric=false] - Sort numerically. Defaults to lexicographic/alphabetic sort.
	 * @param {boolean} [compare.descending=false] - Sort in descending order. Defaults to ascending order.
	 * @param {boolean} [compare.array=false] - Sort arrays. Nested arrays are also compared recursively.
	 * @param {number|string|getter} [compare.by=undefined] - Sort by either array index, a callback(element): any - or by object keys with dot-notation support.
	 * @returns {Array<number>} Integer array of indexes
	 */
	function arrSortedIndexesOf(arr, element, compare) {
		assertArgs(arr);
		assertType(Array, arr);

		const len = arr.length;

		// obviously, there is no match then
		if (len === 0) {
			return []
		}

		// handle comparator
		if (compare) {
			if (typeof compare === 'object') {
				// is comparator builder options
				compare = arrSortComparator(compare);
			}
		} else {
			// set default comparator
			compare = arrSortComparator();
		}

		// if theres only one element
		if (len === 1) {
			if (compare(arr[0], element) === 0) {
				return [0]
			} else {
				return []
			}
		}

		// find index by binary search
		const i = arrSortedIndexOf(arr, element, compare);

		// if not found
		if (i === -1) {
			return []
		}

		let low = i;

		// find lowest match
		if (low > 0) {
			while (compare(arr[low - 1], element) === 0) {
				low--;
			}
		}

		let high = i;

		// find highest match
		if (high < len - 1) {
			while (compare(arr[high + 1], element) === 0) {
				high++;
			}
		}

		const indexes = [];

		// fill indexes array
		for (let j = low; j <= high; j++) {
			indexes.push(j);
		}

		// return
		return indexes
	}

	/**
	 * Comparator function callback definition.
	 * @callback comparator
	 * @param {*} a - The first value to compare
	 * @param {*} b - The second value to compare
	 * @returns {number} A negative number if a > b, a positive number if a < b, 0 otherwise.
	 */

	/**
	 * Value-getter function callback definition.
	 * @callback getter
	 * @param {*} a - The value
	 * @returns {*} The value to be compared
	 */

	return arrSortedIndexesOf;

})));
