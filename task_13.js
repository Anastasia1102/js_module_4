// Ось кілька задач для практики з використанням this для початківців:

// Задача 1 (легка)

// Створіть об’єкт user, який має властивості name та метод greet. Метод greet повинен виводити в консоль привітання з використанням імені користувача. Використайте this для доступу до властивості name всередині методу.

const newUser = {
  name: "Alice",
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
};

newUser.greet(); // "Hello, Alice!"

console.log("\n");

// Задача 2 (легка)

// Створіть об’єкт car з властивостями brand, model і методом getDescription, який повертає рядок з інформацією про автомобіль у форматі "brand model". Використайте this для доступу до властивостей.

const car = {
  brand: "Toyota",
  model: "Corolla",
  getDescription() {
    return `${this.brand} ${this.model}`;
  },
};

console.log(car.getDescription()); // "Toyota Corolla"

console.log("\n");

// Задача 3 (середня)

// Створіть об’єкт rectangle, який має властивості width і height, а також метод calculateArea, який повертає площу прямокутника. Використайте this для доступу до ширини та висоти.

const rectangle = {
  width: 10,
  height: 5,
  calculateArea() {
    return this.height * this.width;
  },
};

console.log(rectangle.calculateArea()); // 50

console.log("\n");

// Задача 4 (середня)

// Створіть об’єкт counter, який має властивість count (початкове значення 0) та методи increment і decrement. Метод increment повинен збільшувати значення count на 1, а decrement — зменшувати на 1. Використайте this для доступу до властивості count.

const counter = {
  count: 0,
  increment() {
    return this.count++;
  },
  decrement() {
    return this.count--;
  },
};

counter.increment();
console.log(counter.count); // 1
counter.decrement();
console.log(counter.count); // 0

console.log("\n");

// Задача 5 (складна)

// Створіть об’єкт bankAccount, який має властивості balance (початкове значення 1000) та методи deposit і withdraw. Метод deposit приймає суму і додає її до балансу, а метод withdraw приймає суму і зменшує баланс, якщо на рахунку достатньо коштів. Використайте this для доступу до властивості balance.

const bankAccount = {
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
  },
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("Недостатньо коштів");
    }
  },
};

bankAccount.deposit(500);
console.log(bankAccount.balance); // 1500
bankAccount.withdraw(200);
console.log(bankAccount.balance); // 1300
bankAccount.withdraw(2000); // Недостатньо коштів
console.log(bankAccount.balance); // 1300

console.log("\n");

// Задача 6 (складна)

// Створіть об’єкт person, який має властивості firstName, lastName та метод getFullName. Метод getFullName повинен повертати повне ім’я особи. Також додайте метод greet, який приймає рядок greeting і виводить в консоль вітання з повним іменем. Використайте this для доступу до властивостей та методу всередині greet.

const person = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
  greet(greeting) {
    console.log(`${greeting}, ${this.getFullName()}!`);
  },
};

console.log(person.getFullName()); // "John Doe"
person.greet("Hello"); // "Hello, John Doe!"

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам розібратися з роботою this всередині методів об’єктів, а також із застосуванням this для доступу до властивостей та методів.
