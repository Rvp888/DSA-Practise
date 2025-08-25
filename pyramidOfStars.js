function pyramid(n) {
  let space = n - 1;
  let stars = 1;
  let pattern = "";

  for (i = 1; i <= n; i++) {
    for (j = 1; j <= space; j++) {
      pattern += " ";
    }

    for (k = 1; k <= stars; k++) {
      pattern += "*";
    }
    pattern += "\n";
    space -= 1;
    stars += 2;
  }

  return pattern;
}

console.log(pyramid(5));
