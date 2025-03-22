// without .splice()

const insertInArray = (array, position, newElement) => {
  if (position < 0 || position > array.length) {
    throw new Error("Invalid position");
  }

  const data = [...array];

  for (let i = data.length - 1; i >= 0; i--) {
    if (i >= position) {
      data[i + 1] = data[i];
      if (position === i) {
        data[i] = newElement;
      }
    }
  }

  return data;
};

const result = insertInArray([11, 23, 44, 25, 65], 2, 100);

console.warn("result", result);
