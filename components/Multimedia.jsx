"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Multimedia = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = [
    { id: 'todos', label: 'Todos', icon: '🎬' },
    { id: 'tarot', label: 'Tarot', icon: '🔮' },
    { id: 'meditacion', label: 'Meditación', icon: '🧘‍♀️' },
    { id: 'coaching', label: 'Coaching', icon: '✨' },
  ];

  const videosData = [
    {
      id: 1,
      title: 'Lectura de Tarot para el Mes de Noviembre',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'tarot',
      duration: '15:24',
      views: '2.3K',
      date: 'Hace 3 días',
      featured: true,
      description: 'Descubre qué te deparan las cartas para este mes lleno de transformación.',
    },
    {
      id: 2,
      title: 'Meditación Guiada: Conecta con tu Intuición',
      youtubeId: 'lBfP9uF78Wk',
      category: 'meditacion',
      duration: '22:15',
      views: '5.1K',
      date: 'Hace 1 semana',
      featured: false,
      description: 'Una práctica profunda para reconectar con tu voz interior.',
    },
    {
      id: 3,
      title: 'Entrevista: El Poder del Life Coaching',
      youtubeId: '3nJ8F3lM6fQ',
      category: 'coaching',
      duration: '18:45',
      views: '1.8K',
      date: 'Hace 2 semanas',
      featured: false,
      description: 'Conversación sobre cómo el coaching transforma vidas.',
    },
    {
      id: 4,
      title: 'Significado de los Arcanos Mayores',
      youtubeId: 'j9lHjEaD0-Q',
      category: 'tarot',
      duration: '25:30',
      views: '8.2K',
      date: 'Hace 3 semanas',
      featured: false,
      description: 'Guía completa para entender las cartas más poderosas del tarot.',
    },
    {
      id: 5,
      title: 'Ritual de Luna Nueva para Manifestar',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'meditacion',
      duration: '12:18',
      views: '3.5K',
      date: 'Hace 1 mes',
      featured: false,
      description: 'Aprovecha la energía lunar para crear tus intenciones.',
    },
    {
      id: 6,
      title: 'Cómo Superar Bloqueos Emocionales',
      youtubeId: 'lBfP9uF78Wk',
      category: 'coaching',
      duration: '16:42',
      views: '4.7K',
      date: 'Hace 1 mes',
      featured: false,
      description: 'Herramientas prácticas para liberarte de lo que te detiene.',
    },
  ];

  const filteredVideos = activeCategory === 'todos' 
    ? videosData 
    : videosData.filter(v => v.category === activeCategory);

  const featuredVideo = videosData.find(v => v.featured);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full mb-6">
            <span className="text-purple-600 text-sm font-medium">🎬 Contenido Exclusivo</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Multimedia y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Vlog
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Encuentra inspiración, guía práctica y herramientas para tu 
            crecimiento personal en cada video.
          </p>
        </div>

        {/* Featured Video */}
        {featuredVideo && (
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-1 shadow-2xl">
              <div className="bg-gray-900 rounded-[22px] overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Video Player */}
                  <div className="relative aspect-video lg:aspect-auto">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}`}
                      title={featuredVideo.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Info */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-xs font-medium mb-4 w-fit">
                      🔥 Último Video
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {featuredVideo.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredVideo.description}
                    </p>

                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-6">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        <span>{featuredVideo.views} vistas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span>{featuredVideo.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span>{featuredVideo.date}</span>
                      </div>
                    </div>

                    <Link href="https://youtube.com/@kimcedeno" target="_blank">
                      <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        Suscribirse al Canal
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 p-1.5 bg-white rounded-full shadow-lg border border-gray-200">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredVideos.filter(v => !v.featured).map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-gray-900">
                <iframe
                  className="w-full h-full pointer-events-none"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs font-medium px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-full">
                    {categories.find(c => c.id === video.category)?.icon}
                    {categories.find(c => c.id === video.category)?.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {video.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {video.description}
                </p>

                {/* Metadata */}
                <div className="flex items-center gap-4 text-gray-500 text-xs">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <span>{video.views}</span>
                  </div>
                  <span>•</span>
                  <span>{video.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 text-center border border-purple-100">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              ¿Te gustó el contenido?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Suscríbete a mi canal para recibir videos semanales sobre tarot, 
              meditación y desarrollo personal. También puedes reservar una sesión 
              personalizada conmigo.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://youtube.com/@kimcedeno" target="_blank">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Suscribirme al Canal
                </button>
              </Link>
              <Link href="/servicios">
                <button className="w-full sm:w-auto border-2 border-purple-600 hover:bg-purple-600 text-purple-600 hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300">
                  Reservar una Sesión
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Video Modal (opcional, si quieres expandir videos) */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-5xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-gray-300">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Multimedia;