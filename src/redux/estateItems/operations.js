export const addItem = (items, newItem) => {
  return [...items, newItem];
};

export const deleteItem = (items, itemId) => {
  return items.filter((item) => item.id !== itemId);
};

export const toggleCategoryFilter = (currentFilter, category) => {
  return currentFilter === category ? null : category;
};

export const fetchSelectedItem = (items, category) => {
  return items.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );
};
