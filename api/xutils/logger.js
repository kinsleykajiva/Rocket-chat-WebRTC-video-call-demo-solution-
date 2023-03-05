const logger = require('signale');

logger.config({
    displayFilename: true,
    displayTimestamp: true,
    displayBadge: false,
    displayDate: true,
    underlineLabel: true,

})

module.exports = logger