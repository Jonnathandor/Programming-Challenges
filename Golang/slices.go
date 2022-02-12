// Slices are similar to arrays, they can hold a large number of elements
// Of a specific type or interface.

// Arrays have a fixed size in contrast with slices that are dynamically sized

var empty []int                     // an empty slice
withData := []int{0, 1, 2, 3, 4, 5} // a slice pre-filled with some data

withData[1] = 5
x := withData[1] // x is now 5

// You can create a new slice from an existing slice by getting a range of elements,
// once again using square-bracket notation, but specifying both a starting
// (inclusive) and ending (exclusive) index.
// If you don't specify a starting index, it defaults to 0. If you don't specify an ending index,
// it defaults to the length of the slice.

newSlice := withData[2:4] // newSlice == []int{2,3}
newSlice := withData[:2]  // newSlice == []int{0,1}
newSlice := withData[2:]  // newSlice == []int{2,3,4,5}
newSlice := withData[:]   // newSlice == []int{0,1,2,3,4,5}

