
/* ==========================================================
   Start Video Modal
========================================================== */

const videoModal = document.getElementById("videoModal");

const courseVideo = document.getElementById("courseVideo");


/* ==========================================================
   Play Video When Modal Opens
========================================================== */

videoModal.addEventListener("show.bs.modal", () => {
    courseVideo.src = courseVideo.dataset.videoSrc;
});


/* ==========================================================
   Stop Video When Modal Closes
========================================================== */

videoModal.addEventListener("hidden.bs.modal", () => {
    courseVideo.src = "about:blank";
});


/* ==========================================================
   End Video Modal
========================================================== */
