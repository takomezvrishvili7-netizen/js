
//----------------------------1----------------


// let age = Number(prompt("შეიყვანეთ თქვენი ასაკი:"));
// let currentYear = Number(prompt("შეიყვანეთ მიმდინარე წელი:"));
// let birthYear = Number(prompt("შეიყვანეთ დაბადების წელი:"));

// let result = currentYear - birthYear;

// console.log(result);



//--------------------------------2----------------
// let age = Number(prompt("შეიყვანეთ თქვენი ასაკი"));
// let student = confirm("გაქვთ თუ არა სტუდენტის სტატუსი?");

// let result = age >= 18 && student;

// console.log(result);


//---------------------------------3----------------
// let amount = Number(prompt("შეიყვანეთ შეკვეთის თანხა"));
// let promoCode = confirm("გაქვთ თუ არა პრომოკოდი?");

// let discount = 0;

// if (amount > 100 && promoCode) {
//     discount = 20;
// } 
// else if (amount > 100 && !promoCode) {
//     discount = 10;
// } 
// else if (amount >= 50 && amount <= 100 && promoCode) {
//     discount = 5;
// } 
// else {
//     discount = 0;
// }

// console.log(discount);



//-------------------------------4------------------------
// let age = Number(prompt("შეიყვანეთ თქვენი ასაკი"));
// let experience = Number(prompt("შეიყვანეთ თამაშის გამოცდილების წლები"));
// let vip = confirm("გაქვთ თუ არა VIP სტატუსი?");

// if (age >= 18) {
//     if (experience >= 2) {
//         console.log("შეგიძლიათ ტურნირში მონაწილეობა");
//     } else {
//         console.log("შეგიძლიათ მხოლოდ დამწყებთა ტურნირში მონაწილეობა");
//     }
// }
// else if (age < 18 && vip) {
//     console.log("შეგიძლიათ სპეციალურ საბავშვო ტურნირში მონაწილეობა");
// }
// else {
//     console.log("რეგისტრაცია მიუწვდომელია");
// }


//------------------------------5--------------------
// let num1 = Number(prompt("შეიყვანეთ პირველი რიცხვი"));
// let num2 = Number(prompt("შეიყვანეთ მეორე რიცხვი"));
// let operator = prompt("შეიყვანეთ ოპერაცია (+, -, *, /, %)");

// let result;

// switch (operator) {
//     case "+":
//         result = num1 + num2;
//         break;

//     case "-":
//         result = num1 - num2;
//         break;

//     case "*":
//         result = num1 * num2;
//         break;

//     case "/":
//         if (num2 !== 0) {
//             result = num1 / num2;
//         } else {
//             result = "ნულზე გაყოფა არ შეიძლება";
//         }
//         break;

//     case "%":
//         if (num2 !== 0) {
//             result = num1 % num2;
//         } else {
//             result = "ნულზე გაყოფა არ შეიძლება";
//         }
//         break;

//     default:
//         result = "არასწორი ოპერაცია";
// }

// console.log(result);



//-----------------------------6-----------------------------
// let age = Number(prompt("შეიყვანეთ თქვენი ასაკი"));

// let result = age >= 18 ? "სრულწლოვანი ხართ" : "არასრულწლოვანი ხართ";

// alert(result);