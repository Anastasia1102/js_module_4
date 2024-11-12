// Ось кілька задач для практики з використанням обчислювальних властивостей об’єкта для початківців:

// Задача 1 (легка)

// Напишіть функцію createUser, яка приймає ім’я name і вік age та повертає об’єкт користувача, де властивість для імені ключа має бути значенням змінної name. Використайте обчислювальні властивості об’єкта.

function createUser(name, age) {
  return {
    [name]: age,
  };
}

console.log(createUser("Alice", 25)); // { Alice: 25 }
console.log(createUser("Bob", 30)); // { Bob: 30 }

console.log("\n");

// Задача 2 (легка)

// Напишіть функцію createDynamicProperty, яка приймає ключ key і значення value та повертає об’єкт, який має одну властивість з ключем key і значенням value. Використайте обчислювальні властивості об’єкта.

function createDynamicProperty(key, value) {
  return {
    [key]: value,
  };
}

console.log(createDynamicProperty("color", "blue")); // { color: "blue" }
console.log(createDynamicProperty("price", 100)); // { price: 100 }

console.log("\n");

// Задача 3 (середня)

// Створіть функцію createProduct, яка приймає об’єкт details з властивостями name і category, а також ціну price. Функція повинна повертати новий об’єкт, який містить властивості name та category, а також обчислювальну властивість з ключем "price_in_USD" і значенням price.

function createProduct(details, price) {
  return {
    ...details,
    ["price_in_USD"]: price,
  };
}

const details = { name: "Laptop", category: "Electronics" };
console.log(createProduct(details, 1000));
// { name: "Laptop", category: "Electronics", price_in_USD: 1000 }

console.log("\n");

// Задача 4 (середня)

// Напишіть функцію createProfile, яка приймає ім’я користувача username і масив тегів tags. Функція повинна повертати об’єкт, у якому ім’я користувача зберігається в обчислювальній властивості з ключем "user_name", а теги — в обчислювальній властивості з ключем "user_tags".

function createProfile(usernames, tags) {
  return {
    ["user_name"]: usernames,
    ["user_tags"]: tags,
  };
}

console.log(createProfile("john_doe", ["developer", "blogger"]));
// { user_name: "john_doe", user_tags: ["developer", "blogger"] }

console.log("\n");

// Задача 5 (складна)

// Створіть функцію generateTranslation, яка приймає об’єкт translations та мову lang, а також текст text. Функція повинна повертати новий об’єкт, який містить переклади з translations і додаткову обчислювальну властивість з ключем [lang + "_translation"], яка має значення text.

function generateTranslation(translations, lang, text) {
  return {
    ...translations,
    [lang + "_translation"]: text,
  };
}

const translations = { en_translation: "Hello", fr_translation: "Bonjour" };
console.log(generateTranslation(translations, "es", "Hola"));
// { en_translation: "Hello", fr_translation: "Bonjour", es_translation: "Hola" }

console.log("\n");

// Задача 6 (складна)

// Напишіть функцію createStatObject, яка приймає об’єкт data, який містить статистику за певний рік. Функція повинна повертати новий об’єкт, де ключами є значення року (як рядок) з ключа year в об’єкті data, а значеннями — сам об’єкт data. Використайте обчислювальні властивості.

function createStatObject(data) {
  return {
    [data.year.toString()]: data,
  };
}

const data = { year: 2023, population: 500000, gdp: 1000000 };
console.log(createStatObject(data));
// { "2023": { year: 2023, population: 500000, gdp: 1000000 } }

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам розібратися з обчислювальними властивостями об’єктів і навчитися динамічно створювати ключі об’єктів у JavaScript.
