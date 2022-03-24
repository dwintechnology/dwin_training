import express from "express";
import pool from "../db.js"
const router = express.Router()

router.get('/', async(req,res)=>{
    try{
        const users = await pool.query("SELECT * FROM mytable")
        res.json(users.rows)
    }catch(err){
        console.error(err.message)
    }
})
router.get('/:id', async(req,res)=>{
    const {id} = req.params
    try{
        const user = await pool.query("SELECT * FROM mytable WHERE id = $1", [id])
        res.json(user.rows[0])
    }catch(err){
        console.error(err.message)
    }
})
router.post('/', async(req, res)=>{
    
    try{
        const {name, age} = req.body;
        const es = await pool.query(`INSERT INTO  mytable (name, age) VALUES ($1, $2) `, [name, age]);
        res.json(es.rows[0])
    }catch(err){
        console.log(err)
        res.send("errror")
    }
})
router.put('/:id', async(req, res)=>{
   
    
    try{
        const {id} = req.params;
        const {name, age} = req.body;
        const update = await pool.query("UPDATE mytable SET name = $1 age = $2 WHERE id = $3", [name, age, id]);
        res.json("UPDATING")
    }catch(err){
        console.log(err)
        res.send("errror")
    }
})
router.delete('/:id', async(req, res)=>{  
    try{
        const {id} = req.params;
        const deleteUSER = await pool.query("DELETE FROM mytable WHERE id = $1", [id]);
        res.json("DELETED")
    }catch(err){
        console.log(err)
        res.send("errror")
    }
})

export default router