const logger = require('./fancyLogger');

function implementSecondLog() {
  logger.printLogCount(); 
  logger.log("Second Log");
  logger.printLogCount(); 
}

module.exports = implementSecondLog;