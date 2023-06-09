"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var items = [];
exports.default = {
    findAll: function () { return items; },
    findById: function (id) {
        return items.find(function (item) { return item.id === id; });
    },
    create: function (name) {
        var newItem = {
            id: Date.now().toString(),
            name: name,
        };
        items.push(newItem);
        return newItem;
    },
    update: function (id, name) {
        var item = items.find(function (item) { return item.id === id; });
        if (item) {
            item.name = name;
            return item;
        }
        return undefined;
    },
    delete: function (id) {
        var index = items.findIndex(function (item) { return item.id === id; });
        if (index !== -1) {
            items.splice(index, 1);
            return true;
        }
        return false;
    },
};
//# sourceMappingURL=index.js.map