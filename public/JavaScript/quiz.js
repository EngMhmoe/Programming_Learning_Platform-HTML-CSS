/* ==========================================================
   DevPath - C# Quiz
   Quiz Questions / Score
   ========================================================== */


/* ==========================================================
   Get All Questions
========================================================== */

const exercises =
    document.querySelectorAll(".exercise-preview");


/* ==========================================================
   Quiz Variables
========================================================== */

let currentQuestion = 0;

let score = 0;


/* ==========================================================
   Get Score Elements
========================================================== */

const quizScore =
    document.getElementById("quizScore");

const quizScorePercent =
    document.getElementById("quizScorePercent");

const quizScoreBar =
    document.getElementById("quizScoreBar");


const quizFinalResult =
    document.getElementById("quizFinalResult");

const quizFinalScore =
    document.getElementById("quizFinalScore");

const quizFinalMessage =
    document.getElementById("quizFinalMessage");


/* ==========================================================
   Start Quiz
========================================================== */

if (exercises.length) {


    /* ======================================================
       Hide All Questions Except First
    ====================================================== */

    exercises.forEach((exercise, index) => {

        if (index !== 0) {

            exercise.classList.add("hidden");

        }

    });


    /* ======================================================
       Start Each Question
    ====================================================== */

    exercises.forEach((exercise) => {


        /* ==================================================
           Get Question Options
        ================================================== */

        const options =
            exercise.querySelectorAll(".exercise-option");


        /* ==================================================
           Get Question Result
        ================================================== */

        const result =
            exercise.querySelector(".exercise-result");


        /* ==================================================
           Add Click To Every Option
        ================================================== */

        options.forEach((option) => {


            option.addEventListener("click", () => {


                /* ==========================================
                   Stop If Question Is Already Answered
                ========================================== */

                if (
                    exercise.classList.contains("answered")
                ) {

                    return;

                }


                /* ==========================================
                   Get User Answer
                ========================================== */

                const selectedAnswer =
                    option.dataset.answer;


                /* ==========================================
                   Get Correct Answer
                ========================================== */

                const correctAnswer =
                    exercise.dataset.correctAnswer;


                /* ==========================================
                   Lock Current Question
                ========================================== */

                exercise.classList.add("answered");


                /* ==========================================
                   Disable All Options
                ========================================== */

                options.forEach((item) => {

                    item.disabled = true;

                });


                /* ==========================================
                   Check Answer
                ========================================== */

                if (
                    selectedAnswer === correctAnswer
                ) {


                    /* ======================================
                       Correct Answer
                    ====================================== */

                    option.classList.add("correct");


                    score++;


                    result.textContent =
                        "Correct! Well done.";


                    result.className =
                        "exercise-result correct-result";


                } else {


                    /* ======================================
                       Wrong Answer
                    ====================================== */

                    option.classList.add("wrong");


                    options.forEach((item) => {

                        if (
                            item.dataset.answer ===
                            correctAnswer
                        ) {

                            item.classList.add("correct");

                        }

                    });


                    result.textContent =
                        "Not quite. Try again.";


                    result.className =
                        "exercise-result wrong-result";

                }


                /* ==========================================
                   Update Score
                ========================================== */

                updateScore();


                /* ==========================================
                   Move To Next Question
                ========================================== */

                currentQuestion++;


                if (
                    currentQuestion < exercises.length
                ) {


                    /* ======================================
                       Open Next Question
                    ====================================== */

                    setTimeout(() => {

                        exercises[
                            currentQuestion
                        ].classList.remove("hidden");


                        exercises[
                            currentQuestion
                        ].scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });


                    }, 600);


                } else {


                    /* ======================================
                       Quiz Finished
                    ====================================== */

                    setTimeout(() => {

                        showFinalResult();

                    }, 700);

                }

            });

        });

    });

}


/* ==========================================================
   Update Score
========================================================== */

function updateScore() {


    const percentage =
        Math.round(
            (score / exercises.length) * 100
        );


    quizScore.textContent =
        `${score} / ${exercises.length}`;


    quizScorePercent.textContent =
        `${percentage}%`;


    quizScoreBar.style.width =
        `${percentage}%`;

}


/* ==========================================================
   Show Final Result
========================================================== */

function showFinalResult() {


    quizFinalScore.textContent =
        `${score} / ${exercises.length}`;


    if (score === exercises.length) {

        quizFinalMessage.textContent =
            "Perfect score! Excellent work.";

    } else if (score >= 10) {

        quizFinalMessage.textContent =
            "Great job! You have a good understanding of C#.";

    } else if (score >= 5) {

        quizFinalMessage.textContent =
            "Good effort! Keep practicing C#.";

    } else {

        quizFinalMessage.textContent =
            "Keep learning and try the quiz again.";

    }


    quizFinalResult.classList.add("show");


    quizFinalResult.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}