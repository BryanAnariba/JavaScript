const { request, response } = require("express");
const { findUserByEmail, createUser, findUsers, findUser, editUserStatus, editUser, refreshUserToken } = require("../services/user.service");
const { encryptPassword, verifyPassword } = require("../utils/bcryptHandle");
const { errorHandle } = require("../utils/errorHandle");
const { createToken } = require("../utils/jwtHandle");
const { generateRefreshToken } = require("../middlewares/refreshToken");

const signUp = async ( req = request, res = response ) => {
    try {
        const { firstName, lastName, email, password, mobile } = req.body;

        // Check email
        const existEmail = await findUserByEmail( email );
        if ( existEmail ) {
            throw new Error( `The email ${ email } already exists.` );
        }

        // Encrypt password
        const hashedPassword = await encryptPassword( password );

        // Create user
        const userResponse = await createUser({
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobile: mobile,
            password: hashedPassword
        });

        userResponse.set( 'password', undefined, { strict: false } );
        return res.status( 201 ).json({
            statusCode: 201,
            data: {
                user: userResponse,
                token: createToken( userResponse ),
            }
        })
        

    } catch ( error ) {
        return errorHandle( res, 500, 'HTTP_REGISTER_USER_ERROR', error.message );
    }
}

const signIn = async ( req = request, res = response ) => {
    try {
        const { email, password } = req.body;

        // Check email
        const existEmail = await findUserByEmail( email );
        if ( !existEmail ) {
            throw new Error( `Email does not exist` );
        }

        // Comprare passwords
        const isMatched = await verifyPassword( password, existEmail.password );

        if ( !isMatched ) {
            throw new Error( `Incorrect password` );
        }

        if ( !existEmail.userStatus ) {
            throw new Error( `The user ${ existEmail.email } is not active, please contact the systems administrator` );
        }

        // TODO: supongo que esto actuara cuando el token expire, tomando en cuenta el token almacenado en la base de datos este token tiene 4 horas de duracion a diferencia del primero que solo tiene 1 Hora
        const refreshToken = await  generateRefreshToken( existEmail );
        const refreshedToken = await refreshUserToken( existEmail, refreshToken );
        res.cookie( 'refreshToken', refreshToken, { httpOnly: true, maxAge: 72 * 60 * 60 * 1000 } );

        existEmail.set( 'password', undefined, { strict: false } );
        return res.status( 200 ).json({
            statusCode: 200,
            data: {
                user: existEmail,
                token: createToken( existEmail ),
            }
        })
    } catch ( error ) {
        return errorHandle( res, 500, 'HTTP_LOGIN_USER_ERROR', error.message );
    }
}

const getData = async ( req = request, res = response ) => {
    try {   
        const userResponse = await findUsers();
        return res.status( 200 ).json({
            statusCode: 200,
            data: userResponse
        })
    } catch ( error ) {
        return errorHandle( res, 500, 'HTTP_GET_USERS_ERROR', error.message );
    }
}

const getUser = async ( req = request, res = response ) => {
    try {
        const { userId } = req.params;
        const userResponse = await findUser( userId );
        return res.status( 200 ).json({
            statusCode: 200,
            data: userResponse
        });
    } catch ( error ) {
        return errorHandle( res, 500, 'HTTP_GET_USER_ERROR', error.message );
    }
}

const deleteUser = async ( req = request, res = response ) => {
    try {
        const { userId } = req.params;
        const { userStatus } = req.body;
        const userResponse = await editUserStatus( userId, userStatus );
        return res.status( 200 ).json({
            statusCode: 200,
            data: userResponse
        });
    } catch ( error ) {
        return errorHandle( res, 500, 'HTTP_DELETE_USER_ERROR', error.message );
    }
}

const updateUser = async ( req = request, res = response ) => {
    try {
        const { uid } = req.loggedUser;
        const { firstName, lastName, mobile } = req.body;
        const userResponse = await editUser( uid, firstName, lastName, mobile );
        return res.status( 200 ).json({
            statusCode: 200,
            data: userResponse
        });
    } catch ( error ) {
        return errorHandle( res, 500, 'HTTP_EDIT_USER_ERROR', error.message );
    }
}

module.exports = {
    signUp,
    signIn,
    getData,
    getUser,
    deleteUser,
    updateUser,
}