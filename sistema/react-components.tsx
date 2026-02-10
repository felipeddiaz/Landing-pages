// ServiceCard.tsx
// Componente reutilizable para mostrar servicios

import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  whatsappMessage?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  whatsappMessage
}) => {
  const handleWhatsAppClick = () => {
    const phone = '528112345678'; // Configurar en .env
    const message = whatsappMessage || `Hola, me interesa el servicio de ${title}. ¿Cuál es el costo?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="service-card group">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <button 
        onClick={handleWhatsAppClick}
        className="btn btn-secondary"
        aria-label={`Cotizar servicio de ${title} por WhatsApp`}
      >
        Cotizar por WhatsApp
      </button>
    </div>
  );
};

// ============================================

// HeroSection.tsx
// Sección hero con CTA principal

import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  backgroundImage?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText = 'Agendar cita por WhatsApp',
  backgroundImage
}) => {
  const handleCTAClick = () => {
    const phone = '528112345678';
    const message = 'Hola, vi su página y quiero agendar una cita 💇‍♀️';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section 
      className="hero"
      style={{
        backgroundImage: backgroundImage 
          ? `linear-gradient(135deg, rgba(23, 23, 23, 0.7), rgba(212, 175, 55, 0.3)), url(${backgroundImage})`
          : undefined
      }}
    >
      <div className="hero-content">
        <div className="hero-logo" aria-hidden="true">💇‍♀️</div>
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <button 
          onClick={handleCTAClick}
          className="btn btn-whatsapp"
          aria-label={ctaText}
        >
          <i className="fab fa-whatsapp" aria-hidden="true"></i>
          {ctaText}
        </button>
      </div>
    </section>
  );
};

// ============================================

// ServicesSection.tsx
// Grid de servicios con todos los items

import React from 'react';
import { ServiceCard } from './ServiceCard';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 'corte-dama',
    icon: '💇‍♀️',
    title: 'Corte de Dama',
    description: 'Corte personalizado con análisis de rostro y tipo de cabello'
  },
  {
    id: 'tinte-color',
    icon: '🎨',
    title: 'Tinte y Color',
    description: 'Coloración profesional con técnicas modernas y productos premium'
  },
  {
    id: 'balayage',
    icon: '✨',
    title: 'Balayage',
    description: 'Técnica de iluminación para un look natural y dimensional'
  },
  {
    id: 'manicure',
    icon: '💅',
    title: 'Manicure y Pedicure',
    description: 'Cuidado completo de manos y pies con acabados impecables'
  },
  {
    id: 'maquillaje',
    icon: '💄',
    title: 'Maquillaje',
    description: 'Maquillaje social y para eventos especiales'
  },
  {
    id: 'unas-acrilicas',
    icon: '🌟',
    title: 'Uñas Acrílicas',
    description: 'Extensiones y diseños personalizados de alta durabilidad'
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle">
          Especialistas en belleza integral con atención personalizada y productos de calidad
        </p>
        
        <div className="services-grid">
          {services.map(service => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================

// GallerySection.tsx
// Grid de galería con lazy loading

import React, { useState } from 'react';
import Image from 'next/image'; // Para Next.js

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'corte-1',
    src: '/images/gallery/corte-1.jpg',
    alt: 'Resultado de corte moderno en cabello castaño',
    caption: 'Corte Moderno'
  },
  {
    id: 'color-1',
    src: '/images/gallery/color-1.jpg',
    alt: 'Resultado de coloración balayage',
    caption: 'Coloración'
  },
  {
    id: 'nails-1',
    src: '/images/gallery/nails-1.jpg',
    alt: 'Diseño de uñas acrílicas con nail art',
    caption: 'Nail Art'
  },
  {
    id: 'makeup-1',
    src: '/images/gallery/makeup-1.jpg',
    alt: 'Maquillaje social profesional',
    caption: 'Maquillaje Social'
  },
  {
    id: 'balayage-1',
    src: '/images/gallery/balayage-1.jpg',
    alt: 'Resultado de técnica balayage',
    caption: 'Balayage'
  },
  {
    id: 'peinado-1',
    src: '/images/gallery/peinado-1.jpg',
    alt: 'Peinado para evento especial',
    caption: 'Peinados'
  }
];

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="section bg-neutral-50" id="galeria">
      <div className="container">
        <h2 className="section-title">Galería de Trabajos</h2>
        <p className="section-subtitle">
          Descubre la calidad de nuestro trabajo a través de resultados reales
        </p>
        
        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div 
              key={item.id}
              className="gallery-item"
              onClick={() => setSelectedImage(item.src)}
              role="button"
              tabIndex={0}
              aria-label={`Ver imagen: ${item.caption}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={600}
                loading="lazy"
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <h4>{item.caption}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para imagen expandida */}
        {selectedImage && (
          <div 
            className="gallery-modal"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
          >
            <button 
              className="modal-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar imagen"
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="Imagen ampliada"
              width={1200}
              height={1200}
              className="modal-img"
            />
          </div>
        )}
      </div>
    </section>
  );
};

// ============================================

// ScheduleSection.tsx
// Horarios y ubicación

import React from 'react';

interface ScheduleDay {
  day: string;
  hours: string;
  isClosed?: boolean;
}

const schedule: ScheduleDay[] = [
  { day: 'Lunes - Viernes', hours: '10:00 AM - 7:00 PM' },
  { day: 'Sábado', hours: '10:00 AM - 6:00 PM' },
  { day: 'Domingo', hours: 'Cerrado', isClosed: true }
];

export const ScheduleSection: React.FC = () => {
  return (
    <section className="section" id="ubicacion">
      <div className="container">
        <h2 className="section-title">Horarios y Ubicación</h2>
        
        <div className="schedule-container">
          <div className="schedule">
            {schedule.map((item, index) => (
              <div key={index} className="schedule-day">
                <span className="day-name">{item.day}</span>
                <span className={item.isClosed ? 'day-closed' : 'day-hours'}>
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="location-grid">
          <div className="location-info">
            <InfoItem
              icon="fa-map-marker-alt"
              title="Dirección"
              content={
                <>
                  Av. Constitución 123, Centro<br />
                  Monterrey, Nuevo León
                </>
              }
            />
            
            <InfoItem
              icon="fa-phone"
              title="Teléfono"
              content="+52 81 1234 5678"
            />
            
            <InfoItem
              icon="fa-whatsapp"
              title="WhatsApp"
              content="Envíanos un mensaje para agendar"
            />
            
            <button 
              onClick={() => {
                const phone = '528112345678';
                const message = 'Hola, tengo una consulta';
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="btn btn-primary mt-auto"
            >
              <i className="fab fa-whatsapp"></i>
              Contactar ahora
            </button>
          </div>
          
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.362374247583!2d-100.31073!3d25.669194"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Ubicación de Kevala Ravelo Hair Studio"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente auxiliar
interface InfoItemProps {
  icon: string;
  title: string;
  content: React.ReactNode;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, title, content }) => (
  <div className="info-item">
    <div className="info-icon">
      <i className={`fas ${icon}`} aria-hidden="true"></i>
    </div>
    <div className="info-content">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  </div>
);

// ============================================

// WhatsAppFloat.tsx
// Botón flotante de WhatsApp

import React, { useEffect, useState } from 'react';

export const WhatsAppFloat: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar después de 2 segundos
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const phone = '528112345678';
    const message = 'Hola, tengo una consulta';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      className="whatsapp-float animate-bounce-in"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fab fa-whatsapp" aria-hidden="true"></i>
    </button>
  );
};

// ============================================

// Footer.tsx
// Footer con redes sociales

import React from 'react';

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

const socialLinks: SocialLink[] = [
  { platform: 'Instagram', url: 'https://instagram.com/kevalaravelo', icon: 'fa-instagram' },
  { platform: 'Facebook', url: 'https://facebook.com/kevalaravelo', icon: 'fa-facebook' },
  { platform: 'WhatsApp', url: 'https://wa.me/528112345678', icon: 'fa-whatsapp' }
];

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          {socialLinks.map(link => (
            <a
              key={link.platform}
              href={link.url}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.platform}
            >
              <i className={`fab ${link.icon}`} aria-hidden="true"></i>
            </a>
          ))}
        </div>
        <p className="footer-text">
          © {new Date().getFullYear()} Kevala Ravelo Hair Studio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

// ============================================

// MainPage.tsx
// Página principal que combina todos los componentes

import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { GallerySection } from '@/components/GallerySection';
import { ScheduleSection } from '@/components/ScheduleSection';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <main>
      <HeroSection
        title="Kevala Ravelo Hair Studio"
        subtitle="Estética y salón de belleza en Monterrey"
        backgroundImage="/images/hero-bg.jpg"
      />
      
      <ServicesSection />
      
      <GallerySection />
      
      <ScheduleSection />
      
      <Footer />
      
      <WhatsAppFloat />
    </main>
  );
}

// ============================================

// useWhatsApp.ts
// Custom hook para manejar WhatsApp

import { useCallback } from 'react';

interface WhatsAppConfig {
  phoneNumber: string;
}

export const useWhatsApp = (config: WhatsAppConfig = { phoneNumber: '528112345678' }) => {
  const sendMessage = useCallback((message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${config.phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  }, [config.phoneNumber]);

  const sendServiceInquiry = useCallback((serviceName: string) => {
    const message = `Hola, me interesa el servicio de ${serviceName}. ¿Cuál es el costo?`;
    sendMessage(message);
  }, [sendMessage]);

  const sendGeneralInquiry = useCallback(() => {
    sendMessage('Hola, tengo una consulta');
  }, [sendMessage]);

  const sendAppointmentRequest = useCallback(() => {
    sendMessage('Hola, vi su página y quiero agendar una cita 💇‍♀️');
  }, [sendMessage]);

  return {
    sendMessage,
    sendServiceInquiry,
    sendGeneralInquiry,
    sendAppointmentRequest
  };
};
