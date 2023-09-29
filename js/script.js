//let order = [34, 50, 3, 4, 5];
//console.log(calculateTotalPrice(order));

//function calculateTotalPrice(order) {
//let total = 0;
//for (let i = 0; i < order.length; i++) {
//total += order[i];
// }
//return total;
//}

//let firstArray = ['Artem', 'Serhii'];
//let secondArray = ['Dima', 'Lorak'];
//let maxLength = 3;
//console.log(makeArray(firstArray, secondArray, maxLength));

//function makeArray(firstArray, secondArray, maxLength) {
//let newArray = firstArray.concat(secondArray);
//if (newArray.length > maxLength) {
//newArray = newArray.slice(0, maxLength);
//}
//return newArray;
//}

let min = 50;
let max = 99;
console.log(createArrayOfNumbers(min, max));

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }

  // Change code above this line
  return numbers;
}
