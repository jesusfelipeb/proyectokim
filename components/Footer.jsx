"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    servicios: [
      { name: 'Lectura de Tarot', href: '/servicios' },
      { name: 'Consulta Estratégica', href: '/servicios' },
      { name: 'Life Coaching', href: '/servicios' },
      { name: 'Programas Élite', href: '/servicios' },
    ],
    empresa: [
      { name: 'Sobre Kim', href: '/sobre-mi' },
      { name: 'Metodología', href: '/acreditaciones' },
      { name: 'Privacidad', href: '/privacidad' },
      { name: 'Términos', href: '/terminos' },
    ],
    recursos: [
      { name: 'Journal', href: '/blog' },
      { name: 'Multimedia', href: '/multimedia' },
      { name: 'Testimonios', href: '/testimonios' },
      { name: 'Preguntas Frecuentes', href: '/faq' },
    ],
  };

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: 'IG',
      href: 'https://instagram.com/tu-usuario' 
    },
    { 
      name: 'WhatsApp', 
      icon: 'WA',
      href: 'https://wa.me/54911xxxxxxxx' 
    },
    { 
      name: 'YouTube', 
      icon: 'YT',
      href: 'https://youtube.com/@kimcedeno' 
    },
    { 
      name: 'LinkedIn', 
      icon: 'LI',
      href: 'https://linkedin.com/' 
    },
  ];

  return (
    <footer className="relative bg-amber-50/10 text-white overflow-hidden">
      {/* Elementos decorativos sutiles */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-amber-600 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border border-amber-600 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative z-10">
        {/* Main CTA Section */}
        <div className="border-b border-white/5">
          <div className="container mx-auto px-6 lg:px-12 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-12 h-[1px] bg-amber-600"></div>
                <span className="uppercase tracking-[0.25em] text-amber-600 text-xs font-medium">
                  Comienza tu Transformación
                </span>
                <div className="w-12 h-[1px] bg-amber-600"></div>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight text-slate-900">
                Descubre la claridad que <br />
                <span className="italic text-amber-500">define tu destino</span>
              </h2>

              <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-light">
                Da el primer paso hacia una vida alineada con tu propósito más profundo
              </p>

              <Link href="/servicios">
                <button className="group relative border bg-white text-slate-900 px-10 py-5 overflow-hidden transition-all duration-300 hover:bg-amber-300">
                  <span className="relative z-10 uppercase tracking-[0.2em] text-xs font-medium group-hover:text-white transition-colors">
                    Solicitar Consulta Privada
                  </span>
                  <div className="absolute inset-0 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
            
            {/* Brand Identity */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h3 className="font-serif text-3xl mb-2">
                  Kim <span className="italic text-amber-600">Cedeño</span>
                </h3>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500 font-medium">
                  Estrategia & Espiritualidad
                </p>
              </div>
              
              <p className="text-sm text-slate-400 font-light leading-relaxed mb-8 max-w-sm">
                Acompañando a líderes y buscadores en el arte de la introspección y la toma de decisiones conscientes.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <Link 
                    key={social.name} 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-10 h-10 border border-slate-700 hover:border-amber-600 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <span className="text-xs font-medium text-slate-400 group-hover:text-amber-600 transition-colors">
                      {social.icon}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="font-serif text-base text-amber-600 mb-6 italic">
                Servicios
              </h4>
              <ul className="space-y-3">
                {navigation.servicios.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-300 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recursos */}
            <div>
              <h4 className="font-serif text-base text-amber-600 mb-6 italic">
                Explorar
              </h4>
              <ul className="space-y-3">
                {navigation.recursos.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-300 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="font-serif text-base text-amber-600 mb-6 italic">
                Empresa
              </h4>
              <ul className="space-y-3">
                {navigation.empresa.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-300 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="font-serif text-base text-amber-600 mb-6 italic">
                Contacto
              </h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>
                  <a 
                    href="mailto:info@kimcedeno.com" 
                    className="hover:text-white transition-colors duration-300"
                  >
                    info@kimcedeno.com
                  </a>
                </li>
                <li>Buenos Aires / Global</li>
                <li className="pt-2">
                  <span className="inline-flex items-center gap-2 text-amber-600 text-xs uppercase tracking-wider font-medium">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-pulse"></div>
                    Disponibilidad Limitada
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/5 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-xs">
              
              {/* Copyright */}
              <div className="text-slate-500 uppercase tracking-wider">
                © {currentYear} Kim Cedeño. Todos los derechos reservados
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2 text-slate-500 uppercase tracking-wider">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Seguridad Garantizada
                </span>
                <span className="flex items-center gap-2 text-slate-500 uppercase tracking-wider">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  Certificación Internacional
                </span>
              </div>

              {/* Credits */}
              <div className="text-slate-500 uppercase tracking-wider">
                Hecho con <span className="italic text-amber-600">precisión</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;