let logger = require('../utils/logger.js');
let maxNumber = getInsertSortBetterThanCombinedMaxN();
logger.info(maxNumber);
/*
* Get max number for insert sort better than combined sort.
*/
function getInsertSortBetterThanCombinedMaxN() {
  let maxNumber = 2;
  for (let n = 2; ; n++) {
    let insertSortTime = 8*Math.pow(n,2);
    let combinedSortTime = 64*n*Math.log2(n);
    logger.info("n:"+n);
    logger.info("insertSortTime:"+insertSortTime);
    logger.info("combinedSortTime"+combinedSortTime)
    if (insertSortTime > combinedSortTime) {
      maxNumber = n;
      break;
    }
  }

  return maxNumber;
}
