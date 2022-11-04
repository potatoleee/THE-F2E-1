// 第一題的錯誤意思是要使用相對路徑 可以改成
import { gsap, ScrollTrigger, TextPlugin } from "../../node_modules/gsap/all.js";

// import { gsap } from "../../node_modules/gsap";
// import { ScrollTrigger } from "../../node_modules/gsap/ScrollTrigger";
// import { TextPlugin } from "../../node_modules/gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);



const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".box1",
      markers: true,
      start: 'top 35%',
      end: 'top 1%',
      scrub: true,
    },
  })

tl.to('.box1', {
    top: 0,
    left: '50%',
    xPercent: '-50',
    // duration: 10,
    position: 'absolute',
  }).to('.box1', {
    top: '100%',
    yPercent: '-100',
    // duration: 20,
    position: 'absolute',
  })