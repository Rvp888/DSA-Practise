function pyramidOfChars(n) {
  let space = n - 1;
  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let pattern = "";

  for (let i = 0; i < n; i++) {
    let index = 0;
    for (let j = 0; j < space; j++) {
      pattern += " ";
    }
    for (let j = 0; j < i * 2 + 1; j++) {
      pattern += alphabets[index];
      if (j >= i) {
        index--;
      } else {
        index++;
      }
    }
    pattern += "\n";
    space -= 1;
  }

  return pattern;
}

console.log(pyramidOfChars(5));
