const mongoose = require( 'mongoose' );

const workOutSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: [ true, 'The user of to do the workouts is required' ]
    },
    title: {
        type: String,
        required: [ true, 'Title is required' ]
    },
    reps: {
        type: Number,
        required: [ true, 'Reps of workout are required' ]
    },
    load: {
        type: Number,
        required: [ true, 'Loads of workout are required' ]
    },
    workoutStatus: {
        type: Boolean,
        default: true,
    }
},{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model( 'Workout', workOutSchema );