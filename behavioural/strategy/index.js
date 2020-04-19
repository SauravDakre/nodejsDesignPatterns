const logger = require('./logger')

logger.log('hello world')
logger.changeStrategy('toFile')
logger.log('hello world')