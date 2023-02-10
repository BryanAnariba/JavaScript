const { response } = require("express")

const errorHandle = ( res = response, statusCode, error, message ) => {
    return res.status( statusCode ).json({
        statusCode: statusCode,
        data: {
            error: error,
            errorMessage: message
        }
    });
}

module.exports = {
    errorHandle,
}