const logger = require('./logger')
const car = require('./car')
const bike = require('./bike')

logger.log("Singleton pattern");
car.drive()
bike.drive()
logger.log("driven car and bike")

console.log(logger.logs)