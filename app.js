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
// let price = 30000;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}kg ${i * price}`);
// }

// For4. Bir kg konfetning narxi berilgan (haqiqiy son). 1.2, 1.4, ..., 2 kg konfetni narxini chiqaruvchi programma tuzilsin.
// let price = 30000;
// let sum = 1;
// for (let i = 1; i <= 5; i++) {
//   sum += 0.2;
//   console.log(`${sum} kg ${sum * price}`);
// }

// For5. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar yig'indisini chiqaruvchi programma tuzilsin.
// let a = 5;
// let b = 15;
// let y = 0;
// for (let i = a; i < b; i++) {
//   y += i;
// }
// console.log(y);

// For6. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar ko'paytmasini chiqaruvchi programma tuzilsin.
// let a = 5;
// let b = 15;
// let y = 1;
// for (let i = a; i < b; i++) {
//   y += i * y - 1;
//   console.log(y);
// }
// console.log(y);

// For7. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar kvadratlarining yig'indisini chiqaruvchi programma tuzilsin.
// let a = 5;
// let b = 15;
// let y = 0;
// for (let i = a; i < b; i++) {
//   y += i * i;
//   console.log(y);
// }
// console.log(y);

// For8. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin. S=1+1/2+1/3+...+1/n
// let n = 10;
// let s = 0;
// for (let i = 1; i <= n; i++) {
//   s += i + 1;
// }
// console.log(s);

// For9. n butun soni berilgan (n > 0). Quyidagi ko'paytmani hisoblovchi programma tuzilsin. S=1.1*1.2* 1.3*... *n
// let n = 5;
// let s = 1;
// for (let i = 1; i <= n; i++) {
//   s += 0.2;
//   console.log(s);
// }

// For12. n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi programma tuzilsin.
// let n = 10;
// for (let i = 1; i < n; i++) {
//   console.log(i ** 2);
// }

// For17. A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda A soni 1 marta, (A + 1) soni 2 marta chiqariladi va xokazo.

// For18. Sonning barcha bo’luvchilarini, ularning sonini va yig’indisini chiqaruvchi dastur tuzing.
// let b = 20;
// for (let i = 1; i <= b; i++) {
//   if (b % i == 0) {
//     console.log(i);
//   }
// }

// For19. n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.
let n = 3;
let t = 0;
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    t += i;
  }
}
