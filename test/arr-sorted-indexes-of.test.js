import arrSortedIndexesOf from '../src/arr-sorted-indexes-of'

describe('arrSortedIndexesOf', () => {
	test('len = 0', () => {
		const arr = []
		expect(arrSortedIndexesOf(arr, 'b')).toStrictEqual([])
	})

	test('len = 1, exists', () => {
		const arr = ['b']
		expect(arrSortedIndexesOf(arr, 'b')).toStrictEqual([0])
	})

	test('len = 1, doesnt exist', () => {
		const arr = ['c']
		expect(arrSortedIndexesOf(arr, 'b')).toStrictEqual([])
	})

	test('alpha - middle', () => {
		const arr = ['a', 'b', 'c', 'd']
		expect(arrSortedIndexesOf(arr, 'b')).toStrictEqual([1])
	})

	test('alpha - first', () => {
		const arr = ['a', 'b', 'c', 'd']
		expect(arrSortedIndexesOf(arr, 'a')).toStrictEqual([0])
	})

	test('alpha - last', () => {
		const arr = ['a', 'b', 'c', 'd']
		expect(arrSortedIndexesOf(arr, 'd')).toStrictEqual([3])
	})

	test('alpha - doesnt exist', () => {
		const arr = ['a', 'b', 'c', 'd']
		expect(arrSortedIndexesOf(arr, 'bb')).toStrictEqual([])
	})

	test('numeric - middle', () => {
		const arr = [0, 1, 2, 3]
		expect(
			arrSortedIndexesOf(arr, 1, {
				numeric: true,
			}),
		).toStrictEqual([1])
	})

	test('numeric - first', () => {
		const arr = [0, 1, 2, 3]
		expect(
			arrSortedIndexesOf(arr, 0, {
				numeric: true,
			}),
		).toStrictEqual([0])
	})

	test('numeric - last', () => {
		const arr = [0, 1, 2, 3]
		expect(
			arrSortedIndexesOf(arr, 3, {
				numeric: true,
			}),
		).toStrictEqual([3])
	})

	test('numeric - doesnt exist', () => {
		const arr = [0, 1, 2, 3]
		expect(
			arrSortedIndexesOf(arr, 22, {
				numeric: true,
			}),
		).toStrictEqual([])
	})

	test('pass comparator function', () => {
		const arr = [0, 1, 2, 3]
		expect(
			arrSortedIndexesOf(arr, 22, (a, b) => {
				return a - b
			}),
		).toStrictEqual([])
	})

	test('multiple', () => {
		const arr = [0, 1, 2, 2, 2, 2, 3, 4, 5]
		expect(
			arrSortedIndexesOf(arr, 2, {
				numeric: true,
			}),
		).toStrictEqual([2, 3, 4, 5])
	})

	test('examples', () => {
		let res

		const alpha = ['a', 'b', 'c']

		res = arrSortedIndexesOf(alpha, 'b')

		expect(res).toStrictEqual([1])

		const numeric = [2, 13, 20]

		res = arrSortedIndexesOf(numeric, 20, {
			numeric: true,
		})

		expect(res).toStrictEqual([2])

		res = arrSortedIndexesOf(numeric, 20, (a, b) => {
			return a - b
		})

		expect(res).toStrictEqual([2])

		const arrays = [
			[192, 168, 0, 0],
			[192, 168, 0, 1],
			[192, 168, 1, 0],
		]

		res = arrSortedIndexesOf(arrays, [192, 168, 0, 1], {
			numeric: true,
			arrays: true,
		})

		expect(res).toStrictEqual([1])

		const objectsByName = [
			{ name: 'bonzo', age: 9 },
			{ name: 'john', age: 7 },
		]

		res = arrSortedIndexesOf(
			objectsByName,
			{ name: 'john', age: 7 },
			{
				by: 'name',
			},
		)

		expect(res).toStrictEqual([1])

		const objectsByAge = [
			{ name: 'john', age: 7 },
			{ name: 'bonzo', age: 9 },
		]

		res = arrSortedIndexesOf(
			objectsByAge,
			{ name: 'john', age: 7 },
			{
				by: 'age',
			},
		)

		expect(res).toStrictEqual([0])

		const valuesByAge = [
			['john', 7],
			['bonzo', 9],
		]

		res = arrSortedIndexesOf(valuesByAge, ['bonzo', 9], {
			by: 1,
		})

		expect(res).toStrictEqual([1])

		const valuesByFirstInt = [
			['john', 'johnson', 7],
			['tracy', 'chapman', 9],
		]

		const elem = ['tracy', 'chapman', 9]

		res = arrSortedIndexesOf(valuesByFirstInt, elem, {
			by: (arrElem) => {
				for (let val of arrElem) {
					if (Number.isInteger(val)) {
						return val
					}
				}
			},
		})

		expect(res).toStrictEqual([1])
	})
})
