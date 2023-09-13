const productName = 'Ремонтний дроїд';

console.log(productName.includes('н')); // true
console.log(productName.includes('Н')); // false
console.log(productName.includes('дроїд')); // true
console.log(productName.includes('Дроїд')); // false
console.log(productName.includes('Ремонтний')); // true
console.log(productName.includes('ремонтний')); // false
