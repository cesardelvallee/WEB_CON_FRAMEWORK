window.addEventListener("load", function(){
    document.getElementById("loader").classList.toggle("loader2")
})

AOS.init();
ScrollReveal().reveal('.about-me-section', { delay: 500 });

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    

    // Animación de la indicación de scroll
    gsap.to(".scroll-cta", {
        scrollTrigger: {
            trigger: ".scroll-cta",
            start: "top 90%",
            end: "top 50%",
            scrub: true,
        },
        opacity: 0,
        y: -30,
    });
});

