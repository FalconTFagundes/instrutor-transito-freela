// Initialize AOS with optimized settings
AOS.init({
    duration: 600, // Reduzido de 1000ms para 600ms
    once: true,
    offset: 50, // Reduzido de 100 para 50
    easing: 'ease-out', // Mais rápido que cubic-bezier
    delay: 0, // SEM delay base
    disable: false
});

// Desabilitar delays em mobile
if (window.innerWidth <= 768) {
    AOS.init({
        duration: 100, // Ainda mais rápido no mobile
        once: true,
        offset: 20, // Offset menor no mobile
        easing: 'ease-out',
        delay: 0,
        disable: false
    });
}

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: { 
            value: 80, 
            density: { 
                enable: true, 
                value_area: 800 
            } 
        },
        color: { value: '#00D4FF' },
        shape: { type: 'circle' },
        opacity: { 
            value: 0.5, 
            random: false 
        },
        size: { 
            value: 3, 
            random: true 
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00D4FF',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { 
                enable: true, 
                mode: 'repulse' 
            },
            onclick: { 
                enable: true, 
                mode: 'push' 
            },
            resize: true
        }
    },
    retina_detect: true
});

// Typing Effect - Optimized
const words = ['DIRIGIR', 'CONFIAR', 'VENCER'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTextElement = document.querySelector('.typed-text');

function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typedTextElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 100 : 150);
    }
}

// Start typing animation after page load
setTimeout(type, 1000);

// Parallax Hero Background - Premium Effect
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
    let parallaxTicking = false;
    
    function updateParallax() {
        const scrollPosition = window.scrollY;
        const heroSection = document.querySelector('.hero-section');
        
        if (heroSection && scrollPosition < heroSection.offsetHeight) {
            const offset = scrollPosition * 0.5; // Parallax speed
            heroBg.style.setProperty('--scroll-offset', `${offset}px`);
            heroBg.classList.add('parallax');
        }
        
        parallaxTicking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!parallaxTicking) {
            window.requestAnimationFrame(updateParallax);
            parallaxTicking = true;
        }
    });
}

// Header Scroll Effect - Optimized with throttle
let lastScroll = 0;
let ticking = false;

function updateHeader() {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = scrollPosition;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
    }
});

// Smooth Scroll - Enhanced
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const header = document.getElementById('header');
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({ 
                    top: targetPosition, 
                    behavior: 'smooth' 
                });

                // Close navbar on mobile
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        }
    });
});

// Active Nav Link - Optimized with Intersection Observer
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = {
    root: null,
    rootMargin: '-100px 0px -66%',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// CTA Button - Enhanced
const ctaBtn = document.getElementById('ctaBtn');
if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
        Swal.fire({
            title: 'Agende sua Aula!',
            html: '<p class="mb-3">Vamos conversar pelo WhatsApp?</p>',
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: '<i class="fab fa-whatsapp me-2"></i>Abrir WhatsApp',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#00D4FF',
            cancelButtonColor: '#6c757d',
            background: '#1A1F2B',
            color: '#E8ECEF',
            customClass: {
                confirmButton: 'btn-neon',
                cancelButton: 'btn'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const numero = '557791453822';
                const msg = encodeURIComponent('Olá, Luis! Gostaria de agendar uma aula de direção.');
                window.open(`https://wa.me/${numero}?text=${msg}`, '_blank');
            }
        });
    });
}

// WhatsApp Mask - Enhanced
const whatsappInput = document.getElementById('whatsapp');
if (whatsappInput) {
    whatsappInput.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.substring(0, 11);

        if (value.length > 6) {
            value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
        } else if (value.length > 2) {
            value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
        } else if (value.length > 0) {
            value = value.replace(/^(\d*)/, '($1');
        }

        e.target.value = value;
    });
}

// Form Submit - Enhanced validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome')?.value.trim();
        const whatsapp = document.getElementById('whatsapp')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const mensagem = document.getElementById('mensagem')?.value.trim();

        // Enhanced validation
        if (!nome || nome.length < 3) {
            showError('Por favor, digite seu nome completo (mínimo 3 caracteres).');
            return;
        }

        if (!whatsapp || whatsapp.length < 14) {
            showError('Por favor, digite um número de WhatsApp válido.');
            return;
        }

        if (!email || !validateEmail(email)) {
            showError('Por favor, digite um e-mail válido.');
            return;
        }

        if (!mensagem || mensagem.length < 10) {
            showError('Por favor, escreva uma mensagem (mínimo 10 caracteres).');
            return;
        }

        // Show loading
        Swal.fire({
            title: 'Enviando...',
            html: 'Redirecionando para o WhatsApp...',
            allowOutsideClick: false,
            showConfirmButton: false,
            background: '#1A1F2B',
            color: '#E8ECEF',
            didOpen: () => Swal.showLoading()
        });

        // Simulate sending delay
        setTimeout(() => {
            const numero = '557791453822';
            const msg = `Olá Luis! Meu nome é ${nome}.%0A%0AWhatsApp: ${whatsapp}%0AE-mail: ${email}%0A%0AMensagem: ${mensagem}`;

            Swal.fire({
                icon: 'success',
                title: 'Tudo certo!',
                text: 'Você será redirecionado para o WhatsApp.',
                confirmButtonColor: '#25D366',
                background: '#1A1F2B',
                color: '#E8ECEF',
                confirmButtonText: '<i class="fab fa-whatsapp me-2"></i>Ir para WhatsApp',
                customClass: {
                    confirmButton: 'btn-neon'
                }
            }).then(() => {
                window.open(`https://wa.me/${numero}?text=${msg}`, '_blank');
                this.reset();
            });
        }, 1500);
    });
}

// Helper function - Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Helper function - Show error
function showError(message) {
    Swal.fire({
        icon: 'error',
        title: 'Ops!',
        text: message,
        confirmButtonColor: '#00D4FF',
        background: '#1A1F2B',
        color: '#E8ECEF',
        customClass: {
            confirmButton: 'btn-neon'
        }
    });
}

// Smooth reveal on scroll - Additional elements
const revealElements = document.querySelectorAll('.glass-card, .service-card, .feature-box');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(element);
});

// Performance optimization - Lazy loading images
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});

// Smooth button interactions
document.querySelectorAll('.btn-neon').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    button.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(0) scale(0.98)';
    });
    
    button.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
});

// Enhanced card hover effects
document.querySelectorAll('.service-card, .glass-card, .feature-box').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Preload critical resources
window.addEventListener('load', () => {
    // Preload WhatsApp icon
    const whatsappIcon = new Image();
    whatsappIcon.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6TTEwIDE3LjVjLTEuNCAwLTIuNy0uMy0zLjktLjlsLTIuMyAxIC45LTIuM2MtLjYtMS4yLS45LTIuNS0uOS0zLjkgMC0zLjkgMy4xLTcgNy03czcgMy4xIDcgN2MwIDQuMS0zIDcuMi03IDcuMnoiLz48L3N2Zz4=';
    
    console.log('Site Luis Instrutor - Carregado com sucesso! 🚗✨');
});

// Add smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.getElementById('header')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});