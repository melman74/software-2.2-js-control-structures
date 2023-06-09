//Write JS code that solve the following problems
//Q1. Using an if-else statement, determine if a number is divisible by 3, by 5, or both.

let q1test = 15;

//Add code here
if (q1test % 3 === 0 && q1test % 5 === 0) {
    console.log(`${q1test} is divisible by both 3 and 5.`);
} else if (q1test % 3 === 0) {
    console.log(`${q1test} is divisible by 3 only.`);
} else if (q1test % 5 === 0) {
    console.log(`${q1test} is divisible by 5 only.`);
} else {
    console.log(`${q1test} is not divisible by either 3 or 5.`);
};

//Q2. Using an if-else statement, determine is a year is a leap year or not.
//Research what are the conditions to be considered a leap year.

//Conditions for leap year are as follows:
// 1. The year is evenly divisible by 4;
// 2. If the year can be evenly divided by 100, it is NOT a leap year, unless;
// 3. The year is also evenly divisible by 400. Then it is a leap year.

//note that year 1900 is the key one to test for the 2nd condition.
//1900 is not supposed to be a leap year!

//let year = 1999;   //not a leap year
//let year = 2000;   //is a leap year
let year = 1900;     //not a leap year
//let year = 2024;   //is a leap year

//Add code here

if (year % 4 === 0 && year % 100 !== 0) {
    console.log(`${year} is a leap year.`);
//Note it would be redundant to restate the condition that year % 4 === 0
//because if year % 100 === 0, then year % 4 === 0 is already implied.
} else if (year % 100 === 0 && year % 400 === 0) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
};



//Q3. Use a loop to print all the numbers from 1 to 100 that are divisible by 3 or 4.

//Add code here

for (let i = 1; i<=100; i++) {
    if (i % 3 === 0 || i % 4 === 0) {
        console.log(`${i} is divisible by 3 or 4.`);
        //Including commented code to specifically state which numbers are divisible by 3 and 4.
        //commented it out because it's not necessary for the assignment and because the output
        //is a bit voluminous.  Though I did test it and it seems to work.
        // if (i % 3 === 0 && i % 4 === 0) {
        //     console.log(`${i} is divisible by both 3 and 4.`);
        // } else if (i % 3 === 0) {
        //     console.log(`${i} is divisible by 3 only.`);
        // } else {
        //     console.log(`${i} is divisible by 4 only.`);
        // };
    };
};