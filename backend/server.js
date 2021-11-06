import express from 'express';
import { initialState } from './data/data.js'

const app = express();

app.get('/', (req, res) => {
    res.send('this is working as you expected!!!');
})

const port = process.env.port || 5000;

app.listen(5000, () => {
    console.log(`serve at http://localhost:${port}`);
})
