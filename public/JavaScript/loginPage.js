/* ==========================================================
   Login Elements
   ========================================================== */
const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

const rememberMe = document.getElementById("rememberMe");

const loginMessage = document.getElementById("loginMessage");

const start = document.getElementById("start");


/* ==========================================================
   Show / Hide Password
   ========================================================== */

togglePassword.addEventListener("click", function () {

    const isPassword = passwordInput.type === "password";

    passwordInput.type = isPassword
        ? "text"
        : "password";


    const icon = togglePassword.querySelector("i");

    icon.className = isPassword
        ? "bx bx-show"
        : "bx bx-hide";


    togglePassword.setAttribute(
        "aria-label",
        isPassword
            ? "Hide password"
            : "Show password"
    );

});


/* ==========================================================
   Remember Me
   ========================================================== */

const savedEmail = localStorage.getItem("devpathEmail");

if (savedEmail) {

    emailInput.value = savedEmail;

    rememberMe.checked = true;

}


/* ==========================================================
   Login Form
   ========================================================== */

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const email = emailInput.value.trim();

    const password = passwordInput.value.trim();


    /* ======================================================
       Reset Message
       ====================================================== */

    loginMessage.textContent = "";

    loginMessage.className = "login-message";


    /* ======================================================
       Validation
       ====================================================== */

    if (!email || !password) {

        showLoginMessage(
            "Please fill in all required fields.",
            "error"
        );

        return;
    }


    if (password.length < 6) {

        showLoginMessage(
            "Password must contain at least 6 characters.",
            "error"
        );

        return;
    }


    /* ======================================================
       Remember Email
       ====================================================== */

    if (rememberMe.checked) {

        localStorage.setItem(
            "devpathEmail",
            email
        );

    } else {

        localStorage.removeItem(
            "devpathEmail"
        );

    }


    /* ======================================================
       Login Success - Front-End Demo
       ====================================================== */

    showLoginMessage(
        "Login information is valid.",
        "success"
    );


    /*
       ======================================================
       IMPORTANT

       This is only front-end validation.

       Real login authentication will be connected later
       when the backend / authentication system is ready.
       ======================================================
    */

});


/* ==========================================================
   Login Message Function
   ========================================================== */

function showLoginMessage(message, type) {

    loginMessage.textContent = message;

    loginMessage.className =
        `login-message ${type}`;

}


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
   Back To Top Click
   ========================================================== */

start.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==========================================================
   Back To Top Keyboard
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