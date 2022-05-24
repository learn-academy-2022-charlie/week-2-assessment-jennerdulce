// ASSESSMENT 2: Coding Practical Questions with Jest

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

describe("mult3 Test Suite", () => {
    it("should return an array with all the numbers multipled by 3.", () => {
        const numbersArray1 = [6, 7, 8, 9, 10]
        const numbersArray2 = [24, 27, 30, 33, 36]
        expect(mult3(numbersArray1)).toEqual([18, 21, 24, 27, 30])
        expect(mult3(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
})


// b) Create the function that makes the test pass.

const mult3 = (arrOfNums) => {
    return arrOfNums.map(value => {
        return value * 3
    })
}


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// const num1 = 15
// Expected output: "15 is divisible by three"
// const num2 = 0
// Expected output: "0 is divisible by three"
// const num3 = -7
// Expected output: "-7 is not divisible by three"

// Use the basic test format to create a test suite using Jest
    // describe: Name the test suite appropriately
    // it: Should decide if the number is evenly divisble by three or not
    // expect: Invoke the function "divisibleByThree" with the test variables passed in as arguments
    // toEqual: Pass the expected output as an argument

describe("divisibleByThree Test Suite", () => {
    it("should decide if the number is evenly divisble by three or not", () => {
        const num1 = 15
        const num2 = 0
        const num3 = -7
        expect(divisibleByThree(num1)).toEqual("15 is divisible by three")
        expect(divisibleByThree(num2)).toEqual("0 is divisible by three")
        expect(divisibleByThree(num3)).toEqual("-7 is not divisible by three")
    })
})


// b) Create the function that makes the test pass.

// Create a function
    // Will name the function "divisicbleByThree"
    // Has 1 parameter that will accept an integer, will name this parameter "num"
// Within the function
    // Use a ternery operator to determine if the value of the argument is divisible by 3
        // Return is the string `${num} is divisible by three` if divisible by 3 of statement is true
        // Else return `${num} is not divisible by three`

const divisibleByThree = (num) => {
    return num % 3 === 0 ? `${num} is divisible by three` : `${num} is not divisible by three`
}


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// Use the basic test format to create a test suite using Jest
    // describe: Name the test suite appropriately
    // it: Should return an array with all the words capitalized
    // expect: Invoke the function "capitalize" with the test variables passed in as arguments
    // toEqual: Pass the expected output as an argument

describe("capitalize Test Suite", () => {
    it("should return an array with all the words capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
        expect(capitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        )
        expect(capitalize(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
        )
    })
})


// b) Create the function that makes the test pass.

// Create a function
    // Will name this function capitalize
    // Has 1 parameter that will accept an array of strings, will name this parameter "arrOfStrings"
// Within the function
    // Use the .map method on the named parameter which will iterate through each of the values of this passed in array of strings
    // For each value of the array
        // Create a variable that will store the first character, will name this variable "firstLetter"
            // Use the .toUpperCase method on this character to capitalize the letter
        // Create a variable that will hold the rest of the string starting at index 1, will name this variable "restOfString"
            // Use the .slice method on the current value and pass in 1 as an argument
        // Concatenate the strings "firstLetter" and "restOfString" and return
// Return the newly created array with its new values

const capitalize = (arrOfStrings) => {
    return arrOfStrings.map(value => {
        let firstLetter = value.charAt(0).toUpperCase()
        let restOfString = value.slice(1)
        return firstLetter + restOfString
    })
}


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// const vowelTester1 = "learn"
// Expected output: 1
// const vowelTester2 = "academy"
// Expected output: 0
// const vowelTester3 = "challenges"
// Expected output: 2

// Use the basic test format to create a test suite using Jest
    // describe: Name the test suite appropriately
    // it: Should return the index of the first vowel
    // expect: Invoke the function "findFirstVowel" with the test variables passed in as arguments
    // toEqual: Pass the expected output as an argument

describe("Test Suite", () => {
    it("should return the index of the first vowel", () => {
        const vowelTester1 = "learn"
        const vowelTester2 = "academy"
        const vowelTester3 = "challenges"
        const vowelTester4 = "ytrxz"
        expect(findFirstVowel(vowelTester1)).toEqual(1)
        expect(findFirstVowel(vowelTester2)).toEqual(0)
        expect(findFirstVowel(vowelTester3)).toEqual(2)
        expect(findFirstVowel(vowelTester4)).toEqual("No vowel found")
    })
})


// b) Create the function that makes the test pass.

// Create a function
    // Will name function findFirstVowel
    // Has 1 parameter that will accept a string, will name this parameter "givenString"
// Within the function
    // Create a variable to store the value of the string split into an array, will name this variable "stringToArray"
        // Use the .split method on the givenString parameter to split the string into an array
    // Use a for loop to iterate through the "stringToArray"
        // Create a conditional with a strict equality operator to check and see if each value if the string is equal to characters "a", "e","i", "o", "u"
            // Return the index if true
// Return "No vowel found" if the string contains no vowels

const findFirstVowel = (givenString) => {
    let stringToArray = givenString.split("")
    for(let i = 0; i < stringToArray.length; i++){
        if( stringToArray[i] === "a" ||
            stringToArray[i] === "e" ||
            stringToArray[i] === "i" ||
            stringToArray[i] === "o" ||
            stringToArray[i] === "u"){
                return i
            }
    }
    return "No vowel found"
}