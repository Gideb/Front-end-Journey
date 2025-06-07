function mutation(arr) {
  const first = arr[0].toLowerCase();
  const second = arr[1].toLowerCase();

  for (let char of second) {
    if (!first.includes(char)) {
      return false;
    }
  }

  return true;
}
console.log(mutation(["hello", "Hello"]));

