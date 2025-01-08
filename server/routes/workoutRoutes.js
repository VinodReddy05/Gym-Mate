const express = require("express");
const router = express.Router();

// Requires COntrollers
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  editWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

// Get entire records
router.get("/", getWorkouts);

// Get Single records
router.get("/:id", getWorkout);

// Create Record
router.post("/", createWorkout);

// Update Record
router.patch("/:id", editWorkout);

// Delete Record
router.delete("/:id", deleteWorkout);

module.exports = router; // Correct
