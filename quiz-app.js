const quiz = [
    {
        question: "What is the purpose of the SQL language in database management?",
        ans1text: "To style and format the data",
        ans2text: "To query and manipulate data in databases",
        ans3text: "To create user interfaces",
        ans4text: "To define the structure of a webpage",
        answer: "To query and manipulate data in databases",
    },
    {
        question: "What does the acronym 'API' stand for in the context of software development?",
        ans1text: "Advanced Programming Interface",
        ans2text: "Application Program Interface",
        ans3text: "Automated Program Integration",
        ans4text: "Adaptive Protocol Integration",
        answer: "Application Program Interface",
    },{
        question: "What does 'CSS' stand for?",
        ans1text: "Computer Style Sheets",
        ans2text: "Cascading Style Sheet",
        ans3text: "Creative Style Sheets",
        ans4text: "Colorful Style Sheets",
        answer: "Cascading Style Sheet",
    },
    {
        question: "Which data structure follows the Last In, First Out (LIFO) principle?",
        ans1text: "Queue",
        ans2text: "Linked List",
        ans3text: "Stack",
        ans4text: "Tree",
        answer: "Stack",

    }
]
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);  
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    if( checkedAns === null){
        alert("Please select an answer");
    }else{
        if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        if( currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
});