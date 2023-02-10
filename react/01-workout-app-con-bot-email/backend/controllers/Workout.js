const { request, response } = require("express");
const { errorHandle } = require("../utils/error.handle");
const { getWorkouts, getWorkouById, createNewWorkOut, deleteWorkOut, editWorkOut } = require("../services/workout.service");

const getAllItems = async ( req = request, res = response ) => {
    try {
        //const { userId } = req.params;
        const { uid } = req;
        //console.log({ uid })
        const { limit = 10, skip= 0 } = req.query;
        const response = await getWorkouts( limit, skip, uid );
        return res.status( 200 ).json({ statusCode: 200, data: response });
    } catch ( ex ) {
        errorHandle( res, 500, 'HTTP_WORKOUT_ERROR_GET_ITEMS', ex.message );
    }
}

const getOneItem = async ( req = request, res = response ) => {
    try {
        const { workOutId } = req.params;
        const { uid } = req;
        const response = await getWorkouById( uid, workOutId );
        return res.status( 200 ).json({ statusCode: 200, data: response });
    } catch ( ex ) {
        errorHandle( res, 500, 'HTTP_WORKOUT_ERROR_GET_ITEM', ex.message );
    }
}

const createOneItem = async ( req = request, res = response ) => {
    try {
        const { body } = req;
        const { uid } = req;
        const workout = body;
        const newWorkOut = { ...workout, userId: uid };
        const response = await createNewWorkOut( newWorkOut );
        return res.status( 201 ).json({ statusCode: 201, data: response });
    } catch ( ex ) {
        errorHandle( res, 500, 'HTTP_WORKOUT_ERROR_CREATE_ITEM', ex.message );
    }
}

const editOneItem = async ( req = request, res = response ) => {
    try {
        const { workOutId } = req.params;
        const { body } = req;
        const { uid } = req;
        const workout = body;
        //const newWorkOut = { ...workout, userId: uid };
        const response = await editWorkOut( workout, uid, workOutId );
        return res.status( 200 ).json({ statusCode: 200, data: response });
    } catch ( ex ) {
        errorHandle( res, 500, 'HTTP_WORKOUT_ERROR_EDIT_ITEM', ex.message );
    }
}

const deleteOneItem = async ( req = request, res = response ) => {
    try {
        const { workOutId } = req.params;
        const { uid } = req;
        const response = await deleteWorkOut( workOutId, uid  );
        return res.status( 200 ).json({ statusCode: 200, data: response });
    } catch ( ex ) {
        errorHandle( res, 500, 'HTTP_WORKOUT_ERROR_DELETE_ITEM', ex.message );
    }
}

module.exports = {
    getAllItems,
    getOneItem,
    createOneItem,
    editOneItem,
    deleteOneItem
}