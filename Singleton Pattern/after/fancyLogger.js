class FancyLogger {
    constructor() {
        if(FancyLogger.instance) {
            return FancyLogger.instance;
        }
        this.logs = [];
        FancyLogger.instance = this;
    }

    log(message) {
        this.logs.push(message);
    }

    printLogCount() {
        console.log(`${this.logs.length} Logs`);
    }
}

const logger = new FancyLogger();
Object.freeze(logger);

module.exports = logger;

// When you call new FancyLogger(), it checks if one already exists.

// If yes, it returns the same one. So you can’t create another.