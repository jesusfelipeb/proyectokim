"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/about', label: 'Sobre Mí' },
    { href: '/services', label: 'Servicios' },
    { href: '/tienda', label: 'Tienda' },
    { href: '/contacto', label: 'Contacto' },
  ];

  const isActive = (path) => pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-linen/90 backdrop-blur-md py-4 shadow-sm'
            : 'bg-transparent py-8 '
        }`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center">
            
            {/* Logo Estilo Boutique */}
            <Link href="/" className="flex flex-col group">
              <span className={`font-serif text-2xl tracking-tighter transition-colors duration-300 ${isScrolled ? 'text-obsidian' : 'text-obsidian'}`}>
                Kim Cedeño
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-heritage font-medium">
                Life & Tarot
              </span>
            </Link>

            {/* Navegación Desktop - Minimalista */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-sans text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:text-gold-heritage ${
                    isActive(item.href)
                      ? 'text-gold-heritage'
                      : 'text-obsidian/70'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Final */}
            <div className="flex items-center gap-8">
              <Link href="/services" className="hidden md:block">
                <button className="font-sans text-[10px] uppercase tracking-[0.2em] border border-obsidian px-6 py-3 hover:bg-obsidian hover:text-white transition-all duration-500">
                  Agendar Cita
                </button>
              </Link>

              {/* Menú Mobile Hamburguesa Fina */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden flex flex-col gap-1.5 focus:outline-none"
                aria-label="Menu"
              >
                <span className={`w-6 h-[1px] bg-obsidian transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-[1px] bg-obsidian ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-[1px] bg-obsidian transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menú Mobile Fullscreen Minimalista */}
      <div
        className={`fixed inset-0 z-40 bg-linen transition-transform duration-700 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center gap-12">
          <nav className="flex flex-col items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-serif text-4xl text-obsidian hover:text-gold-heritage transition-colors ${
                  isActive(item.href) ? 'italic text-gold-heritage' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="h-[1px] w-20 bg-gold-heritage/30"></div>
          
          <Link href="/services">
             <button className="font-sans text-xs uppercase tracking-[0.3em] text-gold-heritage border-b border-gold-heritage pb-2">
               Comenzar Transformación
             </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;