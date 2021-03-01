function displayAnswer() {
    for (i = 0; i < 5; i++) {
        whichQuest = Math.floor(Math.random() * 5);
        console.log(whichQuest + " was selected");
        // const whichAns = [-1,-1,-1,-1];

        // prevNum[i] = whichQuest;
        // Array.whichAns.apply(null, Array(5)).map(function () { return Math.floor(Math.random() * 4 % 4); })
        // console.log(whichAns[1] + " was selected answer")
        // console.log(whichAns[2] + " was selected answer")
        // console.log(whichAns[3] + " was selected answer")
        // console.log(whichAns[4] + " was selected answer")

        for (j = 0; j < 4; j++) {
            const randomNumber = function () {
                const ranNum = Math.floor(Math.random() * 4)
                console.log("iteration " + j)
                console.log("choice " + ranNum)
                if (whichAns[j].includes(ranNum)) {
                    return randomNumber();
                } else {
                    whichAns[j].push(ranNum)
                    return randomNumber();
                    // double check that above line isn't actually randomNumber()
                }
            }

            console.log("first random is:" + whichAns[1])
            console.log(" next random is:" + whichAns[2])
            console.log(" next random is:" + whichAns[3])
            console.log(" next random is:" + whichAns[4])
            // which = Math.floor(Math.random() * 4);
            // whichAns[j] = which;
        }


        const randomNumber = function () {
            const ranNum = Math.floor(Math.random() * 4)
            console.log("iteration " + j)
            console.log("choice " + ranNum)
            if (whichAns[j].includes(ranNum)) {
                return randomNumber();
            } else {
                whichAns[j].push(ranNum)
                return randomNumber();
                // double check that above line isn't actually randomNumber()
            }
        }
        var prevNum = []
        var whichAns = [0, 0, 0, 0]
        var chosen = [-1, -1, -1, -1]
        var countDown = 0
        var numRight = 0
        var numWrong = 0
        var nright = ""
        var nwrong = ""
        var cdown = ""
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
        document.getElementById("startButton").addEventListener("click", displayAnswer());

        function getItRight() {
            console.log("hello world")
            if (question[whichQuest].answers[whichAns[0]].correct) {
                numRight++

            } else { numWrong++ }
        }

