// / 1. Write a program to display the message “Hello World” 5 times
// in your browser using for loop.


/// answer
// let username ="hello world"
// let ul = document.querySelector('ul')

// for(let i = 1; i <= 5; i++){
//     ul.innerHTML += `<li>${"hello world"} ${i}</li>`
// }


// 2. Write a program to print numeric counting from 1 to 10.
for (let i = 1; i <=10; i++) {
  console.log(i);
    const element = [i];
    
}




// / 3. Write a program to print multiplication table of any number
// using for loop. Table number & length should be taken as an
// input from user.


// let number = +prompt("enter your number!")
// let length = +prompt("time is golden")
// for(let i = 1;i <=10; i++){
//     console.log(`${number} x ${i} = ${number*i}`);
// }


//4 . You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop


// let mobliename =["oppo","iphone","tecno","redmi","vivo"]
// let ul = document.querySelector('ul')
// for (let i =0;i < mobliename.length; i++) {
//    ul.innerHTML +=`<li>${mobliename[i]}</li>`
    
// }

//5 Write a program to print items of the following array using for 
// loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”
// let fruits =['apple',"banana",'mango',"orange","strawberry"]
// let ul = document.querySelector('ul')
// let para = document.querySelector('orderlist')
// for (let i = 0; i < fruits.length; i++) {
//   ul.innerHTML +=`<li>Element at index $['apple',"banana",'mango',"orange","strawberry"]</li>`
    
// }




//6 Generate the following series in your browser. See example 
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//counting
// console.log("<h3>counting</h3>");
// for(let i=1;i <=15; i++){
//     console.log(i +',');

// }
//b.Resverse counting:
// console.log("<h3>counting</h3>");
// for (let i = 10; i >=1; i--) {
//     console.log(i +",");
    
// }

//c.even:
// console.log('Even');
// for(let i=0;i <= 20; i+=2){
//     console.log(i +",");
// }

//d.odd:
// console.log('odd');
// for(let i=1;i <=20; i+=2){
//     console.log(i +',');
// }

//e.series:
// console.log('series');
// for(let i=2;i <=20; i+=2)
// console.log(i +'k');





///You have an array
//7 A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is 
// found in the list or not. Example:



// let bakery =['cake', 'apple','pie' , 'cookie', 'chips', 'patties']
// const userinput = prompt("enter any item!")
// let isavailable = false;


// for(let i= 0;i <bakery.length; i++){
//     if(userinput === bakery[i]){
//         console.log("item avaiable hein!");
//         isavailable = true
//     }
// }if(isavailable === false){
//     console.log('item available nahi hein malik!');
// }

///9. Write a program to identify the largest number in the given 
// array.
// A = [24, 53, 78, 91, 12

// let number =[24,53,78,91,12]
// let smallestnumber = number[0];
// for(let i=1;i <number.length; i++){
//     if(number[i] < smallestnumber){
//         smallestnumber = number[i];
//     }
// }
// console.log("arry item: "+number +"");
// console.log('this smallest number is 91 + smallestnumber');

//10Write a program to identify the smallest number in the given 
// array.
// A = [24, 53, 78, 91, 12
// let number =[24,53,78,91,12]
// let smallestnumber = number[0];
// for(let i=1;i <number.length; i++){
//     if(number[i] < smallestnumber){
//         smallestnumber = number[i];
//     }
// }
// console.log("arry item: "+number +"");
// console.log('this smallest number is 12 + smallestnumber');

//11Write a program to identify the largest & the smallest
// number in the given array.
// A = [24, 53, 78, 91, 12]
//     let number =[24,53,78,91,12]
//     let smallestnumber = number[0];
//     for(let i=1;i <number.length; i++){
//         if(number[i] < smallestnumber){
//             smallestnumber = number[i];
//         }
//     }
//     console.log("arry item: "+number +"");
//     console.log('this smallest number is 12 + smallestnumber');
//     console.log('this largest number is 91 + largestnumber');

    //12. Write a program to print multiples of 5 ranging 1 to 10
    // for(let i=5;i <=100;i +=5){
    //     console.log(i +",");
    // }


///13You have given the following arrays:
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90]    


// var students =["asad","jawad","haseeb","talha"]
// var scores =[58,73,89,90]
// for(let i=0;i <students.length; i++){
//     console.log(`${students[i]} scored ${scores[i]} marks.`);
// }


///14Write a program that prints number from start of the array
// to desired stop value. Given array:
// var scores = [12, 45, 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 3

// var scores = [12, 45, 3, 22, 34, 50];

// var stopValue = parseInt(prompt("Enter the stop value:"));

// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] <= stopValue) {
//         console.log(scores[i]);
//     } else {
//         break; 
//     }
// }


///15Write a program to initialize an array of N items by using 
// prompt. Where N is number of items as entered by the user
// let ul = document.querySelector('ul')
// let para = document.querySelector('para')
// let uservalue =+ prompt("enter number of item!")
//  Head.innerHTML =`number of Item: ${uservalue};
// for(let i=1;i <=uservalue; i++){
//     let item = prompt("enter item name");
//     paragraph.innerHTML += <li>${item}</li>
// }


///16You have an array
// A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// Write each element on new line with the help of nested for 
// loops


// let num = parseFloat(prompt("Enter a number:"));
// if (isNaN(num)) {
//     console.log("Invalid input. Please enter a valid number.");
// } else {
   
//     while (num > 0) {
//         console.log(num);
//         num -= 0.5;
//     }
// }

///17Write a program to repeatedly print the value of the variable 
// num which is input by user. Value should be decreasing by 0.5 
// each time, as long as x Value remains positive

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is rich`);
//     } else {
//         console.log(`${i} is poor`);
//     }
// }

// ///18Write a program to calculate the product of the odd integers 
// from 1 to 7.

// let product = 1;

// for (let i = 1; i <= 7; i++) {
    
//     if (i % 2 !== 0) {
//         product *= i;
//     }
// }
// console.log("Product of odd integers from 1 to 7:", product);

//19Write a program that will write out a wedge of stars. The user 
// will enter the initial number of stars, and the program will write 
// out lines of stars where each line has one few star than the 
// previous line. Initial number of stars: 
let num = 10;
for(let i = num;i >= 1; i--){
    let str = "";
    for(let j= 0; j <i; j++){
        str += '*';
        console.log(str);
    }
}


///20. Write a program to create the following patterns in your 
// browser. Take number of lines as an input.
// a. *****
// *****
// *****
// *****
// b. *
// **
// ***
// ****
// *****
// c. *****
// ****
// ***
// **


const numLines = parseInt(prompt("Enter the number of lines:"));

  document.write("<strong>Pattern 1:</strong><br>");
  for (let i = 1; i <= numLines; i++) {
    for (let j = 1; j <= i; j++) {
      document.write("*");
    }
    document.write("<br>");
  }
  document.write("<br>");


  document.write("<strong>Pattern 2:</strong><br>");
  for (let i = numLines; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      document.write("*");
    }
    document.write("<br>");
  }














    
    



