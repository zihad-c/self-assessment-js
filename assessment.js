/* =================================
self assessment of basic javascript 
=================================== */

// =========== declaring a string variable ============
const str1 = 'My Name is Zihad Chowdhury';
// console.log(str1);

const str2 = 'I am a string variable';
// console.log(str2);

// ========== declaring a boolean variable ============
const boolean1 = 5 > 6;
// console.log('5 is greater than 6', boolean1);

const boolean2 = 6 > 5;
// console.log('6 is greater than 5', boolean2);

const boolean3 = 6 <= 5;
// console.log('6 is less or equal to 5', boolean3);

const boolean4 = 6 >= 5;
// console.log('6 is greater or equal to 5', boolean4);

const boolean5 = (6 == 5);
// console.log('6 is equal to 5', boolean5);

const boolean6 = (6 != 5);
// console.log('6 is not equal to 5', boolean6);

// ========== declaring a number variable ==========
const myNum1 = 0;
// console.log(myNum1);

const myNum2 = 101;
// console.log(myNum2);

const myNum3 = 102;
// console.log(myNum3);

const myNum4 = 103;
// console.log(myNum4);

const myNum5 = 10.4;
// console.log(myNum5);

const myNum6 = -10;
// console.log(myNum6);

// ============ changing a value of variable ===============
const num1 = 123;
// console.log('const means a constant number', num1);

let num2 = 1000;
// console.log('let means this is not a constant number', num2);
num2 = 1001;
// console.log('you can change value of let variable', num2);

// ========= simple math calculation of two variables =========

const x = 12;
const y = 5;
// addition 
const a = x + y;
// subtraction 
const s = x - y;
// multiplication
const m = x * y;
// division
const d = x / y;
// modulus
const mod = x % y;
// console.log(x);
// console.log(y);
// console.log(a);
// console.log(s);
// console.log(m);
// console.log(d);
// console.log(mod);

// ========== conditions with if, &&, || ========== 
const year = 2012;

/* if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
    console.log(year, 'this is a leap year');
}
else {
    console.log(year, 'this is not a leap year');
} */

// ======== odd number between 7 & 19 with while loop =========

/* let i = 6;
while (i < 20) {
    i++;
    if (i % 2 == 1) {
        console.log(i, 'is an odd number');
    }
}
 */

/* ===========================================================
declare an Array, find out the length of it, changing the 4th element, add two Elements, remove an element
============================================================= */
let myArray = [32, 25, 81, 0, 19, 36, 75];
// length of the array 
console.log('element number of the array is', myArray.length);
// print the array 
console.log(myArray);
// change the 4th element 
myArray[3] = 20;
console.log(myArray);
// remove an element 
myArray.pop();
// length of the array 
console.log('element number of the array is', myArray.length);
// print the array 
console.log(myArray);
// adding elements 
myArray.push(101);
myArray.push(102, 103);
// print the array 
console.log(myArray);
// again remove an element 
myArray.pop();
// print the array again
console.log(myArray);

/* ====================================================
 print all the elements of an array with using for loop  
======================================================= */
let myArray2 = ['abul', 'rahim', 'karim', 'kuddus', 'jibon', 'sobuj', 'fahim', 'tanvir', 'rahat', 'akash'];
for (i = 0; i < myArray2.length; i++) {
    console.log(myArray2[i]);
}

/* =================================================
 print all the numbers larger than 80 from an array
==================================================== */

let myArray3 = [80, 20, 21, 32, 89, 98, 100, 221, 108, 81];
for (i = 0; i < myArray3.length; i++) {
    if (myArray3[i] > 80) {
        console.log(myArray3[i]);
    }
}

// ======= multiplication of three numbers with return ========
function multi(num1, num2, num3) {
    if (result = num1 * num2 * num3) {
        console.log('the multiplication of these numbers is');
    }
    return result;
}

let myResult = multi(2, 5, 10);
console.log(myResult);

// ========= changing a property value of an object =========

let myObject = { price: 12000, color: 'black', brand: 'Nokia' };
console.log('details of my phone are', myObject);
myObject.price = 13000;
console.log('details of my phone are', myObject);