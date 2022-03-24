import {
    pool
} from "./db.js";

const db = {
    async get(obj) {
        const newDB =await pool.query(`SELECT * FROM usersdata WHERE id=${obj}`);
        return newDB.rows;
    },  
    async insert(obj) {
        const {
            name,
            ege
        } = obj;
        const newDB = await pool.query(`INSERT INTO usersdata (name , ege) VALUES ($1, $2) RETURNING *`, [name, ege]);
        return newDB.rows;
    },  
    async put(obj,id) {
        const newDB = await pool.query(`UPDATE usersdata SET name=$1, ege= $2 WHERE id=${id}`,[obj.name, obj.ege]);
        return "updated";
    }, 
    async delate(obj) {
        const newDB = await pool.query(`DELETE FROM usersdata WHERE id = ${obj}`)
        return 'ok';
    }, 
    
}

export default db;