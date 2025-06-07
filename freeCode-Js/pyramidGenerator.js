function pyramid(char, rows, upsideDown) {
  let result = '\n';

  for (let i = 0; i < rows; i++) {
    const level = upsideDown ? rows - 1 - i : i;
    const spaces = ' '.repeat(rows - 1 - level);
    const chars = char.repeat(1 + level * 2);
    result += spaces + chars + '\n';
  }

  return result;
}

console.log(pyramid("o", 4, false));