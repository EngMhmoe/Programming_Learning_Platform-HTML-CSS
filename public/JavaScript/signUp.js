/* ==========================================================
   Sign Up Elements
   ========================================================== */

const signupForm = document.getElementById("signupForm");

const passwordInput = document.getElementById("password");

const confirmPasswordInput =
    document.getElementById("confirmPassword");

const passwordToggle =
    document.getElementById("passwordToggle");

const confirmPasswordToggle =
    document.getElementById("confirmPasswordToggle");

const dateOfBirth =
    document.getElementById("dateOfBirth");

const start =
    document.getElementById("start");


/* ==========================================================
   Password Toggle
   ========================================================== */

passwordToggle.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        passwordToggle.innerHTML =
            '<i class="bx bx-hide"></i>';

        passwordToggle.setAttribute(
            "aria-label",
            "Hide password"
        );

    } else {

        passwordInput.type = "password";

        passwordToggle.innerHTML =
            '<i class="bx bx-show"></i>';

        passwordToggle.setAttribute(
            "aria-label",
            "Show password"
        );

    }

});


/* ==========================================================
   Confirm Password Toggle
   ========================================================== */

confirmPasswordToggle.addEventListener(
    "click",
    function () {

        if (confirmPasswordInput.type === "password") {

            confirmPasswordInput.type = "text";

            confirmPasswordToggle.innerHTML =
                '<i class="bx bx-hide"></i>';

            confirmPasswordToggle.setAttribute(
                "aria-label",
                "Hide password"
            );

        } else {

            confirmPasswordInput.type = "password";

            confirmPasswordToggle.innerHTML =
                '<i class="bx bx-show"></i>';

            confirmPasswordToggle.setAttribute(
                "aria-label",
                "Show password"
            );

        }

    }
);


/* ==========================================================
   Maximum Date Of Birth
   Prevent Future Dates
   ========================================================== */

const today = new Date();

const year = today.getFullYear();

const month = String(
    today.getMonth() + 1
).padStart(2, "0");

const day = String(
    today.getDate()
).padStart(2, "0");

dateOfBirth.max =
    `${year}-${month}-${day}`;


/* ==========================================================
   Sign Up Form
   ========================================================== */

signupForm.addEventListener(
    "submit",
    function (event) {

        /* ==================================================
           Password Match
           ================================================== */

        if (
            passwordInput.value !==
            confirmPasswordInput.value
        ) {

            event.preventDefault();

            confirmPasswordInput.setCustomValidity(
                "Passwords do not match."
            );

            confirmPasswordInput.reportValidity();

            confirmPasswordInput.focus();

            return;

        }


        confirmPasswordInput.setCustomValidity("");


        /* ==================================================
           Password Length
           ================================================== */

        if (passwordInput.value.length < 8) {

            event.preventDefault();

            passwordInput.setCustomValidity(
                "Password must be at least 8 characters."
            );

            passwordInput.reportValidity();

            passwordInput.focus();

            return;

        }


        passwordInput.setCustomValidity("");


        /* ==================================================
           Date Of Birth Validation
           ================================================== */

        if (!dateOfBirth.value) {

            event.preventDefault();

            dateOfBirth.focus();

            return;

        }


        const birthDate =
            new Date(dateOfBirth.value);


        if (birthDate > today) {

            event.preventDefault();

            dateOfBirth.setCustomValidity(
                "Date of birth cannot be in the future."
            );

            dateOfBirth.reportValidity();

            dateOfBirth.focus();

            return;

        }


        dateOfBirth.setCustomValidity("");


        /* ==================================================
           Successful Sign Up
           ================================================== */

        /*
           The form action already points to:

           ../index.html

           So after successful validation,
           the user will go directly to the Home Page.
        */

    }
);


/* ==========================================================
   Back To Top
   ========================================================== */

window.addEventListener("scroll", function () {

    if (window.scrollY >= 1000) {

        start.style.display = "flex";

    } else {

        start.style.display = "none";

    }

});


/* ==========================================================
   Back To Top - Click
   ========================================================== */

start.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================================
   Back To Top - Keyboard
   ========================================================== */

start.addEventListener("keydown", function (event) {

    if (
        event.key === "Enter" ||
        event.key === " "
    ) {

        event.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});