// PARALLAX
const sections = document.querySelectorAll("section");

const handleParallax = () => {
    let scrollY = window.scrollY;

    sections.forEach((section) => {
        const bg = section.querySelector(".bg");
        if (!bg) return;

        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;
        let windowHeight = window.innerHeight;

        let progress = (scrollY - sectionTop + windowHeight) / (sectionHeight + windowHeight);

        // Ensure progress stays between 0 and 1
        progress = Math.min(1, Math.max(0, progress));

        let moveY = (progress - 0.5) * 600; // Adjusted range to cover the full section

        bg.style.transform = `translateY(${moveY}px)`;
    });

    requestAnimationFrame(handleParallax);
};

// Start animation loop
handleParallax();