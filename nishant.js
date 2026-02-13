window.addEventListener("DOMContentLoaded", () => {
    const bgMusic = document.getElementById("bgMusic");

    // Autoplay music (with fallback)
    bgMusic.play().catch(() => {
        document.body.addEventListener("click", () => bgMusic.play(), { once: true });
    });
    bgMusic.volume = 0.3;

    // Smooth scroll utility
    function smoothScrollTo(element, duration = 1500) {
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

    // Forgive button
    const forgiveBtn = document.querySelector(".forgive");
    const forgiveSection = document.getElementById("forgive-section");

    forgiveBtn.addEventListener("click", () => {
        forgiveBtn.classList.add("clicked");
        setTimeout(() => forgiveBtn.classList.remove("clicked"), 700);

        if (forgiveSection.style.display === "none" || forgiveSection.style.display === "") {
            forgiveSection.style.display = "flex";
        }

        setTimeout(() => {
            smoothScrollTo(forgiveSection, 1000);
        }, 50);
    });

    // Deny button
    const denyBtn = document.querySelector(".deny");
    const denySection = document.getElementById("deny-section");
    const forgiveAgainBtn = document.querySelector(".forgive-again");

    denyBtn.addEventListener("click", () => {
        denySection.classList.add("show");
    });

    forgiveAgainBtn.addEventListener("click", () => {
        denySection.classList.remove("show");

        if (forgiveSection.style.display === "none" || forgiveSection.style.display === "") {
            forgiveSection.style.display = "flex";
        }

        setTimeout(() => {
            smoothScrollTo(forgiveSection, 1000);
        }, 50);
    });

    denySection.addEventListener("click", (e) => {
        if (e.target === denySection) denySection.classList.remove("show");
    });

    // Floating hearts
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

    // Valentine button
    const valentineBtn = document.getElementById('valentineBtn');
    const journeySection = document.getElementById('journey-section');

    if (valentineBtn && journeySection) {
        valentineBtn.addEventListener('click', function(e) {
            e.preventDefault();
            this.textContent = 'Always & Forever! 💞';
            this.disabled = true;

            journeySection.style.display = 'flex';

            setTimeout(() => {
                smoothScrollTo(journeySection, 1500);
            }, 50);

            const msg = document.createElement('div');
            msg.textContent = '❤️ I love you! ❤️';
            msg.style.position = 'fixed';
            msg.style.top = '50%';
            msg.style.left = '50%';
            msg.style.transform = 'translate(-50%, -50%)';
            msg.style.background = '#ffd6e7';
            msg.style.padding = 'clamp(15px, 5vw, 40px) clamp(20px, 8vw, 40px)';
            msg.style.borderRadius = '60px';
            msg.style.fontSize = 'clamp(24px, 8vw, 40px)';
            msg.style.fontFamily = '"Dancing Script", cursive';
            msg.style.color = '#b8014d';
            msg.style.boxShadow = '0 10px 30px rgba(255,0,100,0.5)';
            msg.style.zIndex = '100';
            msg.style.animation = 'fadeInOut 2s forwards';
            msg.style.textAlign = 'center';
            msg.style.whiteSpace = 'nowrap';
            document.body.appendChild(msg);
            setTimeout(() => msg.remove(), 2000);
        });
    }

    // Add fadeInOut keyframes
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

    // Heart rain
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
});

// YouTube Player Setup (FIXED: videoId is now correct)
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-background', {
        videoId: 'WyOoo2V-9jI', // ✅ Correct – only the video ID, no extra parameters
        playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            enablejsapi: 1,
            fs: 0,
            iv_load_policy: 3,
            loop: 1,
            modestbranding: 1,
            mute: 1,
            playsinline: 1,
            rel: 0,
            showinfo: 0,
            start: 0,
            playlist: 'WyOoo2V-9jI', // for looping
            vq: 'hd720' // request 720p for smoother playback
        },
        events: {
            onReady: (e) => e.target.playVideo(),
            onStateChange: (e) => {
                if (e.data === YT.PlayerState.ENDED) e.target.playVideo();
            }
        }
    });
}