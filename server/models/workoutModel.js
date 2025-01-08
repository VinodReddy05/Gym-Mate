const mongoose = require ("mongoose")

const workoutSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true, // Removes leading and trailing spaces
    },
    reps: {
        type: Number,
        required: true,
    },
    load: {
        type: Number,
        required: true,
    },
}, {timestamps:true})
const Workout = new mongoose.model("Workout", workoutSchema)

module.exports = Workout;