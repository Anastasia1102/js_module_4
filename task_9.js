// Ось кілька задач для практики роботи з масивом об’єктів за допомогою циклу for...of для початківців:

// Задача 1 (легка)

// Напишіть функцію printNames, яка приймає масив об’єктів users, де кожен об’єкт містить властивість name. Функція повинна вивести всі імена користувачів в консолі. Використайте цикл for...of.

function printNames(users) {
  for (const user of users) {
    console.log(user.name);
  }
}

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

printNames(users);
// Вивід:
// Alice
// Bob
// Charlie

console.log("\n");

// Задача 2 (легка)

// Створіть функцію sumPrices, яка приймає масив об’єктів products, де кожен об’єкт містить властивість price. Функція повинна повертати загальну суму цін усіх продуктів. Використайте цикл for...of.

function sumPrices(products) {
  let sum = 0;
  for (const product of products) {
    sum += product.price;
  }
  return sum;
}

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

console.log(sumPrices(products)); // 1800

console.log("\n");

// Задача 3 (середня)

// Напишіть функцію findUserByName, яка приймає масив об’єктів users і рядок name. Функція повинна повертати об’єкт користувача з відповідним ім’ям або null, якщо користувач не знайдений. Використайте цикл for...of.

function findUserByName(objUsers, name) {
  for (const user of objUsers) {
    if (user.name === name) {
      return user;
    }
  }
  return null;
}

const objUsers = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

console.log(findUserByName(objUsers, "Bob")); // { name: "Bob", age: 30 }
console.log(findUserByName(objUsers, "Eve")); // null

console.log("\n");

// Задача 4 (середня)

// Створіть функцію getAdults, яка приймає масив об’єктів users, де кожен об’єкт містить властивості name і age. Функція повинна повертати масив об’єктів користувачів, яким 18 років або більше. Використайте цикл for...of.

function getAdults(arrUsers) {
  const newArr = [];
  for (const user of arrUsers) {
    if (user.age >= 18) {
      newArr.push(user);
    }
  }
  return newArr;
}

const arrUsers = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 15 },
  { name: "David", age: 19 },
];

console.log(getAdults(arrUsers));
// [{ name: "Bob", age: 22 }, { name: "David", age: 19 }]

console.log("\n");

// Задача 5 (складна)

// Напишіть функцію countByCategory, яка приймає масив об’єктів products, де кожен об’єкт містить властивості name і category. Функція повинна повертати об’єкт, який містить кількість продуктів у кожній категорії. Використайте цикл for...of.

function countByCategory(allProducts) {
  const categoryCount = {};
  for (const product of allProducts) {
    if (product.category in categoryCount) {
      categoryCount[product.category]++;
    } else {
      categoryCount[product.category] = 1;
    }
  }
  return categoryCount;
}

const allProducts = [
  { name: "Laptop", category: "Electronics" },
  { name: "Phone", category: "Electronics" },
  { name: "Banana", category: "Food" },
  { name: "Apple", category: "Food" },
];

console.log(countByCategory(allProducts));
// { Electronics: 2, Food: 2 }

console.log("\n");

// Задача 6 (складна)

// Створіть функцію getTotalWeight, яка приймає масив об’єктів items, де кожен об’єкт містить властивості name, weight і quantity. Функція повинна повертати загальну вагу всіх елементів у масиві, враховуючи їх кількість. Використайте цикл for...of.

function getTotalWeight(items) {
  let total = 0;
  for (const item of items) {
    total += item.weight * item.quantity;
  }
  return total;
}

const items = [
  { name: "Apple", weight: 0.2, quantity: 10 },
  { name: "Banana", weight: 0.15, quantity: 8 },
  { name: "Orange", weight: 0.3, quantity: 5 },
];

console.log(getTotalWeight(items)); // 4.7 (0.2*10 + 0.15*8 + 0.3*5)

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам практикуватися з використанням циклу for...of для роботи з масивом об’єктів, а також навчитися обробляти дані та виконувати різні обчислення.
