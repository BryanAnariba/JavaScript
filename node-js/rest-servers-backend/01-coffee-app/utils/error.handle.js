const { response } = require("express");

const errorHandle = ( res = response, statusCode, errors, errorMessage ) => {
    return res.status( statusCode ).json({
        statusCode: statusCode,
        data: {
            errors: errors,
            errorMessage: errorMessage
        }
    });
};

module.exports = {
    errorHandle,
}