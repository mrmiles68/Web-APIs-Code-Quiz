// Define variables
var prevNum = []
var questionsPosed = 0
var whichAns = [0, 0, 0, 0]
var chosen = [-1, -1, -1, -1]
var topAces = ["WIZ - 2", "MRX - 1", "DRX - 2", "JAM - 4"]
topAces = window.localStorage;
var topFour = 0
var countDown = 60
var numRight = 0
var numWrong = 0
var question = [
    {
        text: "What is JSON?",
        answers: [

            {
                text: "An Argonaut",
                correct: false
            },
            {
                text: "JavaScript Object Notation",
                correct: true
            },
            {
                text: "JavaScript Standard Nodule",
                correct: false
            },
            {
                text: "Javascript ONclick",
                correct: false
            }
        ]
    },
    {
        text: "What is a URL?",
        answers: [
            {
                text: "United Revolving Limiter",
                correct: false
            },
            {
                text: "Uniform Resource Locator",
                correct: true
            },
            {
                text: "Underwriters Remark Lab",
                correct: false
            },
            {
                text: "Utilitarian Return Line",
                correct: false
            }
        ]
    },

    {
        text: "What is the DOM?",
        answers: [
            {
                text: "Determined Orientation Mode",
                correct: false
            },
            {
                text: "Document Object Model",
                correct: true
            },
            {
                text: "Designated Oral Message",
                correct: false
            },
            {
                text: "Deferred Origin Mount",
                correct: false
            }
        ]
    },
    {
        text: "What is NOT a git command?",
        answers: [
            {
                text: "Git Pull",
                correct: false
            },
            {
                text: "Git Fix",
                correct: true
            },
            {
                text: "Git Commit",
                correct: false
            },
            {
                text: "Git Add",
                correct: false
            }
        ]
    },

    {
        text: "What is an API?",
        answers: [
            {
                text: "Assisted Professional Isolation",
                correct: false
            },
            {
                text: "Application Programming Interface",
                correct: true
            },
            {
                text: "Arranged Previous Iteration",
                correct: false
            },
            {
                text: "Analog Pirate Interference",
                correct: false
            }
        ]
    }
]
// Define functions



// return displayAnswer()

// function shuffleArray(array) {
//     for (var i = whichAns.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = whichAns[i];
//         whichAns[i] = whichAns[j];
//         whichAns[j] = temp;
//     }
//     shuffleArray()
//     console.log("randomized: " + whichAns);

const randomQuestion = function () {
    whichQuest = Math.floor(Math.random() * 4);
}
const randomAnswer = function () {
    for (j = 0; j < 4; j++) {
        const ranNum = Math.floor(Math.random() * 3)
        whichAns[j] = ranNum
    }
}
// const randomNumber = function () {

// for (j = 0; j < 4; j++) {
//     const ranNum = Math.floor(Math.random() * 3)
//     console.log("iteration " + j)
//     console.log("choice " + ranNum)
//     if (whichAns.includes(ranNum)) {
//         return randomAnswer();
//     } else {
//         whichAns.push(ranNum)
//         return ranNum;
//             // double check that above line isn't actually randomNumber()
// }
// }


// }
// }

function endGame() {
    // alert("Times up!" + "\n \n Number correct: " + numRight + "  Number Wrong: " + numWrong);
    var highScore = prompt("Enter your initials", "AAA");

    if (highScore != null) {
    }
    var topAces = ["WIZ - 2", "MRX - 1", "DRX - 2", "JAM - 4"]
    // var highScore = "AAA"
    var tippyTop = numRight.toString();
    var divider = " - ";
    topScore = divider.concat(tippyTop)
    if (topFour > 4) {
        topFour = 4
    }
    console.log("number of aces " + topFour)
    console.log("correct answers " + topScore)
    console.log("initals provided " + highScore)
    topAces[topFour] = highScore.concat(topScore)

    for (i = 0; i < 4; i++) {
        document.getElementById("askQuestion").innerHTML = "API Aces:"
        document.getElementById("button1").innerHTML = "" + topAces[0]
        document.getElementById("button2").innerHTML = "" + topAces[1]
        document.getElementById("button3").innerHTML = "" + topAces[2]
        document.getElementById("button4").innerHTML = "" + topAces[3]
    }
    topAces++;
    for (k = 0; k < 3; k++)
        topAces[k] = window.localStorage;
    console.log(topAces[k]);
}

function getItRight() {

    if (question[whichQuest].answers[whichAns[0]].correct && button1 || question[whichQuest].answers[whichAns[1]].correct && button2
        || question[whichQuest].answers[whichAns[2]].correct && button3 || question[whichQuest].answers[whichAns[3]].correct && button4) {

        numRight++;
        document.getElementById("ansRight").style.backgroundColor = "green"
        displayAnswer()
        console.log("right")
    } else {
        numWrong++;
        document.getElementById("ansWrong").style.backgroundColor = "red"
        displayAnswer()
        console.log("wrong")
    }
}
function displayAnswer() {
    // button1 = false; button2 = false; button3 = false; button4 = false;
    questionsPosed++

    setTimeout(function () {
        document.getElementById("ansRight").style.backgroundColor = "navy"
        document.getElementById("ansWrong").style.backgroundColor = "oldlace"
    }, 500);
    // for (i = 0; i < 5; i++) {

    // if () {
    //     endGame()
    // }


    randomQuestion();
    randomAnswer();
    // shuffleArray()
    console.log("randomized: " + whichAns);


    document.getElementById("askQuestion").innerHTML = "" + question[whichQuest].text;
    document.getElementById("button1").innerHTML = "" + question[whichQuest].answers[whichAns[0]].text;
    document.getElementById("button2").innerHTML = "" + question[whichQuest].answers[whichAns[1]].text;
    document.getElementById("button3").innerHTML = "" + question[whichQuest].answers[whichAns[2]].text;
    document.getElementById("button4").innerHTML = "" + question[whichQuest].answers[whichAns[3]].text;

    document.getElementById("button1").addEventListener("click", getItRight);
    document.getElementById("button2").addEventListener("click", getItRight);
    document.getElementById("button3").addEventListener("click", getItRight);
    document.getElementById("button4").addEventListener("click", getItRight);


    document.getElementById("ansRight").innerHTML = "Correct: " + numRight;
    document.getElementById("ansWrong").innerHTML = "Wrong: " + numWrong;
    // document.getElementById("timer").innerHTML = "Timer: " + countDown;
}
// }

// document.getElementById("startButton").addEventListener("click", displayAnswer());

document.getElementById("startButton").addEventListener("click", displayAnswer);
const timeCount = setInterval(function () {
    if (countDown <= 0 || questionsPosed > 5) {
        clearInterval(timeCount);
        endGame();
    }
    document.getElementById("testTimer").innerHTML = "Time: " + (countDown);
    countDown -= 1;
}, 1000);