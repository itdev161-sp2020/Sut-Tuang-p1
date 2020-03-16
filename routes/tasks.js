import express from 'express';
import { check, validationResult } from 'express-validator';
import Task from '../models/Task';

const router = express.Router();

// return tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    }catch(err) {
        res.json({ message: err });
    }
});

// add a task
router.post(
    '/', 
    [
        check('title', 'Please enter a task title!').not().isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({ errors : errors.array() })
        }else{
            const task = new Task({
                title: req.body.title
            });

            try {
                const savedTask = await task.save();
                res.json(savedTask);
                console.log('Added a new record to the database!')
            }catch(err) {
                res.json({ message: err });
            }
        }
    }
);


// module.exports = router;
export default router;