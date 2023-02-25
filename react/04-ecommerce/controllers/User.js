const { request, response } = require('express');

const signUp = async ( req = request, res = response ) => {
    return res.status( 200 ).json({ statusCode: 200, data: 'REGISTER-USERS WORKS' });
}

const signIn = async ( req = request, res = response ) => {
    return res.status( 200 ).json({ statusCode: 200, data: 'REGISTER-USERS WORKS' });
}

module.exports = { 
    signIn,
    signUp
}