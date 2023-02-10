const { request, response } = require("express");
const { errorHandle } = require("../utils/error.handle");

const customHeader = ( req = request, res = response, next ) => {
    try {
        const apiKey = req.headers.api_key;
        //console.log( req.headers.api_key );
        if ( typeof apiKey === undefined || !apikey || apiKey === '' ) {
            throw new Error( `Invalid API_KEY` );
        } else {
            next();
        }
    } catch ( e ) {
        return errorHandle( res, 403, 'HTTP_CUSTOM_HEADER_ERROR', e.message );
    }
}

module.exports = customHeader;