import express from "express";

const router = express.Router();

// Create a book
router.post("/books", async (req, res) => {
  try {
    res.status(200).send("working");
  } catch (error) {
    console.error(error);
  }
});
// Read/get books
// read/get a book
// Update a book
// Delete a book

export default router;
