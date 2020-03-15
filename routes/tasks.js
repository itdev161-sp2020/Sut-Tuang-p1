import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Return tasks for todo-list');
});

router.post('/', (req, res) => {
    console.log(req.body);

    const title = req.body.title;
    const status = req.body.completed;

    res.send(`Task title: ${title} \n Task status: ${status}`);
});


// module.exports = router;
export default router;