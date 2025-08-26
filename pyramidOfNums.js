function pyramidPattern(n) {
  let space = n - 1;
  let nums = 1;
  let pattern = "";

  for (i = 1; i <= n; i++) {
    for (j = 1; j <= space; j++) {
      pattern += " ";
    }
    for (k = 1; k <= nums; k++) {
      pattern += k;
    }
    pattern += "\n";
    space -= 1;
    nums += 2;
  }

  return pattern;
}

console.log(pyramidPattern(5));

function binaryPyramidPattern(n) {
  let space = n - 1;
  let nums = 1;
  let pattern = "";

  for (i = 1; i <= n; i++) {
    for (j = 1; j <= space; j++) {
      pattern += " ";
    }
    for (k = 1; k <= nums; k++) {
      pattern += k % 2;
    }
    pattern += "\n";
    space -= 1;
    nums += 2;
  }

  return pattern;
}

console.log(binaryPyramidPattern(5));
