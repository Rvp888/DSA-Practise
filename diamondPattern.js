function diamondPattern(n) {
  let space = (n - 1) / 2;
  let nums = 1;
  let pattern = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
      pattern += " ";
    }
    for (let k = 1; k <= nums; k++) {
      pattern += "*";
    }
    pattern += "\n";

    if (i > n / 2) {
      space += 1;
      nums -= 2;
    } else {
      space -= 1;
      nums += 2;
    }
  }

  return pattern;
}

console.log(diamondPattern(7));
