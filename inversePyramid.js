function inversePyramid(n) {
  let space = 0;
  let nums = n * 2 - 1;
  let pattern = "";

  for (i = 1; i <= n; i++) {
    for (j = 1; j <= space; j++) {
      pattern += " ";
    }
    for (k = 1; k <= nums; k++) {
      pattern += "*";
    }
    pattern += "\n";
    space += 1;
    nums -= 2;
  }

  return pattern;
}

console.log(inversePyramid(7));

// --------------------------------------- //

function inversePyramidBinary(n) {
  let space = 0;
  let nums = n * 2 - 1;
  let pattern = "";

  for (i = 1; i <= n; i++) {
    for (j = 1; j <= space; j++) {
      pattern += " ";
    }
    for (k = 1; k <= nums; k++) {
      pattern += k % 2;
    }
    pattern += "\n";
    space += 1;
    nums -= 2;
  }

  return pattern;
}

console.log(inversePyramidBinary(7));
