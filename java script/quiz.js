const questionsArray = [
     {
    category :"Science",
    question :"What is the chemical equation for water?",
    choices :["H2O", "O2", "CO2"],
    answer : "H20"
     },
     {
    category :"Math",
    question :"What is the result of adding two and three?",
    choices :["7", "5", "6"],
    answer : "5"
     },
     {
    category :"English",
    question :"What color is the sky on a clear day?",
    choices :["Green", "Blue", "Pink"],
    answer : "Blue"
     },
     {
    category :"Social",
    question :"Which is the largest continent by area?",
    choices :["Arfica", "Europe", "Asia"],
    answer : "Asia"
     },
     {
    category :"Computer science",
    question :"which language is primarily used for web devlopment?",
    choices :["Python", "HTML", "C"],
    answer : "HTML"
         }
]

function getRandomQuestion(questionArray) {
    const randomNumber = Math.floor(Math.random() * questionsArray.length);
    console.log("randomNumber", randomNumber);
    const question =questionsArray[randomNUmber];
    console.loh("question", question);
    return question
}

function getRandomComputerChoice(choicesArray){
    const randomChoiceIndex = Math.floor(Math.random() * choicesArray.length);
    console.log("randomChoiceIndex", randomChoiceIndex);
    const randomChoice = choicesArray[randomChoiceIndex]
    console.log("randomChoice", randomChoice);
    return randomChoice
}

function getResults(questionObject, computerChoice){
    console.log("questionObject", questionObject);
    console.log("computerChoice", computerChoice);
    if(computerChoice === questionObject.answer){
        return "Computer Choice is Correct"
    }else{
        return `Answer is wrong, right answer is ${questionObject.answer}`
    }
}

const randomQuestion = getRandomQuestion(questions);
const randomChoice = getRandomQuestion(randomQuestion.choices)
const answer = getResults(randomQuestion, randomChoice)
console.log("random question", randomQuestion.question);
console.log("computer choice", randomChoice);
console.log("answer", answer);