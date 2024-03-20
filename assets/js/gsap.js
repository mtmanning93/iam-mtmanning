document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    // Landing page animation

    window.onload = function() {
        // Refresh ScrollTriggers when the page is loaded or refreshed
        ScrollTrigger.refresh();
    };

    // Timeline for the landing element animation
    var landingTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#landing",
            start: "top top",
            end: "bottom -100px",
            // markers: true,
            scrub: 1,
            pin: true,
            toggleActions: "play none reverse none"
        }
    });

    // Widths of each .letter
    const gWidth = document.querySelector("#g").offsetWidth;
    const n3Width = document.querySelector("#n3").offsetWidth;
    const i2Width = document.querySelector("#i2").offsetWidth;
    const n2Width = document.querySelector("#n2").offsetWidth;
    const n1Width = document.querySelector("#n1").offsetWidth;
    const a3Width = document.querySelector("#a3").offsetWidth;
    const m2Width = document.querySelector("#m2").offsetWidth;

    // Height of each .letter
    const m3Height = document.querySelector("#m3").offsetHeight;

    // Total width for the "#dot" element to move
    const dotMoveDistance = (gWidth + n3Width + i2Width + n2Width + n1Width + a3Width) - m2Width;

    // Animation for each letter within the timeline
    landingTimeline.to("#g", { opacity: 0, x: 200, duration: 3 })
                .to("#n3", { opacity: 0, x: 200, duration: 3 }, "+=2") 
                .to("#i2", { opacity: 0, x: 200, duration: 3 }, "+=2") 
                .to(["#n2", "#t2"], { opacity: 0, x: 200, duration: 3 }, "+=2") 
                .to(["#n1", "#t1"], { opacity: 0, x: 200, duration: 3 }, "+=2") 
                .to(["#a3", "#a2", "#m1"], { opacity: 0, x: 200, duration: 3 }, "+=2") 
                .to(["#i1", "#a1"], { opacity: 0, x: 200, duration: 3 }, "+=2") 
                .to("#m2", { y: m3Height, x: m2Width, duration: 3 }, "+=2")
                .to("#dot", { x: -dotMoveDistance, duration: 3, ease: "power1.out" }, "+=0.5")
                .to(["#m3", "#m2", "#dot"], { opacity: 0, duration: 3 }, "+=0.5")
                .to("#scroll-img", { opacity: 0, y: 100, duration: 6, ease: "none", onComplete: scrollToCV }, "+=2")
                  
    function scrollToCV() {
        gsap.to(window, {
            duration: 0,
            scrollTo: {
            y: "#cv",
            offsetY: 0
            },
            ease: "power1.out"
        });
    }

    // Loading bars animation

    gsap.utils.toArray('.progress-bar').forEach((bar) => {
        gsap.fromTo(bar, { width: '0%' }, {
            width: bar.getAttribute('style').match(/width:\s*(\d+)/)[1] + '%',
            duration: 1,
            scrollTrigger: {
                trigger: bar,
                start: 'top 95%',
                toggleActions: "restart pause resune reset"
            }
        });
    });
});