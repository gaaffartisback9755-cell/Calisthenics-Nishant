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
            const progress = Math.min(elapsed / duration, 1);
            window.scrollTo(0, start + distance * progress);
            if (progress < 1) requestAnimationFrame(scroll);
        }

        requestAnimationFrame(scroll);
    }

    forgiveBtn.addEventListener("click", () => {
        forgiveBtn.classList.add("clicked");
        setTimeout(() => {
            forgiveBtn.classList.remove("clicked");
        }, 700);
        smoothScrollTo(forgiveSection, 1000);
    });

    // ---------- Deny button functionality ----------
    const denyBtn = document.querySelector(".deny");
    const denySection = document.getElementById("deny-section");
    const forgiveAgainBtn = document.querySelector(".forgive-again");

    denyBtn.addEventListener("click", () => {
        // Show deny section with sad messages
        denySection.classList.add("show");
        // Optionally hide original buttons (kept for clarity, but they are behind overlay)
        // No need to hide, overlay blocks clicks
    });

    forgiveAgainBtn.addEventListener("click", () => {
        // Hide deny section
        denySection.classList.remove("show");
        // Scroll to forgive section
        smoothScrollTo(forgiveSection, 1000);
    });

    // Click outside the deny content to close? Maybe not, but we can add:
    denySection.addEventListener("click", (e) => {
        if (e.target === denySection) {
            denySection.classList.remove("show");
        }
    });

    // ---------- Floating hearts in forgive section ----------
    const heartBg = document.querySelector('.heart-bg');
    if (heartBg) {
        // Create 20 floating hearts
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('span');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.fontSize = Math.floor(Math.random() * 30 + 15) + 'px';
            heart.style.animationDuration = Math.floor(Math.random() * 10 + 8) + 's';
            heart.style.animationDelay = Math.random() * 5 + 's';
            heart.style.opacity = 0.2 + Math.random() * 0.3;
            heart.style.position = 'absolute';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '0';
            heartBg.appendChild(heart);
        }
    }
});