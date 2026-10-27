
(function () {
    "use strict";

    window.DevPathExercises = window.DevPathExercises || {};
    const app = window.DevPathExercises;

    function restoreExercise(exercise) {
        const id = exercise.dataset.exerciseId;
        const correctOption = exercise.dataset.correctOption;
        const selectedOption = app.state.selected[id];
        const hasAnswered = app.hasAnswered(id);

        const result = exercise.querySelector(".exercise-result");
        const answerButton = exercise.querySelector(
            ".show-answer-button"
        );

        // Restore multiple-choice exercises.
        if (exercise.dataset.type === "mc") {
            const options = exercise.querySelectorAll(
                ".exercise-option"
            );

            options.forEach(function (option) {
                const value = option.dataset.option;

                option.classList.remove(
                    "selected",
                    "correct",
                    "incorrect"
                );

                if (hasAnswered) {
                    option.disabled = true;

                    // Always highlight the correct answer.
                    if (value === correctOption) {
                        option.classList.add("correct");
                    }

                    // Restore the user's original selection.
                    if (value === selectedOption) {
                        option.classList.add("selected");

                        if (value !== correctOption) {
                            option.classList.add("incorrect");
                        }
                    }
                } else {
                    option.disabled = false;
                }
            });
        }

        // Restore fill-in exercises.
        if (exercise.dataset.type === "fill") {
            const input = exercise.querySelector(
                ".exercise-fill-input"
            );

            const form = exercise.querySelector(
                ".exercise-fill-form"
            );

            if (input && Object.prototype.hasOwnProperty.call(
                app.state.responses,
                id
            )) {
                input.value = app.state.responses[id];
            }

            if (input && hasAnswered) {
                const isCorrect = Boolean(app.state.results[id]);

                input.classList.toggle("correct", isCorrect);
                input.classList.toggle("incorrect", !isCorrect);

                if (isCorrect) {
                    input.disabled = true;

                    const submitButton = form?.querySelector(
                        ".exercise-check-button"
                    );

                    if (submitButton) {
                        submitButton.disabled = true;
                    }
                }
            }
        }

        // Restore the result message.
        if (hasAnswered && result) {
            const isCorrect = Boolean(app.state.results[id]);

            app.showResult(exercise, isCorrect);
        } else if (result) {
            result.textContent = "";
            result.classList.remove(
                "show",
                "correct",
                "incorrect"
            );
        }

        // Restore completed state.
        exercise.classList.toggle(
            "completed",
            app.isCompleted(id)
        );

        // Restore answer visibility and button state.
        const answer = exercise.querySelector(".exercise-answer");

        if (answer) {
            answer.hidden = true;
            answer.classList.remove("show");
        }

        if (answerButton) {
            answerButton.textContent = "Show Answer";
            app.updateAnswerButton(exercise);
        }
    }

    function initializeExercises() {
        const container = document.getElementById(
            "exerciseCategories"
        );

        if (!container) return;

        app.loadProgress();

        container.querySelectorAll(
            ".exercise-preview[data-exercise-id]"
        ).forEach(restoreExercise);

        app.updateProgress();



/////////////////////////////////////////////////////////////////////////////////////
const resetAllButton = document.getElementById(
    "exerciseResetAllButton"
);

const resetModalElement = document.getElementById(
    "resetProgressModal"
);

const confirmResetButton = document.getElementById(
    "confirmResetProgressButton"
);

const notificationContainer = document.getElementById(
    "exerciseNotificationContainer"
);

if (
    resetAllButton &&
    resetModalElement &&
    confirmResetButton &&
    notificationContainer
) {
    const resetModal = bootstrap.Modal.getOrCreateInstance(
        resetModalElement
    );

    let resetConfirmed = false;

    function showExerciseNotification(type) {
        const isSuccess = type === "success";

        const notification = document.createElement("div");

        notification.className =
            "exercise-notification" +
            (isSuccess ? "" : " cancelled");

        const icon = document.createElement("i");
        icon.className =
            "bx " +
            (isSuccess ? "bx-check-circle" : "bx-info-circle") +
            " exercise-notification-icon";

        const content = document.createElement("div");
        content.className = "exercise-notification-content";

        const title = document.createElement("h6");
        title.className = "exercise-notification-title";
        title.textContent = isSuccess
            ? "Progress Reset Successfully"
            : "Reset Cancelled";

        const message = document.createElement("p");
        message.className = "exercise-notification-message";
        message.textContent = isSuccess
            ? "All Data exercise progress has been cleared."
            : "Your saved exercise progress has been kept.";

        const closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.className = "exercise-notification-close";
        closeButton.setAttribute("aria-label", "Dismiss notification");
        closeButton.innerHTML = "&times;";

        closeButton.addEventListener("click", function () {
            notification.remove();
        });

        content.append(title, message);
        notification.append(icon, content, closeButton);
        notificationContainer.appendChild(notification);
    }

    resetAllButton.addEventListener("click", function () {
        resetConfirmed = false;
        resetModal.show();
    });

    confirmResetButton.addEventListener("click", function () {
        app.resetAll();

        resetConfirmed = true;
        resetModal.hide();

        showExerciseNotification("success");
    });

    resetModalElement.addEventListener("hidden.bs.modal", function () {
        if (!resetConfirmed) {
            showExerciseNotification("cancelled");
        }

        resetConfirmed = false;
    });
}
/////////////////////////////////////////////////////////////////////////////////////



        container.addEventListener("click", function (event) {
            const option = event.target.closest(
                ".exercise-option"
            );

            if (option && container.contains(option)) {
                app.checkMultipleChoice(option);
                return;
            }

            const answerButton = event.target.closest(
                ".show-answer-button"
            );

            if (answerButton && container.contains(answerButton)) {
                app.toggleAnswer(answerButton);
                return;
            }

            const resetButton = event.target.closest(
                ".exercise-reset-button"
            );

            if (resetButton && container.contains(resetButton)) {
                const category = resetButton.closest(
                    ".exercise-category"
                );

                if (
                    category &&
                    window.confirm(
                        "Reset the progress of this category?"
                    )
                ) {
                    app.resetCategory(category);
                }

                return;
            }

            const resetExerciseButton = event.target.closest(
                ".exercise-reset-single-button"
            );

            if (
                resetExerciseButton &&
                container.contains(resetExerciseButton)
            ) {
                const exercise = resetExerciseButton.closest(
                    ".exercise-preview"
                );

                if (
                    exercise &&
                    window.confirm("Reset this exercise?")
                ) {
                    app.resetExercise(exercise);
                    app.saveProgress();
                    app.updateProgress();
                }
            }
        });

        container.addEventListener("submit", function (event) {
            const form = event.target.closest(
                ".exercise-fill-form"
            );

            if (!form || !container.contains(form)) return;

            event.preventDefault();
            app.checkFillAnswer(form);
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initializeExercises
        );
    } else {
        initializeExercises();
    }
})();
