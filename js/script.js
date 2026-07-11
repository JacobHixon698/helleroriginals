/*
==========================================
Heller Originals
Interactive Animations
==========================================
*/

// Wait until the page has loaded
document.addEventListener("DOMContentLoaded", () => {

    // Hero animation
    const hero = document.querySelector(".hero-content");

    if (hero) {
        hero.style.opacity = "0";
        hero.style.transform = "translateY(40px)";

        setTimeout(() => {
            hero.style.transition = "all 1s ease";
            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";
        }, 300);
    }

    // Scroll Reveal
    const reveals = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {
        threshold: 0.15
    });

    reveals.forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });

});


// ==========================================
// Mouse Parallax
// ==========================================

document.addEventListener("mousemove", e => {

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    document.body.style.backgroundPosition =
        `${50 + x}% ${50 + y}%`;

});


// ==========================================
// Button Hover Effect
// ==========================================

document.querySelectorAll(".button").forEach(button => {

    button.addEventListener("mousemove", e => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.transform =
            `translate(${(x - rect.width/2)/25}px, ${(y - rect.height/2)/25}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translate(0,0)";

    });

});
