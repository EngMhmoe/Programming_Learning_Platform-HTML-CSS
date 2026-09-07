/* ==========================================================
   Contact US
   ========================================================== */



/* ==========================================================
   Back To Top
   ========================================================== */

const start = document.getElementById("start");


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

    if (event.key === "Enter" || event.key === " ") {

        event.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});



/* ==========================================================
   Contact Form
   ========================================================== */

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");



/* ==========================================================
   Contact Form - Submit
   ========================================================== */

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    formMessage.classList.remove("error");

    formMessage.classList.add("show");


    formMessage.innerHTML = `

        <i class="bx bx-check-circle"></i>

        <span>
            Your message has been sent successfully.
            We'll get back to you soon.
        </span>

    `;


    contactForm.reset();

});