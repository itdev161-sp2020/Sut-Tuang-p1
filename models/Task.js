import mongoose from 'mongoose';


const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    Completed: {
        type: Boolean,
        required: true,
        default: false
    }
});

const Task = mongoose.model('task', TaskSchema);

export default Task;