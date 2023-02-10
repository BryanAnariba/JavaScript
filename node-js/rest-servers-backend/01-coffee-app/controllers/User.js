const { request, response } = require("express");
const { errorHandle } = require("../utils/error.handle");

const getItems = async ( req = request, res = response ) => {
    try {
        const { limit = 10, skip = 0 } = req.query;
        return res.status( 200 ).json({
            statusCode: 200,
            data: 'Get-Users Work'
        });
    } catch ( error ) {
        errorHandle( res, 400, 'HTTP_GET_ITEMS_ERROR', error.message );
    }
}

const createItem = async ( req = request, res = response ) => {
    try {
        return res.status( 201 ).json({
            statusCode: 201,
            data: 'Post-Users Work'
        });
    } catch ( error ) {
        errorHandle( res, 400, 'HTTP_CREATE_ITEM_ERROR', error.message );
    }
}

const getItem = async ( req = request, res = response ) => {
    const { itemId } = req.params;
    try {
        return res.status( 200 ).json({
            statusCode: 200,
            data: 'Get-User Work'
        });
    } catch ( error ) {
        errorHandle( res, 400, 'HTTP_GET_EITEM_ERROR', error.message );
    }
}

const editItem = async ( req = request, res = response ) => {
    try {
        const { itemId } = req.params;
        return res.status( 200 ).json({
            statusCode: 200,
            data: 'Edit-Users Work'
        });
    } catch ( error ) {
        errorHandle( res, 400, 'HTTP_EDIT_ITEM_ERROR', error.message );
    }
}

const deleteItem = async ( req = request, res = response ) => {
    try {
        const { itemId } = req.params;
        return res.status( 200 ).json({
            statusCode: 200,
            data: 'Delete-Users Work'
        });
    } catch ( error ) {
        errorHandle( res, 400, 'HTTP_DELETE_ITEM_ERROR', error.message );
    }
}

module.exports = {
    getItem,
    getItems,
    createItem,
    editItem,
    deleteItem,
};