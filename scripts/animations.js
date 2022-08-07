import { gsap } from "gsap";

const timeline = gsap.timeline({ defaults: { ease: 'power1.out' } });

export function landingContentAnimation() {
    timeline.from('.landing-content_heading', { translateY: '30%', duration: 0.8 });
    timeline.from('.landing-content_text', { opacity: 0, duration: 1 }, '-=.3');
    timeline.from('.landing-content_btn', { translateX: '-150%', duration: 0.6 }, '-=.7');
    timeline.from('.landing-slider', { scaleX: 0, transformOrigin: 'left', duration: 0.6 }, '-=.3');
    timeline.from('.landing-slider_content_image', { scale: 0, duration: 0.6 }, '-=.1');
    timeline.from('.landing-slider_content_text', { opacity: 0, duration: 0.8 }, '-=.3');
    timeline.from('.carousal', { opacity: 0.1, duration: 2 }, '-=2.4');
};

export function hamburgerLinksAnimation() {
    timeline.to('#ham', { scale: 1, duration: 0.8, delay: 1, stagger: 0.2 });
};