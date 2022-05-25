# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: Overall, a parameter and an argument refer to the same data. When creating a function, a parameter will be the naming convention that acts as the value that is passed in the function. When invoking the function, data may be passed into a function as an argument. The value of the parameter is based on what is passed into the function as an argument. 

  Researched answer: A parameter is a placeholder variable that is definied INSIDE the the parentheses of the function expression  where it may be leveraged/utilized anywhere within the function logic. An argument is the actual value that is passed to the function when the function is invoked. The parameter is then assigned this value.

  - Reference: [Functions Overview](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/javascript/functions.md)



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: The predefined parameters within the .map() method are: value, index, and array. From experience, the value parameter is the most common parameter that I have worked with the most and I guess also believe that is the only required parameter. I haven't found much use with the index and array parameters although I do not believe that they are any less useful. Typically, the value parameter reflects the data that I want to work with while I am working with objects or commonly used JSON files.

  Researched answer: Both higher order functions have three built-in parameters. The name for the parameters are arbitrary, but the order will always be the same. A first argument, value, is required and the other two arguments index and array are optional.

  - Reference: [Higher Order Functions](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/javascript/higher-order-functions.md)



3. What is the difference between map and filter?

  Your answer: The `map` higher order function iterates through an array and outputs an array of the same length of the original array. With `map` you are also able to modify each of the values as well as add whatever you feel to this new array. The `filter` higher order function also iterates through an array and outputs an array as well. However, it is common that the length of this will be shorter than the original array that this method is being used on. The functionality of the `filter` method corresponds to the name of the method. It filters contents of an array and creates a new array based on the conditional statement. If the statement results to true, the current value will be added to the newly created array. If false, the current value is ignored and will not be added tothe array

  Researched answer:
  - "The .map() function iterates through an array and returns a new array of the same length."
  - "The .filter() function loops through an array and returns a new array with only the values that are truthy or the values that satisfy your stated condition. Filter will return a subset of the given array."
  - The .map method function **WILL DO SOMETHING TO EACH ELEMENT** in an array and will return an array of the same length as the original array
  - The .filter method **MAKES A DECISION ABOUT EACH ITEM** in an array and commonly returns a subset based on a conditional
  
  - Reference: [Higher Order Functions](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/javascript/higher-order-functions.md)




4. What is the difference between a function and a method?

  Your answer: The main difference between functions and methods is that methods are functions that are directly tied to a certain type of object. Methods are similar to functions where they execute a code blcok when invoked. However, methods can only be used to the object that they are bound to.

  Researched answer: A function is called a method when it specifically belongs to an Object

  - Reference: [Objects](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/javascript/objects.md)



5. What is object destructuring?

  Your answer: Object destructuring is a quick way gain access to a specific area of an object. From experience, you can assign a variable with a special destructering syntax which looks like this `{ keyname }`. By setting the value to a path to the property of an object you gain direct access to that value of that key / value pair. Destructuring can lead to cleaner code.

  Researched answer: Destructuring allows you to unpack values into their own indivdual variables. When destructuring an object, you are taking the properties of an object and breaking them down into individual, reusable variables.

  - Reference: [Objects](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/javascript/objects.md)



6. STRETCH: What is hoisting in JavaScript?

  Your answer: I have heard the term hoisting in my carrer but I am totally blanking out on exactly what it is or its definition.

  Researched answer: Hosting is where code (a variable) can be used before it is declared. "Hosting is JavaScript's default behavior of moving all declarations to the top of the current scope." I am now reminded of using functions. When working on a code document, code typically runs from top to bottom. However, there are certain pieces of code that are special where for example a function can be used even if it is declared at the very bottom of a code base. However, is it overall important to declare your variable at the top.

  - Reference: [Hoisting](https://www.w3schools.com/js/js_hoisting.asp)


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance:
- The world has a lot of "objects" but there are also different kinds of an "object". Take an automobile for example. There are a variety of automobiles that come in different colors, sizes, models, number of tires, etc the list goes on. The idea behind Class Inheritance is that a parent class should be somewhat generic like the word automobile. Creating a child class / subclass is where Class Inheritance comes in. A child class / subclass should be a more specific version of the parent class where all of the data from the parent class is still relevant. Furthermore, child classes that inherit from their parent classes have access to all of the properties and methods of their parent class.
- Reference: [Class Inheritance](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/javascript/class-inheritance.md)

2. React:
- React is a JavaScript library used to create user interfaces. 2 main concepts of React are that everything is a component and webpages are REACTive user interactions are handled quickly and efficiently without reloading the webpage reducing the overall cost of an interaction.
- Components in react are similar to functions in that every component returns something. Components return JSX that contain logic and display components which both contribute to the display of information as well as interaction on the contents of a webpage.
- Reference: [React Overview](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/react/intro.md)

3. React state:
- "State is an object that stores a component's data that determines how the component renders and behaves."
- When components are used, the state of a component may be changed in ways that the developer chooses, this allows components to be dynamic. If a component holds data in a state object, it is then reffered to as a `logic component`. Components without a state object are known as `display components`
- Reference: [React State](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/react/state.md)

4. React lifecycle methods:
- It is important to understand the big picture of React.
- Mounting is when a component is put into the DOM
- Updating is when a component or state of a component is updated
- Unmounting is when a component is removed from the DOM
- In a nutshell, contents of a webpage are altered at different times based on the current stage of the lifecycle.
- Reference: [React Lifecycle Methods](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/react/component-lifecycle.md)

5. DOM:
- Document Object Model
- The DOM refers to the visual representation of the code (a webpage). As a developer we can target this document object. When targeted, we are able to configure the document object which will ultimately alter the contents/assets of the webpage.
- Reference: [React Overview](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/react/intro.md)
