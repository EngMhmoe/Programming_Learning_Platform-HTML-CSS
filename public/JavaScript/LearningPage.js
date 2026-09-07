       // ==========================================================
        // Video Modal
        // ==========================================================
        const videoModal =
            document.getElementById("videoModal");

        const courseVideo =
            document.getElementById("courseVideo");

        const videoModalClose =
            document.getElementById("videoModalClose");

        const videoModalBackdrop =
            document.querySelector(".video-modal-backdrop");

        const startLearningButton =
            document.querySelector(".start-learning-button");


        function openVideoModal(videoId) {

            if (!videoId) {
                return;
            }


            courseVideo.src =
                `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;


            videoModal.classList.add("active");

            videoModal.setAttribute(
                "aria-hidden",
                "false"
            );


            document.body.classList.add(
                "modal-open"
            );

        }


        function closeVideoModal() {

            videoModal.classList.remove(
                "active"
            );


            videoModal.setAttribute(
                "aria-hidden",
                "true"
            );


            courseVideo.src = "";


            document.body.classList.remove(
                "modal-open"
            );

        }


        startLearningButton.addEventListener(
            "click",
            () => {

                const videoId =
                    startLearningButton.getAttribute(
                        "data-video-id"
                    );


                openVideoModal(videoId);

            }
        );


        videoModalClose.addEventListener(
            "click",
            closeVideoModal
        );


        videoModalBackdrop.addEventListener(
            "click",
            closeVideoModal
        );


        document.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Escape" &&
                    videoModal.classList.contains("active")
                ) {

                    closeVideoModal();

                }

            }
        );
