const moment = require('moment');
/**
 * @desc    Send any success response
 *
 * @param   {string} message
 * @param data
 * @param   {number} statusCode
 * @returns {object} object
 */

const success = (message, data, statusCode) => {
    return {
        timestamp: moment().utc().format('YYYY-MM-DD HH:mm:ss'),
        success  : true,
        message,
        code     : statusCode,
        data     : JSON.parse( toJson(data) )
    }
}

/**
 * @desc    Send any error response
 *
 * @param   {string} message
 * @param   {number} statusCode
 * @returns {object} object
 */

const error = (message, statusCode) => {
    const codes = [200, 201, 400, 401, 404, 403, 422, 500]

    const codeFinder = codes.find(code => code === statusCode)

    if (!codeFinder) statusCode = 500
    else statusCode = codeFinder

    return {
        timestamp: moment().utc().format('YYYY-MM-DD HH:mm:ss'),
        message,
        code: statusCode,
        success: false,
    }
}

/**
 * @desc    Send any validation response
 *
 * @param   {array} errors
 * @returns {object} object
 */

const validation = errors => {
    errors = errors
        .filter(i => i !== undefined || true || i !== '')
        .filter(col => col !== "");
    return {
        message: 'Validation errors',
        error: true,
        success: false,
        code: 200,
        errors
    }
}

const authError = () => {
    return {
        message: 'Access denied',
        authReject: true,
        error: true,
        success: false,
        code: 200,

    }
}


function toJson(data) {
    if (data !== undefined) {
        let intCount = 0, repCount = 0;
        const json = JSON.stringify(data, (_, v) => {
            if (typeof v === 'bigint') {
                intCount++;
                return `${v}#bigint`;
            }
            return v;
        });
        const res = json.replace(/"(-?\d+)#bigint"/g, (_, a) => {
            repCount++;
            return a;
        });
        if (repCount > intCount) {
            // You have a string somewhere that looks like "123#bigint";
            throw new Error(`BigInt serialization conflict with a string value.`);
        }
        return res;
    }
}

module.exports = {
    success,
    error,
    validation ,authError,
    toJson
}