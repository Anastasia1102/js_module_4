// Ось кілька задач для практики роботи з колекцією значень властивостей об’єктів для початківців:

// Задача 1 (легка)

// Напишіть функцію getAllNames, яка приймає масив об’єктів users і повертає масив усіх імен користувачів, зібраних із властивості name кожного об’єкта.

function getAllNames(users) {
  const usersNamesArr = [];
  for (const user of users) {
    usersNamesArr.push(user.name);
  }
  return usersNamesArr;
}

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

console.log(getAllNames(users)); // ["Alice", "Bob", "Charlie"]

console.log("\n");

// Задача 2 (легка)

// Створіть функцію getAllPrices, яка приймає масив об’єктів products і повертає масив цін усіх продуктів, зібраних із властивості price кожного об’єкта.

function getAllPrices(products) {
  const pricesArr = [];
  for (const product of products) {
    pricesArr.push(product.price);
  }
  return pricesArr;
}

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

console.log(getAllPrices(products)); // [1000, 500, 300]

console.log("\n");

// Задача 3 (середня)

// Напишіть функцію getAgesAbove, яка приймає масив об’єктів people і число ageLimit. Функція повинна повертати масив віків, які більші за ageLimit, зібраних із властивості age кожного об’єкта.

function getAgesAbove(people, ageLimit) {
  const ageArr = [];
  for (const person of people) {
    if (person.age > ageLimit) {
      ageArr.push(person.age);
    }
  }
  return ageArr;
}

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 40 },
];

console.log(getAgesAbove(people, 25)); // [30, 40]

console.log("\n");

// Задача 4 (середня)

// Створіть функцію getTitlesByAuthor, яка приймає масив об’єктів books і рядок author. Функція повинна повертати масив назв книг, зібраних із властивості title, які були написані вказаним автором.

function getTitlesByAuthor(books, author) {
  const titlesByAuthor = [];
  for (const book of books) {
    if (book.author === author) {
      titlesByAuthor.push(book.title);
    }
  }
  return titlesByAuthor;
}

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "1984", author: "George Orwell" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "Animal Farm", author: "George Orwell" },
];

console.log(getTitlesByAuthor(books, "George Orwell")); // ["1984", "Animal Farm"]

console.log("\n");

// Задача 5 (складна)

// Напишіть функцію getUniqueCategories, яка приймає масив об’єктів products, де кожен об’єкт містить властивість category. Функція повинна повертати масив унікальних категорій без повторень.

function getUniqueCategories(allProducts) {
  const uniqueCategories = new Set();
  for (const product of allProducts) {
    uniqueCategories.add(product.category);
  }
  return Array.from(uniqueCategories);
}

const allProducts = [
  { name: "Laptop", category: "Electronics" },
  { name: "Phone", category: "Electronics" },
  { name: "Banana", category: "Food" },
  { name: "Apple", category: "Food" },
];

console.log(getUniqueCategories(allProducts)); // ["Electronics", "Food"]

console.log("\n");

// Задача 6 (складна)

// Створіть функцію sumPropertyValues, яка приймає масив об’єктів items і рядок property. Функція повинна повертати суму всіх значень властивості property, які є числами. Якщо значення властивості не є числом, ігноруйте його.

// function sumPropertyValues(items, property) {
//   // ваш код тут
// }

// const items = [
//   { name: "Apple", price: 2, quantity: 10 },
//   { name: "Banana", price: 1, quantity: 5 },
//   { name: "Orange", price: 1.5, quantity: 8 }
// ];

// console.log(sumPropertyValues(items, "price")); // 4.5
// console.log(sumPropertyValues(items, "quantity")); // 23

// Ці задачі допоможуть вам розібратися з роботою із колекціями значень властивостей у масиві об’єктів і навчать обробляти масиви даних для різних завдань.
