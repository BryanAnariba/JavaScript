const fs = require( 'fs' );
const { matchedData } = require('express-validator');
const { storagesModel } = require( '../models/index' );
const { errorHandle } = require('../utils/error.handle');

const MEDIA_PATH = `${ __dirname }/../storage`; // UBICACION DE LAS IMAGENES

const getItems = async ( req, res ) => {
    try {
        const data = await storagesModel.find({});
        return res.status( 200 ).json({ statusCode: 200, data: data });
    } catch ( error ) {
        return errorHandle( res, 500, 'HTTP_GET_FILES_ERROR', error.message );
    }
}

const getItem = async ( req, res ) => {
    try {
        const { itemId } = matchedData(req);
        const data =  await storagesModel.findOne({ _id: itemId });
        return res.status( 200 ).json({ statusCode: 200, data: data });
    } catch ( error ) {
        return errorHandle( req, 500, 'HTTP_GET_FILES_ERROR', error.message );
    }
}

const createItem = async ( req, res ) => {
    try {
        const { file } = req;
        const fileData = {
            fileName: file.filename,
            url: `${ process.env.STATIC_FILES }/${ file.filename }`
        }
        const data = await storagesModel.create(fileData);
        return res.status( 200 ).json({ statusCode: 200, data: data });
    } catch ( error ) {
        return errorHandle( res, 500, 'HTTP_UPLOAD_FILE_ERROR', error.message );
    }
}

const deleteItem = async ( req, res ) => {
    try {
        const { itemId } = matchedData( req );
        const storage = await storagesModel.findOne({ _id: itemId });
        const data = await storagesModel.findOneAndUpdate( itemId, { storageStatus: !storage.storageStatus }, { new: true } );
        return res.status( 200 ).json({ statusCode: 200, data: data });
    } catch ( error ) {
        return errorHandle( res, 500, 'HTTP_UPLOAD_DELETE_ERROR', error.message )
    }
}

const deleteItemPermanently = async ( req, res ) => {
    try {
        const { itemId } = matchedData( req );

        // TODO: BUSCAMOS ARCHIVO PARA OBTENER EL NOMBRE DEL ARCHIVO
        const file = await storagesModel.findOne({ _id: itemId });
        //console.log( file )

        // TODO: ELIMINAMOS, ESTE SI ES UN BORRADO PERMANENTE
        const data = await storagesModel.deleteOne({ _id: itemId });
        let filePath = `${ MEDIA_PATH }/${ file.fileName }`;
        
        // TODO: ELIMINAMOS ARCHIVO DEL STORAGE
        fs.unlinkSync( filePath );
        return res.status( 200 ).json({ statusCode: 200, data: data });
    } catch ( error ) {
        return errorHandle( res, 500, 'HTTP_UPLOAD_DELETE_ERROR', error.message )
    }
}

module.exports = {
    getItems,
    getItem,
    createItem,
    deleteItem,
    deleteItemPermanently,
}