/* ==========================================================
   DevPath - Global JavaScript
   Back To Top / Exercises
   ========================================================== */


/* ==========================================================
   Start Back To Top
========================================================== */

const startButton =
    document.getElementById("start");


/* ==========================================================
   Show / Hide Back To Top Button
========================================================== */
if (startButton) {

    window.addEventListener("scroll", () => {

        if (window.scrollY >= 1000) {

            startButton.style.display = "flex";

        } else {

            startButton.style.display = "none";

        }

    });


    /* ======================================================
       Scroll To Top
    ====================================================== */

    function scrollToTop() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* ======================================================
       Back To Top - Click
    ====================================================== */

    startButton.addEventListener(
        "click",
        scrollToTop
    );


    /* ======================================================
       Back To Top - Keyboard
    ====================================================== */

    startButton.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                scrollToTop();

            }

        }
    );

}

/* ==========================================================
   End Back To Top
========================================================== */





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





/* ==========================================================
   Exercise Example
========================================================== */


/* ==========================================================
   Select Exercise Elements
========================================================== */
const exerciseOptions =
    document.querySelectorAll(".exercise-option");

const exerciseAnswer =
    document.getElementById("exerciseAnswer");

const exerciseResult =
    document.getElementById("exerciseResult");


/* ==========================================================
   Exercise Logic
========================================================== */
if (exerciseOptions.length &&exerciseResult) {

    exerciseOptions.forEach((option) => {

        option.addEventListener("click", () => {


            /* ==================================================
               Get Selected Answer
            ================================================== */
            const selectedAnswer =
                option.dataset.answer;


            /* ==================================================
               Get Current Exercise
            ================================================== */
            const exercise =
                option.closest(".exercise-preview");


            /* ==================================================
               Get Correct Answer
            ================================================== */
            const correctAnswer =
                exercise.dataset.correctAnswer;


            /* ==================================================
               Remove Previous States
            ================================================== */
            exerciseOptions.forEach((item) => {

                item.classList.remove(
                    "correct",
                    "wrong"
                );

            });


            /* ==================================================
               Check Answer
            ================================================== */
            if (selectedAnswer === correctAnswer) {


                /* ==================================================
                   Correct Answer
                ================================================== */
                option.classList.add("correct");


                /* ==================================================
                   Home Exercise Answer Slot
                   Only exists on Home
                ================================================== */
                if (exerciseAnswer) {

                    exerciseAnswer.textContent =
                        correctAnswer;

                }


                /* ==================================================
                   Exercise Result
                ================================================== */
                exerciseResult.textContent =
                    "Correct! Well done.";

                exerciseResult.className =
                    "exercise-result correct-result";


            } 
            else {

                /* ==================================================
                   Wrong Answer
                ================================================== */
                option.classList.add("wrong");


                /* ==================================================
                   Home Exercise Answer Slot
                   Only exists on Home
                ================================================== */
                if (exerciseAnswer) {

                    exerciseAnswer.textContent =
                        selectedAnswer;

                }


                /* ==================================================
                   Exercise Result
                ================================================== */
                exerciseResult.textContent =
                    "Not quite. Try again.";

                exerciseResult.className =
                    "exercise-result wrong-result";

            }

        });

    });

}