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

    // Constant-speed smooth scroll
    function smoothScrollTo(element, duration = 2000) {
        const start = window.pageYOffset;
        const end = element.getBoundingClientRect().top + start;
        const distance = end - start;
        const startTime = performance.now();

        function scroll() {
            const now = performance.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1); // 0 → 1
            window.scrollTo(0, start + distance * progress); // linear movement
            if (progress < 1) requestAnimationFrame(scroll);
        }

        requestAnimationFrame(scroll);
    }

    forgiveBtn.addEventListener("click", () => {
        // Trigger hover animation
        forgiveBtn.classList.add("clicked");

        // Remove hover animation class after 0.7s
        setTimeout(() => {
            forgiveBtn.classList.remove("clicked");
        }, 700);

        // Scroll smoothly over 2.5 seconds
        smoothScrollTo(forgiveSection, 2500);
    });
});
