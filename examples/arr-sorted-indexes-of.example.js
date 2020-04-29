import arrSortedIndexesOf from '../src/arr-sorted-indexes-of'

const alpha = ['a', 'b', 'b', 'c']

arrSortedIndexesOf(alpha, 'b')
//=> [1, 2]

const numeric = [0, 1, 1, 2]

arrSortedIndexesOf(alpha, 1, {
	numeric: true,
})
//=> [1, 2]
