import express from 'express';

// Initialize express
const app = express();


// API endpoints
app.get('/', (req, res) => 
    res.send('http get request sent to root api end point.')
);


// Connection listener
app.listen(3000, () => console.log(`Express server running on port 3000`));