const errorHandle = ( res, statusCode, error, messageError ) => {
    return res.status(statusCode).json({ statusCode: statusCode, data: { error: error, messageError: messageError } });
}

module.exports = {
    errorHandle,
}