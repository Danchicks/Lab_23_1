function binarySearch(arr, search) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
  
    while (startIndex <= endIndex) {
      const middleIndex = Math.floor((startIndex + endIndex) / 2);
  
      if (arr[middleIndex] === search) {
        return middleIndex;
      } else if (arr[middleIndex] < search) {
        startIndex = middleIndex + 1;
      } else {
        endIndex = middleIndex - 1;
      }
    }
  
    return -1;
  }
  

  const arr = [1, 3, 5, 7, 9, 11];
  const search = 7;
  const index = binarySearch(arr, search);
  console.log(index); // 3
  