// Ось кілька задач для практики роботи з оператором розпилення (...spread) для створення масивів та об’єктів для початківців:

// Задача 1 (легка, масив)

// Напишіть функцію combineArrays, яка приймає два масиви, arr1 і arr2, і повертає новий масив, який містить всі елементи з обох масивів, використовуючи оператор розпилення.

function combineArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(combineArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(combineArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]

console.log("\n");

// Задача 2 (легка, об’єкт)

// Створіть функцію mergeObjects, яка приймає два об’єкти, obj1 і obj2, і повертає новий об’єкт, який містить усі властивості обох об’єктів. Якщо обидва об’єкти мають однакові ключі, використайте значення з obj2.

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 })); // { a: 1, b: 3, c: 4 }
console.log(mergeObjects({ name: "Alice" }, { age: 25 })); // { name: "Alice", age: 25 }

console.log("\n");

// Задача 3 (середня, масив)

// Напишіть функцію addToBeginning, яка приймає масив arr і елемент element. Функція повинна повернути новий масив, де element додано на початок масиву, використовуючи оператор розпилення.

function addToBeginning(arr, element) {
  return [element, ...arr];
}

console.log(addToBeginning([2, 3, 4], 1)); // [1, 2, 3, 4]
console.log(addToBeginning(["b", "c"], "a")); // ["a", "b", "c"]

console.log("\n");

// Задача 4 (середня, об’єкт)

// Створіть функцію updateUser, яка приймає об’єкт user та об’єкт updates, і повертає новий об’єкт користувача, де властивості з updates замінюють відповідні властивості в user, використовуючи оператор розпилення.

function updateUser(user, updates) {
  return { ...user, ...updates };
}

const user = { name: "Alice", age: 25, city: "Kyiv" };
const updates = { age: 26, city: "Lviv" };
console.log(updateUser(user, updates)); // { name: "Alice", age: 26, city: "Lviv" }

console.log("\n");

// Задача 5 (складна, масив)

// Напишіть функцію removeFirstAndLast, яка приймає масив arr і повертає новий масив без першого та останнього елементів, використовуючи оператор розпилення. Якщо масив має менше двох елементів, поверніть порожній масив.

function removeFirstAndLast(arr) {
  if (arr.length <= 2) {
    return [];
  }
  return [...arr.slice(1, -1)];
}

console.log(removeFirstAndLast([1, 2, 3, 4])); // [2, 3]
console.log(removeFirstAndLast([1, 2])); // []
console.log(removeFirstAndLast([5])); // []

console.log("\n");

// Задача 6 (складна, об’єкт)

// Створіть функцію cloneAndAddProperty, яка приймає об’єкт obj, ключ key, і значення value. Функція повинна повертати новий об’єкт, який містить усі властивості obj, а також додаткову властивість key зі значенням value, використовуючи оператор розпилення.

function cloneAndAddProperty(obj, key, value) {
  return {
    ...obj,
    [key]: value,
  };
}

const original = { name: "Alice", age: 25 };
console.log(cloneAndAddProperty(original, "city", "Kyiv"));
// { name: "Alice", age: 25, city: "Kyiv" }

console.log(cloneAndAddProperty(original, "country", "Ukraine"));
// { name: "Alice", age: 25, country: "Ukraine" }

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам освоїти оператор розпилення (...spread) для створення нових масивів та об’єктів, додаючи або змінюючи значення в них.
