import express from 'express';
import { check, validationResult } from 'express-validator';
import Task from '../models/Task';

const router = express.Router();

// return tasks
router.get('/', (req, res) => {
    res.send("Return tasks for todo-list");
});

// add tasks
router.post(
    '/', 
    [
        check('title', 'Please enter a task title!').not().isEmpty()
    ],
    (req, res) => {
        // console.log(req.body);
        // res.send(req.body);
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({ errors : errors.array() })
        }else{
            // return res.send(req.body);
            //res.send(req.body.title);
            const task = new Task({
                title: req.body.title
            });

            // saving it to database
            task.save()
            .then( data => {
                res.json(data);
            })
            .catch(err => {
                res.json({ message: err });
            });
        }
    }
);


// module.exports = router;
export default router;