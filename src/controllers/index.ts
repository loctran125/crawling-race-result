// controller.ts
import { Request, Response } from "express";
import Item from "../models";
import axios from "axios";
const url = "https://www.formula1.com/en/results.html"

export const getAllItems = async(req: Request, res: Response) => {
const response = await axios.get(url);
const htmlData = response.data;
res.send(htmlData);
//   // Retrieve all items from the database
//   const items = Item.findAll();

//   // Return the items as a response
//   res.json(items);
};

export const getItem = (req: Request, res: Response) => {
  const { id } = req.params;

  // Retrieve a specific item from the database based on the provided id
  const item = Item.findById(id);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: "Item not found" });
  }
};

export const createItem = (req: Request, res: Response) => {
  const { name } = req.body;

  // Create a new item in the database
  const item = Item.create(name);

  res.json(item);
};

export const updateItem = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  // Update the item in the database
  const item = Item.update(id, name);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: "Item not found" });
  }
};

export const deleteItem = (req: Request, res: Response) => {
  const { id } = req.params;

  // Delete the item from the database
  const deleted = Item.delete(id);

  if (deleted) {
    res.json({ message: "Item deleted successfully" });
  } else {
    res.status(404).json({ error: "Item not found" });
  }
};
