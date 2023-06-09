"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes.ts
var express_1 = __importDefault(require("express"));
var controllers_1 = require("../controllers");
var router = express_1.default.Router();
router.get("/items", controllers_1.getAllItems);
router.get("/items/:id", controllers_1.getItem);
router.post("/items", controllers_1.createItem);
router.put("/items/:id", controllers_1.updateItem);
router.delete("/items/:id", controllers_1.deleteItem);
exports.default = router;
//# sourceMappingURL=index.js.map