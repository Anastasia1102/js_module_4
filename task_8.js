// Ось кілька задач для практики з використанням методу Object.values() для початківців без рішень:

// Задача 1 (легка)

// Напишіть функцію getValues, яка приймає об’єкт obj і повертає масив всіх значень цього об’єкта, використовуючи Object.values.

function getValues(obj) {
  return Object.values(obj);
}

const user = { name: "Alice", age: 25, city: "Kyiv" };
console.log(getValues(user)); // ["Alice", 25, "Kyiv"]

console.log("\n");

// Задача 2 (легка)

// Створіть функцію countNumberValues, яка приймає об’єкт obj і повертає кількість значень, які є числами. Використайте Object.values() для отримання масиву значень, а потім перевірте тип кожного елемента.

function countNumberValues(obj) {
  let count = 0;
  for (let value of Object.values(obj)) {
    if (typeof value === "number") {
      count++;
    }
  }
  return count;
}

const data = { name: "Alice", age: 25, height: 170, isStudent: false };
console.log(countNumberValues(data)); // 2 (age і height)

console.log("\n");

// Задача 3 (середня)

// Напишіть функцію sumNumericValues, яка приймає об’єкт obj і повертає суму всіх числових значень у цьому об’єкті. Використайте Object.values() для отримання масиву значень і обчисліть суму чисел.

function sumNumericValues(obj) {
  let sum = 0;
  for (let value of Object.values(obj)) {
    if (typeof value === "number") {
      sum += value;
    }
  }
  return sum;
}

const stats = { apples: 10, bananas: 5, oranges: 20, city: "Kyiv" };
console.log(sumNumericValues(stats)); // 35

console.log("\n");

// Задача 4 (середня)

// Створіть функцію getStringValues, яка приймає об’єкт obj і повертає масив, що містить лише ті значення, які є рядками. Використайте Object.values() для отримання значень і filter для вибірки рядків.

function getStringValues(obj) {
  return Object.values(obj).filter((value) => typeof value === "string");
}

const person = {
  name: "Alice",
  age: 25,
  city: "Kyiv",
  occupation: "developer",
};
console.log(getStringValues(person)); // ["Alice", "Kyiv", "developer"]

console.log("\n");

// Задача 5 (складна)

// Напишіть функцію capitalizeStringValues, яка приймає об’єкт obj і повертає новий об’єкт, де всі значення, які є рядками, перетворені у верхній регістр. Використайте Object.keys() для отримання ключів та Object.values() для роботи зі значеннями.

function capitalizeStringValues(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  const capitalizedValues = values.map((value) =>
    typeof value === "string" ? value.toUpperCase() : value
  );
  const result = {};
  keys.forEach((key, i) => {
    result[key] = capitalizedValues[i];
  });
  return result;
}

const user1 = { name: "Alice", age: 25, city: "Kyiv" };
console.log(capitalizeStringValues(user1));
// { name: "ALICE", age: 25, city: "KYIV" }

console.log("\n");

// Задача 6 (складна)

// Створіть функцію countOccurrences, яка приймає об’єкт obj і значення value. Функція повинна повертати кількість разів, коли це значення зустрічається в об’єкті. Використайте Object.values() для отримання значень та метод filter для підрахунку.

function countOccurrences(obj, value) {
  let count = 0;
  for (let indexValue of Object.values(obj)) {
    if (indexValue === value) {
      count++;
    }
  }
  return count;
}

const inventory = { apples: 10, bananas: 5, oranges: 10, grapes: 5 };
console.log(countOccurrences(inventory, 10)); // 2
console.log(countOccurrences(inventory, 5)); // 2

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам освоїти метод Object.values() і зрозуміти, як використовувати його для різних операцій з даними всередині об’єктів.
