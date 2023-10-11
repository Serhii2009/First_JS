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

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
// };

// // Додамо зображення обкладинки, якщо воно відсутнє в об'єкті книги
// const {
//   title,
//   coverImage = 'https://via.placeholder.com/640/480',
//   author,
// } = book;

// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.placeholder.com/640/480

// ----- Example 21 -------

// const firstBook = {
//   title: 'The Last Kingdom',
//   coverImage:
//     'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = 'https://via.placeholder.com/640/480',
// } = firstBook;

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: 'Сон смішної людини',
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = 'https://via.placeholder.com/640/480',
// } = secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480

// Такий запис читається як «Створити змінну firstTitle,
// в яку помістити значення властивості title з об'єкта firstBook» тощо.

// ----- Example 22 -------

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// ----- Example 23 -------

// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// ----- Example 24 -------

// const rgb = [200, 255, 100];

// const [red, ...colors] = rgb;

// console.log(red); // "200"
// console.log(colors); // [255, 100]

// ----- Example 25 -------

// const rgb = [200, 100, 255];

// const [, , blue] = rgb;

// console.log(`Blue: ${blue}`); // "Blue: 255"

// ----- Example 26 -------

// function doStuffWithBook({
//   title,
//   numberOfPages,
//   downloads,
//   rating,
//   isPublic,
// }) {
//   console.log(title);
//   console.log(numberOfPages);
//   // І так далі
// }

// ----- Example 27 -------

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// ----- Example 28 ------- ВАЖЛИВО!!!

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// console.log(highToday);
// console.log(lowToday);
// console.log(todayIcon);
// console.log(highTomorrow);
// console.log(lowTomorrow);
// console.log(tomorrowIcon);

// ----- Example 29 ------- ВАЖЛИВО!!!

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// ----- Example 30 -------

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);

// ----- Example 31 -------

// function makeTask(data) {
//   const { text, category = 'General', priority = 'Normal' } = data;

//   const task = {
//     text,
//     category,
//     priority,
//     completed: false,
//   };

//   return task;
// }

// console.log(makeTask({}));
// console.log(
//   makeTask({
//     category: 'Homemade',
//     priority: 'Low',
//     text: 'Take out the trash',
//   })
// );
// console.log(makeTask({ category: 'Finance', text: 'Take interest' }));
// console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));
// console.log(makeTask({ text: 'Buy bread' }));

// Розібрати завдання знизу, вони з автопровірки!!!!!!

// ----- Example 32 -------

// function findMatches(arr, ...args) {
//   const matches = [];

//   for (const arg of args) {
//     if (arr.includes(arg)) {
//       matches.push(arg);
//     }
//   }

//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// ----- Example 33 -------

// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

// ----- Example 34 -------

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     const bookIndex = this.books.indexOf(oldName);
//     if (bookIndex !== -1) {
//       this.books[bookIndex] = newName;
//     }
//   },
// };

// ----- Example 35 -------

// const atTheOldToad = {
//   potions: [],
// };

// // Перевірка результату
// console.log(atTheOldToad.potions); // Виведе []

// ----- Example 36 -------

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     const indexToUpdate = this.potions.indexOf(oldName); // Знаходимо індекс зілля за старою назвою
//     if (indexToUpdate !== -1) {
//       this.potions[indexToUpdate] = newName; // Оновлюємо назву за індексом
//     }
//   },
// };

// ----- Example 37 ------- Важливо!!!!!!

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     const potionNames = this.potions.map(potion => potion.name);
//     if (potionNames.includes(newPotion.name)) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     const indexToRemove = this.potions.findIndex(
//       potion => potion.name === potionName
//     );

//     if (indexToRemove === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(indexToRemove, 1);
//   },

//   updatePotionName(oldName, newName) {
//     const potionToUpdate = this.potions.find(potion => potion.name === oldName);

//     if (!potionToUpdate) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     potionToUpdate.name = newName;
//   },
// };

// -
// -
// -
// -
// -
// ❤️МОДУЛЬ 4❤️
// -
// -
// -
// -
// -

// ----- Example 38 -------

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Полі', takeCall, leaveHoloMessage);

// ----- Example 39 -------

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log('Logging value: ', value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаємо printValue як callback-функцію
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаємо prettyPrint як callback-функцію
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// ----- Example 40 -------

// const numbers = [5, 10, 15, 20, 25];

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// // // Класичний for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// // }

// !!!Єдиним випадком, коли варто використовувати цикли for або for...of
// для перебирання масиву, - це задачі з перериванням виконання циклу.
// Перервати виконання методу forEach не можна,
//   він завжди перебирає масив до кінця.!!!

// ----- Example 41 -------

// // До
// // function classicAdd(a, b, c) {
// //   return a + b + c;
// // }

// // Після
// const arrowAdd = (a, b, c) => a + b + c;
// console.log(arrowAdd(1, 4, 5));

// ----- Example 42 -------

// const add = (...args) => {
//   console.log(args);
// };

// add(1, 2, 3); // [1, 2, 3]

// ----- Example 43 -------

// const numbers = [5, 10, 15, 20, 25];

// // Оголошення функції
// // numbers.forEach(function (number, index) {
// //   console.log(`Індекс ${index}, значення ${number}`);
// // });

// // Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// ----- Example 44 -------

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);

// ----- Example 45 -------
