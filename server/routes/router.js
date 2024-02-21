const express = require("express");
const router = express.Router();

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

module.exports = router;
