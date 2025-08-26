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

// ---------------------------------------------------- //

function pyramidPattern2(n) {
  let space = n - 1;
  let nums = 1;
  let pattern = "";

  for (i = 1; i <= n; i++) {
    for (j = 1; j <= space; j++) {
      pattern += " ";
    }
    for (k = 1; k <= nums; k++) {
      if (k > i) {
        pattern += i - (k - i);
      } else {
        pattern += k;
      }
    }
    pattern += "\n";
    space -= 1;
    nums += 2;
  }

  return pattern;
}

console.log(pyramidPattern2(9));

// ---------------------------------------------------- //

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

console.log(binaryPyramidPattern(10));

// ---------------------------------------------------- //

function binaryPyramidPattern2(n) {
  let space = n - 1;
  let nums = 1;
  let pattern = "";

  for (i = 1; i <= n; i++) {
    for (j = 1; j <= space; j++) {
      pattern += " ";
    }
    for (k = 1; k <= nums; k++) {
      if (k === 1 || k === nums) pattern += 1;
      else pattern += 0;
    }
    pattern += "\n";
    space -= 1;
    nums += 2;
  }

  return pattern;
}

console.log(binaryPyramidPattern2(10));
