import express from "express";
import { pool } from "./db/db.js";
const app = express();
app.use(express.json());
import db from './db/index.js';

app.get('/:id', async (req, res) => {
    try {
        res.send(await db.get(req.params.id));
    } catch (error) {
        console.log(error);
        res.send('error');
    }
})

app.post('/', async (req, res) => {
    try {
        res.json(await db.insert(req.body));
    } catch (error) {
        console.log(error);
        res.send('error');
    }
})

app.put('/:id', async (req, res) => {
    try {
        // const getToDO = await pool.query(`UPDATE usersdata SET name=$1, ege= $2 WHERE id=${req.params.id}`,[req.body.name, req.body.ege]);
        res.status(200).json(await db.put(req.body, req.params.id))
    } catch (error) {
        console.log(error);
        res.send('error');
    }
})

app.delete('/:id', async (req, res) => {
    try {
        res.status(200).json(await db.delate(req.params.id))
    } catch (error) {
        console.log(error);
        res.send('error');
    }
})

app.listen(9000)
