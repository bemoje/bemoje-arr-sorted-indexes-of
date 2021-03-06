<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [arrSortedIndexesOf][1]
    -   [Parameters][2]
-   [comparator][3]
    -   [Parameters][4]
-   [getter][5]
    -   [Parameters][6]

## arrSortedIndexesOf

Find all indexes at which an array element exists, by binary search.

### Parameters

-   `arr`  
-   `element` **any** The element to find
-   `compare` **([comparator][7] \| [object][8])?** 
    -   `compare.numeric` **[boolean][9]** Sort numerically. Defaults to lexicographic/alphabetic sort. (optional, default `false`)
    -   `compare.descending` **[boolean][9]** Sort in descending order. Defaults to ascending order. (optional, default `false`)
    -   `compare.array` **[boolean][9]** Sort arrays. Nested arrays are also compared recursively. (optional, default `false`)
    -   `compare.by` **([number][10] \| [string][11] \| [getter][12])** Sort by either array index, a callback(element): any - or by object keys with dot-notation support. (optional, default `undefined`)

Returns **[Array][13]&lt;[number][10]>** Integer array of indexes

## comparator

Comparator function callback definition.

Type: [Function][14]

### Parameters

-   `a` **any** The first value to compare
-   `b` **any** The second value to compare

Returns **[number][10]** A negative number if a > b, a positive number if a &lt; b, 0 otherwise.

## getter

Value-getter function callback definition.

Type: [Function][14]

### Parameters

-   `a` **any** The value

Returns **any** The value to be compared

[1]: #arrsortedindexesof

[2]: #parameters

[3]: #comparator

[4]: #parameters-1

[5]: #getter

[6]: #parameters-2

[7]: #comparator

[8]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[9]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[10]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[11]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[12]: #getter

[13]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[14]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function
