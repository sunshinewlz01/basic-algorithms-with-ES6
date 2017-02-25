let logger = require('../utils/logger.js');

function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (;;) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

function getFibonacciNumbers(count) {
  let numbers = [];
  let numbersCount = 0;
  if (count < 1) {
    return null;
  } else {
    for (let number of fibonacci()) {
      numbersCount++;
      if (numbersCount > count) {
        break;
      } else {
        numbers.push(number);
      }
    };
  }

  return numbers;
}

const fibonacciNumbers = getFibonacciNumbers(10);
logger.info(fibonacciNumbers);
