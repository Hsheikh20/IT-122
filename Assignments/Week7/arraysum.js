function sumArray(array) {
    for (
      var
        index = 0,              // The iterator
        length = array.length,  // Cache the array length
        sum = 0;                // The total amount
        index < length;         // The "for"-loop condition
        sum += array[index++]   // Add number on each iteration
    );
    return sum;
  }