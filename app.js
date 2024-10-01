//1-misol
// let a = prompt("a sonini kiriting");
// for (let i = 1; i <= a; i++) {
//   console.log(i);
// }
//2-misol
// let a = prompt("a sonini kiriting");
// for (let i = a; i >= 1; i -= 1) {
//   console.log(i);
// }

//3-misol
// let n = prompt("n sonini kiriting");
// let son = 0;
// for (let i = 1; i <= n; i++) {
//   son += i;
// }
// console.log("1 dan " + n + " gacha bo'lgan barcha sonlar yig'indisi: " + son);

// 4 - misol;
// let n = prompt("n sonini kiriting");
// let son = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//     son += i;
//   }
// }
// console.log(
//   "1 dan " + n + " gacha bo'lgan barcha juft sonlar yig'indisi: " + son
// );

//5-misol
// let n = prompt("n sonini kiriting");
// let son = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//     son += i;
//   }
// }
// console.log(
//   "1 dan " + n + " gacha bo'lgan barcha toq sonlar yig'indisi: " + son
// );

// 6-misol
// let n = prompt("Sonni kiriting");
// console.log(n + " sonining bo'luvchilari:");
// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     console.log(i);
//   }
// }

//7-misol
// let n = prompt("Sonni kiriting");
// let son = 0;
// console.log(n + " sonining bo'luvchilari:");
// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     console.log(i);
//     son += i;
//   }
// }
// console.log("sonning boluvchilar yig'indisi:" + son);

//8-misol
// let n = prompt("Sonni kiriting");
// let isPrime = true;

// if (n <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }

// if (isPrime) {
//   console.log(n + " soni tub son.");
// } else {
//   console.log(n + " soni tub emas.");
// }

//////////////////////////////////////////
//for-1
// let k = prompt("k sonini kiriting");
// let n = prompt("n sonini kiriting (n > 0)");
// k = parseInt(k);
// n = parseInt(n);
// if (n > 0) {
//   for (let i = 0; i < n; i++) {
//     console.log(k);
//   }
// } else {
//   console.log("N musbat son bo'lishi kerak.");
// }

//for-2
// let a = prompt("A sonini kiriting");
// let b = prompt("B sonini kiriting");
// let start = Math.min(a, b);
// let end = Math.max(a, b);
// let count = 0;
// console.log("A va B orasidagi butun sonlar:");
// for (let i = start; i <= end; i++) {
//   console.log(i);
//   count++;
// }

//for-3
// let a = prompt("A sonini kiriting ");
// let b = prompt("B sonini kiriting ");
// if (a >= b) {
// } else {
//   console.log("A va B sonlari orasidagi butun sonlar (kamayish tartibida):");
//   for (let i = b - 1; i > a; i--) {
//     console.log(i);
//   }
// }

//for-4
// let a = prompt("Necha kg konfet olmoqchisiz?");
// let sum = 100;
// for (let i = 1; i <= 10; i++) {
//   console.log(i, "kg konfet narxi:", i * sum, "so'm");
// }

//for-5
// let a = prompt("Necha kg konfet olmoqchisiz?");
// let sum = 100;
// for (let i = 0.1; i <= 0.9; i += 0.1) {
//   console.log(i, "kg konfet narxi:", i * sum, "so'm");
// }

//for-6
// let a = prompt("Necha kg konfet olmoqchisiz?");
// let sum = 100;
// for (let i = 1.2; i <= 2; i += 0.1) {
//   console.log(i, "kg konfet narxi:", i * sum, "so'm");
// }

//for-7
// let a = parseInt(prompt("a sonini kiriting "));
// let b = parseInt(prompt("b sonini kiriting "));

// if (a >= b) {
//   console.log("a soni b sonidan kichik bo'lishi kerak.");
// } else {
//   let sum = 0;
//   for (let i = a + 1; i < b; i++) {
//     sum += i;
//   }
//   console.log("a dan b gacha bo'lgan sonlar yig'indisi: " + sum);
// }

//for-8
// let a = parseInt(prompt("a sonini kiriting "));
// let b = parseInt(prompt("b sonini kiriting "));

// if (a >= b) {
//   console.log("a soni b sonidan kichik bo'lishi kerak.");
// } else {
//   let sum = 1;
//   for (let i = a + 1; i < b; i++) {
//     sum *= i;
//   }
//   console.log("a dan b gacha bo'lgan sonlar ko'paytmasi: " + sum);
// }

//for-9
// let a = parseInt(prompt("a sonini kiriting "));
// let b = parseInt(prompt("b sonini kiriting "));
// if (a >= b) {
// } else {
//   let sum = 0;
//   for (let i = a + 1; i < b; i++) {
//     sum += i * i;
//   }
//   console.log("a dan b gacha bo'lgan sonlar kvadartlar yigindisi: " + sum);
// }

//for-10
// let n = prompt("son kiriting");
// if (n > 0);
// {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += 1 / i;
//   }
//   console.log(sum);
// }

//for-11
// let n = prompt("son kiriting");
// if (n > 0) {
//   let sum = 0;
//   for (let i = n; i <= 2 * n; i++) {
//     sum += i * i;
//   }
//   console.log(sum);
// }

//for-12
// let n = prompt("son kiriting");
// if (n > 0) {
//   let sum = 1;
//   for (let i = 1; i <= n; i++) {
//     sum *= 1 + i / 10;
//   }
//   console.log(sum);
// }
