

function chunkArrayInGroups(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    // Use slice to grab a portion of the array from i to i + size
    result.push(arr.slice(i, i + size));
  }

  return result;
}



