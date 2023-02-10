import { useState } from "react";
import { register } from "../services/auth.service";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [ error, setError ] = useState( '' );
    const [ loading, setLoading ] = useState( false );
    const { dispatch } = useAuthContext();

    const signup = async ( userData ) => {
        setLoading( true );
        setError( '' );

        try {
            const response = await register( userData );
            const jsonResponse = await response.json();
            //console.log( response )
            console.log( jsonResponse )
            if ( !response.ok ) {
                setLoading( false );
                setError( jsonResponse.data.errorMessage );
            }

            if ( response.ok ) {
                // GUARDAMOS LA DATA DEL BACKEN EN LOCALSTORAGE
                localStorage.setItem( 'user', JSON.stringify( jsonResponse.data ) );
                // ACTUALIZAMOS EL CONTEXT DE AUTHTENTICACION
                dispatch({ type: '@loginUser', payload: jsonResponse.data });
                // LIMPIAMOS EL ESTADO
                setLoading( false );
                setError( '' );
            }
        } catch ( err ) {
            console.error( err.message );
            setLoading( false );
            setError(  err.message  );
        }
    }

    return {
        error,
        loading,
        signup
    };
}