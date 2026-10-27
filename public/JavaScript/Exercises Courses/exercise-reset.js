
(function () {
    "use strict";

    window.DevPathExercises = window.DevPathExercises || {};
    const app = window.DevPathExercises;

app.resetExercise = function (exercise) {
        const id = exercise.dataset.exerciseId;
        if (!id) return;

        delete app.state.completed[id];
        delete app.state.selected[id];
        delete app.state.attempts[id];
        delete app.state.answered[id];
        delete app.state.results[id];
        delete app.state.responses[id];

        exercise.classList.remove("completed");

        exercise.querySelectorAll(
            ".exercise-option"
        ).forEach(function (option) {
            option.disabled = false;

            option.classList.remove(
                "selected",
                "correct",
                "incorrect"
            );
        });

        const input = exercise.querySelector(
            ".exercise-fill-input"
        );

        if (input) {
            input.value = "";
            input.disabled = false;

            input.classList.remove("correct", "incorrect");
        }

        const formButton = exercise.querySelector(
            ".exercise-check-button"
        );

        if (formButton) {
            formButton.disabled = false;
        }

        const result = exercise.querySelector(
            ".exercise-result"
        );

        if (result) {
            result.textContent = "";

            result.classList.remove(
                "show",
                "correct",
                "incorrect"
            );
        }

        const answer = exercise.querySelector(
            ".exercise-answer"
        );

        if (answer) {
            answer.hidden = true;
            answer.classList.remove("show");
        }

        const answerButton = exercise.querySelector(
            ".show-answer-button"
        );

        if (answerButton) {
            answerButton.textContent = "Show Answer";
            answerButton.disabled = true;
            answerButton.setAttribute("aria-expanded", "false");
        }
};

    
app.resetAll = function () {
    const container = document.getElementById("exerciseCategories");
    if (!container) return;

    app.getExercises(container).forEach(function (exercise) {
        app.resetExercise(exercise);
    });

    // Clear all saved progress for this course only.
    app.state.completed = {};
    app.state.selected = {};
    app.state.attempts = {};
    app.state.answered = {};
    app.state.results = {};
    app.state.responses = {};

    app.saveProgress();
    app.updateProgress();
};


app.resetCategory = function (category) {
        if (!category) return;

        app.getExercises(category).forEach(function (exercise) {
            app.resetExercise(exercise);
        });

        app.saveProgress();
        app.updateProgress();
};
    
})();
