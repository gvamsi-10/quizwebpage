const questions = [
    {
        question:"Which is the most successful team in IPL history?",
        answers : [
            { text:"Chennai Super Kings (CSK)" ,answer:"false"},  
            { text:"Mumbai Indians (MI)" ,answer:"true"},
            { text:"Gujarat Titans (GT)" ,answer:"false"},
            { text:"Kolkata Knight Riders (KKR)" ,answer:"false"},
            
        ]
    },
    {
        question:"Who has taken the most number of catches in IPL history?",
        answers : [
            { text:"AB Deviliears" ,answer:"false"},
            { text:"Kieron Pollard" ,answer:"false"},
            { text:"Suresh Raina" ,answer:"true"},
            { text:"Ravindra Jadeja" ,answer:"false"},
            
        ]
    },
    {
        question:"Who won IPL 2023?",
        answers : [
            { text:"Chennai Super Kings (CSK)" ,answer:"true"},
            { text:"Mumbai Indians (MI)" ,answer:"false"},
            { text:"Gujarat Titans (GT)" ,answer:"false"},
            { text:"Kolkata Knight Riders (KKR)" ,answer:"false"},
            
        ]
    },
    {
        question:"How many players are there in a cricket team?",
        answers : [
            { text:"10" ,answer:"false"},
            { text:"11" ,answer:"true"},
            { text:"9" ,answer:"false"},
            { text:"12" ,answer:"false"},
            
        ]
    },
    {
        question:"Who is the captain of CSK At Present?",
        answers : [
            { text:"Suresh Raina" ,answer:"false"},
            { text:"Rutraj Gaikwad" ,answer:"true"},
            { text:"Ravindra Jadeja" ,answer:"false"},
            { text:"MS Dhoni" ,answer:"false"},
            
        ]
    },
    {
        question:"Who has scored the most runs in the history of IPL?",
        answers : [
            { text:"Chris Gayle" ,answer:"false"},
            { text:"Virat Kohli" ,answer:"true"},
            { text:"Suresh Raina" ,answer:"false"},
            { text:"Rohit Sharma" ,answer:"false"},
            
        ]
    },
    {
        question:"Which edition is Indian Premier League (IPL) 2023?",
        answers : [
            { text:"13" ,answer:"false"},
            { text:"14" ,answer:"false"},
            { text:"15" ,answer:"false"},
            { text:"16" ,answer:"true"},
            
        ]
    },
    {
        question:"Which colour cap is awarded for scoring most runs in the tournament?",
        answers : [
            { text:"Green" ,answer:"false"},
            { text:"Orange" ,answer:"true"},
            { text:"Purple" ,answer:"false"},
            { text:"Red" ,answer:"false"},
            
        ]
    },
    {
        question:"What is the full form of IPL?",
        answers : [
            { text:"International Players League" ,answer:"false"},
            { text:"Indian Players League" ,answer:"false"},
            { text:"International premier League" ,answer:"false"},
            { text:"Indian Premier League" ,answer:"true"},
            
        ]
    },
    {
        question:"Which bowler has the highest number of dot balls in the history of IPL?",
        answers : [
            { text:"Bhuvneshwar Kumar" ,answer:"true"},
            { text:"Sunil Narine" ,answer:"false"},
            { text:"Jasprit Bumrah" ,answer:"false"},
            { text:"Rashid Khan" ,answer:"false"},
            
        ]
    },
];

const question = document.getElementById('question');

const option = document.getElementById('options');

const buttons = document.getElementById("block3")

const previousbutton = document.getElementById("pre");

const nextbutton = document.getElementById("nex");




let currentQuestionIndex = 0;
let score = 0

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    showQuestions();
}

function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionNo = currentQuestionIndex + 1;
    question.innerHTML =  questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(ans => {
        const button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("bt");
        option.appendChild(button);
        if(ans.answer){
            button.dataset.answer = ans.answer;
        }
        button.addEventListener('click',selectAnswer);
    });
}

function handleNextPage(){
    if(currentQuestionIndex < questions.length){
        nextPage();
    }
    else{
        nextbutton.style.display = "none";
        // nextbutton.innerHtml = "Next";
        startQuiz();
    }
}

function nextPage(){
    previousbutton.style.display = "block";
    nextbutton.style.display = "none";
    currentQuestionIndex += 1;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }
    else{
        resetState();
        previousbutton.style.display = "none";
        showScore();
    }

}

function showScore(){
    question.innerHTML = `Your Scored ${score} out of ${questions.length}!`;
    nextbutton.style.display = "block";
    nextbutton.innerHTML = "Play Again";
}



function previousPage(){
    currentQuestionIndex -= 1;
    nextbutton.innerHTML = "Next";
    if(currentQuestionIndex === 0){
        previousbutton.style.display = "none";
    }
    showQuestions();
}


function resetState(){
    while(option.firstChild){
        option.removeChild(option.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.answer === "true";
    if(isCorrect){
        selectBtn.classList.add("Correct");
        score++;
    }
    else{
        selectBtn.classList.add("inCorrect");
    }

    Array.from(option.children).forEach(button =>{
        if(button.dataset.answer === "true"){
            button.classList.add("Correct");
        }
        button.disabled = "true";
    });
    nextbutton.innerHTML = "Next";
    nextbutton.style.display = "block";
}

startQuiz();