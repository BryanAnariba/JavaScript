import { useAuthContext } from './useAuthContext';
export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const logout = () => {
        // QUITAMOS EL TOKEN DE LOCAL STORAGE
        localStorage.removeItem( 'user' );

        // DESPACHAMOS LA ACCION LOGOUT
        dispatch({ type: '@logoutUser' });
    }

    return {
        logout,
    }
}