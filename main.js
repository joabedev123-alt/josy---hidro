import { createIcons, Sparkles, MapPin, Shield, Thermometer, Layers, Sun, Droplet, Check, Crown, Award, ShieldCheck, Truck, Headphones, Zap, FlameKindling, Calendar, Layout, Feather, CheckCircle, Link, Lock, Diamond, ThermometerSun, ShieldSun } from 'lucide';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
});


function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Hero Animations
const heroTl = gsap.timeline();

heroTl.from('.navbar', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
})
.from('.badge-premium', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
}, '-=0.5')
.from('.headline', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
}, '-=0.6')
.from('.subheadline', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
}, '-=0.7')
.from('.slogan-badge', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
}, '-=0.7')
.from('.cta-group .btn', {
    y: 20,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power3.out'
}, '-=0.7');

// Scroll Animations
gsap.utils.toArray('.glass-card:not(.diff-card)').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: i * 0.1
    });
});

gsap.utils.toArray('.product-item').forEach((item) => {
    const img = item.querySelector('.product-image');
    const info = item.querySelector('.product-info');

    gsap.from(img, {
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
        },
        x: item.classList.contains('reversed') ? 100 : -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
    });

    gsap.from(info, {
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
        },
        x: item.classList.contains('reversed') ? -100 : 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.2
    });
});

// Parallax for images
gsap.utils.toArray('[data-parallax]').forEach((container) => {
    const img = container.querySelector('img');
    gsap.to(img, {
        scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        },
        y: 100,
        ease: 'none'
    });
});

// Heartbeat Effect for Differentials
ScrollTrigger.create({
    trigger: '.differential-grid',
    start: 'top 80%',
    onEnter: () => {
        const cards = document.querySelectorAll('.diff-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('pulse');
                setTimeout(() => card.classList.remove('pulse'), 2000);
            }, index * 400);
        });
    }
});

// Gallery Animations
gsap.from('.gallery-item', {
    scrollTrigger: {
        trigger: '.gallery-section',
        start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: 'power3.out'
});

// Trust Bar Animations
gsap.from('.trust-item', {
    scrollTrigger: {
        trigger: '.trust-bar',
        start: 'top 90%',
    },
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power2.out'
});

// Navbar visibility logic
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        // Scrolling down or away from top
        navbar.style.transform = 'translateY(-100%)';
        navbar.style.background = 'rgba(2, 6, 23, 0.9)';
    } else {
        // At the top
        navbar.style.transform = 'translateY(0)';
        navbar.style.background = 'rgba(255, 255, 255, 0.05)';
    }
});

// Hover effect for color swatches
document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('mouseenter', () => {
        gsap.to(swatch, { scale: 1.2, duration: 0.3, ease: 'power2.out' });
    });
    swatch.addEventListener('mouseleave', () => {
        gsap.to(swatch, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
});

// Initialize Color Carousel (Swiper)
const swiper = new Swiper('.colorSwiper', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 1000,
});

// Initialize Care Carousel (Swiper)
const careSwiper = new Swiper('.careSwiper', {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});
// Differentials Animation
gsap.fromTo(".diff-card", 
    { 
        y: 150, 
        opacity: 0, 
        rotationY: -180, // Giro no eixo Y (estilo flip)
        rotationZ: -10,  // Inclinação lateral
        scale: 0.7
    },
    {
        scrollTrigger: {
            trigger: ".differentials",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 0,
        opacity: 1,
        rotationY: 0,
        rotationZ: 0,
        scale: 1,
        duration: 1.8,
        stagger: 0.4, // Um a um bem pausado
        ease: "elastic.out(1, 0.75)" // Efeito elástico para finalizar o giro
    }
);

// Initialize GLightbox
const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
});

// Initialize Lucide Icons (at the end for better reliability)
createIcons({
    icons: {
        Sparkles, MapPin, Shield, Thermometer, Layers, Sun, Droplet, Check, Crown, Award, ShieldCheck, Truck, Headphones,
        Zap, FlameKindling, Calendar, Layout, Feather, CheckCircle, Link, Lock, Diamond, ThermometerSun, ShieldSun
    }
});

// Initialize Maintenance Visual Carousel (Swiper)
const maintenanceSwiper = new Swiper('.maintenanceSwiper', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
});
