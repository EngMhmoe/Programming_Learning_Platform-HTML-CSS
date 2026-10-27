
(function () {
    "use strict";

    window.DevPathExercises = window.DevPathExercises || {};
    const app = window.DevPathExercises;


/////////////////////////////////////////////////////////////////////////////////////////
// app.STORAGE_KEY = "devpath_datastructure_exercises_v1";

app.STORAGE_KEY =
document.documentElement.dataset.exerciseStorageKey ||
"devpath_exercises_progress_v1";
/////////////////////////////////////////////////////////////////////////////////////////


    app.state = {
        completed: {},
        selected: {},
        attempts: {},
        answered: {},
        results: {},
        responses: {}
    };

    app.loadProgress = function () {
        try {
            const saved = localStorage.getItem(app.STORAGE_KEY);
            if (!saved) return;

            const data = JSON.parse(saved);

            app.state.completed = data.completed || {};
            app.state.selected = data.selected || {};
            app.state.attempts = data.attempts || {};
            app.state.answered = data.answered || {};
            app.state.results = data.results || {};
            app.state.responses = data.responses || {};

            // Support progress saved by the previous version.
            Object.keys(app.state.completed).forEach(function (id) {
                if (app.state.completed[id]) {
                    app.state.answered[id] = true;
                }
            });
        } catch (error) {
            console.error("Unable to load exercise progress:", error);

            app.state.completed = {};
            app.state.selected = {};
            app.state.attempts = {};
            app.state.answered = {};
            app.state.results = {};
            app.state.responses = {};
        }
    };

    app.saveProgress = function () {
        try {
            localStorage.setItem(
                app.STORAGE_KEY,
                JSON.stringify({
                    completed: app.state.completed,
                    selected: app.state.selected,
                    attempts: app.state.attempts,
                    answered: app.state.answered,
                    results: app.state.results,
                    responses: app.state.responses
                })
            );
        } catch (error) {
            console.error("Unable to save exercise progress:", error);
        }
    };

    app.markCompleted = function (exerciseId) {
        if (!exerciseId) return;

        app.state.completed[exerciseId] = true;
        app.saveProgress();
        app.updateProgress();
    };

    app.isCompleted = function (exerciseId) {
        return Boolean(app.state.completed[exerciseId]);
    };

    app.hasAnswered = function (exerciseId) {
        return Boolean(app.state.answered[exerciseId]);
    };

    app.getExercises = function (category) {
        return Array.from(
            category.querySelectorAll(
                ".exercise-preview[data-exercise-id]"
            )
        );
    };

    app.updateProgress = function () {
        const exercises = Array.from(
            document.querySelectorAll(
                "#exerciseCategories .exercise-preview[data-exercise-id]"
            )
        );

        const total = exercises.length;

        const completed = exercises.filter(function (exercise) {
            return app.isCompleted(exercise.dataset.exerciseId);
        }).length;

        const percentage = total
            ? Math.round((completed / total) * 100)
            : 0;

        const text = document.getElementById("overallProgressText");
        const percent = document.getElementById("overallProgressPercent");
        const bar = document.getElementById("overallProgressBar");

        if (text) {
            text.textContent = `${completed} / ${total} Completed`;
        }

        if (percent) {
            percent.textContent = `${percentage}%`;
        }

        if (bar) {
            bar.style.width = `${percentage}%`;
            bar.setAttribute("aria-valuenow", String(percentage));
            bar.setAttribute("aria-valuemin", "0");
            bar.setAttribute("aria-valuemax", "100");
        }

        document.querySelectorAll(
            "#exerciseCategories .exercise-category"
        ).forEach(function (category) {
            const exercisesInCategory = app.getExercises(category);

            const completedInCategory = exercisesInCategory.filter(
                function (exercise) {
                    return app.isCompleted(exercise.dataset.exerciseId);
                }
            ).length;

            const count = category.querySelector(
                ".exercise-category-count"
            );

            if (count) {
                count.textContent =
                    `${completedInCategory} / ${exercisesInCategory.length} Completed`;
            }

            category.classList.toggle(
                "category-completed",
                exercisesInCategory.length > 0 &&
                completedInCategory === exercisesInCategory.length
            );
        });
    };

    app.restoreCompletedExercises = function () {
        document.querySelectorAll(
            "#exerciseCategories .exercise-preview[data-exercise-id]"
        ).forEach(function (exercise) {
            if (app.isCompleted(exercise.dataset.exerciseId)) {
                exercise.classList.add("completed");
            }
        });
    };
})();
