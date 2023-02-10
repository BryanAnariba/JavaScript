import { useState } from 'react';
import { loginUser } from "../services/auth.service"
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
    const [ loading, setLoading ] = useState( false );
    const [ error, setError ] = useState( '' );
    const { dispatch } = useAuthContext();

    const login = async ( userData ) => {
        try {
            const response = await loginUser( userData );
            const jsonResponse = await response.json();
            console.log(jsonResponse.data);
            if ( !response.ok ) {
                setLoading( false );
                setError( JSON.stringify( jsonResponse.data.errorMessage ) );
                // ( typeof jsonResponse.data.errorMessage === 'string' ) ? jsonResponse.data.errorMessage : JSON.stringify( jsonResponse.data.errorMessage )
            }

            if ( response.ok ) {
                setLoading( false );
                // CREAMOS EN LOCAL STORAGE LOS DATOS DEL USUARIO
                localStorage.setItem( 'user', JSON.stringify( jsonResponse.data ) );
                // CREAMOS EL USUARIO EN EL CONTEXTO
                dispatch({
                    type: '@loginUser', payload: jsonResponse.data
                });

            }

        } catch ( err ) {
            setLoading( false );
            setLoading( false );
            setError( err.message );
        }
    }

    return {
        login,
        loading,
        error
    };
}