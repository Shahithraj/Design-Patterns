const FancyLogger = require('./fancyLogger');

const logger = new FancyLogger(); // new instance will be created 

function implementFirstLog() {
  logger.printLogCount(); // always print 0
  logger.log("First Log");
  logger.printLogCount(); // always print 1
}

module.exports = implementFirstLog;