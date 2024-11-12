// Ось кілька задач для практики з використанням циклу for...in для перебору об’єктів для початківців:

// Задача 1 (легка)

// Напишіть функцію printObjectProperties, яка приймає об’єкт obj і виводить кожен ключ та значення в консолі. Використайте цикл for...in.

function printObjectProperties(obj) {
  for (const key in obj) {
    console.log(`${key}:${obj[key]}`);
  }
}

const user = { name: "Alice", age: 25, city: "Kyiv" };
printObjectProperties(user);
// Вивід:
// name: Alice
// age: 25
// city: Kyiv

console.log("\n");

// Задача 2 (легка)

// Створіть функцію countProperties, яка приймає об’єкт obj і повертає кількість властивостей у цьому об’єкті. Використайте цикл for...in.

function countProperties(obj) {
  let count = 0;
  for (const key in obj) {
    count++;
  }
  return count;
}

const car = { make: "Toyota", model: "Corolla", year: 2020 };
console.log(countProperties(car)); // 3

console.log("\n");

// Задача 3 (середня)

// Напишіть функцію findStringProperties, яка приймає об’єкт obj і повертає масив, що містить тільки ті ключі, значення яких є рядками. Використайте цикл for...in.

function findStringProperties(obj) {
  const stringProperties = [];
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      stringProperties.push(key);
    }
  }
  return stringProperties;
}

const person = {
  name: "John",
  age: 30,
  occupation: "developer",
  isStudent: false,
};
console.log(findStringProperties(person)); // ["name", "occupation"]

console.log("\n");

// Задача 4 (середня)

// Створіть функцію sumNumericProperties, яка приймає об’єкт obj і повертає суму всіх значень, які є числами. Використайте цикл for...in.

function sumNumericProperties(obj) {
  let count = 0;
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      count += obj[key];
    }
  }
  return count;
}

const stats = { apples: 10, bananas: 5, oranges: 20, city: "Kyiv" };
console.log(sumNumericProperties(stats)); // 35

console.log("\n");

// Задача 5 (складна)

// Напишіть функцію capitalizeStringProperties, яка приймає об’єкт obj і перетворює всі значення властивостей, які є рядками, у верхній регістр. Функція повинна змінювати початковий об’єкт. Використайте цикл for...in.

function capitalizeStringProperties(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      obj[key] = obj[key].toUpperCase();
    }
  }
}

const userInfo = { name: "Alice", age: 25, city: "Kyiv" };
capitalizeStringProperties(userInfo);
console.log(userInfo); // { name: "ALICE", age: 25, city: "KYIV" }

console.log("\n");

// Задача 6 (складна)

// Створіть функцію getPropertyTypes, яка приймає об’єкт obj і повертає новий об’єкт, де кожен ключ відповідає ключу з оригінального об’єкта, а значенням є тип відповідного значення (наприклад, "string", "number", "boolean" і т.д.). Використайте цикл for...in.

function getPropertyTypes(obj) {
  let newObj = {};
  for (const key in obj) {
    newObj[key] = typeof obj[key];
  }
  return newObj;
}

const data = { name: "Alice", age: 25, isStudent: false, gpa: 3.8 };
console.log(getPropertyTypes(data));
// { name: "string", age: "number", isStudent: "boolean", gpa: "number" }

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам освоїти цикл for...in і зрозуміти, як використовувати його для роботи з об’єктами, а також як обробляти дані в об’єктах.
