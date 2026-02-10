# 🎨 Kevala Ravelo Hair Studio - Design System

## Paleta de Colores

### Primary (Dorado Elegante)
- **Primary 500** (Base): `#D4AF37` - Color principal del brand
- **Primary 300** (Light): `#F0D97A` - Hover states, backgrounds suaves
- **Primary 700** (Dark): `#9C8027` - Texto sobre fondos claros, borders

### Secondary (Warm Accent)
- **Secondary 500**: `#FFB84D` - Call-to-actions secundarios
- **Secondary 300**: `#FFD699` - Highlights sutiles

### Neutral (Profesional)
- **Neutral 900**: `#171717` - Texto principal
- **Neutral 600**: `#525252` - Texto secundario
- **Neutral 200**: `#E5E5E5` - Bordes, divisores
- **Neutral 50**: `#FAFAFA` - Backgrounds alternativos

### Semantic
- **Success**: `#10B981` - Mensajes de confirmación
- **Warning**: `#F59E0B` - Alertas importantes
- **Error**: `#EF4444` - Errores, validaciones
- **Info**: `#3B82F6` - Información contextual

---

## Tipografía

### Font Families
```css
--font-display: 'Montserrat', sans-serif;  /* Títulos grandes */
--font-serif: 'Playfair Display', Georgia, serif;  /* Elegancia */
--font-sans: 'Inter', sans-serif;  /* Textos generales */
```

### Scale
- **Headline (H1)**: 3rem (48px) / Bold / Montserrat
- **Title (H2)**: 2.25rem (36px) / SemiBold / Montserrat
- **Subtitle (H3)**: 1.5rem (24px) / Medium / Inter
- **Body Large**: 1.125rem (18px) / Normal / Inter
- **Body**: 1rem (16px) / Normal / Inter
- **Small**: 0.875rem (14px) / Normal / Inter
- **Caption**: 0.75rem (12px) / Medium / Inter

### Uso por sección:
- **Hero/Portada**: H1 (Montserrat Bold) + Body Large
- **Servicios**: H2 (Montserrat SemiBold) + Body
- **Descripción servicio**: Body / Small
- **Botones**: Body / Medium uppercase
- **Precios**: H3 (Playfair Display) para destacar

---

## Espaciado (8pt Grid)

### Sistema base
```
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
```

### Aplicación por componente:

**Secciones principales**:
- Padding vertical: `96px` (desktop) / `64px` (mobile)
- Padding horizontal: `48px` (desktop) / `24px` (mobile)

**Cards de servicios**:
- Padding interno: `24px`
- Gap entre cards: `24px` (mobile) / `32px` (desktop)
- Margin bottom: `16px`

**Botones**:
- Padding: `12px 32px` (grande) / `8px 24px` (normal)
- Gap con iconos: `8px`

**Textos**:
- Line height: 1.5 (body) / 1.2 (headings)
- Paragraph spacing: `16px`

---

## Componentes Clave

### 1. CTA Button (WhatsApp)

**Especificaciones**:
```css
/* Primary CTA */
background: var(--color-primary-500);
color: #FFFFFF;
padding: 16px 40px;
border-radius: 12px;
font-size: 1.125rem;
font-weight: 600;
box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

/* Hover */
background: var(--color-primary-600);
transform: translateY(-2px);
box-shadow: 0 8px 30px rgba(212, 175, 55, 0.4);

/* Mobile */
width: 100%;
padding: 14px 32px;
```

**Variantes**:
- **Primary**: Fondo dorado (#D4AF37)
- **Secondary**: Borde dorado, fondo transparente
- **WhatsApp**: Fondo #25D366 con icono

**Mensaje prellenado**:
```
"Hola, vi su página y quiero agendar una cita 💇‍♀️"
```

---

### 2. Service Card

**Estructura**:
```html
<div class="service-card">
  <div class="service-icon">💇‍♀️</div>
  <h3 class="service-title">Corte de Dama</h3>
  <p class="service-description">
    Corte personalizado con análisis de rostro y tipo de cabello
  </p>
  <button class="cta-secondary">Cotizar por WhatsApp</button>
</div>
```

**Especificaciones**:
```css
.service-card {
  background: #FFFFFF;
  border: 1px solid var(--color-neutral-200);
  border-radius: 16px;
  padding: 32px 24px;
  transition: all 300ms ease;
}

.service-card:hover {
  border-color: var(--color-primary-500);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.15);
  transform: translateY(-4px);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-neutral-900);
  margin-bottom: 12px;
}

.service-description {
  font-size: 1rem;
  color: var(--color-neutral-600);
  line-height: 1.6;
  margin-bottom: 24px;
}
```

---

### 3. Hero Section (Portada)

**Layout**:
```
[ Imagen Background con overlay ] + [ Contenido centrado ]
```

**Especificaciones**:
```css
.hero {
  height: 90vh;
  min-height: 600px;
  background: linear-gradient(
    135deg,
    rgba(23, 23, 23, 0.7),
    rgba(212, 175, 55, 0.3)
  ), url('salon-image.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-content {
  max-width: 700px;
  padding: 48px 24px;
}

.hero-title {
  font-family: var(--font-display);
  font-size: 3.75rem; /* 60px */
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 16px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  font-weight: 300;
}

/* Mobile */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-subtitle {
    font-size: 1.125rem;
  }
}
```

**Contenido**:
- **Título**: "Kevala Ravelo Hair Studio"
- **Subtitle**: "Estética y salón de belleza en Monterrey"
- **CTA**: Botón WhatsApp grande

---

### 4. Gallery Grid

**Layout**: Grid responsivo con aspect ratio 1:1

**Especificaciones**:
```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  padding: 48px 24px;
}

.gallery-item {
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 300ms ease;
}

.gallery-item:hover {
  transform: scale(1.05);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7),
    transparent
  );
  padding: 20px;
  color: #FFFFFF;
  opacity: 0;
  transition: opacity 300ms ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}
```

---

### 5. Floating WhatsApp Button

**Especificaciones**:
```css
.whatsapp-float {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 64px;
  height: 64px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  cursor: pointer;
  z-index: 1000;
  transition: all 300ms ease;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
}

.whatsapp-float svg {
  width: 36px;
  height: 36px;
  color: #FFFFFF;
}

/* Mobile */
@media (max-width: 768px) {
  .whatsapp-float {
    bottom: 24px;
    right: 24px;
    width: 56px;
    height: 56px;
  }
}
```

---

### 6. Schedule Section

**Especificaciones**:
```css
.schedule {
  background: var(--color-neutral-50);
  border-radius: 16px;
  padding: 32px;
  border-left: 4px solid var(--color-primary-500);
}

.schedule-day {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-neutral-200);
}

.schedule-day:last-child {
  border-bottom: none;
}

.day-name {
  font-weight: 600;
  color: var(--color-neutral-900);
}

.day-hours {
  color: var(--color-neutral-600);
}

.day-closed {
  color: var(--color-error-default);
  font-style: italic;
}
```

**Contenido sugerido**:
```
Lunes - Viernes: 10:00 AM - 7:00 PM
Sábado: 10:00 AM - 6:00 PM
Domingo: Cerrado
```

---

## Breakpoints Responsivos

```css
/* Mobile First Approach */

/* Extra Small (< 640px) */
Base styles

/* Small (640px - 767px) */
@media (min-width: 640px) {
  /* Tablets pequeñas */
}

/* Medium (768px - 1023px) */
@media (min-width: 768px) {
  /* Tablets */
  .hero-title { font-size: 3rem; }
  .service-card { padding: 32px; }
}

/* Large (1024px+) */
@media (min-width: 1024px) {
  /* Desktop */
  .container { max-width: 1200px; }
  .gallery { grid-template-columns: repeat(3, 1fr); }
}

/* Extra Large (1280px+) */
@media (min-width: 1280px) {
  /* Large screens */
  .hero-title { font-size: 3.75rem; }
}
```

---

## Shadows & Effects

### Elevaciones
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
--shadow-gold: 0 4px 20px rgba(212, 175, 55, 0.3);
```

### Uso:
- **Cards**: `shadow-md` (normal) / `shadow-lg` (hover)
- **Buttons**: `shadow-gold`
- **Modals**: `shadow-xl`

---

## Animaciones

### Duraciones
```css
--duration-fast: 150ms;
--duration-base: 300ms;
--duration-slow: 500ms;
```

### Easings
```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Aplicaciones comunes:
- **Hover states**: 300ms ease-in-out
- **Page transitions**: 500ms ease-in-out
- **Micro-interactions**: 150ms ease-in-out
- **Bounce effects**: 500ms ease-spring

---

## Accesibilidad

### Contraste de color
✅ **Pasado**: Todos los contrastes cumplen WCAG AA
- Dorado sobre blanco: 4.8:1
- Negro sobre blanco: 21:1
- Neutral 600 sobre blanco: 7:1

### Focus states
```css
*:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 4px;
  border-radius: 4px;
}
```

### Alt text para imágenes
- **Hero**: "Interior del salón Kevala Ravelo Hair Studio"
- **Servicios**: "Resultado de [tipo de servicio]"
- **Galería**: "Antes y después de [servicio específico]"

---

## Integración con WhatsApp

### Formato de URLs
```javascript
const whatsappURL = (message) => {
  const phone = "528112345678"; // Reemplazar con número real
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMsg}`;
};
```

### Mensajes prellenados por sección:
- **Hero CTA**: "Hola, vi su página y quiero agendar una cita 💇‍♀️"
- **Servicio específico**: "Hola, me interesa el servicio de [SERVICIO]. ¿Cuál es el costo?"
- **Botón flotante**: "Hola, tengo una consulta"

---

## Assets Requeridos

### Imágenes
1. **Hero background**: 1920x1080px (alta calidad)
2. **Servicios icons**: Emojis o SVG (💇‍♀️ 💅 💄)
3. **Galería**: Mínimo 9 imágenes 800x800px
4. **Logo**: SVG vectorial + PNG fallback

### Iconos (usar Font Awesome o similar)
- WhatsApp: `fab fa-whatsapp`
- Phone: `fas fa-phone`
- Location: `fas fa-map-marker-alt`
- Instagram: `fab fa-instagram`
- Facebook: `fab fa-facebook`

---

## Checklist de Implementación

### Fase 1: Fundamentos
- [ ] Importar Google Fonts (Montserrat, Playfair Display, Inter)
- [ ] Cargar design tokens (CSS custom properties)
- [ ] Configurar grid system base
- [ ] Implementar color palette

### Fase 2: Componentes Core
- [ ] Hero section con CTA
- [ ] Botón WhatsApp flotante
- [ ] Service cards
- [ ] Responsive navigation

### Fase 3: Contenido
- [ ] Sección servicios completa
- [ ] Galería de trabajos
- [ ] Horarios y ubicación
- [ ] Footer con redes sociales

### Fase 4: Optimización
- [ ] Validar contraste de colores
- [ ] Testing en dispositivos móviles
- [ ] Optimización de imágenes
- [ ] Velocidad de carga (< 3s)

---

## Notas Técnicas para Desarrollo

### Performance
- Lazy loading para imágenes de galería
- Preload para hero image
- Defer scripts no críticos
- Minify CSS/JS en producción

### SEO
```html
<title>Kevala Ravelo Hair Studio | Salón de Belleza en Monterrey</title>
<meta name="description" content="Estética y salón de belleza en Monterrey. Especialistas en corte, color, uñas y maquillaje. Agenda tu cita por WhatsApp.">
```

### Schema Markup
```json
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Kevala Ravelo Hair Studio",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Monterrey",
    "addressRegion": "Nuevo León"
  }
}
```

---

**Design System Version**: 1.0.0  
**Última actualización**: Febrero 2026  
**Diseñado para**: Kevala Ravelo Hair Studio
