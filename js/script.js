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

function getCommonElements(array1, array2) {
  // Створюємо новий масив для зберігання спільних елементів
  let commonElements = [];

  // Перевіряємо кожен елемент з першого масиву
  for (let i = 0; i < array1.length; i++) {
    let currentElement = array1[i];

    // Перевіряємо, чи присутній поточний елемент у другому масиві
    if (array2.includes(currentElement)) {
      // Якщо так, то додаємо його до нового масиву
      commonElements.push(currentElement);
    }
  }

  // Повертаємо новий масив зі спільними елементами
  return commonElements;
}

let array1 = [6, 8, 3];
let array2 = [0, 8, 5, 3];

console.log(getCommonElements(array1, array2));
