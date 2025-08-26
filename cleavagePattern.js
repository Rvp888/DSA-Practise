function cleavagePattern(n) {
  let space = n * 2 - 3;
  let pattern = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    for (let k = 1; k <= space; k++) {
      pattern += " ";
    }
    for (let l = 1; l <= i; l++) {
      if (l < n) {
        pattern += "*";
      }
    }
    pattern += "\n";
    space -= 2;
  }

  return pattern;
}

console.log(cleavagePattern(5));

function cleavagePatternOfNums(n) {
  let space = 2 * n - 3;
  let pattern = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += j;
    }
    for (let k = 1; k <= space; k++) {
      pattern += " ";
    }
    for (let j = i; j >= 1; j--) {
      if (j < n) pattern += j;
    }
    pattern += "\n";
    space -= 2;
  }

  return pattern;
}

console.log(cleavagePatternOfNums(5));
