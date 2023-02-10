const API = `http://localhost:5555`;

export const register = async ( userData ) => {
    return await fetch( `${ API }/api/auth/register`, { 
        headers: { 
            'Content-Type': 'application/json' 
        },
        method: 'POST', 
        body: JSON.stringify( userData ) ,
    });
}

export const loginUser = async ( userData ) => {
    return await fetch( `${ API }/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( userData ),
    });
}