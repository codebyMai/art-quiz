// elements selection

let start = document.getElementById("start");
let quiz = document.getElementById("quiz");
let question = document.getElementById("question");
let art = document.getElementById("art");
let answerA = document.getElementById("A");
let answerB = document.getElementById("B");
let answerC = document.getElementById("C");

// list of questions 

let questions = [
    {
        question : "The artist was known for his love of cats and unconventional fashion choices. Who painted this portrait?",
        art : "assets/images/gklimt.png",
        answerA : "Gustav Klimt",
        answerB : "Edouardo Manet",
        answerC : "Pablo Picasso",
        correct : "A",
        right : "uuuu",
        wrong : "eee"
    },
    
    
];
// question variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;


// display question
function displayQuestion(){
    let i = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ i.question +"</p>";
    art.innerHTML = "<img src="+ i.art +">";
    answerA.innerHTML = i.answerA;
    answerB.innerHTML = i.answerB;
    answerC.innerHTML = i.answerC; 
}

// start quiz

start.addEventListener("click",startQuiz);


function startQuiz(){
    start.style.display = "none";
    displayQuestion();
    quiz.style.display = "block";
}

// restart quiz

function reStartQuiz(){
    start.style.display = "block";
    displayQuestion();
    quiz.style.display = "none";
    score = 0;
    runningQuestion = 0;
}

// check answers

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++;
        alert("Well done! You know your art!");
    }else{
        alert("Better luck next time!");
    }

    if(runningQuestion < lastQuestion){
        runningQuestion++;
        displayQuestion();
    }else{
        // display score and restart quiz
        displayScore();
        reStartQuiz();
    }
} 
// display score alert 

function displayScore(){
    const scorePerCent = Math.round(100 * score/questions.length);
    alert(`You got ${ scorePerCent } % right!`);
}
