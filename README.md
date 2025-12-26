# 🚗 Luis Instrutor

> Site institucional para instrutor de trânsito em Governador Valadares-MG

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap_5-563D7C?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

---

## 📌 Sobre

Website moderno e responsivo desenvolvido para Luis Instrutor, profissional autônomo com mais de 10 anos de experiência em Governador Valadares-MG. Foco em conversão via WhatsApp e experiência premium.

---

## ✨ Destaques

- 🎨 Dark theme com efeitos neon e glassmorphism
- 📱 100% responsivo (desktop, tablet, mobile)
- ⚡ Animações suaves e otimizadas
- 🚀 Performance Lighthouse 95+
- 💬 Integração WhatsApp para agendamento

---

## 🛠️ Tecnologias

- HTML5, CSS3, JavaScript ES6+
- Bootstrap 5.3.2
- AOS (Animate On Scroll)
- Particles.js
- Font Awesome 6.5.1
- Google Fonts (Inter + Orbitron)

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/luis-instrutor.git

# Entre na pasta
cd luis-instrutor

# Abra o index.html no navegador
# Ou use um servidor local (recomendado)
```

---

## 📁 Estrutura

```
luis-instrutor/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos
├── js/
│   └── main.js         # Scripts
└── assets/
    └── luis.png        # Foto do instrutor
```

---

## 🎨 Customização

### Alterar cores
Edite as variáveis CSS no `style.css`:

```css
:root {
    --bg-primary: #0F1419;
    --accent-cyan: #00D4FF;
    --text-primary: #FFFFFF;
}
```

### Alterar WhatsApp
Procure por `557791453822` no `index.html` e substitua pelo seu número.

### Ajustar animações mobile
No `main.js`:

```javascript
if (window.innerWidth <= 768) {
    AOS.init({
        duration: 400,  // Velocidade
        offset: 20      // Quando ativar
    });
}
```

---

## 📱 Responsividade

| Dispositivo | Layout |
|-------------|--------|
| Desktop (1200px+) | 4 cards lado a lado |
| Tablet (768-1199px) | 2 cards por linha |
| Mobile (<768px) | 1 card por linha |

Testado em: iPhone, Samsung, iPad, Desktop.

---

## 🚀 Deploy

1. Hospede em qualquer servidor web (Netlify, Vercel, GitHub Pages)
2. Configure o domínio
3. Teste no mobile
4. Limpe o cache (Ctrl + Shift + R)

---

## 📄 Licença

MIT License - use livremente para seus projetos.

---

## 👤 Contato

**Luis Instrutor**
- WhatsApp: [(77) 9145-3822](https://wa.me/557791453822)
- YouTube: [@LuisInstrutorGV](https://youtube.com/@LuisInstrutorGV)
- Localização: Governador Valadares, MG

---

<div align="center">

Made with ❤️ for Luis Instrutor

⭐ Dê uma estrela se este projeto foi útil!

</div>