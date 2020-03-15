import express from 'express';
import connectDatabase from './config/db';

// Initialize express
const app = express();

// Connect to database
connectDatabase();

// set up a static folder for front-end
app.use(express.static('public'));

// API endpoints
app.get('/', (req, res) => 
    res.send('http get request sent to root api end point.')
);

// Connection listener
app.listen(3000, () => console.log(`Express server running on port 3000`));