import { createIcons, Sparkles, MapPin, Shield, Thermometer, Layers, Sun, Droplet, Check, Crown, Award, ShieldCheck, Truck, Headphones, Zap, FlameKindling, Calendar, Layout, Feather, CheckCircle, Link, Lock, Menu, X, ChevronRight, Play } from 'lucide';
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

// Initialize Lucide Icons
createIcons({
    icons: {
        Sparkles, MapPin, Shield, Thermometer, Layers, Sun, Droplet, Check, Crown, Award, ShieldCheck, Truck, Headphones,
        Zap, FlameKindling, Calendar, Layout, Feather, CheckCircle, Link, Lock, Menu, X, ChevronRight, Play
    }
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Highlight Active Link
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === 'index.html') || (currentPath.endsWith(href) && href !== 'index.html')) {
        link.classList.add('active');
    }
});

// Hero Animations (Only if on Home or pages with hero)
if (document.querySelector('.hero')) {
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
}

// Subpage Header Animations
if (document.querySelector('.page-header')) {
    gsap.from('.page-title', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
    });
    gsap.from('.page-header-bg', {
        scale: 1.2,
        duration: 2,
        ease: 'power2.out'
    });
}

// Scroll Animations (Global)
gsap.utils.toArray('.glass-card, .pricing-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: i * 0.1,
        immediateRender: false
    });
});

// Parallax for images
gsap.utils.toArray('[data-parallax]').forEach((container) => {
    const img = container.querySelector('img');
    if (img) {
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
    }
});

// Navbar visibility logic
const navbar = document.querySelector('.navbar');
if (navbar) {
    let lastScroll = 0;
    ScrollTrigger.create({
        start: 'top top',
        onUpdate: (self) => {
            const current = self.scroll();
            if (current > 120 && current > lastScroll) {
                // rolando para baixo
                navbar.classList.add('navbar-hidden');
            } else {
                // rolando para cima ou no topo
                navbar.classList.remove('navbar-hidden');
            }
            lastScroll = current;
        }
    });
}

// Initialize Swipers
if (document.querySelector('.colorSwiper')) {
    new Swiper('.colorSwiper', {
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
        }
    });
}

if (document.querySelector('.careSwiper')) {
    new Swiper('.careSwiper', {
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 }
        }
    });
}

if (document.querySelector('.modelsSwiper')) {
    new Swiper('.modelsSwiper', {
        loop: true,
        autoplay: { delay: 1500, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        slidesPerView: 2,
        spaceBetween: 20,
        breakpoints: {
            768: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 5, spaceBetween: 30 }
        }
    });
}

// Initialize GLightbox
if (document.querySelector('.glightbox')) {
    GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });
}

// Mobile Menu Logic
const menuBtn = document.querySelector('.mobile-menu-btn');
const closeBtn = document.querySelector('.close-menu');
const menuOverlay = document.querySelector('.mobile-menu-overlay');
const menuLinksMobile = document.querySelectorAll('.mobile-nav-links a');

if (menuBtn && menuOverlay) {
    menuBtn.addEventListener('click', () => {
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

const closeMenu = () => {
    if (menuOverlay) {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
}

menuLinksMobile.forEach(link => {
    link.addEventListener('click', closeMenu);
});
