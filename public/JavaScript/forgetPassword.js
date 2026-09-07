/* ==========================================================
   Forgot Password
   ========================================================== */


/* ==========================================================
   Elements
   ========================================================== */

const forgotForm = document.getElementById("forgotForm");

const recoveryInput = document.getElementById("recoveryInput");

const forgotMessage = document.getElementById("forgotMessage");

const start = document.getElementById("start");



/* ==========================================================
   Forgot Password Form
   ========================================================== */

forgotForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const recoveryValue = recoveryInput.value.trim();


    /* ======================================================
       Empty Input
       ====================================================== */

    if (recoveryValue === "") {

        forgotMessage.textContent =
            "Please enter your phone number or email address.";

        recoveryInput.focus();

        return;

    }


    /* ======================================================
       Clear Message
       ====================================================== */

    forgotMessage.textContent = "";


    /* ======================================================
       Continue To Home Page
       ====================================================== */

    // window.location.href = "../index.html";

});



/* ==========================================================
   Clear Error Message
   ========================================================== */

recoveryInput.addEventListener("input", function () {

    forgotMessage.textContent = "";

});



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