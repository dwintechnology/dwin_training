import { Update } from "@mui/icons-material";
import pool from "./db.js";
const db = {
  //post & insert ========================
  async insert(obj) {
    const { name, age } = obj;
    const postTodo = await pool.query(
      `INSERT INTO students (name,age) VALUES ($1, $2 ) RETURNING *`,
      [name, age]
    );
    return postTodo.rows[0];
  },

  //get & show ===========================
  async show(obj) {
    const getTodo = await pool.query(
      `SELECT * FROM students WHERE id=${obj.params.id}`
    );
    return getTodo.rows[0];
  },

  //upadate & put =======================
  async update(obj) {
    const { name, age } = obj.body;
    const updateTodo = await pool.query(
      ` UPDATE students SET
            name=$1,
            age= $2
            WHERE id=${obj.params.id}  RETURNING *`,
      [name, age]
    );
    return updateTodo.rows[0];
  },

  //delete==============================
  async delete(obj) {
    const deleteTodo = await pool.query(
      ` DELETE FROM students  WHERE id=${obj.params.id}  RETURNING *`
    );
    return deleteTodo.rows[0];
  },
};

export default db;
