// Ось кілька задач для практики з використанням синтаксису коротких властивостей об’єкта для початківців:

// Задача 1 (легка)

// Напишіть функцію createUser, яка приймає ім’я name та вік age і повертає об’єкт користувача з цими властивостями, використовуючи короткий синтаксис для властивостей об’єкта.

function createUser(name, age) {
  let newUser = {
    name,
    age,
  };
  return newUser;
}

console.log(createUser("Alice", 25)); // { name: "Alice", age: 25 }
console.log(createUser("Bob", 30)); // { name: "Bob", age: 30 }

console.log("\n");

// Задача 2 (легка)

// Напишіть функцію createProduct, яка приймає три параметри: id, name і price, і повертає об’єкт продукту з цими властивостями, використовуючи короткий синтаксис.

function createProduct(id, name, price) {
  const newProduct = {
    id,
    name,
    price,
  };
  return newProduct;
}

console.log(createProduct(1, "Laptop", 1000)); // { id: 1, name: "Laptop", price: 1000 }
console.log(createProduct(2, "Phone", 500)); // { id: 2, name: "Phone", price: 500 }

console.log("\n");

// Задача 3 (середня)

// Створіть функцію createAddress, яка приймає параметри city, street і zipcode та повертає об’єкт адреси з цими властивостями, використовуючи короткий синтаксис. Додайте також додаткову властивість country зі значенням "Ukraine" за замовчуванням.

function createAddress(city, street, zipcode) {
  const country = "Ukraine";
  const newAddress = {
    city,
    street,
    zipcode,
    country,
  };
  return newAddress;
}

console.log(createAddress("Kyiv", "Shevchenka St", "01001"));
// { city: "Kyiv", street: "Shevchenka St", zipcode: "01001", country: "Ukraine" }

console.log(createAddress("Lviv", "Franko St", "79000"));
// { city: "Lviv", street: "Franko St", zipcode: "79000", country: "Ukraine" }

console.log("\n");

// Задача 4 (середня)

// Напишіть функцію createEmployee, яка приймає об’єкт personalInfo з властивостями firstName і lastName, а також параметр position. Функція повинна повертати новий об’єкт, який містить повне ім’я користувача у властивості name, а також position, використовуючи короткий синтаксис для властивостей об’єкта.

function createEmployee(personalInfo, position) {
  const { firstName, lastName } = personalInfo;
  const name = `${firstName} ${lastName}`;
  const newEmployee = {
    name,
    position,
  };
  return newEmployee;
}

const personalInfo = { firstName: "John", lastName: "Doe" };
console.log(createEmployee(personalInfo, "Manager"));
// { name: "John Doe", position: "Manager" }

console.log("\n");

// Задача 5 (складна)

// Створіть функцію createBook, яка приймає об’єкт details з властивостями title і author, а також year та price. Функція повинна повертати новий об’єкт книги, який містить властивості title, author, year, price та додаткову властивість available, яка встановлена в true за замовчуванням. Використайте короткий синтаксис для властивостей об’єкта.

function createBook(details, year, price) {
  const { title, author } = details;
  const available = true;

  const newBook = {
    details,
    year,
    price,
    available,
  };
  return newBook;
}

const details = { title: "The Great Gatsby", author: "F. Scott Fitzgerald" };
console.log(createBook(details, 1925, 15));
// { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, price: 15, available: true }

console.log("\n");

// Задача 6 (складна)

// Напишіть функцію createFullProfile, яка приймає об’єкти userInfo (з властивостями username і email) та userStats (з властивостями followers і posts). Функція повинна повертати об’єкт, що поєднує властивості з обох об’єктів разом, використовуючи короткий синтаксис для створення об’єкта.

function createFullProfile(userInformation, userStats) {
  return { ...userInformation, ...userStats };
}

const userInformation = { username: "john_doe", email: "john@example.com" };
const userStats = { followers: 100, posts: 50 };

console.log(createFullProfile(userInformation, userStats));
// { username: "john_doe", email: "john@example.com", followers: 100, posts: 50 }

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам освоїти використання короткого синтаксису властивостей об’єкта та навчитися об’єднувати інформацію з різних джерел у єдиний об’єкт.
