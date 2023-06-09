"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const items = [];
exports.default = {
    findAll: () => items,
    findById: (id) => items.find((item) => item.id === id),
    create: (name) => {
        const newItem = {
            id: Date.now().toString(),
            name,
        };
        items.push(newItem);
        return newItem;
    },
    update: (id, name) => {
        const item = items.find((item) => item.id === id);
        if (item) {
            item.name = name;
            return item;
        }
        return undefined;
    },
    delete: (id) => {
        const index = items.findIndex((item) => item.id === id);
        if (index !== -1) {
            items.splice(index, 1);
            return true;
        }
        return false;
    },
};
