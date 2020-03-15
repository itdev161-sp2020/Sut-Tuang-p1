import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    name: {
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