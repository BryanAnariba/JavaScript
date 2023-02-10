import { useEffect } from 'react';
import { createContext, useReducer } from 'react';
import { authReducer } from '../reducers/AuthReducer';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer( authReducer, {
        user: null
    });

    // ESTE PASO ES NECESARIO POR SI EL USUARIO ESTA LOGUEADO QUE SE CREE EL ESTADO
    useEffect(() => {
        const user = JSON.parse( localStorage.getItem( 'user' ) );
        if ( user ) {
            dispatch({ type: '@loginUser', payload: user });
        }
    }, []);
    
    console.log( `Auth Context State: `, state );

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {
                children
            }
        </AuthContext.Provider>
    );
}