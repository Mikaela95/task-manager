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
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newTodo);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
