// Print the series of first n fibonacci numbers.

function fibonacciSeries(n) {
  let fibSeries = [];

  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      fibSeries.push(i);
    } else {
      fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
  }

  return fibSeries.join(",");
}

console.log(fibonacciSeries(10));
