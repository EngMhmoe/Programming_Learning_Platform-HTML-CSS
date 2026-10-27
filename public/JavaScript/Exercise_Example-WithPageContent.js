/* ==========================================================
   Step 1 ==>  Start Exercise Example
========================================================== */

// Select Exercise Elements 
const exerciseOptions = document.querySelectorAll(".exercise-option");

const exerciseAnswer = document.getElementById("exerciseAnswer");

const exerciseResult = document.getElementById("exerciseResult");



/* //////////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////////////////////////////// */



// Exercise Logic
if (exerciseOptions.length && exerciseResult) {

    exerciseOptions.forEach((option) => {

        option.addEventListener("click", () => {

            // Get Selected Answer
            const selectedAnswer = option.dataset.answer;

            // Get Current Exercise
            const exercise = option.closest(".exercise-preview");

            // Get Correct Answer
            const correctAnswer = exercise.dataset.correctAnswer;



            /* ////////////////////////////////////////////////////////////// */
            /* ////////////////////////////////////////////////////////////// */



            // Remove Previous States
            exerciseOptions.forEach((item) => {

                item.classList.remove(
                    "correct",
                    "wrong"
                );

            });



            /* ////////////////////////////////////////////////////////////// */
            /* ////////////////////////////////////////////////////////////// */



            // Check Answer
            if (selectedAnswer === correctAnswer) {

                // Correct Answer
                option.classList.add("correct");


                /* ==================================================
                   Home Exercise Answer Slot
                   Only exists on Home
                ================================================== */
                if (exerciseAnswer) {
                    exerciseAnswer.textContent = correctAnswer;
                }


                // Exercise Result
                exerciseResult.textContent = "Correct! Well done.";
                exerciseResult.className = "exercise-result correct-result";

            } 
            else {

                // Wrong Answer
                option.classList.add("wrong");


                /* ==================================================
                   Home Exercise Answer Slot
                   Only exists on Home
                ================================================== */
                if (exerciseAnswer) {
                    exerciseAnswer.textContent = selectedAnswer;
                }


                // Exercise Result
                exerciseResult.textContent = "Not quite. Try again.";
                exerciseResult.className = "exercise-result wrong-result";

            }

        });

    });

}

/* ==========================================================
   Step 2 ==>  End Exercise Example
========================================================== */