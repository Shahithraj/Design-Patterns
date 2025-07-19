const logger = require('./fancyLogger');

function implementFirstLog() {
  logger.printLogCount(); 
  logger.log("First Log");
  logger.log("First Log");
  logger.printLogCount(); 
}

module.exports = implementFirstLog;