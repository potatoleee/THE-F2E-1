import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);



gsap.to('.box', {x: 100, duration:1,})
gsap.to('.box', {y: 100, duration:1, delay: 1})