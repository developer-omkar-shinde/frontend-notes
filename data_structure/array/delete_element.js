deleteElementOfArray = (array, position) => {
  for (let i = position; i < array.length - 1; i++) {
    const ele = array[i];
    array[i] = array[i + 1];
  }

  array.length = array.length - 1;

  return array;
};

const result = deleteElementOfArray([11, 23, 44, 25, 65], 2);

console.log("resule", result);
