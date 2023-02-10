const { response } = require("express");

const errorHandle = ( res = response, statusCode, error, errorMessage ) => {
    return res.status( statusCode ).json({
        statusCode: statusCode,
        data: {
            error: error,
            errorMessage: errorMessage
        }
    });
};

module.exports = {
    errorHandle,
}