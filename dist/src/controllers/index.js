"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.createItem = exports.getItem = exports.getAllItems = void 0;
const models_1 = __importDefault(require("../models"));
const axios_1 = __importDefault(require("axios"));
const url = "https://www.formula1.com/en/results.html";
const getAllItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(url);
    const htmlData = response.data;
    res.send(htmlData);
    //   // Retrieve all items from the database
    //   const items = Item.findAll();
    //   // Return the items as a response
    //   res.json(items);
});
exports.getAllItems = getAllItems;
const getItem = (req, res) => {
    const { id } = req.params;
    // Retrieve a specific item from the database based on the provided id
    const item = models_1.default.findById(id);
    if (item) {
        res.json(item);
    }
    else {
        res.status(404).json({ error: "Item not found" });
    }
};
exports.getItem = getItem;
const createItem = (req, res) => {
    const { name } = req.body;
    // Create a new item in the database
    const item = models_1.default.create(name);
    res.json(item);
};
exports.createItem = createItem;
const updateItem = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    // Update the item in the database
    const item = models_1.default.update(id, name);
    if (item) {
        res.json(item);
    }
    else {
        res.status(404).json({ error: "Item not found" });
    }
};
exports.updateItem = updateItem;
const deleteItem = (req, res) => {
    const { id } = req.params;
    // Delete the item from the database
    const deleted = models_1.default.delete(id);
    if (deleted) {
        res.json({ message: "Item deleted successfully" });
    }
    else {
        res.status(404).json({ error: "Item not found" });
    }
};
exports.deleteItem = deleteItem;
