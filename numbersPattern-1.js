function pattern(n) {
  let pattern = "";

  for (let i = 1; i <= n; i++) {
    for (let j = i; j >= 1; j--) {
      pattern += (j % 2) + "";
    }
    pattern += "\n";
  }

  return pattern;
}

console.log(pattern(5));
