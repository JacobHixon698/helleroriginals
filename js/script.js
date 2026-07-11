/*
==========================================
Heller Originals
Interactive Website
==========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // Hero Entrance Animation
    // =====================================

    const hero = document.querySelector(".hero-content");

    if (hero) {

        hero.style.opacity = "0";
        hero.style.transform = "translateY(40px)";

        requestAnimationFrame(() => {

            setTimeout(() => {

                hero.style.transition = "all 1.2s ease";
                hero.style.opacity = "1";
                hero.style.transform = "translateY(0)";

            }, 300);

        });

    }

    // =====================================
    // Scroll Reveal
    // =====================================

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {
        threshold: 0.15
    });

    sections.forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });

});


// =====================================
// Interactive Paint Background
// =====================================

const blobs = document.querySelectorAll(".paint-blob");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = (e.clientX / window.innerWidth - 0.5) * 40;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 40;

});

function animateBlobs() {

    currentX += (mouseX - currentX) * 0.06;
    currentY += (mouseY - currentY) * 0.06;

    blobs.forEach((blob, index) => {

        const speed = (index + 1) * 0.12;

        blob.style.transform =
            `translate(${currentX * speed}px, ${currentY * speed}px)`;

    });

    requestAnimationFrame(animateBlobs);

}

animateBlobs();


// =====================================
// Floating Animation
// =====================================

blobs.forEach((blob, index) => {

    let angle = Math.random() * Math.PI * 2;

    function float() {

        angle += 0.003 + index * 0.0005;

        const x = Math.cos(angle) * 8;
        const y = Math.sin(angle) * 8;

        blob.style.marginLeft = `${x}px`;
        blob.style.marginTop = `${y}px`;

        requestAnimationFrame(float);

    }

    float();

});


// =====================================
// Button Hover Effect
// =====================================

document.querySelectorAll(".button").forEach(button => {

    button.addEventListener("mousemove", (e) => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const moveX = (x - rect.width / 2) / 10;
        const moveY = (y - rect.height / 2) / 10;

        button.style.transform =
            `translate(${moveX}px, ${moveY}px) scale(1.04)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translate(0,0) scale(1)";

    });

});


// =====================================
// Navbar Shadow
// =====================================

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.backdropFilter = "blur(15px)";
        navbar.style.background = "rgba(255,255,255,.82)";
        navbar.style.boxShadow = "0 12px 40px rgba(0,0,0,.08)";

    } else {

        navbar.style.background = "transparent";
        navbar.style.boxShadow = "none";
        navbar.style.backdropFilter = "none";

    }

});
