
        const startButton = document.getElementById("start");




        // ==========================================================
        // Back To Top
        // ==========================================================
        window.addEventListener("scroll", () => {

            if (window.scrollY >= 1000) {

                startButton.style.display = "flex";

            } else {

                startButton.style.display = "none";

            }

        });


        function scrollToTop() {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }


        startButton.addEventListener(
            "click",
            scrollToTop
        );


        startButton.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    scrollToTop();

                }

            }
        );


 