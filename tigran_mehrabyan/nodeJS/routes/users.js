const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error.message, "000000");
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (error) {}
});

router.post("/", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.json("newTodo");
  }
});

router.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params; //WHERE
    const { description } = req.body; //SET
    const updateTodo = await pool.query(
      "UPDATE todo SET  description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("Todo was updated");
  } catch (error) {
    console.error(error.message);
  }
});

router.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json("Todo was successfully deleted");
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
