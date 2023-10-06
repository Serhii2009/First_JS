// ----- Example 1 -------

// let order = [34, 50, 3, 4, 5];
// console.log(calculateTotalPrice(order));

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }

// ----- Example 2 -------

// let firstArray = ['Artem', 'Serhii'];
// let secondArray = ['Dima', 'Lorak'];
// let maxLength = 3;
// console.log(makeArray(firstArray, secondArray, maxLength));

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     newArray = newArray.slice(0, maxLength);
//   }
//   return newArray;
// }

// ----- Example 3 -------

// let min = 50;
// let max = 99;
// console.log(createArrayOfNumbers(min, max));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }

//   return numbers;
// }

// ----- Example 4 -------

// function getSum() {
//   let sum = 0;
//   const arr = Array.from(arguments);
//   console.log(arr.slice(2, 4));
// }

// const result = getSum(2, 3, 4, 5, 6);
// console.log(result);

// ----- Example 5 -------

// function getSum(...args) {
//   let sum = 0;
//   for (const item of args) {
//     sum += item;
//   }
//   return sum;
// }

// const result = getSum(2, 3, 4, 5, 6);
// console.log(result);

// ----- Example 6 -------

// function checkFruit(fruit) {
//   if (fruits.includes(fruit.toLowerCase())) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.log(fruits.includes('ApPle'.toLowerCase()));
// console.log(fruits.includes('pear'.toLowerCase()));
// console.log(fruits.includes('lavanda'.toLowerCase()));

// ----- Example 7 -------

// function getCommonElements(array1, array2) {
//   // Створюємо новий масив для зберігання спільних елементів
//   let commonElements = [];

//   // Перевіряємо кожен елемент з першого масиву
//   for (let i = 0; i < array1.length; i++) {
//     let currentElement = array1[i];

//     // Перевіряємо, чи присутній поточний елемент у другому масиві
//     if (array2.includes(currentElement)) {
//       // Якщо так, то додаємо його до нового масиву
//       commonElements.push(currentElement);
//     }
//   }

//   // Повертаємо новий масив зі спільними елементами
//   return commonElements;
// }

// let array1 = [6, 8, 3];
// let array2 = [0, 8, 5, 3];

// console.log(getCommonElements(array1, array2));

// ----- Example 8 -------

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// ----- Example 9 -------

// const words = ['apple', 'banana', 'cherry', 'date'];
// const searchString = 'banana';

// function includesWord(array, value) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(includesWord(words, searchString)); // Виведе true, оскільки рядок "banana" є у масиві.

// ----- Example 10 -------

// ✅ Логічно і синтаксично згруповані сутності

// const bookShelf = {
//   books: ['The Last Kingdom', 'Dream Guardian'],
//   // Це метод об'єкта
//   getBooks() {
//     console.log('Цей метод буде повертати всі книги - властивість books');
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log('Цей метод буде додавати нову книгу у властивість books');
//   },
// };

// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook('Нова книга');

// ----- Example 11 -------

// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook('The Mist');
// bookShelf.addBook('Dream Guardian');
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook('The Mist');
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// ----- Example 12 -------

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// ----- Example 13 -------

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// Метод Object.create(animal) створює і повертає новий об'єкт, зв'язуючи його з об'єктом animal.
// Тому можна отримати значення властивості legs, звернувшись до нього як dog.legs,
// хоча він відсутній в об'єкті dog - це невласна властивість з об'єкта animal.

// ----- Example 14 -------

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Якщо це власна властивість - виконуємо тіло if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Якщо це невласна властивість - нічого не робимо
// }

// ----- Example 15 -------

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// Вбудований клас Object має декілька корисних методів для роботи з об'єктами.
// Перший з них - це Object.keys(obj), який приймає об'єкт
// і повертає масив ключів його власних властивостей.
// Якщо об'єкт не має властивостей, метод поверне порожній масив.

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// ----- Example 16 -------

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// Or🧐

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total); // 20

// ----- Example 17 -------

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const entries = Object.entries(book);
// console.log(entries);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// Метод Object.entries(obj) повертає масив записів, кожен елемент якого,
//   буде ще один масив з 2 - х елементів:
// імені властивості і значення цієї властивості з об'єкта obj.

// ----- Example 18 -------

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// ----- Example 19 -------

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// ----- Example 20 -------
