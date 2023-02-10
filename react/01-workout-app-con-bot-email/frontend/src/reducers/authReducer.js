export const authReducer = ( state, action ) => {
    switch ( action.type ) {
        case '@loginUser':
            return { user: action.payload }; // { _id: user._id, email: email, role: user.role, token: token }
        case '@logoutUser':
            return { user: null };
        default:
            return state;
    }
}