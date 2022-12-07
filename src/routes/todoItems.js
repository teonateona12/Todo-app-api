import { Router } from "express";
import TodoModal from "../models/todo.js";

const router = Router();

router.post("/api/item", async (req, res) => {
  const newItems = new TodoModal({
    item: req.body.item,
    completed: false,
  });
  const saveItem = await newItems.save();
  res.status(200).json("Item added");
});

router.get("/api/items", async (req, res) => {
  const allTodos = await TodoModal.find();
  res.status(200).json(allTodos);
});

router.delete("/api/item/:id", async (req, res) => {
  const deleteItems = await TodoModal.findByIdAndDelete(req.params.id);
  res.status(200).json("Item deleted");
});

router.put("/api/item/:id", async (req, res) => {
  const updateItem = await TodoModal.findByIdAndUpdate(req.params.id, {
    $set: req.body,
  });

  res.status(200).json("Item updated");
});
export default router;
