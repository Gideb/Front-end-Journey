

/* 
const question1 = {
  category: "question category",
  question: "question",
  choices: ["string1", "string2", "string3"],
  answer: "string2",
}

const question2 = {
  category: "question2 category",
  question: "question2",
  choices: ["string1", "string2", "string3"],
  answer: "string1",
}
const question3 = {
  category: "question3 category",
  question: "question3",
  choices: ["string1", "string2", "string3"],
  answer: "string2",
}
const question4 = {
  category: "question4 category",
  question: "question4",
  choices: ["string1", "string2", "string3"],
  answer: "string3",
}
const question5 = {
  category: "question5 category",
  question: "question5",
  choices: ["string1", "string2", "string3"],
  answer: "string1",
} 

const questions = [question1, question2, question3, question4, question5];


function getRandomQuestion(questions) {
  let result = Math.floor(Math.random() * questions.length);
  return questions[result];
}
console.log(getRandomQuestion(questions));

function getRandomComputerChoice(choices) {
  choices =  Math.floor(Math.random() * question1.choices);
  if (getRandomQuestion(questions) == question1) {
  return question1.choices[choices];
  }
  else if (getRandomQuestion(questions) == question2) {
  return question2.choices[choices];
  }
  else if (getRandomQuestion(questions) == question3) {
  return question3.choices[choices];
  }
  else if (getRandomQuestion(questions) == question4) {
  return question4.choices[choices];
  }
  else {
  return question5.choices[choices];
  }
}

console.log(getRandomComputerChoice(questions.choices));

function getResults(questions, choices) {  
  if (choices == questions.answer){
    return "The computer's choice is correct!"
  }else {
    return `The computer's choice is wrong. The correct answer is: ${questions.answer}`;
  }
}


console.log(getResults(question1, "string3"));
*/

// Step 1: Create the questions array
const questions = [
  {
    category: 'JavaScript',
    question: 'Which method adds an element to the end of an array?',
    choices: ['push()', 'shift()', 'pop()'],
    answer: 'push()'
  },
  {
    category: 'HTML',
    question: 'What does the <p> tag define?',
    choices: ['A paragraph', 'A table', 'An image'],
    answer: 'A paragraph'
  },
  {
    category: 'CSS',
    question: 'Which property changes the background color?',
    choices: ['background-color', 'font-weight', 'text-align'],
    answer: 'background-color'
  },
  {
    category: 'General Knowledge',
    question: 'What is the capital of Germany?',
    choices: ['Berlin', 'Paris', 'Rome'],
    answer: 'Berlin'
  },
  {
    category: 'Math',
    question: 'What is the square root of 64?',
    choices: ['8', '6', '10'],
    answer: '8'
  }
];

// Step 2: Function to get a random question
function getRandomQuestion(questionsArray) {
  const index = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[index];
}

// Step 3: Function to get a random computer choice from choices array
function getRandomComputerChoice(choices) {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

// Step 4: Function to evaluate result
function getResults(questionObject, computerChoice) {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
}


const question = getRandomQuestion(questions);
const computerAnswer = getRandomComputerChoice(question.choices);
const result = getResults(question, computerAnswer);
console.log(question.question);
console.log('Computer chose:', computerAnswer);
console.log(result);


