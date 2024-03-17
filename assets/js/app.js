// Move effect
// document.addEventListener("DOMContentLoaded", function() {
//     gsap.to(".name", {
//         x: 500,
//         scrollTrigger: {
//             trigger: "body",
//             start: "top top",
//             end: "bottom bottom",
//             scrub: true
//         }
//     });
// });

// // Opaque on scroll effect
// document.addEventListener("DOMContentLoaded", function() {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.to("#name", {
//         opacity: 0,
//         scrollTrigger: {
//             trigger: "#landing",
//             start: "top top",
//             end: "bottom center",
//             scrub: true,
//             onEnter: function() {
//                 console.log("ScrollTrigger entered");
//             }
//         }
//     });
// });

// //CLOSEST BELOW

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    // Variable to track whether animations have been completed
    var animationsCompleted = false;

    gsap.to("#name", {
        opacity: 0,
        scrollTrigger: {
            trigger: "#landing",
            start: "top top",
            end: "bottom center",
            scrub: true,
            onUpdate: function(self) {
                // If #name opacity is almost 0, scroll away the landing section to reveal the CV
                if (self.progress >= 0.95 && !animationsCompleted) {
                    animationsCompleted = true; // Set to true to prevent multiple calls
                    gsap.to("#landing", { y: "-100%", duration: 2 });
                    gsap.to("#cv", { opacity: 1, duration: 0 });
                    resetScroll(); // Call resetScroll after animations complete
                }
            }
        }
    });

    function resetScroll() {
        // Reset the scroll position to the top of the page
        window.scrollTo({ top: 0 });
    }
});