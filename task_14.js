// Ось кілька задач для практики роботи зі збором частини аргументів в об’єкті для початківців:

// Задача 1 (легка)

// Напишіть функцію createUser, яка приймає обов’язкові параметри name та age, а також додаткові параметри, які потрібно зібрати в об’єкт extraInfo. Функція повинна повертати об’єкт користувача з властивостями name, age і extraInfo, що містить усі додаткові властивості.

function createUser(name, age, ...extraInfo) {
  return {
    name,
    age,
    extraInfo,
  };
}

console.log(createUser("Alice", 25, { city: "Kyiv", occupation: "Developer" }));
// { name: "Alice", age: 25, extraInfo: { city: "Kyiv", occupation: "Developer" } }

console.log(createUser("Bob", 30, { hobbies: ["reading", "sports"] }));
// { name: "Bob", age: 30, extraInfo: { hobbies: ["reading", "sports"] } }

console.log("\n");

// Задача 2 (легка)

// Створіть функцію createProduct, яка приймає параметри name і price, а всі інші параметри збирає в об’єкт details. Функція повинна повертати об’єкт продукту з властивостями name, price, і details, що містить усі додаткові властивості.

function createProduct(name, price, ...details) {
  return {
    name,
    price,
    details,
  };
}

console.log(createProduct("Laptop", 1000, { brand: "Dell", color: "black" }));
// { name: "Laptop", price: 1000, details: { brand: "Dell", color: "black" } }

console.log(createProduct("Phone", 500, { brand: "Samsung", memory: "64GB" }));
// { name: "Phone", price: 500, details: { brand: "Samsung", memory: "64GB" } }

console.log("\n");

// Задача 3 (середня)

// Напишіть функцію createEvent, яка приймає параметри title та date, а також інші параметри, які збираються в об’єкт metadata. Функція повинна повертати об’єкт події з властивостями title, date і metadata, що містить усі додаткові властивості.

function createEvent(title, date, ...metadata) {
  return {
    title,
    date,
    metadata,
  };
}

console.log(
  createEvent("Conference", "2023-12-10", { location: "Kyiv", attendees: 100 })
);
// { title: "Conference", date: "2023-12-10", metadata: { location: "Kyiv", attendees: 100 } }

console.log(
  createEvent("Meeting", "2023-12-15", { location: "Office", duration: "2h" })
);
// { title: "Meeting", date: "2023-12-15", metadata: { location: "Office", duration: "2h" } }

console.log("\n");

// Задача 4 (середня)

// Створіть функцію createProfile, яка приймає параметри username та email, а інші параметри збирає в об’єкт settings. Функція повинна повертати об’єкт профілю з властивостями username, email і settings, що містить усі додаткові параметри.

function createProfile(username, email, ...settings) {
  return {
    username,
    email,
    settings,
  };
}

console.log(
  createProfile("john_doe", "john@example.com", {
    theme: "dark",
    notifications: true,
  })
);
// { username: "john_doe", email: "john@example.com", settings: { theme: "dark", notifications: true } }

console.log(
  createProfile("jane_doe", "jane@example.com", {
    theme: "light",
    language: "en",
  })
);
// { username: "jane_doe", email: "jane@example.com", settings: { theme: "light", language: "en" } }

console.log("\n");

// Задача 5 (складна)

// Напишіть функцію createOrder, яка приймає параметри orderId та customerName, а також будь-яку кількість додаткових параметрів, які збираються в об’єкт orderDetails. Функція повинна повертати об’єкт замовлення з властивостями orderId, customerName і orderDetails, що містить усі додаткові параметри.

function createOrder(orderId, customerName, ...orderDetails) {
  return {
    orderId,
    customerName,
    orderDetails,
  };
}

console.log(
  createOrder(12345, "Alice", { items: ["Laptop", "Phone"], total: 1500 })
);
// { orderId: 12345, customerName: "Alice", orderDetails: { items: ["Laptop", "Phone"], total: 1500 } }

console.log(
  createOrder(67890, "Bob", {
    items: ["Tablet"],
    total: 300,
    status: "Pending",
  })
);
// { orderId: 67890, customerName: "Bob", orderDetails: { items: ["Tablet"], total: 300, status: "Pending" } }

console.log("\n");

// Задача 6 (складна)

// Створіть функцію createBlogPost, яка приймає параметри title, author, і content, а всі інші параметри збирає в об’єкт options. Функція повинна повертати об’єкт блогу з властивостями title, author, content і options, що містить усі додаткові параметри.

function createBlogPost(title, author, content, ...options) {
  return {
    title,
    author,
    content,
    options,
  };
}

console.log(
  createBlogPost(
    "Introduction to JavaScript",
    "Alice",
    "JavaScript is a versatile language...",
    { tags: ["JavaScript", "Programming"], views: 1000 }
  )
);
// { title: "Introduction to JavaScript", author: "Alice", content: "JavaScript is a versatile language...", options: { tags: ["JavaScript", "Programming"], views: 1000 } }

console.log(
  createBlogPost(
    "Advanced CSS",
    "Bob",
    "CSS provides powerful styling tools...",
    { tags: ["CSS", "Web Development"], views: 500 }
  )
);
// { title: "Advanced CSS", author: "Bob", content: "CSS provides powerful styling tools...", options: { tags: ["CSS", "Web Development"], views: 500 } }

console.log("\n");
console.log("\n");
console.log("\n");
