import express from 'express';
import { initialState } from './initialState/InitialState.js'

const app = express();

app.get('/api/products', (req, res) => {
    res.send(initialState);
})

const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`serve at http://localhost:${port}`);
})
