
(function () {
    "use strict";

    window.DevPathExercises = window.DevPathExercises || {};
    const app = window.DevPathExercises;

    app.showResult = function (exercise, isCorrect) {
        const result = exercise.querySelector(".exercise-result");
        if (!result) return;

        result.textContent = isCorrect
            ? "Correct answer! Well done."
            : "Incorrect answer. The correct answer is highlighted in green.";

        result.classList.remove("correct", "incorrect");
        result.classList.add(
            "show",
            isCorrect ? "correct" : "incorrect"
        );

        result.setAttribute("role", "status");
    };

    app.recordAttempt = function (exercise) {
        const id = exercise.dataset.exerciseId;
        if (!id) return;

        app.state.attempts[id] =
            (Number(app.state.attempts[id]) || 0) + 1;
    };

    app.lockMultipleChoice = function (exercise, selectedOption) {
        const id = exercise.dataset.exerciseId;
        const correctOption = exercise.dataset.correctOption;

        exercise.querySelectorAll(".exercise-option").forEach(
            function (option) {
                const optionValue = option.dataset.option;

                option.disabled = true;
                option.classList.remove(
                    "selected",
                    "correct",
                    "incorrect"
                );

                if (optionValue === correctOption) {
                    option.classList.add("correct");
                }

                if (option === selectedOption) {
                    option.classList.add("selected");

                    if (optionValue !== correctOption) {
                        option.classList.add("incorrect");
                    }
                }
            }
        );

        app.state.selected[id] = selectedOption.dataset.option;
        app.state.answered[id] = true;

        const isCorrect =
            selectedOption.dataset.option === correctOption;

        app.state.results[id] = isCorrect;

        if (isCorrect) {
            exercise.classList.add("completed");
            app.state.completed[id] = true;
        } else {
            exercise.classList.remove("completed");
            delete app.state.completed[id];
        }

        const answerButton = exercise.querySelector(
            ".show-answer-button"
        );

        if (answerButton) {
            answerButton.disabled = false;
        }

        app.showResult(exercise, isCorrect);
        app.saveProgress();
        app.updateProgress();
    };

    app.checkMultipleChoice = function (option) {
        const exercise = option.closest(
            ".exercise-preview[data-exercise-id]"
        );

        if (!exercise) return;

        const id = exercise.dataset.exerciseId;

        // Prevent changing an answer after the first selection.
        if (app.hasAnswered(id)) return;

        const selected = option.dataset.option;
        const correct = exercise.dataset.correctOption;

        if (!selected || !correct) return;

        app.recordAttempt(exercise);
        app.lockMultipleChoice(exercise, option);
    };

    app.checkFillAnswer = function (form) {
        const exercise = form.closest(
            ".exercise-preview[data-exercise-id]"
        );

        if (!exercise) return;

        const id = exercise.dataset.exerciseId;

        if (app.isCompleted(id)) return;

        const input = form.querySelector(".exercise-fill-input");
        if (!input) return;

        const acceptedAnswers = (
            exercise.dataset.acceptedAnswers || ""
        )
            .split("|")
            .map(function (answer) {
                return app.normalizeAnswer(answer);
            })
            .filter(Boolean);

        const userAnswer = app.normalizeAnswer(input.value);

        if (!userAnswer) {
            input.focus();
            return;
        }

        app.recordAttempt(exercise);

        app.state.responses[id] = input.value;
        app.state.answered[id] = true;

        const isCorrect = acceptedAnswers.includes(userAnswer);

        app.state.results[id] = isCorrect;

        input.classList.toggle("correct", isCorrect);
        input.classList.toggle("incorrect", !isCorrect);

        const answerButton = exercise.querySelector(
            ".show-answer-button"
        );

        if (answerButton) {
            answerButton.disabled = false;
        }

        app.showResult(exercise, isCorrect);

        if (isCorrect) {
            exercise.classList.add("completed");
            app.state.completed[id] = true;

            input.disabled = true;

            const submitButton = form.querySelector(
                ".exercise-check-button"
            );

            if (submitButton) {
                submitButton.disabled = true;
            }
        }

        app.saveProgress();
        app.updateProgress();
    };

    app.normalizeAnswer = function (answer) {
        return String(answer || "")
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "");
    };
})();
