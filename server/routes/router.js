const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/test", (req, res) => {
  const testData = [
    {
      id: 1,
      name: "Wash dishes",
    },
    {
      id: 2,
      name: "Put away clothes",
    },
  ];

  res.send(testData);
});

// Create a todo
router.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const { favourite } = false;
    const newTodo = await pool.query(
      "INSERT INTO todo (description, favourite) VALUES($1, $2) RETURNING *",
      [description, favourite]
    );
    res.json(newTodo);
  } catch (error) {
    console.error(error.message);
  }
});

// Get all todos
router.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * from todo");
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Get all favourite todos
router.get("/todos/favourite", async (req, res) => {
  try {
    const favTodos = await pool.query(
      "SELECT * FROM todo WHERE favourite = true"
    );
    res.json(favTodos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Get a todo
router.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Update todo
router.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const { favourite } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1, favourite =$3 WHERE todo_id = $2",
      [description, id, favourite]
    );
    res.json("Todo was updated");
  } catch (error) {
    console.error(error.message);
  }
});

// Delete todo
router.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json("Todo was deleted");
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
