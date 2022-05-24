// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
console.log(cohort.split(""))

// a) Your answer: I think the output will be an array with each individual character being split. From my knowledge, the .split method accepts a parameter that will split the string based on the character you pass as an argument. Since there was no argument passed, the string will be split by each individual character in the string totaling to 10 elements within this array.
// b) Verify and explain: My answer was correct. The output was ['B', 'r', 'a', 'v','o', ' ', '2', '0','2', '2']. Since there was no argument that was passed in, the string was split by each individual character.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: I think that the output will be undefined. It is a necessary for a function to have something to return after the code within the function has been ran. I only see that there is some string interpolation there, however there is no return keyword. Therefore, the function will return an undefined by default.
// b) Verify and explain: My answer was correct. Since there was no return keyword / a value was not returned, the function is programmed to return an undefined data type.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: I think the output will be an array of the same length except this array will contain all of the elements of the original array with each of them multiplied by 2. The .map method is a higher order function that iterates through an array and creates a new array when used. The map method also accepts a anonymous function as an argument. Within this anonymous function, we are able to modify the contents within the array that this method is being used on if we choose to. In this case, each value within the array is multipled by 2 and is stored in the new array being created.
// b) Verify and explain: My answer was correct. The output was [ 8, 10, 12, 14, 16 ]. The .map method created a new array with all of the values of the original array multipled by 2 and assigned it to the variable multBy2.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: I think that the output will be an array with only odd numbers. The .filter method is a higher order function that can be used on arrays. Using this method on an array will iterate through the array and will most likely return an array with a smaller length based on the anonymous function that is passed in as an argument. This anonymous will determine and filter out contents of the original array based on a conditonal. This conditional will typically add the value into the newly created array if the condition results to true. The functionality of this method also corresponds to the name 'filter' it filters through an array taking out the things that we are looking for or need.
// b) Verify and explain: My answer was correct. The output was [ 11, 13, 15 ]. The method .filter created a new array containing only the odd numbers and assigned it to the variable named onlyOdds


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: I think the output will be "JavaScript". There are key / value pairs within an object also known as properties. We are able to access properties of an object by using what is called "dot notation" which looks like this `objectName.property`. Accessing the languages property will let us access its value which is an array that contains the strings "JavaScript" and "Ruby". Since the value of myCodingSkills.languages is an array. We are able to then use "index notation" to get the value at a specific index of an array. In this case, we are using the index of 0. The value at this index is the string "JavaScript".
// b) Verify and explain: My answer was correct, the output was "JavaScript". We accessed a property of an object called languages. The value of this property "languages" was an array containing strings where we then used index notation to access a value at a specified index.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: I think that output of this will return a Learn object with the student property change to george, cohort is Bravo, and year is 2022. A class constuctor is created from lines 62 - 68. There are a few properties created within this constructor that are student, cohort, and year. The constuctor also has a parameter of name which will reflect on the student property. This ultimately makes this constructor dynamic and allows users / devs to enter in a name of their choosing when instantiating a new object. Line 69 declares a new variable named learnStudent and this is assigned a value which is a newly instantiated object that derives from the Learn class. A string with George has also been passed as an argument which changes the value of the student property to George
// b) Verify and explain: The answer I predicted was correct. Logging the variable learnStudent returned an object that was instantiated from the Learn class.
// Output: Learn { student: 'George', cohort: 'Bravo', year: 2022 }

