//let order = [34, 50, 3, 4, 5];
//console.log(calculateTotalPrice(order));

//function calculateTotalPrice(order) {
//let total = 0;
//for (let i = 0; i < order.length; i++) {
//total += order[i];
// }
//return total;
//}

let firstArray = ['Artem', 'Serhii'];
let secondArray = ['Dima', 'Lorak'];
let maxLength = 3;
console.log(makeArray(firstArray, secondArray, maxLength));

function makeArray(firstArray, secondArray, maxLength) {
  let newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
    newArray = newArray.slice(0, maxLength);
  }
  return newArray;
}
