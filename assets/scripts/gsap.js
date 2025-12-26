// // Wait for DOM to load
// document.addEventListener("DOMContentLoaded", function () {
//   //   // Initialize GSAP
//   gsap.registerPlugin(ScrollTrigger);

//   // Hero content animations
//   const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

//   heroTimeline
//     .from(".hero-badge", {
//       duration: 1,
//       y: 30,
//       opacity: 0,
//     })
//     .from(
//       ".hero-title",
//       {
//         duration: 1.2,
//         y: 40,
//         opacity: 0,
//       },
//       "-=0.8"
//     )
//     .from(
//       ".hero-subtitle",
//       {
//         duration: 1,
//         y: 30,
//         opacity: 0,
//       },
//       "-=0.6"
//     )
//     .from(
//       ".hero-cta",
//       {
//         duration: 1,
//         y: 30,
//         opacity: 0,
//       },
//       "-=0.5"
//     );

//   // Scroll trigger for additional animations on scroll
//   ScrollTrigger.create({
//     trigger: ".hero-container",
//     start: "top top",
//     end: "bottom top",
//     onEnter: () => {
//       gsap.to(".scroll-indicator", {
//         duration: 0.5,
//         opacity: 0,
//         y: 20,
//       });
//     },
//     onLeaveBack: () => {
//       gsap.to(".scroll-indicator", {
//         duration: 0.5,
//         opacity: 1,
//         y: 0,
//       });
//     },
//   });
// });

// // GSAP Animations for the Hero
// window.addEventListener("load", () => {
//   const tl = gsap.timeline();

//   // Reveal background image
//   tl.to("#hero-parallax-img", {
//     scale: 1,
//     duration: 2,
//     ease: "expo.out",
//   });

//   // Stagger text elements
//   tl.from(
//     "#breadcrumb, #hero-title, #hero-line, #hero-desc",
//     {
//       y: 30,
//       opacity: 0,
//       stagger: 0.15,
//       duration: 1,
//       ease: "power3.out",
//     },
//     "-=1.5"
//   );

//   // Subtle Parallax on scroll
//   gsap.to("#hero-parallax-img", {
//     yPercent: 15,
//     ease: "none",
//     scrollTrigger: {
//       trigger: "section",
//       start: "top top",
//       end: "bottom top",
//       scrub: true,
//     },
//   });
// });

// function updateImage(src) {
//   const mainImg = document.getElementById("main-room-img");
//   gsap.to(mainImg, {
//     opacity: 0,
//     duration: 0.2,
//     onComplete: () => {
//       mainImg.src = src;
//       gsap.to(mainImg, { opacity: 1, duration: 0.4 });
//     },
//   });
// }

// // GSAP entrance for the whole page
// window.addEventListener("load", () => {
//   gsap.from(".lg:col-span-7 > *", {
//     opacity: 0,
//     y: 30,
//     stagger: 0.2,
//     duration: 1,
//     ease: "power3.out",
//   });
//   gsap.from(".lg:col-span-5", {
//     opacity: 0,
//     x: 50,
//     duration: 1,
//     delay: 0.5,
//     ease: "power3.out",
//   });
// });
