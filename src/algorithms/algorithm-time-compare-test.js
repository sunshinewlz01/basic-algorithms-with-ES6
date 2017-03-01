let logger = require('../utils/logger.js');
let minNumber = getMinNumber();
logger.info(minNumber);
/*
* Get min number.
*/
function getMinNumber() {
  let minNumber = 2;
  for (let n = 2; ; n++) {
    let time1 = 100*Math.pow(n,2);
    let time2 = Math.pow(2,n);
    logger.info("n:"+n);
    logger.info("time1:"+time1);
    logger.info("time2"+time2)
    if (time1 < time2) {
      minNumber = n;
      break;
    }
  }

  return minNumber;
}
