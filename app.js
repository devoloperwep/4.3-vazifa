// For1. k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi programma tuzilsin.
// let k = 10;
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   console.log(k);
// }

// For2. Bir kg konfetning narxi berilgan (haqiqiy son). 0.1, 0.2, …, 0.9, 1 kg konfetni narxini chiqaruvchi programma tuzilsin.
// let price = 12000;
// for (let i = 1; i <= 10; i++) {
//   if (i == 10) {
//     console.log(`${i / 10} kg konvet ${(i / 10) * price} so'm`);
//   } else {
//     console.log(`${i / 10} gram konvet ${(i / 10) * price} so'm`);
//   }
// }

// For3. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin.
// S = n^2 +(n+1)^2+(n+2)^2 + ... +(2*n)^2
// let n = 10;
// let s = 0;
// for (let i = n; i <= 2 * n; i++) {
//   s += i * i;
// }
// console.log(s);

// For5. A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda har bir son o'zining qiymaticha chiqarilsin. Ya'ni 3 soni 3 marta chiqariladi.
// let a = 1;
// let b = 10;
// for (let i = a; i <= b; i++) {
//   let line = "";
//   for (let j = 0; j < i; j++) {
//     line += i + " ";
//   }
//   console.log(line.trim());
// }

// For6. Sonning bo’luvchilarini topish;
// let son = 20;
// for (let i = 1; i <= son; i++) {
//   if (son % i == 0) {
//     console.log(i);
//   }
// }

// For1. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin. (a va b xam chiqarilsin).
// let a = 1;
// let b = 5;
// for (let i = a; i <= b; i++) {
//   console.log(i);
// }

// For2. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b dan tashqari) kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi progma tuzilsin.
// let a = 1;
// let b = 5;
// for (let i = b - 1; i > a; i--) {
//   console.log(i);
// }

// For3. Bir kg konfetning narxi berilgan (haqiqiy son). 1, 2, 10 kg konfetni narxini chiqaruvchi programma tuzilsin.
let price = 30000;
for (let i = 1; i <= 10; i++) {
  console.log(`${i}kg ${i * price}`);
}
