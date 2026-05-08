# Hydro Cover - Backup do Projeto Premium

Este documento contém toda a estrutura de código da landing page Hydro Cover, incluindo as seções de Engenharia, Hydro Care e Galeria Premium com suporte a GLightbox e Swiper.

## 1. index.html

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hydro Cover | Proteção Premium Para Seu Spa</title>
    <meta name="description" content="Capas térmicas e cuidados especializados com acabamento superior, máxima durabilidade e experiência Hydro Care. Você Relaxa, a Gente Cuida.">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/assets/logo.png">
    
    <!-- Styles -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <!-- GLightbox CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div id="app">
        <!-- Navigation -->
        <nav class="navbar glass">
            <div class="container nav-content">
                <div class="logo">
                    <img src="/assets/logo.png" alt="Hydro Cover Logo" class="logo-img">
                </div>
                <div class="nav-links">
                    <a href="#produtos">Produtos</a>
                    <a href="#diferenciais">Diferenciais</a>
                    <a href="#tecnologia">Tecnologia</a>
                    <a href="#hydro-care">Hydro Care</a>
                    <a href="#contato" class="btn btn-primary">Consultoria</a>
                </div>
                <button class="mobile-menu-btn">
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>

        <!-- Hero Section -->
        <section id="hero" class="hero">
            <div class="hero-bg">
                <img src="/assets/hero_v2.jpg" alt="Spa de Luxo Hydro Cover" class="hero-img">
                <div class="hero-overlay"></div>
            </div>
            <div class="container hero-content">
                <div class="hero-text">
                    <div class="badge-premium slide-up">
                        <i data-lucide="sparkles" class="icon-sm"></i> Linha Premium Hydro Care
                    </div>
                    <h1 class="headline split-text">
                        <span class="headline-top">Proteção <span class="accent-text">Premium</span></span>
                        <span class="headline-bottom text-glow">Para Seu Spa</span>
                    </h1>
                    <p class="subheadline slide-up">Capas térmicas e cuidados especializados com acabamento superior, máxima durabilidade e experiência Hydro Care.</p>
                    <div class="slogan-badge slide-up">
                        “Você Relaxa, a Gente Cuida”
                    </div>
                    <div class="cta-group slide-up">
                        <a href="https://wa.me/5500000000000" class="btn btn-whatsapp btn-lg">
                            <svg class="wa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5-.3-8.5 2.4-11.2 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                            Solicitar Consultoria
                        </a>
                        <a href="#produtos" class="btn btn-outline btn-lg">Explorar Produtos</a>
                    </div>
                    <div class="hero-info slide-up">
                        <div class="info-item">
                            <i data-lucide="map-pin" class="icon-sm"></i>
                            <span>Atendemos Todo Brasil</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="scroll-indicator">
                <div class="mouse"></div>
            </div>
        </section>

        <!-- Diferenciais -->
        <section id="diferenciais" class="section differentials">
            <div class="container">
                <div class="section-header text-center">
                    <h2 class="section-title">Excelência em Cada Detalhe</h2>
                    <p class="section-subtitle">Tecnologia e design para a melhor experiência de relaxamento.</p>
                </div>
                <div class="differential-grid">
                    <div class="diff-card glass-card" data-tilt>
                        <div class="card-icon"><i data-lucide="shield"></i></div>
                        <h3>Estrutura Reforçada</h3>
                        <p>Base sólida para máxima durabilidade em qualquer ambiente.</p>
                    </div>
                    <div class="diff-card glass-card" data-tilt>
                        <div class="card-icon"><i data-lucide="thermometer"></i></div>
                        <h3>Máxima Retenção</h3>
                        <p>Isolamento térmico de alta performance que economiza energia.</p>
                    </div>
                    <div class="diff-card glass-card" data-tilt>
                        <div class="card-icon"><i data-lucide="layers"></i></div>
                        <h3>Costura Premium</h3>
                        <p>Acabamento náutico resistente com fios de alta tenacidade.</p>
                    </div>
                    <div class="diff-card glass-card" data-tilt>
                        <div class="card-icon"><i data-lucide="sun"></i></div>
                        <h3>Proteção UV</h3>
                        <p>Tratamento especial contra raios solares e intempéries.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Produtos Showcase -->
        <section id="produtos" class="section products-showcase">
            <div class="container">
                <div class="product-item reversed">
                    <div class="product-image-grid">
                        <div class="grid-item"><img src="/assets/tampao_1.jpg" alt="Detalhe Tampão 1"></div>
                        <div class="grid-item"><img src="/assets/tampao_2.jpg" alt="Detalhe Tampão 2"></div>
                        <div class="grid-item"><img src="/assets/tampao_3.jpg" alt="Detalhe Tampão 3"></div>
                        <div class="grid-item"><img src="/assets/tampao_4.jpg" alt="Detalhe Tampão 4"></div>
                    </div>
                    <div class="product-info">
                        <span class="product-badge">Mais Vendido</span>
                        <h2 class="product-title">Tampão Térmico</h2>
                        <p class="product-description">Nossa assinatura de luxo. Projetado para manter a temperatura ideal do seu spa por muito mais tempo, com um visual que complementa qualquer ambiente.</p>
                        <ul class="product-features">
                            <li>Estrutura Robusta</li>
                            <li>Aparência Premium</li>
                            <li>Fácil Manuseio</li>
                        </ul>
                        <a href="https://wa.me/5500000000000" class="btn btn-primary">Solicitar Orçamento</a>
                    </div>
                </div>

                <div class="product-item">
                    <div class="product-info">
                        <span class="product-badge">Modernidade</span>
                        <h2 class="product-title">Capa Enrolável</h2>
                        <p class="product-description">A união perfeita entre praticidade e elegância. Abra e feche seu spa em segundos com o sistema de rolagem mais suave do mercado.</p>
                        <ul class="product-features">
                            <li>Design Minimalista</li>
                            <li>Alta Durabilidade</li>
                            <li>Praticidade Total</li>
                        </ul>
                        <a href="https://wa.me/5500000000000" class="btn btn-primary">Solicitar Orçamento</a>
                    </div>
                    <div class="product-image-grid">
                        <div class="grid-item"><img src="/assets/enrolavel_1.jpg" alt="Detalhe Enrolável 1"></div>
                        <div class="grid-item"><img src="/assets/enrolavel_2.jpg" alt="Detalhe Enrolável 2"></div>
                        <div class="grid-item"><img src="/assets/enrolavel_3.jpg" alt="Detalhe Enrolável 3"></div>
                        <div class="grid-item"><img src="/assets/enrolavel_4.jpg" alt="Detalhe Enrolável 4"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Engineering & Tech Section -->
        <section id="tecnologia" class="section engineering-section">
            <div class="container">
                <div class="text-center" style="margin-bottom: 6rem;">
                    <div class="badge-premium">Engenharia de Performance</div>
                    <h2 class="section-title">Engenharia & Tecnologia <br> <span class="text-glow">Hydro Cover</span></h2>
                    <p class="section-subtitle">Onde o design sofisticado encontra a alta performance térmica.</p>
                </div>

                <div class="tech-product-block">
                    <div class="tech-grid">
                        <div class="tech-visual">
                            <div class="exploded-view-container" data-tilt>
                                <img src="/assets/tampao_3.jpg" alt="Tampão Premium Real" class="tech-img">
                                <div class="hotspot" style="top: 20%; left: 30%;" data-tooltip="Núcleo de EPS de Alta Densidade"></div>
                                <div class="hotspot" style="top: 45%; left: 70%;" data-tooltip="Couro Sintético Antifúngico"></div>
                                <div class="hotspot" style="top: 75%; left: 40%;" data-tooltip="Reforço de Alumínio Interno"></div>
                            </div>
                        </div>
                        <div class="tech-content">
                            <span class="product-badge">Destaque Técnico</span>
                            <h3 class="product-title">Tampão Térmico Premium</h3>
                            <p class="product-description">Máxima retenção térmica com acabamento superior. Desenvolvido com proteção UV e tratamento antichamas.</p>
                            <div class="tech-specs-interactive glass-card">
                                <h4>Ficha Técnica — Camadas</h4>
                                <ul class="spec-layers">
                                    <li><span class="layer-name">Estrutura Interna</span><span class="layer-detail">EPS de alta densidade</span></li>
                                    <li><span class="layer-name">Revestimento Superior</span><span class="layer-detail">Couro sintético premium</span></li>
                                    <li><span class="layer-name">Acabamento</span><span class="layer-detail">Dobradiça premium reforçada</span></li>
                                    <li><span class="layer-name">Fixação</span><span class="layer-detail">Regulador + mosquetão em níquel</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Fixation Section -->
        <section class="section fixation-section">
            <div class="container">
                <div class="fixation-box glass-card">
                    <div class="fixation-content">
                        <div class="badge-premium">Segurança Absoluta</div>
                        <h3>Fixação Premium Inviolável</h3>
                        <p>Sistemas de fixação de alta resistência compatíveis com qualquer deck.</p>
                        <div class="fixation-features">
                            <div class="fix-item"><i data-lucide="link"></i> <span>Fitas de Alta Tenacidade</span></div>
                            <div class="fix-item"><i data-lucide="lock"></i> <span>Mosquetões em Níquel</span></div>
                            <div class="fix-item"><i data-lucide="layers"></i> <span>Instalação Segura</span></div>
                        </div>
                    </div>
                    <div class="fixation-grid">
                        <div class="fix-grid-item"><img src="/assets/fixation/presilha_1.jpg" alt="Presilha 1"></div>
                        <div class="fix-grid-item"><video src="/assets/fixation/presilha_v1.mp4" autoplay muted loop playsinline></video></div>
                        <div class="fix-grid-item"><img src="/assets/fixation/presilha_2.jpg" alt="Presilha 2"></div>
                        <div class="fix-grid-item"><img src="/assets/fixation_real.jpg" alt="Detalhe Fixação"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Hydro Care VIP -->
        <section id="hydro-care" class="section hydro-care">
            <div class="container">
                <div class="section-header text-center">
                    <div class="badge-premium">Hydro Care</div>
                    <h2 class="section-title">O cuidado que seu Spa merece</h2>
                    <p class="section-subtitle">Planos especializados para manter seu Spa impecável.</p>
                </div>

                <div class="maintenance-carousel-container">
                    <div class="swiper maintenanceSwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"><a href="/assets/care_fix/m1.jpg" class="glightbox" data-gallery="maintenance-gallery"><img src="/assets/care_fix/m1.jpg" alt="Manutenção 01"></a></div>
                            <div class="swiper-slide"><a href="/assets/care_fix/m2.mp4" class="glightbox" data-gallery="maintenance-gallery"><video src="/assets/care_fix/m2.mp4" autoplay muted loop playsinline></video></a></div>
                            <div class="swiper-slide"><a href="/assets/care_fix/m3.jpg" class="glightbox" data-gallery="maintenance-gallery"><img src="/assets/care_fix/m3.jpg" alt="Manutenção 03"></a></div>
                            <div class="swiper-slide"><a href="/assets/care_fix/m4.jpg" class="glightbox" data-gallery="maintenance-gallery"><img src="/assets/care_fix/m4.jpg" alt="Manutenção 04"></a></div>
                            <div class="swiper-slide"><a href="/assets/care_fix/m5.jpg" class="glightbox" data-gallery="maintenance-gallery"><img src="/assets/care_fix/m5.jpg" alt="Manutenção 05"></a></div>
                            <div class="swiper-slide"><a href="/assets/care_fix/m6.jpg" class="glightbox" data-gallery="maintenance-gallery"><img src="/assets/care_fix/m6.jpg" alt="Manutenção 06"></a></div>
                            <div class="swiper-slide"><a href="/assets/care_fix/m7.jpg" class="glightbox" data-gallery="maintenance-gallery"><img src="/assets/care_fix/m7.jpg" alt="Manutenção 07"></a></div>
                            <div class="swiper-slide"><a href="/assets/care_fix/m8.jpg" class="glightbox" data-gallery="maintenance-gallery"><img src="/assets/care_fix/m8.jpg" alt="Manutenção 08"></a></div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
                
                <!-- Plans Carousel -->
                <div class="care-carousel-container">
                    <div class="swiper careSwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="care-card glass-card">
                                    <h3>Check-up Cristal</h3>
                                    <p>Limpeza técnica especializada.</p>
                                    <ul class="care-list">
                                        <li>Aspiração e Ajuste de PH</li>
                                        <li>Lavagem do Filtro</li>
                                    </ul>
                                    <a href="https://wa.me/5500000000000" class="btn btn-whatsapp btn-full">Solicitar Avaliação</a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="care-card glass-card featured">
                                    <h3>Revitaliza Spa</h3>
                                    <p>Recuperação estética completa.</p>
                                    <ul class="care-list">
                                        <li>Limpeza Profunda</li>
                                        <li>Polimento Náutico</li>
                                    </ul>
                                    <a href="https://wa.me/5500000000000" class="btn btn-whatsapp btn-full">Falar com Especialista</a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="care-card glass-card">
                                    <h3>Experiência Master</h3>
                                    <p>Tratamento VIP completo.</p>
                                    <ul class="care-list">
                                        <li>Troca de Filtro</li>
                                        <li>Hidratação da Capa</li>
                                    </ul>
                                    <a href="https://wa.me/5500000000000" class="btn btn-whatsapp btn-full">Quero Atendimento VIP</a>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Galeria Premium -->
        <section id="galeria" class="section gallery-section">
            <div class="container">
                <div class="section-header text-center">
                    <h2 class="section-title">Experiência Hydro Cover</h2>
                    <p class="section-subtitle">Ambientes transformados por nossas capas.</p>
                </div>
                <div class="gallery-grid">
                    <a href="/assets/gallery/gv1.mp4" class="gallery-item glightbox" data-gallery="hydro-gallery">
                        <video src="/assets/gallery/gv1.mp4" autoplay muted loop playsinline></video>
                        <div class="gallery-overlay"><span>Luxo e Proteção</span></div>
                    </a>
                    <a href="/assets/gallery/gv2.mp4" class="gallery-item glightbox" data-gallery="hydro-gallery">
                        <video src="/assets/gallery/gv2.mp4" autoplay muted loop playsinline></video>
                        <div class="gallery-overlay"><span>Design Exclusivo</span></div>
                    </a>
                    <a href="/assets/gallery/gv3.mp4" class="gallery-item glightbox" data-gallery="hydro-gallery">
                        <video src="/assets/gallery/gv3.mp4" autoplay muted loop playsinline></video>
                        <div class="gallery-overlay"><span>Praticidade Hydro</span></div>
                    </a>
                    <a href="/assets/gallery/gv4.mp4" class="gallery-item glightbox" data-gallery="hydro-gallery">
                        <video src="/assets/gallery/gv4.mp4" autoplay muted loop playsinline></video>
                        <div class="gallery-overlay"><span>Segurança Total</span></div>
                    </a>
                    <a href="/assets/gallery/gv5.mp4" class="gallery-item glightbox" data-gallery="hydro-gallery">
                        <video src="/assets/gallery/gv5.mp4" autoplay muted loop playsinline></video>
                        <div class="gallery-overlay"><span>Acabamento Premium</span></div>
                    </a>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-info">
                        <img src="/assets/logo.png" alt="Hydro Cover Logo" class="logo-img footer-logo">
                        <p>Você Relaxa, a Gente Cuida</p>
                    </div>
                    <div class="footer-contact">
                        <h4>Contato</h4>
                        <p>Hydrocovercare@gmail.com</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2026 Hydro Cover. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    </div>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://unpkg.com/lenis@1.0.45/dist/lenis.min.js"></script>
    <!-- GLightbox JS -->
    <script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></script>
    <script type="module" src="/main.js"></script>
</body>
</html>
```

## 2. style.css

```css
:root {
    --primary: #0055ff;
    --primary-dark: #0033cc;
    --primary-glow: rgba(0, 85, 255, 0.4);
    --secondary: #38bdf8;
    --dark: #020617;
    --darker: #0a0a0a;
    --light: #f8fafc;
    --white: #ffffff;
    --glass: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);
    --font-heading: 'Outfit', sans-serif;
    --font-body: 'Inter', sans-serif;
    --transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--dark);
    color: var(--light);
    font-family: var(--font-body);
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Glassmorphism */
.glass {
    background: var(--glass);
    backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
}

.glass-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    padding: 2.5rem;
    transition: var(--transition);
}

.glass-card:hover {
    transform: translateY(-10px);
    border-color: var(--primary);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px var(--primary-glow);
}

/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    height: 80px;
    display: flex;
    align-items: center;
}

.logo-img {
    height: 80px;
}

/* Hero */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
}

.hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1;
}

.hero-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 50%, rgba(2, 6, 23, 0.8) 0%, rgba(2, 6, 23, 0.4) 50%, rgba(2, 6, 23, 0.9) 100%);
    z-index: -1;
}

.headline {
    font-size: 5rem;
    line-height: 1.1;
    margin-bottom: 2rem;
}

.text-glow {
    background: linear-gradient(to right, #fff, var(--primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Engineering & Maintenance */
.maintenanceSwiper {
    height: 250px;
    border-radius: 20px;
}

.maintenanceSwiper .swiper-slide {
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
}

.maintenanceSwiper .swiper-slide img,
.maintenanceSwiper .swiper-slide video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Gallery */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}

.gallery-item {
    height: 400px;
    border-radius: 24px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
}

.gallery-item video, .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Responsive */
@media (max-width: 992px) {
    .headline { font-size: 3.5rem; }
    .gallery-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
    .gallery-grid { grid-template-columns: 1fr; }
    .headline { font-size: 2.5rem; }
}
```

## 3. main.js

```javascript
import { createIcons, Sparkles, MapPin, Shield, Thermometer, Layers, Sun, Droplet, Check, Crown, Award, ShieldCheck, Truck, Headphones, Zap, FlameKindling, Calendar, Layout, Feather, CheckCircle, Link, Lock } from 'lucide';

// Initialize Lucide Icons
createIcons({
    icons: {
        Sparkles, MapPin, Shield, Thermometer, Layers, Sun, Droplet, Check, Crown, Award, ShieldCheck, Truck, Headphones,
        Zap, FlameKindling, Calendar, Layout, Feather, CheckCircle, Link, Lock
    }
});

// Initialize GLightbox
const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
});

// Initialize Maintenance Swiper
const maintenanceSwiper = new Swiper('.maintenanceSwiper', {
    loop: true,
    autoplay: { delay: 2500 },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 20 }
    },
    pagination: { el: '.swiper-pagination', clickable: true }
});

// Initialize Care Swiper
const careSwiper = new Swiper('.careSwiper', {
    loop: true,
    autoplay: { delay: 4000 },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 40 }
    },
    pagination: { el: '.swiper-pagination', clickable: true }
});
```
