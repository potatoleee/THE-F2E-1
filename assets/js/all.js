// 第一題的錯誤意思是要使用相對路徑 可以改成
import { gsap, ScrollTrigger, TextPlugin } from "../../node_modules/gsap/all.js";

// import { gsap } from "../../node_modules/gsap";
// import { ScrollTrigger } from "../../node_modules/gsap/ScrollTrigger";
// import { TextPlugin } from "../../node_modules/gsap/TextPlugin";
AOS.init();
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 150, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.to(".loop", {
  xPercent: "-50", 
  ease: "none",
  duration: 10,
  repeat: -1,
});



const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".orange__text--text",
      markers: true,
      start: 'top 35%',
      end: 'top 1%',
      scrub: true,
    },
  })
const tk = gsap.timeline({
    scrollTrigger: {
      trigger: ".orange__text--text",
      markers: true,
      start: 'top 35%',
      end: 'top 1%',
      scrub: true,
    },
  })



tl.to('.orange-circle', {
    top: '-100%',
    // yPercent: '-100',
    duration: 1000,
    position: 'absolute',
  })

// tk.to('.gray-circle', {
//     top: 0,
//     top: '100%',
//     // yPercent: '-100',
//     duration: 1000,
//     position: 'absolute',
//   })


const scrollTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".week",
    pin: true,
    markers: true,
    scrub: true,
  },
});


const smile = gsap.timeline({
  scrollTrigger: {
    trigger: ".timeLine__singUp__time",
    markers: true,
    start: 'top 35%',
    end: 'top 1%',
    scrub: true,
  },
})
const smile2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".timeLine__start__time",
    markers: true,
    start: 'top 35%',
    end: 'top 1%',
    scrub: true,
  },
})
const smile3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".timeLine__upload",
    markers: true,
    start: 'top 35%',
    end: 'top 1%',
    scrub: true,
  },
})



smile.to('.smile',{
  top: '32%',
  // yPercent: '-100',
  duration: 10,
  position: 'absolute',
  rotation: 20,
})
smile2.to('.smile', {
  top: '50%',
  left: '17%',
  duration: 10,
  position: 'absolute',
  rotation: 45,
})
smile3.to('.smile', {
  top: '70%',
  left: '17%',
  duration: 10,
  position: 'absolute',
  rotation: 65,
})
// gsap.to('.review', {x: 100, duration:1,})


scrollTL.to(".week__content--1", { yPercent: "-135" });
scrollTL.to(".week__title--1", { xPercent: "-100" }, "<");
scrollTL.to(".week__content--2", { yPercent: "-135" });
scrollTL.to(".week__title--2", { xPercent: "-100" }, "<");




  