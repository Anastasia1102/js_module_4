// Ось кілька задач для практики з використанням комбінації методу Object.keys() з циклом for та умовами if для початківців:

// Задача 1 (легка)

// Напишіть функцію countStringProperties, яка приймає об’єкт obj і повертає кількість властивостей, значення яких є рядками. Використайте Object.keys() для отримання ключів, а потім переберіть їх за допомогою for і перевірте тип значення за допомогою if.

function countStringProperties(obj) {
  let count = 0;
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === "string") {
      count++;
    }
  }
  return count;
}

const person = {
  name: "Alice",
  age: 25,
  city: "Kyiv",
  occupation: "developer",
};
console.log(countStringProperties(person)); // 3

console.log("\n");

// Задача 2 (легка)

// Створіть функцію findPropertyByValue, яка приймає об’єкт obj і значення value. Функція повинна повертати ключ першого знайденого значення, яке дорівнює value, або null, якщо такого значення немає. Використайте Object.keys() і цикл for з умовою if.

function findPropertyByValue(obj, value) {
  for (let key of Object.keys(obj)) {
    if (obj[key] === value) {
      return key;
    }
  }
  return null;
}

const car = { make: "Toyota", model: "Corolla", year: 2020 };
console.log(findPropertyByValue(car, "Toyota")); // "make"
console.log(findPropertyByValue(car, 2015)); // null

console.log("\n");

// Задача 3 (середня)

// Напишіть функцію removeEmptyProperties, яка приймає об’єкт obj і видаляє всі властивості, значення яких є порожніми рядками, null, або undefined. Використайте Object.keys() для отримання ключів, а потім цикл for з умовою if для перевірки значень і видалення ключів.

function removeEmptyProperties(obj) {}

const profile = {
  name: "Alice",
  age: 25,
  city: "",
  email: null,
  country: "Ukraine",
};
console.log(removeEmptyProperties(profile));
// { name: "Alice", age: 25, country: "Ukraine" }

// Задача 4 (середня)

// Створіть функцію countPropertiesByType, яка приймає об’єкт obj та тип даних type (наприклад, "string" або "number"). Функція повинна повертати кількість властивостей, значення яких відповідають зазначеному типу. Використайте Object.keys(), цикл for і умову if.

// function countPropertiesByType(obj, type) {
//   let count = 0;
//   for (let key of Object.keys(obj)) {
//     if (typeof obj[key] === type) {
//       count++;
//     }
//   }
//   return count;
// }

// const data = { name: "Alice", age: 25, isStudent: false, gpa: 3.8 };
// console.log(countPropertiesByType(data, "string")); // 1
// console.log(countPropertiesByType(data, "number")); // 2

// Задача 5 (складна)

// Напишіть функцію mergeObjectsWithCondition, яка приймає два об’єкти obj1 та obj2. Функція повинна об’єднати об’єкти, але тільки ті властивості з obj2, які мають значення, що є рядками або числами. Використайте Object.keys(), цикл for, і умову if для перевірки типу значення.

// function mergeObjectsWithCondition(obj1, obj2) {
//   for (let key of Object.keys(obj2)) {
//     if (typeof obj2[key] === "string" || typeof obj2[key] === "number") {
//       obj1[key] = obj2[key];
//     }
//   }
//   return obj1;
// }

// const obj1 = { name: "Alice", age: 25 };
// const obj2 = { age: 30, city: "Kyiv", isStudent: false };
// console.log(mergeObjectsWithCondition(obj1, obj2));
// // { name: "Alice", age: 30, city: "Kyiv" }

// Задача 6 (складна)

// Створіть функцію getPropertiesWithPrefix, яка приймає об’єкт obj та рядок prefix. Функція повинна повертати новий об’єкт, який містить лише ті властивості з obj, ключі яких починаються з вказаного префікса. Використайте Object.keys(), цикл for, і умову if для перевірки префіксу.

// function getPropertiesWithPrefix(obj, prefix) {
//   const result = {};
//   for (let key of Object.keys(obj)) {
//     if (key.startsWith(prefix)) {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// }

// const person = { name: "Alice", nickname: "Al", nationality: "Ukrainian", age: 25 };
// console.log(getPropertiesWithPrefix(person, "na"));
// // { name: "Alice", nationality: "Ukrainian" }

// Ці задачі допоможуть вам практикуватися з використанням Object.
