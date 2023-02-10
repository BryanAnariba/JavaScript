const { matchedData } = require('express-validator');
const { tracksModel } = require( '../models/index' );
const { errorHandle } = require('../utils/error.handle');

const getItems = async ( req, res ) => {
    try {
        const data = await tracksModel.find({});
        return res.status( 200 ).json({ statusCode: 200, data: { tracks: data, user: req.user } });
    } catch ( error ) {
        return errorHandle( res, 500, 'HTTP_GET_ITEMS_ERROR', error.message );
    }
    
}

const getItem = async ( req, res ) => {
    try {
        const { itemId } = req.params;
        const data = await tracksModel.find({ _id: itemId });
        return res.status( 200 ).json({ statusCode: 200, data:  { tracks: data[0], user: req.user } });
    } catch ( error ) {
        return errorHandle( res, 500, 'HTTP_GET_ITEMS_ERROR', error.message );
    }
}

const createItem = async ( req, res ) => {
    try {
        //const { body } = req;
        const body = matchedData( req  );
        const data = await tracksModel.create( body );
        return res.status( 201 ).json({ statusCode: 201, data:  { tracks: data, user: req.user } });
    } catch ( error ) {
        return errorHandle( res, 500, 'HTTP_CREATE_ITEM_ERROR', error.message );
    }
}

const editItem = async ( req, res ) => {
    try {
        // const { itemId } =  req.params;
        const { itemId, ...body } = matchedData( req  );
        //console.log({ itemId, body })
        const data = await tracksModel.findByIdAndUpdate( itemId, body, { new: true } );
        return res.status( 201 ).json({ statusCode: 201, data:  { tracks: data, user: req.user } });
    } catch ( error ) {
        return errorHandle( res, 500, 'HTTP_CREATE_ITEM_ERROR', error.message );
    }
}

const deleteItem = async ( req, res ) => {
    try {
        const { itemId } = matchedData( req );
        const track = await tracksModel.findOne({ _id: itemId });
        //console.log( { trackStatus: !track.trackStatus } );
        const data = await tracksModel.findByIdAndUpdate( itemId, { trackStatus: !track.trackStatus }, { new: true } );
        return res.status( 200 ).json({ statusCode: 200, data:  { tracks: data, user: req.user } }) ;
    } catch ( error ) {
        return errorHandle( res, 500, 'HTTP_DELETE_ITEM_ERROR', error.message );
    }
}


module.exports = {
    getItems,
    getItem,
    createItem,
    editItem,
    deleteItem,
}