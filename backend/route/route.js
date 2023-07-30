const express = require("express");
const router = express.Router();
const {
  getstudents, singlesms
} = require("../controller/control");

//GET ALL STUDENTS
router.get("/students", getstudents);

//SEND SMS TO SINGLE PERSONS
router.post("/singlesms", singlesms);

//POST A NEW WORKOUT
// router.post("/", createworkout);

//DELETE A WORKOUT
// router.delete("/:id", (req, res) => {
//   res.json({ mssg: "DELETE A WORKOUT" });
// });

//UPDATE A WORKOUT
// router.patch("/:id", (req, res) => {
//   res.json({ mssg: "UPDATE A SINGLE WORKOUT" });
// });

module.exports = router;
