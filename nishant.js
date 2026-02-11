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
});

// Scroll to forgive section
document.querySelector(".forgive").addEventListener("click", function() {
    document.getElementById("forgive-section")
      .scrollIntoView({ behavior: "smooth" });
});
