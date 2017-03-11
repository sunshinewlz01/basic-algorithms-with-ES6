let logger = require('../utils/logger.js');
let array1 = [1,0,1,0,1,1,1,1,1,1];
let array2 = [1,1,1,1,1,1,0,0,1,0];
let sumArray = binaryNumSum(array1,array2);
logger.info("array1: " + array1);
logger.info("array2: " + array2);
logger.info("sumArray: " + sumArray);

/**
* Sum of two binary number.
* @param {Boolean[]} array1
* @param {Boolean[]} array2
* @return {Boolean[]}
*/

function binaryNumSum(array1,array2) {
  let length1 = array1.length;
  let length2 = array2.length;
  let lengthNum = Math.min(length1,length2);
  let sumArray = new Array(lengthNum+1).fill(0);
  for (let i = lengthNum-1; i >= 0; i--) {
    let item1 = array1[i] > 1 ? 1 : array1[i];
    let item2 = array2[i] > 1 ? 1 : array2[i];
    let itemSum = item1 + item2;
    sumArray[i+1] = sumArray[i+1]+itemSum;
    if (sumArray[i+1] > 1) {
        sumArray[i+1] = sumArray[i+1]-2;
        sumArray[i] = sumArray[i]+1;
    }
  }
  return sumArray;

}
