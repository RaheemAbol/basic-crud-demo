const express = require("express");
const Item = require("./models");

const router = express.Router();

// Create
router.post("/items", async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).send(item);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Read all
router.get("/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.send(items);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Read one
router.get("/items/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).send("Item not found");
    res.send(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update
router.put("/items/:id", async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) return res.status(404).send("Item not found");
    res.send(item);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete
router.delete("/items/:id", async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).send("Item not found");
    res.send(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
