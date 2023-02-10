const { getRoles, createRole } = require("../services/roles.service");

const createItem = async ( req = request, res = response ) => {
    try {
        const { roleName } = req.body;
        const response = await createRole( roleName );
        return res.status( 201 ).json({ statusCode: 201, data: response });

    } catch ( error ) {
        errorHandle( res, 400, 'HTTP_CREATE_ITEM_ERROR', error.message );
    }
}

const getItems = async ( req = request, res = response ) => {
    try {
        const response = await getRoles();
        return res.status( 200 ).json({ statusCode: 200, data: response });
    } catch ( error ) {
        errorHandle( res, 400, 'HTTP_GET_ITEMS_ERROR', error.message );
    }
}

module.exports = {
    createItem,
    getItems,
}