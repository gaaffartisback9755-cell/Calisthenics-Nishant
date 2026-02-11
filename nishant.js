window.addEventListener("DOMContentLoaded", () => {
    const bgVideo = document.getElementById("bg-video");
    const bgMusic = document.getElementById("bgMusic");

    // Autoplay video
    bgVideo.play().catch(() => {
        document.body.addEventListener("click", () => bgVideo.play(), { once: true });
    });

    // Autoplay music
    bgMusic.play().catch(() => {
        document.body.addEventListener("click", () => bgMusic.play(), { once: true });
    });

    bgMusic.volume = 0.3;

    // Forgive button click animation + scroll
    const forgiveBtn = document.querySelector(".forgive");
    const forgiveSection = document.getElementById("forgive-section");

    forgiveBtn.addEventListener("click", () => {
        // Add class to trigger animation
        forgiveBtn.classList.add("clicked");

        // Remove the class after animation duration (0.7s)
        setTimeout(() => {
            forgiveBtn.classList.remove("clicked");
        }, 700);

        // Scroll to forgive section
        forgiveSection.scrollIntoView({ behavior: "smooth" });
    });
});
