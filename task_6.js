// Ось кілька задач для практики з використанням методу Object.keys() для початківців:

// Задача 1 (легка)

// Напишіть функцію getKeys, яка приймає об’єкт obj і повертає масив ключів цього об’єкта, використовуючи Object.keys.

function getKeys(obj) {
  return Object.keys(obj);
}

const users = { name: "Alice", age: 25, city: "Kyiv" };
console.log(getKeys(users)); // ["name", "age", "city"]

console.log("\n");

// Задача 2 (легка)

// Створіть функцію countKeys, яка приймає об’єкт obj і повертає кількість ключів в об’єкті, використовуючи Object.keys.

function countKeys(obj) {
  return Object.keys(obj).length;
}

const car = { make: "Toyota", model: "Corolla", year: 2020 };
console.log(countKeys(car)); // 3

console.log("\n");

// Задача 3 (середня)

// Напишіть функцію filterKeysByPrefix, яка приймає об’єкт obj і рядок prefix. Функція повинна повернути масив ключів, які починаються з вказаного префікса. Використайте Object.keys.

function filterKeysByPrefix(obj, prefix) {
  return Object.keys(obj).filter((key) => key.startsWith(prefix));
}

const data = { name: "John", nickname: "Johnny", age: 30, nation: "USA" };
console.log(filterKeysByPrefix(data, "na")); // ["name", "nation"]

console.log("\n");

// Задача 4 (середня)

// Створіть функцію getStringKeys, яка приймає об’єкт obj і повертає масив ключів, значення яких є рядками. Використайте Object.keys і перевірку типу значення.

function getStringKeys(obj) {
  return Object.keys(obj).filter((key) => typeof obj[key] === "string");
}

const person = { name: "Alice", age: 25, city: "Kyiv", isStudent: false };
console.log(getStringKeys(person)); // ["name", "city"]

console.log("\n");

// Задача 5 (складна)

// Напишіть функцію invertObject, яка приймає об’єкт obj і повертає новий об’єкт, де ключі та значення обміняні місцями. Використайте Object.keys для отримання ключів і збережіть їх як значення в новому об’єкті.

function invertObject(obj) {
  let inverted = {};
  Object.keys(obj).forEach((key) => {
    inverted[obj[key]] = key;
  });
  return inverted;
}

const user = { name: "Alice", age: "25", city: "Kyiv" };
console.log(invertObject(user)); // { "Alice": "name", "25": "age", "Kyiv": "city" }

console.log("\n");

// Задача 6 (складна)

// Створіть функцію getNonEmptyKeys, яка приймає об’єкт obj і повертає масив ключів, значення яких не є порожніми рядками, null або undefined. Використайте Object.keys для перебору ключів і перевірку значень.

function getNonEmptyKeys(obj) {
  return Object.keys(obj).filter(
    (key) => obj[key] !== "" && obj[key] !== null && obj[key] !== undefined
  );
}

const profile = {
  name: "Alice",
  age: 25,
  city: "",
  email: null,
  country: "Ukraine",
};
console.log(getNonEmptyKeys(profile)); // ["name", "age", "country"]

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам освоїти метод Object.keys() для роботи з ключами об’єктів, а також зрозуміти, як використовувати його для різних типів перевірок і фільтрацій.
