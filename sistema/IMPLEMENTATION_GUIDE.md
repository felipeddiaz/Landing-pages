# 📋 Kevala Ravelo Hair Studio - Guía de Implementación

## 🎯 Objetivo del Proyecto

Crear un sitio web profesional para salón de belleza que:
- **Convierta visitas en citas por WhatsApp**
- Muestre servicios de forma clara y atractiva
- Sea 100% responsivo (mobile-first)
- Cargue rápido (< 3 segundos)
- Cumpla con accesibilidad WCAG AA

---

## 📦 Entregables

### Archivos del Design System
✅ `design-tokens.json` - Tokens en formato JSON
✅ `design-tokens.css` - Custom properties CSS
✅ `design-tokens.scss` - Variables SCSS
✅ `DESIGN_SYSTEM.md` - Documentación completa
✅ `kevala-demo.html` - Demo funcional

---

## 🛠️ Stack Tecnológico Recomendado

### Opción 1: HTML/CSS Puro (Más simple)
```
- HTML5 semántico
- CSS3 con custom properties
- JavaScript vanilla para interacciones
- No requiere build process
```

**Ventajas**: Simple, rápido, sin dependencias  
**Ideal para**: Sitios estáticos, hosting básico

### Opción 2: Framework Moderno (Más escalable)
```
- Next.js 14+ (React)
- TailwindCSS + custom design tokens
- TypeScript
- Vercel deployment
```

**Ventajas**: SEO optimizado, mejor performance  
**Ideal para**: Proyectos con futuro crecimiento

---

## 📐 Estructura de Archivos Recomendada

```
kevala-website/
├── index.html                 # Página principal
├── assets/
│   ├── css/
│   │   ├── tokens.css        # Design tokens
│   │   ├── base.css          # Reset + base styles
│   │   ├── components.css    # Componentes reutilizables
│   │   └── utilities.css     # Clases de utilidad
│   ├── js/
│   │   ├── whatsapp.js       # Lógica WhatsApp
│   │   └── main.js           # Scripts principales
│   └── images/
│       ├── hero-bg.jpg       # Background hero
│       ├── logo.svg          # Logo del salón
│       └── gallery/          # Imágenes de trabajos
└── README.md
```

---

## 🎨 Implementación de Design Tokens

### 1. Importar tokens CSS

```html
<link rel="stylesheet" href="assets/css/tokens.css">
```

### 2. Usar en componentes

```css
.service-card {
  background: var(--color-background-primary);
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-lg);
  padding: var(--spacing-32);
  box-shadow: var(--shadow-md);
}

.service-card:hover {
  border-color: var(--color-primary-500);
  box-shadow: var(--shadow-gold);
  transform: translateY(-4px);
  transition: all var(--duration-base) var(--ease-in-out);
}
```

---

## 📱 Responsive Breakpoints

### Sistema Mobile-First

```css
/* Base: Mobile (< 640px) */
.hero-title {
  font-size: 2.5rem;
}

/* Small tablets (640px+) */
@media (min-width: 640px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Tablets (768px+) */
@media (min-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
  .section {
    padding: var(--spacing-96) 0;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .hero-title {
    font-size: 3.75rem;
  }
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Large screens (1280px+) */
@media (min-width: 1280px) {
  .container {
    max-width: 1200px;
  }
}
```

---

## 🔗 Integración con WhatsApp

### Formato de URLs

```javascript
// whatsapp.js
const whatsappConfig = {
  phoneNumber: '528112345678', // Reemplazar con número real
  messages: {
    hero: 'Hola, vi su página y quiero agendar una cita 💇‍♀️',
    service: (serviceName) => `Hola, me interesa el servicio de ${serviceName}. ¿Cuál es el costo?`,
    general: 'Hola, tengo una consulta',
  }
};

function generateWhatsAppURL(message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodedMessage}`;
}

// Uso en HTML
document.querySelectorAll('[data-whatsapp]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const message = btn.dataset.message || whatsappConfig.messages.general;
    window.open(generateWhatsAppURL(message), '_blank');
  });
});
```

### Implementación en botones

```html
<!-- Botón Hero -->
<a href="#" 
   data-whatsapp 
   data-message="Hola, vi su página y quiero agendar una cita 💇‍♀️"
   class="btn btn-whatsapp">
  <i class="fab fa-whatsapp"></i>
  Agendar cita por WhatsApp
</a>

<!-- Botón servicio específico -->
<a href="#" 
   data-whatsapp 
   data-message="Hola, me interesa el servicio de Corte de Dama. ¿Cuál es el costo?"
   class="btn btn-secondary">
  Cotizar por WhatsApp
</a>
```

---

## 🖼️ Optimización de Imágenes

### Especificaciones requeridas

| Tipo | Dimensiones | Formato | Peso máx |
|------|-------------|---------|----------|
| Hero background | 1920x1080px | JPG/WebP | 300KB |
| Gallery items | 800x800px | JPG/WebP | 150KB |
| Logo | Vectorial | SVG | 50KB |
| Servicios icons | 128x128px | SVG/PNG | 20KB |

### Implementación con lazy loading

```html
<!-- Hero (preload crítico) -->
<link rel="preload" as="image" href="assets/images/hero-bg.jpg">

<!-- Gallery (lazy loading) -->
<img src="assets/images/placeholder.jpg" 
     data-src="assets/images/gallery/corte-1.jpg"
     alt="Resultado de corte de cabello"
     loading="lazy"
     class="gallery-img">
```

```javascript
// Lazy loading script
document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => imageObserver.observe(img));
});
```

---

## 🔍 SEO Implementation

### Meta Tags esenciales

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO Básico -->
  <title>Kevala Ravelo Hair Studio | Salón de Belleza en Monterrey</title>
  <meta name="description" content="Estética y salón de belleza en Monterrey. Especialistas en corte, color, uñas y maquillaje. Agenda tu cita por WhatsApp.">
  <meta name="keywords" content="salón de belleza monterrey, estética monterrey, corte de cabello, tinte, balayage, uñas acrílicas, maquillaje">
  
  <!-- Open Graph (Facebook, WhatsApp) -->
  <meta property="og:title" content="Kevala Ravelo Hair Studio | Salón de Belleza">
  <meta property="og:description" content="Estética y salón de belleza en Monterrey. Agenda tu cita por WhatsApp.">
  <meta property="og:image" content="https://tudominio.com/assets/images/og-image.jpg">
  <meta property="og:url" content="https://tudominio.com">
  <meta property="og:type" content="website">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Kevala Ravelo Hair Studio">
  <meta name="twitter:description" content="Salón de belleza en Monterrey">
  <meta name="twitter:image" content="https://tudominio.com/assets/images/twitter-card.jpg">
  
  <!-- Canonical -->
  <link rel="canonical" href="https://tudominio.com">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">
  <link rel="icon" type="image/png" href="assets/images/favicon.png">
</head>
```

### Schema.org Markup

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Kevala Ravelo Hair Studio",
  "image": "https://tudominio.com/assets/images/salon.jpg",
  "description": "Estética y salón de belleza en Monterrey especializado en corte, color, uñas y maquillaje",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Constitución 123",
    "addressLocality": "Monterrey",
    "addressRegion": "Nuevo León",
    "postalCode": "64000",
    "addressCountry": "MX"
  },
  "telephone": "+528112345678",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "url": "https://tudominio.com",
  "sameAs": [
    "https://www.instagram.com/kevalaravelo",
    "https://www.facebook.com/kevalaravelo"
  ]
}
</script>
```

---

## ⚡ Performance Optimization

### Critical CSS Inlining

```html
<head>
  <!-- Critical CSS inline -->
  <style>
    /* Estilos críticos del hero y above-the-fold */
    :root { --color-primary-500: #D4AF37; }
    .hero { height: 90vh; background: #171717; }
    .btn-whatsapp { background: #25D366; }
  </style>
  
  <!-- CSS no crítico (defer) -->
  <link rel="preload" href="assets/css/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="assets/css/main.css"></noscript>
</head>
```

### Script Optimization

```html
<!-- Defer scripts no críticos -->
<script src="assets/js/main.js" defer></script>

<!-- Async para tracking -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
```

### Compression

```
# .htaccess para Apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>

# Cache control
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## ♿ Accessibility Checklist

### Requerimientos WCAG AA

- [x] **Contraste de color**: Mínimo 4.5:1 para texto normal
- [x] **Focus visible**: Outline en todos los elementos interactivos
- [x] **Alt text**: Todas las imágenes descriptivas
- [x] **Headings semánticos**: H1 → H2 → H3 jerarquía correcta
- [x] **ARIA labels**: Botones de iconos solamente
- [x] **Keyboard navigation**: Tab index lógico
- [x] **Responsive text**: Zoom hasta 200% sin scroll horizontal

### Implementación

```html
<!-- Focus states -->
<style>
  *:focus-visible {
    outline: 2px solid var(--color-primary-500);
    outline-offset: 4px;
  }
</style>

<!-- ARIA labels -->
<a href="#" class="social-link" aria-label="Visitar Instagram">
  <i class="fab fa-instagram" aria-hidden="true"></i>
</a>

<!-- Alt text descriptivo -->
<img src="gallery-1.jpg" 
     alt="Resultado de corte bob con capas en cabello castaño">
```

---

## 📊 Analytics & Tracking

### Google Analytics 4

```html
<!-- Global site tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Event Tracking para WhatsApp

```javascript
// Trackear clicks en botones WhatsApp
document.querySelectorAll('[data-whatsapp]').forEach(btn => {
  btn.addEventListener('click', () => {
    gtag('event', 'whatsapp_click', {
      'event_category': 'engagement',
      'event_label': btn.dataset.service || 'general',
      'value': 1
    });
  });
});

// Trackear scrolls a secciones
const sections = document.querySelectorAll('section[id]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      gtag('event', 'section_view', {
        'event_category': 'engagement',
        'event_label': entry.target.id
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));
```

---

## 🚀 Deployment Checklist

### Pre-deployment

- [ ] Validar HTML (W3C Validator)
- [ ] Validar CSS
- [ ] Comprimir imágenes (TinyPNG/Squoosh)
- [ ] Minificar CSS/JS
- [ ] Generar sitemap.xml
- [ ] Configurar robots.txt
- [ ] SSL certificate instalado
- [ ] Testing en múltiples dispositivos
- [ ] Testing en múltiples navegadores

### Hosting Recommendations

**Opción 1: Netlify (Free tier)**
```bash
# Deploy command
npm run build
# Publish directory
dist/
```

**Opción 2: Vercel**
```bash
vercel --prod
```

**Opción 3: Hostinger/cPanel**
- Upload via FTP
- Configurar dominio
- Activar SSL

### Post-deployment

- [ ] Verificar Google Search Console
- [ ] Verificar Google My Business
- [ ] Conectar Google Analytics
- [ ] Probar todas las URLs de WhatsApp
- [ ] Lighthouse audit (target: 90+ score)
- [ ] PageSpeed Insights test
- [ ] Mobile-friendly test

---

## 🔧 Mantenimiento

### Actualizaciones mensuales
- Actualizar imágenes de galería
- Revisar enlaces rotos
- Actualizar horarios (si cambian)
- Revisar analytics

### Backups
```bash
# Automatizar backups semanales
0 0 * * 0 /usr/bin/rsync -av /var/www/html /backups/kevala-website/
```

---

## 📞 Soporte Técnico

### Recursos
- **Design System**: Ver `DESIGN_SYSTEM.md`
- **Tokens**: `design-tokens.json` / `.css` / `.scss`
- **Demo funcional**: `kevala-demo.html`

### Contacto para dudas técnicas
- Crear issue en repositorio
- Email: dev@kevalaravelo.com

---

**Versión**: 1.0.0  
**Fecha**: Febrero 2026  
**Diseñado por**: Senior UI Designer  
**Para**: Kevala Ravelo Hair Studio
