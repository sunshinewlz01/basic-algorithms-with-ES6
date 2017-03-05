let logger = require('../utils/logger.js');
let numbers = [12,3,89,100,1,2,8,4,3,7,0,99,10];
logger.info('Unsorted numbser: '+numbers);
let ascendingSortedNums = insertionSort(numbers);
logger.info('Ascending order sorted numbers: '+ascendingSortedNums);
let descendingSortedNums = insertionSort(numbers,'desc');
logger.info('Descending order sorted numbers: '+descendingSortedNums);

/**
* Insertion sort.
* @param {number[]} nums
* @param {string} sortType
*                 'asc' represents ascending order;
*                 'desc' represents descending order;
* @return {number[]}
*/

function insertionSort(nums,sortType='asc') {
  let sortedNumbers = nums;
  let numsLength = sortedNumbers.length;
  let insertedNum = sortedNumbers[2];
  for (let j = 1; j < numsLength; j++) {
    insertedNum = sortedNumbers[j];
    let i = j-1;
    for (i = j-1; i >= 0; i--) {
      if ('asc' == sortType) {
        if (insertedNum < sortedNumbers[i]) {
          sortedNumbers[i+1] = sortedNumbers[i];
        } else {
          break;
        }
      } else {
        if (insertedNum > sortedNumbers[i]) {
          sortedNumbers[i+1] = sortedNumbers[i];
        } else {
          break;
        }
      }
    }
    sortedNumbers[i+1] = insertedNum;
  }

  return sortedNumbers;
}
