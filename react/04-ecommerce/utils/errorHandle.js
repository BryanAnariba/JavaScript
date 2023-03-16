const { response } = require("express");

const errorHandle = ( res = response, statusCode, errorMessage, errorData ) => {
    res.status( statusCode ).json({
        statusCode: statusCode,
        data: {
            errorMessage: errorMessage,
            errorData: errorData
        }
    });
}

module.exports = {
    errorHandle,
}