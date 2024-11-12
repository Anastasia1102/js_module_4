// Ось кілька задач для практики роботи з вкладеними властивостями в об’єктах для початківців:

// Задача 1 (легка)

// Уявіть, що у вас є об’єкт user, який містить ім’я користувача та адресу. Напишіть функцію getCity, яка приймає об’єкт user і повертає назву міста, де живе користувач. Якщо властивості city немає, поверніть "Unknown".

const user = {
  name: "Alice",
  address: {
    city: "Kyiv",
    country: "Ukraine",
  },
};

const userWithoutCity = {
  name: "Bob",
  address: {},
};

function getCity(user) {
  return user.address.city !== undefined ? user.address.city : "Unknown";
}

console.log(getCity(user)); // "Kyiv"
console.log(getCity(userWithoutCity)); // "Unknown"

console.log("\n");

// Задача 2 (легка)

// Створіть функцію getFullName, яка приймає об’єкт user з властивостями firstName і lastName, які знаходяться всередині вкладеної властивості name, і повертає повне ім’я користувача. Якщо будь-яке з імен відсутнє, поверніть "Incomplete Name".

const user1 = {
  name: {
    firstName: "John",
    lastName: "Doe",
  },
};

const user2 = {
  name: {
    firstName: "Jane",
  },
};

function getFullName(user) {
  return user.name.firstName === undefined || user.name.lastName === undefined
    ? "Incomplete Name"
    : user.name.firstName + " " + user.name.lastName;
}

console.log(getFullName(user1)); // "John Doe"
console.log(getFullName(user2)); // "Incomplete Name"

console.log("\n");

// Задача 3 (середня)

// Напишіть функцію getProductPrice, яка приймає об’єкт product і повертає ціну товару. Ціна товару знаходиться у вкладеній властивості price, яка знаходиться у вкладеному об’єкті details. Якщо ціна відсутня, поверніть "Price not available".

const productWithPrice = {
  name: "Laptop",
  details: {
    price: 1000,
    currency: "USD",
  },
};

const productWithoutPrice = {
  name: "Phone",
  details: {},
};

function getProductPrice(product) {
  return product.details.price === undefined
    ? "Price not available"
    : product.details.price;
}

console.log(getProductPrice(productWithPrice)); // 1000
console.log(getProductPrice(productWithoutPrice)); // "Price not available"

console.log("\n");

// Задача 4 (середня)

// Створіть функцію getCourseInstructor, яка приймає об’єкт course і повертає ім’я інструктора, якщо він вказаний у вкладеній властивості instructor у об’єкті info. Якщо інструктор відсутній, поверніть "Instructor not assigned".

const courseWithInstructor = {
  title: "JavaScript Basics",
  info: {
    instructor: "Mr. Smith",
    duration: "4 weeks",
  },
};

const courseWithoutInstructor = {
  title: "Python Basics",
  info: {
    duration: "6 weeks",
  },
};

function getCourseInstructor(course) {
  return course.info.instructor === undefined
    ? "Instructor not assigned"
    : course.info.instructor;
}

console.log(getCourseInstructor(courseWithInstructor)); // "Mr. Smith"
console.log(getCourseInstructor(courseWithoutInstructor)); // "Instructor not assigned"

console.log("\n");

// Задача 5 (складна)

// Напишіть функцію getNestedProperty, яка приймає об’єкт obj і масив keys, де keys - масив з ключами для вкладених властивостей. Функція повинна повернути значення за вказаними ключами або "Property not found", якщо будь-яка з вкладених властивостей відсутня.

const data = {
  user: {
    profile: {
      name: "Alice",
      contact: {
        email: "alice@example.com",
      },
    },
  },
};

function getNestedProperty(obj, keys) {
  let current = obj;
  for (let key of keys) {
    if (current[key] === undefined) {
      return "Property not found";
    }
    current = current[key];
  }
  return current;
}

console.log(getNestedProperty(data, ["user", "profile", "name"])); // "Alice"
console.log(getNestedProperty(data, ["user", "profile", "contact", "email"])); // "alice@example.com"
console.log(getNestedProperty(data, ["user", "profile", "contact", "phone"])); // "Property not found"

console.log("\n");
console.log("\n");
console.log("\n");

// Задача 6 (складна)

// Створіть функцію updateNestedProperty, яка приймає об’єкт obj, масив ключів keys і нове значення value. Функція повинна оновити вкладену властивість у об’єкті obj за вказаними ключами на нове значення value. Якщо будь-яка з вкладених властивостей відсутня, поверніть "Cannot update property".

// const userInfo = {
//   profile: {
//     settings: {
//       theme: "light",
//     },
//   },
// };

// function updateNestedProperty(obj, keys, value) {
//   let current = obj;
//   for (let i = 0; i < keys.length - 1; i++) {
//     if (current[keys[i]] === undefined) {
//       return "Cannot update property";
//     }
//     current = current[keys[i]];
//   }
//   const lastKey = keys[keys.length - 1];
//   if (current[lastKey] === undefined) {
//     return "Cannot update property";
//   }
//   current[lastKey] = value;
//   return value;
// }

// console.log(
//   updateNestedProperty(user, ["profile", "settings", "theme"], "dark")
// ); // "dark"
// console.log(
//   updateNestedProperty(user, ["profile", "settings", "language"], "en")
// ); // "Cannot update property"

// console.log("\n");
// console.log("\n");
// console.log("\n");
