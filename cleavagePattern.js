function cleavagePattern(n) {
  let space = n * 2 - 3;
  let stars = 1;
  let pattern = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= stars; j++) {
      pattern += "*";
    }
    for (let k = 1; k <= space; k++) {
      pattern += " ";
    }
    for (let l = 1; l <= stars; l++) {
      if (l < n) {
        pattern += "*";
      }
    }
    pattern += "\n";
    space -= 2;
    stars += 1;
  }

  return pattern;
}

console.log(cleavagePattern(12));
