
(function () {
    "use strict";

    window.DevPathExercises = window.DevPathExercises || {};
    const app = window.DevPathExercises;

    app.toggleAnswer = function (button) {
        const exercise = button.closest(
            ".exercise-preview[data-exercise-id]"
        );

        if (!exercise) return;

        const id = exercise.dataset.exerciseId;

        // The answer is available only after an attempt.
        if (!app.hasAnswered(id)) return;

        const answer = exercise.querySelector(".exercise-answer");
        if (!answer) return;

        const willShow = answer.hidden;

        answer.hidden = !willShow;
        answer.classList.toggle("show", willShow);

        button.textContent = willShow
            ? "Hide Answer"
            : "Show Answer";

        button.setAttribute(
            "aria-expanded",
            String(willShow)
        );
    };

    app.updateAnswerButton = function (exercise) {
        const button = exercise.querySelector(
            ".show-answer-button"
        );

        if (!button) return;

        const enabled = app.hasAnswered(
            exercise.dataset.exerciseId
        );

        button.disabled = !enabled;
        button.setAttribute(
            "aria-expanded",
            String(
                !exercise.querySelector(".exercise-answer")?.hidden
            )
        );
    };
})();
