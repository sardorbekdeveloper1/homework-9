//   UYGA VAZIFA

// obj 1
// const me = {
//     firstName: "Abdulaziz",
//     lastName: "Toshpulatov",
//     age: 23,
//     languages: ["js", "python", "c++", "nodejs"],
//     friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
//   };
  
//   for (let key in me) {
//     if (Array.isArray(me[key])) {
//       console.log(`${key}: ${me[key].join(',')}`);
//     } else {
//       console.log(`${key}: ${me[key]}`);
//     }
//   }
  



// obj 2
// function createSquaredObject(n) {
//     const squaredObject = {};
    
//     for (let i = 1; i <= n; i++) {
//       squaredObject[i] = i * i;
//     }
    
//     return squaredObject;
//   }
  
//   const result = createSquaredObject(5);
//   console.log(result);
  



// obj 3*




// obj 4
// function createLengthObject(arr) {
//     const lengthObject = {};
    
//     for (let i = 0; i < arr.length; i++) {
//       lengthObject[arr[i]] = arr[i].length;
//     }
    
//     return lengthObject;
//   }
  
//   const inputArray = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
//   const result = createLengthObject(inputArray);
//   console.log(result);
  



// obj 5
// const products = {"Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000};
// const productPrices = Object.values(products);

// const totalProducts = productPrices.reduce((total, price) => total + price, 0);
// console.log(totalProducts);




// obj 6
// function defineObject(obj) {
//     for (let key in obj) {
//       if (typeof key !== 'string') {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   const input = {abc: 1, 123: 2, d: 5};
//   const result = defineObject(input);
//   console.log(result);
  



// obj 7
// function removeFalseValues(obj) {
//     const newObj = {};
  
//     for (let key in obj) {
//       if (obj[key] !== false) {
//         newObj[key] = obj[key];
//       }
//     }
  
//     return newObj;
//   }
  
//   const input = { a: false, b: 12, c: true, d: 0 };
//   const result = removeFalseValues(input);
//   console.log(result);
  



// obj 8
// function countRepetitions(arr) {
//     const repetitions = {};
  
//     for (let i = 0; i < arr.length; i++) {
//       const num = arr[i];
//       if (repetitions[num]) {
//         repetitions[num] += 1;
//       } else {
//         repetitions[num] = 1;
//       }
//     }
  
//     const result = {};
//     for (let key in repetitions) {
//       result[key] = repetitions[key];
//     }
  
//     return result;
//   }
  
//   const input = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
//   const output = countRepetitions(input);
//   console.log(output);
  



// obj 9*




// obj 10
// const books = [
//     {
//       title: "Halqa",
//       author: "Akrom Malik",
//       alreadyRead: false,
//     },
//     {
//       title: "Dunyo ishlari",
//       author: "O'tkir Hoshimov",
//       alreadyRead: true,
//     },
//     {
//       title: "Vaqtning qadri",
//       author: "Abdulfattoh Abu G'udda",
//       alreadyRead: false,
//     },
//   ];
  
//   for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     const readStatus = book.alreadyRead ? "o'qilgan" : "o'qilmagan";
//     console.log(`${i + 1}. ${book.author}ning "${book.title}" kitobi ${readStatus};`);
//   }
  



// obj 11
// const products = [
//     { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//     { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//     { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//     { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//     { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
//   ];
  
//   let totalSum = 0;
  
//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     const discountedPrice = product.price * (1 - product.discount / 100);
//     const subtotal = discountedPrice * product.quantity;
//     totalSum += subtotal;
//   }
  
//   console.log(totalSum);
  



// obj 12
// const obj = {
//     "it": 20,
//     "mushuk": 10,
//     "sigir": 200,
//     "tovuq": 2
//   };
  
//   const result = Object.entries(obj).flat();
//   console.log(result);
  



// obj 13
// const grades = [
//     { name: "Fizika", grade: 4, kredit: 6 },
//     { name: "Matematika", grade: 5, kredit: 6 },
//     { name: "Tarix", grade: 4, kredit: 4 },  
//     { name: "Dasturlash", grade: 5, kredit: 8 },
//     { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
//   ];
  
//   function calculateGPA(grades) {
//     let totalGradePoints = 0;
//     let totalCredits = 0;
  
//     for (let i = 0; i < grades.length; i++) {
//       const grade = grades[i];
//       totalGradePoints += grade.grade * grade.kredit;
//       totalCredits += grade.kredit;
//     }
  
//     const GPA = totalGradePoints / totalCredits;
//     return GPA;
//   }
  
//   const result = calculateGPA(grades);
//   console.log(result);
  



// obj 14
// const rightAnswers = { 1: "B", 2: "A", 3: "C", 4: "D", 5: "B", 6: "C", 7: "A", 8: 'D', 9: "A", 10: "B" };
// const myAnswers = {1: "C", 2: "A", 3: "D", 4: "D", 5: "B", 6: "C", 7: "B", 8: "C", 9: "A", 10: "C"};

// function checkAnswers(right, mine) {
//   let correctCount = 0;
//   let wrongCount = 0;
  
//   for (let key in right) {
//     if (right[key] === mine[key]) {
//       correctCount++;
//     } else {
//       wrongCount++;
//     }
//   }

//   return { correct: correctCount, wrong: wrongCount };
// }

// const result = checkAnswers(rightAnswers, myAnswers);
// console.log(`To'g'ri javoblar soni: ${result.correct}, Noto'g'ri javoblar soni: ${result.wrong}`);




// obj 15
// let n = 3;
// const obj = { a: 2, b: 3, c: 4, d: 6 };

// function getMultipleValues(obj, n) {
//   const res = {};

//   for (let key in obj) {
//     res[key] = obj[key] * n;
//   }

//   return res;
// }

// const result = getMultipleValues(obj, n);
// console.log(result);




// obj 16
// const product = {
//     name: "Iphone 14",
//     company: {
//       name: "Apple",
//       price: "200 mlrd",
//       founder: {
//         firstName: "Steve",
//         lastName: "Jobs",
//         birthDate: 1950,
//       },
//     },
//   };
  
//   const {
//     name,
//     company: { name: companyName, price, founder: { firstName, lastName, birthDate } }
//   } = product;
  
//   console.log(name);
//   console.log(companyName);
//   console.log(price);
//   console.log(firstName);
//   console.log(lastName);
//   console.log(birthDate);
  



// obj 17*




// obj 18
// function calculateGrade(grade) {
//     if (grade >= 90 && grade <= 100) {
//       return 5;
//     } else if (grade >= 80 && grade < 90) {
//       return 4;
//     } else if (grade >= 70 && grade < 80) {
//       return 3;
//     } else {
//       return 2;
//     }
//   }
  
//   console.log(calculateGrade(95)); 
//   console.log(calculateGrade(85)); 
//   console.log(calculateGrade(75)); 
//   console.log(calculateGrade(60)); 
  



// obj 19
// function isPassed(grade) {
//     return grade >= 70;
//   }
  
//   console.log(isPassed(75));
//   console.log(isPassed(60)); 
  



// obj 20*








