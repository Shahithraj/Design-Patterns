const FancyLogger = require('./fancyLogger');

const logger = new FancyLogger();  // new instance will be created 

function implementSecondLog() {
  logger.printLogCount(); // always print 0
  logger.log("Second Log");
  logger.printLogCount(); // always print 1
}

module.exports = implementSecondLog;