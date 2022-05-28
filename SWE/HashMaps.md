## Hashmaps

- Hashmaps or hash tables or dictionaries in python ... are key-value data structures
- The time complexity to lookup or insert a key value pair is on average O(1) time complexity
- On arrays we can guarantee a lookup of O(1) if we now the index value

- We can use strings or integers as keys
- In order to save data in a hashmap we need a hash function
  - A hash functions takes an argument (string or interger) and then returns and integer which is call a hash code
  - The hash code returned is mapped to the underlying array index by mod the hash code with the length of the array (hascode % array.length)
  - hash functions are guarantee to return the same hashcode for the same input
  - Good hash functions will give a uniform distribution of hash codes to prevent collitions as much as possible
- At some point the underlying array will get full so we will need to resize...

  - Double array in size
  - Rehash all existing keys
  - Mod it by new size of array
  - Copy over all elements
  - you usually resize when the array is at 75% capacity (numberOfEntries / TotalCapacityOfArray) -> Load factor

- Hashmaps are stored in heap memory
