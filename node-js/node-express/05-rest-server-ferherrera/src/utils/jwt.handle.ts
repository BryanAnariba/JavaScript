import { sign, verify } from 'jsonwebtoken';
/*
    OBTENER EL PAYLOAD DE UN TOKEN
        function parseJwt (token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse(window.atob(base64));
        };
*/

const generateJWT = ( uid: string = '' ) => { 
    return new Promise(( resolve, reject ) => {
        const payload = { uid };
        sign( 
            payload, 
            `${ process.env.SECRET_KEY }`, 
            { expiresIn: '1h' },
            ( err, token ) => {
                if ( err ) {
                    reject( 'The token cant not generate' );
                } else {
                    resolve( token );
                }
            }
        );
    });
}

const verifyToken = ( token: string ) => {
    return verify( token, `${ process.env.SECRET_KEY }` );
}

export {
    generateJWT,
    verifyToken
}