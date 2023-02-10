export const workoutReducer = ( state, action ) => {
    switch ( action.type ) {
        case '@add':
            return  {
                workouts: [ action.payload, ...state.workouts ]
            }
        case '@get':
            return {
                workouts: action.payload
            }
        case '@delete':
            return {
                workouts: state.workouts.filter( workout => workout._id !== action.payload )
            }
        default:
            return state;
    }
}