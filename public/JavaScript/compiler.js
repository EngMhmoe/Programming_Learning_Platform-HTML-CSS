/* ==========================================================
   C# Compiler
   ========================================================== */


/* ==========================================================
   Start Compiler Settings
   ========================================================== */

// Judge0 CE API
const COMPILER_API = "https://ce.judge0.com";

// C# language ID in Judge0 CE
const CSHARP_LANGUAGE_ID = 51;

// Maximum number of attempts to check the result
const MAX_ATTEMPTS = 20;

// Time between checking attempts
const CHECK_DELAY = 1000;


/* ==========================================================
   End Compiler Settings
   ========================================================== */


/* ==========================================================
   Start Selectors
   ========================================================== */

const compilerInput = document.querySelector(".compiler-input");

const runCompiler = document.getElementById("runCompiler");

const clearCompiler = document.getElementById("clearCompiler");

const compilerOutput = document.getElementById("compilerOutput");

const compilerStatus = document.querySelector(".compiler-status");


/* ==========================================================
   End Selectors
   ========================================================== */


/* ==========================================================
   Start Run Compiler
   ========================================================== */

runCompiler.addEventListener("click", async () => {

    // Get the code from the editor
    const code = compilerInput.value.trim();


    // Check if the editor is empty
    if (!code) {

        showOutput("Please write some C# code first.");

        return;
    }


    // Disable the button while the code is running
    setCompilerLoading(true);


    // Show loading message
    showOutput("Compiling and running your code...");


    try {

        // Send the code to Judge0
        const token = await createSubmission(code);


        // Wait for the result
        const result = await getSubmissionResult(token);


        // Display the result
        displayResult(result);

    } catch (error) {

        // Display error message
        showOutput(
            "Something went wrong.\n\n" + error.message
        );

    } finally {

        // Enable the button again
        setCompilerLoading(false);

    }

});


/* ==========================================================
   End Run Compiler
   ========================================================== */


/* ==========================================================
   Start Create Submission
   ========================================================== */

async function createSubmission(code) {

    const response = await fetch(
        `${COMPILER_API}/submissions?base64_encoded=false&wait=false`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                source_code: code,

                language_id: CSHARP_LANGUAGE_ID

            })
        }
    );


    // Check API response
    if (!response.ok) {

        const errorData = await response.json().catch(() => null);

        const errorMessage =
            errorData?.error ||
            "Could not create the submission.";

        throw new Error(errorMessage);
    }


    // Get response data
    const data = await response.json();


    // Check token
    if (!data.token) {

        throw new Error(
            "The compiler did not return a submission token."
        );

    }


    return data.token;
}


/* ==========================================================
   End Create Submission
   ========================================================== */


/* ==========================================================
   Start Get Submission Result
   ========================================================== */

async function getSubmissionResult(token) {

    let attempt = 0;


    while (attempt < MAX_ATTEMPTS) {

        attempt++;


        const response = await fetch(
            `${COMPILER_API}/submissions/${token}?base64_encoded=false`,
            {
                method: "GET"
            }
        );


        // Check API response
        if (!response.ok) {

            throw new Error(
                "Could not get the compiler result."
            );

        }


        // Get result data
        const result = await response.json();


        /*
         * Judge0 statuses:
         *
         * 1 = In Queue
         * 2 = Processing
         * 3+ = Finished
         */

        if (result.status && result.status.id > 2) {

            return result;

        }


        // Wait before checking again
        await wait(CHECK_DELAY);

    }


    throw new Error(
        "The compiler took too long to respond."
    );

}


/* ==========================================================
   End Get Submission Result
   ========================================================== */


/* ==========================================================
   Start Display Result
   ========================================================== */

function displayResult(result) {

    // Compilation error
    if (result.compile_output) {

        showOutput(
            "Compilation Error:\n\n" +
            result.compile_output
        );

        return;
    }


    // Runtime error
    if (result.stderr) {

        showOutput(
            "Runtime Error:\n\n" +
            result.stderr
        );

        return;
    }


    // Program output
    if (result.stdout) {

        showOutput(result.stdout);

        return;
    }


    // Judge0 message
    if (result.message) {

        showOutput(result.message);

        return;
    }


    // No output
    showOutput(
        "Code executed successfully, but there is no output."
    );

}


/* ==========================================================
   End Display Result
   ========================================================== */


/* ==========================================================
   Start Show Output
   ========================================================== */

function showOutput(message) {

    compilerOutput.textContent = message;

}


/* ==========================================================
   End Show Output
   ========================================================== */


/* ==========================================================
   Start Loading State
   ========================================================== */

function setCompilerLoading(isLoading) {

    if (isLoading) {

        runCompiler.disabled = true;

        clearCompiler.disabled = true;

        runCompiler.innerHTML = `
            <i class="bx bx-loader-alt bx-spin"></i>
            Running...
        `;

        compilerStatus.textContent = "Running";

    } else {

        runCompiler.disabled = false;

        clearCompiler.disabled = false;

        runCompiler.innerHTML = `
            <i class="bx bx-play"></i>
            Run Code
        `;

        compilerStatus.textContent = "Ready";

    }

}


/* ==========================================================
   End Loading State
   ========================================================== */


/* ==========================================================
   Start Clear Compiler
   ========================================================== */

clearCompiler.addEventListener("click", () => {

    // Clear editor
    compilerInput.value = "";


    // Clear output
    showOutput(
        'Click "Run Code" to see the output.'
    );


    // Reset status
    compilerStatus.textContent = "Ready";


    // Put cursor inside editor
    compilerInput.focus();

});


/* ==========================================================
   End Clear Compiler
   ========================================================== */


/* ==========================================================
   Start Wait
   ========================================================== */

function wait(milliseconds) {

    return new Promise((resolve) => {

        setTimeout(resolve, milliseconds);

    });

}


/* ==========================================================
   End Wait
   ========================================================== */