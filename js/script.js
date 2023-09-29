let order = [34, 50, 3, 4, 5];
console.log(calculateTotalPrice(order));

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (let i = 0; i < order.length; i++) {
    total += order[i];
  }

  // Change code above this line
  return total;
}
