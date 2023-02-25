const { response } = require("express");

const httpErrorHandle = ( res = response, statusCode, errorData, errorMessage ) => {
    return res.status( statusCode ).json({
        statusCode: statusCode,
        data: {
            error: errorData,
            errorMessage: errorMessage
        }
    });
}

module.exports = {
    httpErrorHandle,
}