window.addEventListener("DOMContentLoaded", () => {
    const bgVideo = document.getElementById("bg-video");
    const bgMusic = document.getElementById("bgMusic");

    // Autoplay video (with fallback)
    bgVideo.play().catch(() => {
        document.body.addEventListener("click", () => bgVideo.play(), { once: true });
    });

    // Autoplay music (with fallback)
    bgMusic.play().catch(() => {
        document.body.addEventListener("click", () => bgMusic.play(), { once: true });
    });
    bgMusic.volume = 0.3;

    // ---------- Smooth scroll utility ----------
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

    // ---------- Forgive button: show forgive section and scroll ----------
    const forgiveBtn = document.querySelector(".forgive");
    const forgiveSection = document.getElementById("forgive-section");

    forgiveBtn.addEventListener("click", () => {
        forgiveBtn.classList.add("clicked");
        setTimeout(() => forgiveBtn.classList.remove("clicked"), 700);

        // Show forgive section if hidden
        if (forgiveSection.style.display === "none" || !forgiveSection.style.display) {
            forgiveSection.style.display = "flex";
        }

        // Scroll to forgive section
        smoothScrollTo(forgiveSection, 1000);
    });

    // ---------- Deny button ----------
    const denyBtn = document.querySelector(".deny");
    const denySection = document.getElementById("deny-section");
    const forgiveAgainBtn = document.querySelector(".forgive-again");

    denyBtn.addEventListener("click", () => {
        denySection.classList.add("show");
    });

    forgiveAgainBtn.addEventListener("click", () => {
        denySection.classList.remove("show");

        // Show forgive section if hidden
        if (forgiveSection.style.display === "none" || !forgiveSection.style.display) {
            forgiveSection.style.display = "flex";
        }

        smoothScrollTo(forgiveSection, 1000);
    });

    denySection.addEventListener("click", (e) => {
        if (e.target === denySection) denySection.classList.remove("show");
    });

    // ---------- Floating hearts in forgive section ----------
    const heartBg = document.querySelector('.heart-bg');
    if (heartBg) {
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

    // ---------- Valentine button & Journey section ----------
    const valentineBtn = document.getElementById('valentineBtn');
    const journeySection = document.getElementById('journey-section');

    if (valentineBtn && journeySection) {
        valentineBtn.addEventListener('click', function(e) {
            e.preventDefault();
            this.textContent = 'Always & Forever! 💞';
            this.disabled = true;

            // Show journey section
            journeySection.style.display = 'flex';

            // Scroll to journey section
            smoothScrollTo(journeySection, 1500);

            // Optional floating message
            const msg = document.createElement('div');
            msg.textContent = '❤️ I love you! ❤️';
            msg.style.position = 'fixed';
            msg.style.top = '50%';
            msg.style.left = '50%';
            msg.style.transform = 'translate(-50%, -50%)';
            msg.style.background = '#ffd6e7';
            msg.style.padding = '20px 40px';
            msg.style.borderRadius = '60px';
            msg.style.fontSize = '40px';
            msg.style.fontFamily = '"Dancing Script", cursive';
            msg.style.color = '#b8014d';
            msg.style.boxShadow = '0 10px 30px rgba(255,0,100,0.5)';
            msg.style.zIndex = '100';
            msg.style.animation = 'fadeInOut 2s forwards';
            document.body.appendChild(msg);
            setTimeout(() => msg.remove(), 2000);
        });
    }

    // ---------- Add fadeInOut keyframes if missing ----------
    if (!document.querySelector('#dynamic-style-fade')) {
        const style = document.createElement('style');
        style.id = 'dynamic-style-fade';
        style.textContent = `
            @keyframes fadeInOut {
                0% { opacity: 0; transform: translate(-50%, -30%); }
                20% { opacity: 1; transform: translate(-50%, -50%); }
                80% { opacity: 1; transform: translate(-50%, -50%); }
                100% { opacity: 0; transform: translate(-50%, -70%); }
            }
        `;
        document.head.appendChild(style);
    }

    // ---------- Extra hearts for journey section rain ----------
    const heartRain = document.querySelector('.heart-rain');
    if (heartRain) {
        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('span');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = Math.floor(Math.random() * 25 + 15) + 'px';
            heart.style.animation = `rain ${Math.random() * 3 + 2}s linear infinite`;
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.opacity = 0.5;
            heartRain.appendChild(heart);
        }
    }

    // ---------- OPENING ANIMATION: Real Angel (Font Awesome) ----------
    function createAngel() {
        const angel = document.createElement('div');
        angel.className = 'angel';
        angel.innerHTML = '<i class="fas fa-angel"></i>'; // Font Awesome angel
        document.body.appendChild(angel);

        // Remove after animation (4 seconds)
        setTimeout(() => angel.remove(), 4000);
    }

    // Trigger angel animation after a short delay
    setTimeout(createAngel, 300);
});