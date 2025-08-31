'use client';

import { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  Heart,
  Leaf,
  Zap,
  CheckCircle,
  ArrowRight,
  X
} from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const services = [
    {
      title: "⚙ Liberação Miofascial + Ventosaterapia",
      description: "Indicada para quem sente o corpo travado, com dores ou rigidez muscular, a liberação miofascial atua nas tensões mais profundas. Trabalha o tecido que envolve os músculos, melhora os movimentos e alivia pontos de dor. Ideal para quem busca leveza, alívio e mais liberdade no corpo.",
      icon: Leaf,
      duration: "60 min",
      price: "R$ 150,00",
      features: ["Alívio de dores profundas", "Melhora dos movimentos", "Liberdade no corpo"]
    },
    {
      title: "💆‍♀ Massagem Relaxante",
      description: "Indicada para quem deseja uma pausa do dia a dia agitado, a massagem relaxante trabalha o corpo de forma suave e completa. Alivia a tensão, melhora a circulação sanguínea e promove uma sensação de paz. Ideal para quem busca um momento de calma e renovação.",
      icon: Heart,
      duration: "60 min",
      price: "R$ 120,00",
      features: ["Alívio da tensão", "Melhora da circulação", "Sensação de paz"]
    },
    {
      title: "🎋 Bambuterapia",
      description: "Técnica terapêutica que utiliza bambus de diferentes tamanhos para realizar a massagem. Proporciona relaxamento muscular, melhora a circulação e alivia dores localizadas. Uma experiência única e eficaz para o seu bem-estar.",
      icon: Zap,
      duration: "60 min",
      price: "R$ 140,00",
      features: ["Relaxamento muscular", "Melhora da circulação", "Alívio de dores"]
    },
    {
      title: "⚽ Massagem Desportiva",
      description: "Indicada para quem pratica atividades físicas ou sente a musculatura sobrecarregada, a massagem desportiva prepara o corpo antes do esforço e acelera a recuperação depois. Atua de forma intensa, prevenindo lesões e diminuindo o cansaço muscular. Ideal para quem cuida do corpo com movimento e performance.",
      icon: Zap,
      duration: "60 min",
      price: "R$ 120,00",
      features: ["Prevenção de lesões", "Recuperação muscular", "Performance física"]
    },
    {
      title: "🔥 Massagem Relaxante com Pedras",
      description: "Indicada para quem busca um relaxamento profundo, a massagem com pedras quentes combina o toque suave com o calor das pedras aquecidas. Alivia as tensões, melhora a circulação e promove bem-estar físico e emocional. Ideal para quem deseja conforto, equilíbrio e acolhimento.",
      icon: Heart,
      duration: "75 min",
      price: "R$ 150,00",
      features: ["Relaxamento profundo", "Melhora da circulação", "Bem-estar emocional"]
    },
    {
      title: "🕉️ Massagem + Agulhamento a Seco",
      description: "Combinação de qualquer massagem escolhida com agulhamento a seco para tratamento mais intensivo. O agulhamento a seco atua diretamente nos pontos de tensão e dor, proporcionando alívio imediato e resultados duradouros. Ideal para quem busca tratamento especializado e resultados rápidos.",
      icon: Leaf,
      duration: "90 min",
      price: "R$ 190,00",
      features: ["Tratamento intensivo", "Alívio imediato", "Resultados duradouros"]
    }
  ];

  // Carrossel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 5);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Interceptar eventos de fullscreen dos vídeos
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (document.fullscreenElement) {
        const videoElement = document.fullscreenElement as HTMLVideoElement;
        if (videoElement.tagName === 'VIDEO') {
          // Sai do fullscreen e abre o modal com tamanho original
          document.exitFullscreen();
          
          // Identifica qual vídeo foi clicado e abre o modal correspondente
          if (videoElement.id === 'video1') {
            openVideoModal("/imagens_videos/Técnica de Liberação.mp4");
          } else if (videoElement.id === 'video2') {
            openVideoModal("/imagens_videos/Massagem Terapêutica.mp4");
          } else if (videoElement.id === 'video3') {
            openVideoModal("/imagens_videos/Relaxamento Profundo.mp4");
          }
        }
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Função para abrir o modal
  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalImage(null);
  };

  // Função para abrir o modal de vídeo
  const openVideoModal = (videoSrc: string) => {
    setModalImage(videoSrc);
  };

  // Função para abrir modal de agendamento
  const openBookingModal = () => {
    setShowBookingModal(true);
  };

  // Função para fechar modal de agendamento
  const closeBookingModal = () => {
    setShowBookingModal(false);
  };

  // Função para rolar para seção de serviços
  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicos');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', lineHeight: 1.6 }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(25px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.12)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
            {/* Logo */}
                        <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => openVideoModal("/logo massagem joao.svg")}
              onMouseEnter={(e) => (e.target as HTMLElement).style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.transform = 'scale(1)'}
            >
              <img 
                src="/logo massagem joao.svg" 
                alt="João Marques Massoterapia" 
                style={{ 
                  width: '48px', 
                  height: '48px',
                  borderRadius: '50%',
                  boxShadow: '0 4px 15px rgba(160, 212, 216, 0.4)',
                  transition: 'all 0.3s ease'
                }} 
              />
              <div style={{ 
                fontSize: '1.75rem', 
                fontWeight: '800', 
                color: '#1E293B',
                fontFamily: 'Inter, system-ui, sans-serif',
                letterSpacing: '-0.025em',
                position: 'relative'
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #A0D4D8, #F1C0D1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '900'
                }}>
                  João
                </span>
                {' '}
                <span style={{
                  color: '#0F766E',
                  fontWeight: '800'
                }}>
                  Marques
                </span>
                <div style={{
                  position: 'absolute',
                  bottom: '-2px',
                  left: '0',
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #A0D4D8, #F1C0D1)',
                  borderRadius: '1px'
                }}></div>
              </div>
            </div>
            
            {/* Navigation - Modern and Clean */}
            <nav style={{ 
              display: 'flex', 
              gap: '3rem', 
              alignItems: 'center'
            }}>
              {['Início', 'Sobre', 'Serviços', 'Contato', 'Agenda'].map((item) => (
                <a
                  key={item}
                  href={item === 'Serviços' ? '#servicos' : 
                        item === 'Agenda' ? '#agende-sessao' : 
                        `#${item.toLowerCase()}`}
                  style={{
                    color: '#475569',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = '#A0D4D8';
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(160, 212, 216, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = '#475569';
                    (e.target as HTMLElement).style.backgroundColor = 'transparent';
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="início" style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #A0D4D8 0%, #F1C0D1 100%)',
        color: 'white',
        textAlign: 'center',
        padding: '6rem 1rem 4rem 1rem'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(160, 212, 216, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(241, 192, 209, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
          `,
          zIndex: 1
        }}></div>
        
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-block',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            color: '#0F766E',
            padding: '0.75rem 2rem',
            borderRadius: '25px',
            fontSize: '0.875rem',
            fontWeight: '700',
            marginBottom: '2rem',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 6px 20px rgba(15, 118, 110, 0.25)',
            border: '1px solid rgba(15, 118, 110, 0.1)'
          }}>
            ✨ Especialista em Massoterapia
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '800',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            color: '#0F172A',
            letterSpacing: '-0.02em'
          }}>
            Bem-estar através do{' '}
            <span style={{
              color: '#0F766E',
              fontWeight: '900'
            }}>
              toque terapêutico
            </span>
          </h1>
          
          <p style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
            marginBottom: '3rem',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: '#1E293B',
            lineHeight: 1.7,
            fontWeight: '600'
          }}>
            Especialista em liberação miofascial e massoterapia. Descubra o poder da cura 
            através de técnicas especializadas que promovem relaxamento, alívio da dor e 
            bem-estar integral.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <button 
              onClick={openBookingModal}
              style={{
                backgroundColor: '#A0D4D8',
                color: '#FFFFFF',
                padding: '1rem 2.5rem',
                borderRadius: '12px',
                fontWeight: '700',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '1.125rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(160, 212, 216, 0.4)',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(-4px)';
                (e.target as HTMLElement).style.boxShadow = '0 12px 35px rgba(160, 212, 216, 0.5)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(0)';
                (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(160, 212, 216, 0.4)';
              }}
            >
              <Calendar size={22} />
              Agendar Sessão
              <ArrowRight size={20} />
            </button>
            

          </div>
          
          {/* Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3rem',
            marginTop: '4rem',
            flexWrap: 'wrap'
          }}>
            {[
              { number: '3+', label: 'Anos de Experiência' },
              { number: '100+', label: 'Clientes Atendidos' },
              { number: '100%', label: 'Satisfação' }
            ].map((stat, index) => (
              <div key={index} style={{
                textAlign: 'center',
                color: '#1E293B'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '900',
                  color: '#0F172A',
                  marginBottom: '0.5rem',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#334155'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria de Imagens Premium */}
      <section style={{
        padding: '6rem 1rem',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header Estilizado */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: '800',
              color: '#0F766E',
              marginBottom: '0.5rem',
              letterSpacing: '-0.02em',
              textAlign: 'left'
            }}>
              Galeria
            </h2>
            
            {/* Linha Decorativa */}
            <div style={{
              height: '1px',
              backgroundColor: '#1E293B',
              borderTop: '2px dotted #1E293B',
              width: '100%'
            }}></div>
          </div>

          {/* Grid de Imagens */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
                        {/* Imagem 1 */}
            <div style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(-8px)';
              (e.target as HTMLElement).style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(0)';
              (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            }}
            onClick={() => openModal("/imagens_videos/foto1.jpg")}
            >
              <img 
                src="/imagens_videos/foto1.jpg"
                alt="Foto 1"
                style={{
                  width: '100%',
                  height: '260px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
              />

            </div>

                        {/* Imagem 2 */}
            <div style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(-8px)';
              (e.target as HTMLElement).style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(0)';
              (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            }}
            onClick={() => openModal("/imagens_videos/foto2.jpg")}
            >
              <img 
                src="/imagens_videos/foto2.jpg"
                alt="Foto 2"
                style={{
                  width: '100%',
                  height: '260px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
              />

            </div>

                        {/* Imagem 3 */}
            <div style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(-8px)';
              (e.target as HTMLElement).style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(0)';
              (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            }}
            onClick={() => openModal("/imagens_videos/foto3.jpg")}
            >
              <img 
                src="/imagens_videos/foto3.jpg"
                alt="Foto 3"
                style={{
                  width: '100%',
                  height: '260px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
              />

            </div>

            {/* Imagem 4 */}
            <div style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(-8px)';
              (e.target as HTMLElement).style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(0)';
              (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            }}
            onClick={() => openModal("/imagens_videos/foto4.jpg")}
            >
              <img 
                src="/imagens_videos/foto4.jpg"
                alt="Foto 4"
                style={{
                  width: '100%',
                  height: '260px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
              />

            </div>

            {/* Imagem 5 */}
            <div style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(-8px)';
              (e.target as HTMLElement).style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(0)';
              (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            }}
            onClick={() => openModal("/imagens_videos/foto5.jpg")}
            >
              <img 
                src="/imagens_videos/foto5.jpg"
                alt="Foto 5"
                style={{
                  width: '100%',
                  height: '260px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
              />

            </div>

            {/* Imagem 6 */}
            <div style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(-8px)';
              (e.target as HTMLElement).style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(0)';
              (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            }}
            onClick={() => openModal("/imagens_videos/foto6.jpg")}
            >
              <img 
                src="/imagens_videos/foto6.jpg"
                alt="Foto 6"
                style={{
                  width: '100%',
                  height: '260px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
              />

            </div>

            {/* Imagem 7 */}
            <div style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(-8px)';
              (e.target as HTMLElement).style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(0)';
              (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            }}
            onClick={() => openModal("/imagens_videos/foto7.jpg")}
            >
              <img 
                src="/imagens_videos/foto7.jpg"
                alt="Foto 7"
                style={{
                  width: '100%',
                  height: '260px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
              />

            </div>

            {/* Imagem 8 */}
            <div style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(-8px)';
              (e.target as HTMLElement).style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(0)';
              (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            }}
            onClick={() => openModal("/imagens_videos/foto8.jpg")}
            >
              <img 
                src="/imagens_videos/foto8.jpg"
                alt="Foto 8"
                style={{
                  width: '100%',
                  height: '260px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
              />

            </div>
          </div>

          {/* Descrição */}
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontSize: '1.125rem',
              color: '#64748B',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontWeight: '500'
            }}>
              Clique em qualquer imagem para visualizá-la em tamanho completo e conhecer melhor nosso ambiente e técnicas terapêuticas.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" style={{
        padding: '5rem 1rem',
        backgroundColor: '#F8FAFC'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '4rem',
            alignItems: 'center'
          }} className="lg:grid-cols-2">
            <div style={{ textAlign: 'center' }} className="lg:text-left">
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#1E293B',
                marginBottom: '1.5rem'
              }}>
                João Marques – Massoterapeuta
              </h2>
              <p style={{
                fontSize: '1.25rem',
                color: '#0F766E',
                marginBottom: '2rem',
                lineHeight: 1.6,
                fontStyle: 'italic',
                fontWeight: '600'
              }}>
                "Gente que transforma dor em cuidado"
              </p>
              
              <p style={{
                fontSize: '1.125rem',
                color: '#64748B',
                marginBottom: '2.5rem',
                lineHeight: 1.7,
                maxWidth: '800px',
                margin: '0 auto 2.5rem auto'
              }}>
                Especializado em técnicas terapêuticas avançadas, eu ofereço serviços personalizados de massagem e liberação miofascial, com foco no alívio da dor e na promoção do bem-estar. Seu atendimento é feito no conforto da sua casa, garantindo uma experiência relaxante e eficaz.
              </p>
              

              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '3rem',
                marginTop: '2rem',
                alignItems: 'start'
              }}>
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#1E293B',
                    marginBottom: '1rem'
                  }}>
                    Técnicas e especialidades:
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    <li style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      color: '#64748B',
                      fontSize: '1rem'
                    }}>
                      <CheckCircle size={18} style={{ color: '#A0D4D8' }} />
                      Liberação Miofascial
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      color: '#64748B',
                      fontSize: '1rem'
                    }}>
                      <CheckCircle size={18} style={{ color: '#A0D4D8' }} />
                      Ventosaterapia
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      color: '#64748B',
                      fontSize: '1rem'
                    }}>
                      <CheckCircle size={18} style={{ color: '#A0D4D8' }} />
                      Massagem Desportiva
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      color: '#64748B',
                      fontSize: '1rem'
                    }}>
                      <CheckCircle size={18} style={{ color: '#A0D4D8' }} />
                      Massagem Relaxante
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      color: '#64748B',
                      fontSize: '1rem'
                    }}>
                      <CheckCircle size={18} style={{ color: '#A0D4D8' }} />
                      Dry Needling
                    </li>
                  </ul>
                </div>
                
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#1E293B',
                    marginBottom: '1rem'
                  }}>
                    Diferenciais do atendimento:
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    <li style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      color: '#64748B',
                      fontSize: '1rem'
                    }}>
                      <CheckCircle size={18} style={{ color: '#A0D4D8' }} />
                      Atendimento individualizado e personalizado
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      color: '#64748B',
                      fontSize: '1rem'
                    }}>
                      <CheckCircle size={18} style={{ color: '#A0D4D8' }} />
                      Conforto e conveniência de ser atendido em casa
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      color: '#64748B',
                      fontSize: '1rem'
                    }}>
                      <CheckCircle size={18} style={{ color: '#A0D4D8' }} />
                      Foco no alívio de dores e tensões do dia a dia
                    </li>
                  </ul>
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '100%',
                    maxWidth: '300px',
                    margin: '0 auto'
                  }}>
                    <img 
                      src="/imagens_videos/perfil1.jpg"
                      alt="João Marques - Massoterapeuta"
                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '1rem',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/*             <div style={{ position: 'relative' }}>
              <div 
                onClick={() => openModal("/imagens_videos/IMG-20250826-WA0018.jpg")}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'scale(1.1)';
                  target.style.zIndex = '10';
                  target.style.transition = 'all 0.3s ease';
                  target.style.boxShadow = '0 35px 70px rgba(0, 0, 0, 0.25)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'scale(1)';
                  target.style.zIndex = '1';
                  target.style.transition = 'all 0.3s ease';
                  target.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
                }}
                style={{
                  width: '800px',
                  height: '600px',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  borderRadius: '1rem',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f8f9fa',
                  margin: '0 auto',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <img 
                  src="/imagens_videos/IMG-20250826-WA0018.jpg"
                  alt="João Marques - Especialista em Massoterapia"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '0.5rem'
                  }}
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" style={{
        padding: '5rem 1rem',
        backgroundColor: '#F8FAFC'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1E293B',
              marginBottom: '1rem'
            }}>
              Nossos Serviços
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#64748B',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Oferecemos uma variedade de técnicas terapêuticas para atender suas necessidades 
              específicas de bem-estar e saúde.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}>
            {services.map((service) => (
              <div key={service.title} className="service-card" style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'default',
                border: '1px solid rgba(160, 212, 216, 0.1)'
              }}>
                <div style={{
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                                                        <div 
                    onClick={() => openModal((() => {
                      switch(service.title) {
                        case "💆‍♀ Massagem Relaxante":
                          return "/imagens_videos/Massagem_Relaxante.jpg";
                        case "⚙ Liberação Miofascial + Ventosaterapia":
                          return "/imagens_videos/Liberação_Miofascial.jpg";
                        case "⚽ Massagem Desportiva":
                          return "/imagens_videos/Massagem_Desportiva.jpg";
                        case "🎋 Bambuterapia":
                          return "/imagens_videos/Bambuterapia.jpg";
                        case "🔥 Massagem Relaxante com Pedras":
                          return "/imagens_videos/Massagem_Relaxante_Pedras.jpg";
                        case "🕉️ Massagem + Agulhamento a Seco":
                          return "/imagens_videos/Massagem_Agulhamento_Seco.jpg";
                        default:
                          return "/imagens_videos/Bambuterapia.jpg";
                        }
                      })())}
                    style={{
                      width: '100%',
                      height: 'auto',
                      minHeight: '200px',
                      maxHeight: '400px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '0.5rem',
                      margin: '0 auto',
                      cursor: 'pointer'
                    }}
                  >
                    <img 
                      src={(() => {
                        switch(service.title) {
                          case "💆‍♀ Massagem Relaxante":
                            return "/imagens_videos/Massagem_Relaxante.jpg";
                          case "⚙ Liberação Miofascial + Ventosaterapia":
                            return "/imagens_videos/Liberação_Miofascial.jpg";
                          case "⚽ Massagem Desportiva":
                            return "/imagens_videos/Massagem_Desportiva.jpg";
                          case "🎋 Bambuterapia":
                            return "/imagens_videos/Bambuterapia.jpg";
                          case "🔥 Massagem Relaxante com Pedras":
                            return "/imagens_videos/Massagem_Relaxante_Pedras.jpg";
                          case "🕉️ Massagem + Agulhamento a Seco":
                            return "/imagens_videos/Massagem_Agulhamento_Seco.jpg";
                          default:
                            return "/imagens_videos/Bambuterapia.jpg";
                        }
                      })()}
                      alt={`Imagem de ${service.title}`}
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        borderRadius: '0.5rem'
                      }}
                    />
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: '#A0D4D8',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(160, 212, 216, 0.3)'
                    }}>
                      <service.icon size={24} style={{ color: 'white' }} />
                    </div>
                  </div>
                </div>
                
                <div style={{ padding: '2rem' }}>
                  <h3 className="service-title" style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '1rem'
                  }}>
                    {service.title}
                  </h3>
                  <p className="service-description" style={{
                    marginBottom: '1.5rem',
                    lineHeight: 1.6,
                    fontSize: '1rem'
                  }}>
                    {service.description}
                  </p>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    {service.features.map((feature, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '0.5rem'
                      }}>
                        <CheckCircle size={18} style={{ color: '#A0D4D8', flexShrink: 0 }} />
                        <span className="service-feature" style={{ 
                          fontSize: '0.875rem'
                        }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid #F1F5F9'
                  }}>
                    <span className="service-duration" style={{ 
                      fontWeight: '500', 
                      fontSize: '0.875rem'
                    }}>{service.duration}</span>
                    <span className="service-price" style={{
                      fontSize: '1.5rem',
                      fontWeight: '700'
                    }}>{service.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Massage Corporativa Section */}
      <section style={{
        padding: '5rem 1rem',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1E293B',
              marginBottom: '1rem'
            }}>
              Quick Massage Corporativa
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#64748B',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Proporcionamos aos colaboradores momentos de relaxamento, alívio de tensões e aumento 
              da produtividade através da Quick Massage, uma técnica prática e eficiente, realizada 
              em cadeira específica, sem necessidade de retirada das roupas.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {/* Sessão Individual */}
            <div style={{
              backgroundColor: '#F8FAFC',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid rgba(160, 212, 216, 0.2)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#F1C0D1',
                borderRadius: '12px',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Heart size={32} style={{ color: '#E91E63' }} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1E293B',
                marginBottom: '1rem'
              }}>
                💆 Sessão Individual
              </h3>
              <p style={{
                color: '#64748B',
                marginBottom: '1rem',
                fontSize: '1rem'
              }}>
                Tempo: 10 a 20 minutos
              </p>
              <div style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#A0D4D8',
                marginBottom: '1rem'
              }}>
                Pacote Avulso
              </div>
              <p style={{
                color: '#64748B',
                fontSize: '0.875rem',
                marginBottom: '1rem'
              }}>
                Menos que 10 pessoas
              </p>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1E293B'
              }}>
                R$ 45 por pessoa
              </div>
            </div>

            {/* Pacote Meio Período */}
            <div style={{
              backgroundColor: '#F8FAFC',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid rgba(160, 212, 216, 0.2)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#A0D4D8',
                borderRadius: '12px',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Clock size={32} style={{ color: 'white' }} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1E293B',
                marginBottom: '1rem'
              }}>
                🕓 Pacote Meio Período
              </h3>
              <p style={{
                color: '#64748B',
                marginBottom: '1rem',
                fontSize: '1rem'
              }}>
                Tempo: 4 horas
              </p>
              <div style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#A0D4D8',
                marginBottom: '1rem'
              }}>
                Atendimento médio
              </div>
              <p style={{
                color: '#64748B',
                fontSize: '0.875rem',
                marginBottom: '1rem'
              }}>
                12 a 16 pessoas
              </p>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1E293B'
              }}>
                R$ 490,00
              </div>
            </div>

            {/* Evento Integral */}
            <div style={{
              backgroundColor: '#F8FAFC',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid rgba(160, 212, 216, 0.2)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#F1C0D1',
                borderRadius: '12px',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Calendar size={32} style={{ color: '#E91E63' }} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1E293B',
                marginBottom: '1rem'
              }}>
                🏢 Evento Integral
              </h3>
              <p style={{
                color: '#64748B',
                marginBottom: '1rem',
                fontSize: '1rem'
              }}>
                Tempo: 8 horas
              </p>
              <div style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#A0D4D8',
                marginBottom: '1rem'
              }}>
                Atendimento médio
              </div>
              <p style={{
                color: '#64748B',
                fontSize: '0.875rem',
                marginBottom: '1rem'
              }}>
                24 a 32 pessoas
              </p>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1E293B'
              }}>
                R$ 950,00
              </div>
            </div>
          </div>

          {/* Observações */}
          <div style={{
            backgroundColor: '#F8FAFC',
            padding: '2rem',
            borderRadius: '12px',
            marginTop: '3rem',
            border: '1px solid rgba(160, 212, 216, 0.2)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#1E293B',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              📌 Observações
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem'
              }}>
                <CheckCircle size={20} style={{ color: '#A0D4D8', marginTop: '0.25rem', flexShrink: 0 }} />
                <p style={{ color: '#64748B', fontSize: '1rem', lineHeight: 1.6 }}>
                  A empresa pode optar por contratar por número de pessoas ou por pacote
                </p>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem'
              }}>
                <CheckCircle size={20} style={{ color: '#A0D4D8', marginTop: '0.25rem', flexShrink: 0 }} />
                <p style={{ color: '#64748B', fontSize: '1rem', lineHeight: 1.6 }}>
                  É possível adicionar mais profissionais para ampliar o atendimento em grandes eventos
                </p>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem'
              }}>
                <CheckCircle size={20} style={{ color: '#A0D4D8', marginTop: '0.25rem', flexShrink: 0 }} />
                <p style={{ color: '#64748B', fontSize: '1rem', lineHeight: 1.6 }}>
                  Todo o material necessário é fornecido por mim (cadeira de quick massage, materiais de higiene e aromaterapia, se desejado)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section style={{
        padding: '6rem 1rem',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1.5rem'
            }}>
              Nossas Técnicas em Ação
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Veja algumas de nossas técnicas terapêuticas em demonstração
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden'
            }}
            >
              <video 
                id="video1"
                controls
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              >
                <source src="/imagens_videos/Técnica de Liberação.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '0.5rem'
                }}>
                  Liberação Miofascial + Ventosaterapia
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.875rem'
                }}>
                  Demonstração de liberação miofascial e ventosaterapia
                </p>
              </div>
            </div>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden'
            }}
            >
              <video 
                id="video2"
                controls
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              >
                <source src="/imagens_videos/Massagem Terapêutica.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '0.5rem'
                }}>
                  Massagem Relaxante
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.875rem'
                }}>
                  Técnicas de massagem relaxante para alívio da tensão
                </p>
              </div>
            </div>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden'
            }}
            >
              <video 
                id="video3"
                controls
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              >
                <source src="/imagens_videos/Relaxamento Profundo.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '0.5rem'
                }}>
                  Bambuterapia
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.875rem'
                }}>
                  Técnica terapêutica com bambus para relaxamento muscular
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" style={{
        padding: '5rem 1rem',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1E293B',
              marginBottom: '1rem'
            }}>
              Entre em Contato
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#64748B',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Agende sua sessão e comece sua jornada de transformação e bem-estar.
            </p>
            
            {/* Mensagem Pessoal e Contatos Integrados */}
            <div style={{
              backgroundColor: 'rgba(160, 212, 216, 0.1)',
              padding: '3rem',
              borderRadius: '20px',
              marginTop: '2rem',
              border: '1px solid rgba(160, 212, 216, 0.2)',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
              boxShadow: '0 8px 32px rgba(160, 212, 216, 0.15)'
            }}>
              {/* Mensagem Motivacional */}
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1.25rem',
                  color: '#1E293B',
                  marginBottom: '2rem',
                  lineHeight: 1.7,
                  fontWeight: '500'
                }}>
                  Tenho plena convicção de que, ao conhecer todos os benefícios deste tratamento, você também ficará motivado(a) a agendar a sua sessão.
                </p>
                
                <div style={{
                  backgroundColor: '#A0D4D8',
                  color: 'white',
                  padding: '1.5rem 3rem',
                  borderRadius: '16px',
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  marginBottom: '2rem',
                  display: 'inline-block',
                  boxShadow: '0 8px 25px rgba(160, 212, 216, 0.4)'
                }}>
                  🗓️ Agenda aberta!
                </div>
              </div>

              {/* Informações de Contato Organizadas */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem'
              }}>
                {/* WhatsApp */}
                <div style={{
                  backgroundColor: 'rgba(37, 211, 102, 0.1)',
                  padding: '1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(37, 211, 102, 0.2)',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#25D366',
                    borderRadius: '50%',
                    margin: '0 auto 0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="white"/>
                    </svg>
                  </div>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: '#1E293B',
                    marginBottom: '0.5rem'
                  }}>
                    WhatsApp
                  </h4>
                  <a 
                    href="https://wa.me/5531985106741?text=Olá! Estou interessado(a) em agendar uma sessão de massoterapia. Pode me ajudar?"
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: '#25D366', 
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = '#128C7E';
                      (e.target as HTMLElement).style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = '#25D366';
                      (e.target as HTMLElement).style.transform = 'scale(1)';
                    }}
                  >
                    (31) 98510-6741
                  </a>
                </div>

                {/* Instagram */}
                <div style={{
                  backgroundColor: 'rgba(228, 64, 95, 0.1)',
                  padding: '1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(228, 64, 95, 0.2)',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#E4405F',
                    borderRadius: '50%',
                    margin: '0 auto 0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(228, 64, 95, 0.3)'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="white"/>
                    </svg>
                  </div>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: '#1E293B',
                    marginBottom: '0.5rem'
                  }}>
                    Instagram
                  </h4>
                  <a 
                    href="https://www.instagram.com/joaomarques_masso/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: '#E4405F', 
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = '#C13584';
                      (e.target as HTMLElement).style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = '#E4405F';
                      (e.target as HTMLElement).style.transform = 'scale(1)';
                    }}
                  >
                    @joaomarques_masso
                  </a>
                </div>



                {/* Horário */}
                <div style={{
                  backgroundColor: 'rgba(160, 212, 216, 0.1)',
                  padding: '1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(160, 212, 216, 0.2)',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#A0D4D8',
                    borderRadius: '50%',
                    margin: '0 auto 0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(160, 212, 216, 0.3)'
                  }}>
                    <Clock size={22} style={{ color: 'white' }} />
                  </div>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: '#1E293B',
                    marginBottom: '0.5rem'
                  }}>
                    Horário de Atendimento
                  </h4>
                  <p style={{
                    color: '#64748B',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    marginBottom: '0.25rem'
                  }}>
                    Segunda a Sexta: 8h às 18h
                  </p>
                  <p style={{
                    color: '#64748B',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>

              {/* Mensagem Final */}
              <div style={{ textAlign: 'center' }}>
                <p style={{
                  fontSize: '1.25rem',
                  color: '#1E293B',
                  lineHeight: '1.6',
                  fontWeight: '700',
                  marginBottom: '1rem'
                }}>
                  Agende seu horário pelo site, WhatsApp ou direct no Instagram. Entrarei em contato para confirmar!
                </p>
                
                <p style={{
                  fontSize: '1.125rem',
                  color: '#0F766E',
                  lineHeight: '1.6',
                  fontWeight: '600'
                }}>
                  Estou te esperando! 💫
                </p>
              </div>
            </div>
          </div>

                    <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            


            <div id="agende-sessao" style={{
              backgroundColor: 'white',
              padding: '3rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(160, 212, 216, 0.1)',
              width: '100%',
              maxWidth: '600px'
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1E293B',
                marginBottom: '2rem'
              }}>
                Agende sua Sessão
              </h3>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    color: '#374151',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    fontSize: '1.125rem'
                  }}>Nome Completo</label>
                  <input
                    type="text"
                    style={{
                      width: '100%',
                      padding: '1rem 1.5rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      fontSize: '1.125rem',
                      transition: 'all 0.2s'
                    }}
                    placeholder="Seu nome completo"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    color: '#374151',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    fontSize: '1.125rem'
                  }}>Telefone</label>
                  <input
                    type="tel"
                    style={{
                      width: '100%',
                      padding: '1rem 1.5rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      fontSize: '1.125rem',
                      transition: 'all 0.2s'
                    }}
                                          placeholder="(31) 98510-6741"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    color: '#374151',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    fontSize: '1.125rem'
                  }}>Serviço Desejado</label>
                  <select style={{
                    width: '100%',
                    padding: '1rem 1.5rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    fontSize: '1.125rem',
                    transition: 'all 0.2s',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    appearance: 'none',
                    backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6,9 12,15 18,9\'%3e%3c/polyline%3e%3c/svg%3e")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1rem',
                    paddingRight: '3rem'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                  >
                    <option value="" disabled selected>Selecione um serviço</option>
                    <option value="liberacao-miofascial">💆‍♀ Liberação Miofascial + Ventosaterapia</option>
                    <option value="massagem-relaxante">💆‍♀ Massagem Relaxante</option>
                    <option value="bambuterapia">🪴 Bambuterapia</option>
                    <option value="massagem-desportiva">⚽ Massagem Desportiva</option>
                    <option value="massagem-pedras">🔥 Massagem Relaxante com Pedras</option>
                    <option value="agulhamento">🕉️ Massagem + Agulhamento a Seco</option>
                  </select>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    color: '#374151',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    fontSize: '1.125rem'
                  }}>Data Preferida</label>
                  <input
                    type="date"
                    style={{
                      width: '100%',
                      padding: '1rem 1.5rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      fontSize: '1.125rem',
                      transition: 'all 0.2s'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    backgroundColor: '#A0D4D8',
                    color: 'white',
                    padding: '1.25rem',
                    borderRadius: '8px',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    boxShadow: '0 4px 15px rgba(160, 212, 216, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = '#8BC5C9';
                    (e.target as HTMLElement).style.transform = 'translateY(-2px)';
                    (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(160, 212, 216, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = '#A0D4D8';
                    (e.target as HTMLElement).style.transform = 'translateY(0)';
                    (e.target as HTMLElement).style.boxShadow = '0 4px 15px rgba(160, 212, 216, 0.3)';
                  }}
                >
                  <Calendar size={20} />
                  Agendar Sessão
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1E293B',
        color: 'white',
        padding: '3rem 1rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2.5rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#A0D4D8'
              }}>João Marques</h3>
              <p style={{
                color: '#CBD5E1',
                lineHeight: 1.6,
                fontSize: '1rem'
              }}>
                Especialistas em massoterapia e liberação miofascial, 
                dedicados ao seu bem-estar e qualidade de vida.
              </p>
            </div>
            
            <div>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#A0D4D8'
              }}>Serviços</h4>
              <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                color: '#CBD5E1',
                fontSize: '1rem'
              }}>
                <li>Liberação Miofascial</li>
                <li>Massoterapia</li>
                <li>Massagem Relaxante</li>
                <li>Massagem com Pedras Quentes</li>
              </ul>
            </div>
            
            <div>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#A0D4D8'
              }}>Contato</h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                color: '#CBD5E1',
                fontSize: '1rem'
              }}>
                <p>(31) 98510-6741</p>
                <a 
                  href="https://www.instagram.com/joaomarques_masso/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#CBD5E1', 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#A0D4D8'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#CBD5E1'}
                >
                  @joaomarques_masso
                </a>
                <p>Rua das Flores, 123 - Centro</p>
              </div>
            </div>
          </div>
          
          <div style={{
            borderTop: '1px solid #334155',
            marginTop: '2rem',
            paddingTop: '1.5rem',
            textAlign: 'center',
            color: '#94A3B8'
          }}>
            <p>&copy; 2024 João Marques Massoterapia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Modal de Agendamento */}
      {showBookingModal && (
        <div 
          onClick={closeBookingModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            cursor: 'pointer'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              padding: '3rem',
              maxWidth: '500px',
              width: '100%',
              position: 'relative'
            }}
          >
            <button
              onClick={closeBookingModal}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f3f4f6',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#e5e7eb'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#f3f4f6'}
            >
              <X size={20} />
            </button>
            
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1rem'
              }}>
                Agendar Sessão
              </h2>
              <p style={{
                color: '#6b7280',
                fontSize: '1.125rem'
              }}>
                Entre em contato para agendar sua sessão de massoterapia
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Phone size={24} style={{ color: '#3b82f6' }} />
                                  <div>
                    <p style={{ fontWeight: '600', color: '#1f2937' }}>Telefone</p>
                    <p style={{ color: '#6b7280' }}>(31) 98510-6741</p>
                  </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Mail size={24} style={{ color: '#3b82f6' }} />
                <div>
                  <p style={{ fontWeight: '600', color: '#1f2937' }}>Email</p>
                  <p style={{ color: '#6b7280' }}>contato@massagempro.com</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <MapPin size={24} style={{ color: '#3b82f6' }} />
                <div>
                  <p style={{ fontWeight: '600', color: '#1f2937' }}>Endereço</p>
                  <p style={{ color: '#6b7280' }}>Rua das Flores, 123 - Centro</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Clock size={24} style={{ color: '#3b82f6' }} />
                <div>
                  <p style={{ fontWeight: '600', color: '#1f2937' }}>Horário</p>
                  <p style={{ color: '#6b7280' }}>Segunda a Sexta: 8h às 18h</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <button
                onClick={() => window.open('https://wa.me/5531985106741?text=Olá! Estou interessado em agendar um dos seus serviços.', '_blank')}
                style={{
                  backgroundColor: '#25d366',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '0.75rem',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  margin: '0 auto',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#128c7e'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#25d366'}
              >
                <Phone size={20} />
                Agendar via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Imagem */}
      {modalImage && (
        <div 
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            cursor: 'pointer'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh'
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '-50px',
                right: '0',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <X size={24} />
            </button>
            {modalImage && (
              modalImage.endsWith('.mp4') ? (
                <video 
                  controls
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '95vw',
                    maxHeight: '95vh',
                    borderRadius: '0.5rem',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  <source src={modalImage} type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              ) : (
                <img 
                  src={modalImage}
                  alt="Visualização ampliada"
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '95vw',
                    maxHeight: '95vh',
                    objectFit: 'contain',
                    borderRadius: '0.5rem',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
                  }}
                />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
