// model.ts
interface Item {
  id: string;
  name: string;
}

const items: Item[] = [];

export default {
  findAll: (): Item[] => items,
  findById: (id: string): Item | undefined =>
    items.find((item) => item.id === id),
  create: (name: string): Item => {
    const newItem: Item = {
      id: Date.now().toString(),
      name,
    };
    items.push(newItem);
    return newItem;
  },
  update: (id: string, name: string): Item | undefined => {
    const item = items.find((item) => item.id === id);
    if (item) {
      item.name = name;
      return item;
    }
    return undefined;
  },
  delete: (id: string): boolean => {
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      items.splice(index, 1);
      return true;
    }
    return false;
  },
};
