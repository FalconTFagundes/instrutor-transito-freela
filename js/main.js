// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#00D4FF' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
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
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
});

// Typing Effect
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

setTimeout(type, 1000);

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scroll
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });

                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse.classList.contains('show')) {
                    new bootstrap.Collapse(navbarCollapse).hide();
                }
            }
        }
    });
});

// Active Nav Link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// CTA Button
document.getElementById('ctaBtn').addEventListener('click', () => {
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
        color: '#E8ECEF'
    }).then((result) => {
        if (result.isConfirmed) {
            const numero = '5533999999999';
            const msg = encodeURIComponent('Olá, Luis! Gostaria de agendar uma aula de direção.');
            window.open(`https://wa.me/${numero}?text=${msg}`, '_blank');
        }
    });
});

// WhatsApp Mask
const whatsappInput = document.getElementById('whatsapp');
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

// Form Submit
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome.length < 3 || whatsapp.length < 14 || !email.includes('@') || mensagem.length < 10) {
        Swal.fire({
            icon: 'error',
            title: 'Ops!',
            text: 'Preencha todos os campos corretamente.',
            confirmButtonColor: '#00D4FF',
            background: '#1A1F2B',
            color: '#E8ECEF'
        });
        return;
    }

    Swal.fire({
        title: 'Enviando...',
        html: 'Redirecionando para o WhatsApp...',
        allowOutsideClick: false,
        showConfirmButton: false,
        background: '#1A1F2B',
        color: '#E8ECEF',
        didOpen: () => Swal.showLoading()
    });

    setTimeout(() => {
        const numero = '5533999999999';
        const msg = `Olá Luis! Meu nome é ${nome}.%0A%0AWhatsApp: ${whatsapp}%0AE-mail: ${email}%0A%0AMensagem: ${mensagem}`;

        Swal.fire({
            icon: 'success',
            title: 'Tudo certo!',
            text: 'Você será redirecionado para o WhatsApp.',
            confirmButtonColor: '#25D366',
            background: '#1A1F2B',
            color: '#E8ECEF',
            confirmButtonText: '<i class="fab fa-whatsapp me-2"></i>Ir para WhatsApp'
        }).then(() => {
            window.open(`https://wa.me/${numero}?text=${msg}`, '_blank');
            this.reset();
        });
    }, 1500);
});