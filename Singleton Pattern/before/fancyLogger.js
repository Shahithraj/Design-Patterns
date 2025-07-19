class FancyLogger {
    constructor() {
        this.logs = [];
    }

    log(message) {
        this.logs.push(message);
    }

    printLogCount() {
        console.log(`${this.logs.length} Logs`);
    }
}
module.exports = FancyLogger;