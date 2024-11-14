// Ось кілька задач для практики пошуку об’єкта за значенням властивості для початківців:

// Задача 1 (легка)

// Напишіть функцію findStudentById, яка приймає масив об’єктів students і число id. Функція повинна повернути об’єкт студента з відповідним id або null, якщо студент не знайдений.

function findStudentById(students, id) {
  for (const student of students) {
    if (student.id === id) {
      return student;
    }
  }
  return null;
}

const students = [
  { id: 1, name: "Alice", grade: "A" },
  { id: 2, name: "Bob", grade: "B" },
  { id: 3, name: "Charlie", grade: "C" },
];

console.log(findStudentById(students, 2)); // { id: 2, name: "Bob", grade: "B" }
console.log(findStudentById(students, 4)); // null

console.log("\n");

// Задача 2 (легка)

// Створіть функцію findCarByLicensePlate, яка приймає масив об’єктів cars і рядок licensePlate. Функція повинна повернути об’єкт автомобіля з відповідним номерним знаком або null, якщо автомобіль не знайдений.

function findCarByLicensePlate(cars, licensePlate) {
  for (const car of cars) {
    if (car.licensePlate === licensePlate) {
      return car;
    }
  }
  return null;
}

const cars = [
  { model: "Toyota Corolla", licensePlate: "ABC-123" },
  { model: "Honda Civic", licensePlate: "XYZ-456" },
  { model: "Ford Focus", licensePlate: "LMN-789" },
];

console.log(findCarByLicensePlate(cars, "XYZ-456")); // { model: "Honda Civic", licensePlate: "XYZ-456" }
console.log(findCarByLicensePlate(cars, "JKL-000")); // null

console.log("\n");

// Задача 3 (середня)

// Напишіть функцію findEmployeeByName, яка приймає масив об’єктів employees і рядок name. Функція повинна повернути об’єкт співробітника з відповідним ім’ям або null, якщо співробітник не знайдений.

function findEmployeeByName(employees, name) {
  for (const employee of employees) {
    if (employee.name === name) {
      return employee;
    }
  }
  return null;
}

const employees = [
  { id: 1, name: "Alice", position: "Manager" },
  { id: 2, name: "Bob", position: "Developer" },
  { id: 3, name: "Charlie", position: "Designer" },
];

console.log(findEmployeeByName(employees, "Charlie")); // { id: 3, name: "Charlie", position: "Designer" }
console.log(findEmployeeByName(employees, "Eve")); // null

console.log("\n");

// Задача 4 (середня)

// Створіть функцію findItemBySku, яка приймає масив об’єктів inventory і рядок sku. Функція повинна повертати об’єкт товару з відповідним SKU або null, якщо товар не знайдений.

function findItemBySku(inventory, sku) {
  for (const inventor of inventory) {
    if (inventor.sku === sku) {
      return inventor;
    }
  }
  return null;
}

const inventory = [
  { sku: "123-ABC", name: "Laptop", price: 1000 },
  { sku: "456-DEF", name: "Phone", price: 500 },
  { sku: "789-GHI", name: "Tablet", price: 300 },
];

console.log(findItemBySku(inventory, "456-DEF")); // { sku: "456-DEF", name: "Phone", price: 500 }
console.log(findItemBySku(inventory, "000-XYZ")); // null

console.log("\n");

// Задача 5 (складна)

// Напишіть функцію findProductsByBrand, яка приймає масив об’єктів products і рядок brand. Функція повинна повертати масив продуктів, які мають вказаний бренд. Якщо продукти не знайдені, поверніть порожній масив.

function findProductsByBrand(products, brand) {
  let newArr = [];
  for (const product of products) {
    if (product.brand === brand) {
      newArr.push(product);
    }
  }
  return newArr;
}

const products = [
  { name: "Laptop", brand: "Apple", price: 1200 },
  { name: "Phone", brand: "Samsung", price: 800 },
  { name: "Tablet", brand: "Apple", price: 600 },
];

console.log(findProductsByBrand(products, "Apple"));
// [{ name: "Laptop", brand: "Apple", price: 1200 }, { name: "Tablet", brand: "Apple", price: 600 }]
console.log(findProductsByBrand(products, "Sony")); // []

console.log("\n");

// Задача 6 (складна)

// Створіть функцію findStudentsByGrade, яка приймає масив об’єктів students і рядок grade. Функція повинна повертати масив студентів із вказаною оцінкою. Якщо жоден студент не знайдений, поверніть порожній масив.

function findStudentsByGrade(allStudents, grade) {
  let studentsArr = [];
  for (const student of allStudents) {
    if (student.grade === grade) {
      studentsArr.push(student);
    }
  }
  return studentsArr;
}

const allStudents = [
  { id: 1, name: "Alice", grade: "A" },
  { id: 2, name: "Bob", grade: "B" },
  { id: 3, name: "Charlie", grade: "A" },
  { id: 4, name: "David", grade: "C" },
];

console.log(findStudentsByGrade(allStudents, "A"));
// [{ id: 1, name: "Alice", grade: "A" }, { id: 3, name: "Charlie", grade: "A" }]
console.log(findStudentsByGrade(allStudents, "D")); // []

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі допоможуть вам розвинути навички пошуку об’єктів у масиві на основі значень властивостей, а також роботи з масивами та умовами.
