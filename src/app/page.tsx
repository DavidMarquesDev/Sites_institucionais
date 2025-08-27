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
      title: "Liberação Miofascial",
      description: "Técnica especializada para liberar tensões musculares e melhorar a mobilidade",
      icon: Leaf,
      duration: "60 min",
      price: "R$ 120",
      features: ["Alívio da dor", "Melhora da mobilidade", "Redução de tensões"]
    },
    {
      title: "Massoterapia",
      description: "Massagem terapêutica para alívio de dores e promoção do relaxamento",
      icon: Heart,
      duration: "45 min",
      price: "R$ 90",
      features: ["Relaxamento profundo", "Alívio de dores", "Redução do estresse"]
    },
    {
      title: "Massagem Relaxante",
      description: "Massagem suave para redução do estresse e promoção do bem-estar",
      icon: Zap,
      duration: "60 min",
      price: "R$ 100",
      features: ["Redução do estresse", "Melhora do sono", "Bem-estar geral"]
    }
  ];

  // Carrossel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 5);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Função para abrir o modal
  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalImage(null);
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
        backdropFilter: 'blur(15px)',
        borderBottom: '1px solid #A0D4D8',
        boxShadow: '0 4px 20px rgba(160, 212, 216, 0.15)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
            {/* Logo */}
            <a 
              href="#início" 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                textDecoration: 'none',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.transform = 'scale(1)'}
            >
              <img 
                src="/logo massagem joao.svg" 
                alt="João Marques Massoterapia" 
                style={{ 
                  width: '50px', 
                  height: '50px',
                  borderRadius: '50%'
                }} 
              />
              <div style={{ 
                fontSize: '1.75rem', 
                fontWeight: 'bold', 
                color: '#2D2D2D',
                fontFamily: 'Inter, system-ui, sans-serif'
              }}>
                João Marques
              </div>
            </a>
            
            {/* Navigation - Always Visible */}
            <nav style={{ 
              display: 'flex', 
              gap: '3rem', 
              alignItems: 'center'
            }}>
              {['Início', 'Serviços', 'Sobre', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: '#A0D4D8',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1.125rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    transition: 'all 0.3s',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = '#2D2D2D';
                    (e.target as HTMLElement).style.backgroundColor = '#F1C0D1';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = '#A0D4D8';
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
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #A0D4D8 0%, #F1C0D1 100%)',
        color: 'white',
        textAlign: 'center',
        padding: '0 1rem'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1
        }}></div>
        
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            fontWeight: 'bold',
            marginBottom: '2rem',
            lineHeight: 1.2
          }}>
            Bem-estar através do{' '}
            <span style={{ color: '#2D2D2D' }}>toque terapêutico</span>
          </h1>
          <p style={{
            fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
            marginBottom: '3rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            opacity: 0.9
          }}>
            Especialista em liberação miofascial e massoterapia. Descubra o poder da cura 
            através de técnicas especializadas que promovem relaxamento, alívio da dor e 
            bem-estar integral.
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center'
          }} className="sm:flex-row">
            <button 
              onClick={openBookingModal}
              style={{
                backgroundColor: '#2D2D2D',
                color: '#FFFFFF',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1.125rem',
                transition: 'all 0.3s',
                boxShadow: '0 10px 25px rgba(45, 45, 45, 0.3)'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(-2px)';
                (e.target as HTMLElement).style.boxShadow = '0 15px 35px rgba(45, 45, 45, 0.4)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(0)';
                (e.target as HTMLElement).style.boxShadow = '0 10px 25px rgba(45, 45, 45, 0.3)';
              }}
            >
              <Calendar size={24} />
              Agendar Sessão
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={scrollToServices}
              style={{
                border: '2px solid white',
                color: 'white',
                backgroundColor: 'transparent',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1.125rem',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#2D2D2D';
                (e.target as HTMLElement).style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'transparent';
                (e.target as HTMLElement).style.color = '#FFFFFF';
              }}
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section style={{
        padding: '4rem 1rem',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Nossos Momentos
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#6b7280',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              Galeria de imagens do nosso ambiente e técnicas terapêuticas
            </p>
          </div>

          <div style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '1rem',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${currentSlide * 100}%)`
            }} id="carousel">
              <div style={{
                minWidth: '100%',
                height: '400px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f8f9fa'
              }}>
                <img 
                  src="/imagens_videos/IMG-20250826-WA0020.jpg"
                  alt="Massagem Terapêutica Profissional"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    borderRadius: '0.5rem'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  color: 'white',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    Massagem Terapêutica
                  </h3>
                  <p>Ambiente profissional e técnicas especializadas</p>
                </div>
              </div>
              
              <div style={{
                minWidth: '100%',
                height: '400px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f8f9fa'
              }}>
                <img 
                  src="/imagens_videos/IMG-20250826-WA0018.jpg"
                  alt="João Marques - Especialista"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    borderRadius: '0.5rem'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  color: 'white',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    João Marques
                  </h3>
                  <p>Especialista em Massoterapia e Liberação Miofascial</p>
                </div>
              </div>
              
              <div style={{
                minWidth: '100%',
                height: '400px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f8f9fa'
              }}>
                <img 
                  src="/imagens_videos/IMG-20250826-WA0019.jpg"
                  alt="Técnica de Liberação"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    borderRadius: '0.5rem'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  color: 'white',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    Liberação Miofascial
                  </h3>
                  <p>Técnica especializada para alívio de tensões</p>
                </div>
              </div>
              
              <div style={{
                minWidth: '100%',
                height: '400px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f8f9fa'
              }}>
                <img 
                  src="/imagens_videos/IMG-20250826-WA0017.jpg"
                  alt="Massagem Relaxante"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    borderRadius: '0.5rem'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  color: 'white',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    Massagem Relaxante
                  </h3>
                  <p>Promovendo relaxamento e bem-estar</p>
                </div>
              </div>
              
              <div style={{
                minWidth: '100%',
                height: '400px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f8f9fa'
              }}>
                <img 
                  src="/imagens_videos/IMG-20250826-WA0016.jpg"
                  alt="Ambiente Terapêutico"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    borderRadius: '0.5rem'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  color: 'white',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    Ambiente Terapêutico
                  </h3>
                  <p>Local acolhedor para sua sessão de massagem</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={() => {
                setCurrentSlide((prev) => Math.max(prev - 1, 0));
              }}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.5rem',
                color: '#1f2937',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'white';
                (e.target as HTMLElement).style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                (e.target as HTMLElement).style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              ‹
            </button>
            
            <button 
              onClick={() => {
                setCurrentSlide((prev) => (prev + 1) % 5);
              }}
              style={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.5rem',
                color: '#1f2937',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'white';
                (e.target as HTMLElement).style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                (e.target as HTMLElement).style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              ›
            </button>

            {/* Dots Indicator */}
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '0.5rem'
            }}>
              {[0, 1, 2, 3, 4].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: index === currentSlide ? 'white' : 'rgba(255, 255, 255, 0.5)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'white';
                    (e.target as HTMLElement).style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = index === currentSlide ? 'white' : 'rgba(255, 255, 255, 0.5)';
                    (e.target as HTMLElement).style.transform = 'scale(1)';
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* First Session Section */}
      <section style={{
        padding: '6rem 1rem',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #A0D4D8 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '4rem',
            alignItems: 'center'
          }} className="lg:grid-cols-2">
            <div style={{ textAlign: 'center' }} className="lg:text-left">
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#fef3c7',
                borderRadius: '50%',
                margin: '0 auto 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }} className="lg:mx-0">
                <Heart size={40} style={{ color: '#f59e0b' }} />
              </div>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1.5rem'
              }}>
                Primeira Sessão
              </h2>
              <p style={{
                fontSize: '1.25rem',
                color: '#6b7280',
                marginBottom: '2rem',
                lineHeight: 1.6
              }}>
                Experimente nossos serviços com desconto especial e descubra como podemos 
                transformar sua qualidade de vida através de técnicas terapêuticas avançadas.
              </p>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#f59e0b',
                marginBottom: '2rem'
              }}>
                R$ 80
              </div>
              <button style={{
                backgroundColor: '#f59e0b',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.125rem',
                transition: 'all 0.3s',
                boxShadow: '0 10px 25px rgba(245, 158, 11, 0.3)'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(-2px)';
                (e.target as HTMLElement).style.boxShadow = '0 15px 35px rgba(245, 158, 11, 0.4)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(0)';
                (e.target as HTMLElement).style.boxShadow = '0 10px 25px rgba(245, 158, 11, 0.3)';
              }}
              >
                Reservar Agora
              </button>
            </div>
            
            {/*             <div style={{ position: 'relative' }}>
              <div 
                onClick={() => openModal("/imagens_videos/IMG-20250826-WA0020.jpg")}
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
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '1rem',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                  margin: '0 auto',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <img 
                  src="/imagens_videos/IMG-20250826-WA0020.jpg"
                  alt="Massagem Terapêutica Profissional"
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

      {/* About Section */}
      <section id="sobre" style={{
        padding: '6rem 1rem',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
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
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '2rem'
              }}>
                Sobre Nós
              </h2>
              <p style={{
                fontSize: '1.25rem',
                color: '#6b7280',
                marginBottom: '2rem',
                lineHeight: 1.6
              }}>
                Somos especialistas dedicados ao seu bem-estar, com anos de experiência 
                em técnicas terapêuticas avançadas de massagem e liberação miofascial.
              </p>
              <div style={{ textAlign: 'left' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <CheckCircle size={24} style={{ color: '#10b981' }} />
                  <span style={{ color: '#6b7280', fontSize: '1.125rem' }}>
                    Profissionais certificados e experientes
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <CheckCircle size={24} style={{ color: '#10b981' }} />
                  <span style={{ color: '#6b7280', fontSize: '1.125rem' }}>
                    Ambiente relaxante e acolhedor
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <CheckCircle size={24} style={{ color: '#10b981' }} />
                  <span style={{ color: '#6b7280', fontSize: '1.125rem' }}>
                    Técnicas personalizadas para cada cliente
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <CheckCircle size={24} style={{ color: '#10b981' }} />
                  <span style={{ color: '#6b7280', fontSize: '1.125rem' }}>
                    Compromisso com resultados e satisfação
                  </span>
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
              Nossos Serviços
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {services.map((service) => (
              <div key={service.title} style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(-8px)';
                (e.target as HTMLElement).style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(0)';
                (e.target as HTMLElement).style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
              }}
              >
                <div style={{
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div 
                    onClick={() => openModal(
                      service.title === "Liberação Miofascial" ? "/imagens_videos/IMG-20250826-WA0019.jpg" :
                      service.title === "Massoterapia" ? "/imagens_videos/IMG-20250826-WA0017.jpg" :
                      "/imagens_videos/IMG-20250826-WA0016.jpg"
                    )}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.transform = 'scale(1.05)';
                      target.style.zIndex = '10';
                      target.style.transition = 'all 0.3s ease';
                      target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.transform = 'scale(1)';
                      target.style.zIndex = '1';
                      target.style.transition = 'all 0.3s ease';
                      target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                    }}
                    style={{
                      width: '400px',
                      height: '300px',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '0.5rem',
                      margin: '0 auto',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <img 
                      src={service.title === "Liberação Miofascial" ? "/imagens_videos/IMG-20250826-WA0019.jpg" :
                           service.title === "Massoterapia" ? "/imagens_videos/IMG-20250826-WA0017.jpg" :
                           "/imagens_videos/IMG-20250826-WA0016.jpg"}
                      alt={`Imagem de ${service.title}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
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
                      backgroundColor: '#3b82f6',
                      borderRadius: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                    }}>
                      <service.icon size={24} style={{ color: 'white' }} />
                    </div>
                  </div>
                </div>
                
                <div style={{ padding: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    marginBottom: '1rem'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    color: '#6b7280',
                    marginBottom: '1.5rem',
                    lineHeight: 1.6
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
                        <CheckCircle size={18} style={{ color: '#10b981', flexShrink: 0 }} />
                        <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid #f3f4f6'
                  }}>
                    <span style={{ color: '#6b7280', fontWeight: '500' }}>{service.duration}</span>
                    <span style={{
                      fontSize: '1.875rem',
                      fontWeight: 'bold',
                      color: '#3b82f6'
                    }}>{service.price}</span>
                  </div>
                </div>
              </div>
            ))}
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
              overflow: 'hidden',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(-8px)';
              (e.target as HTMLElement).style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(0)';
              (e.target as HTMLElement).style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
            }}
            >
              <video 
                controls
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              >
                <source src="/imagens_videos/VID-20250826-WA0013.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '0.5rem'
                }}>
                  Técnica de Liberação
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.875rem'
                }}>
                  Demonstração de liberação miofascial
                </p>
              </div>
            </div>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(-8px)';
              (e.target as HTMLElement).style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(0)';
              (e.target as HTMLElement).style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
            }}
            >
              <video 
                controls
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              >
                <source src="/imagens_videos/VID-20250826-WA0012.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '0.5rem'
                }}>
                  Massagem Terapêutica
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.875rem'
                }}>
                  Técnicas avançadas de massoterapia
                </p>
              </div>
            </div>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(-8px)';
              (e.target as HTMLElement).style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(0)';
              (e.target as HTMLElement).style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
            }}
            >
              <video 
                controls
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              >
                <source src="/imagens_videos/VID-20250826-WA0010.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '0.5rem'
                }}>
                  Relaxamento Profundo
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.875rem'
                }}>
                  Técnicas de relaxamento e bem-estar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" style={{
        padding: '6rem 1rem',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1.5rem'
            }}>
              Entre em Contato
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Agende sua sessão e comece sua jornada de transformação e bem-estar.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '4rem'
          }} className="lg:grid-cols-2">
            
            {/* Galeria de Imagens */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <div 
                onClick={() => openModal("/imagens_videos/IMG-20250826-WA0015.jpg")}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'scale(1.1)';
                  target.style.zIndex = '10';
                  target.style.transition = 'all 0.3s ease';
                  target.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'scale(1)';
                  target.style.zIndex = '1';
                  target.style.transition = 'all 0.3s ease';
                  target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
                style={{
                  width: '300px',
                  height: '225px',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  margin: '0 auto',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <img 
                  src="/imagens_videos/IMG-20250826-WA0015.jpg"
                  alt="Técnica de Massagem"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '0.5rem'
                  }}
                />
              </div>
              <div 
                onClick={() => openModal("/imagens_videos/IMG-20250826-WA0014.jpg")}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'scale(1.1)';
                  target.style.zIndex = '10';
                  target.style.transition = 'all 0.3s ease';
                  target.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'scale(1)';
                  target.style.zIndex = '1';
                  target.style.transition = 'all 0.3s ease';
                  target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
                style={{
                  width: '300px',
                  height: '225px',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  margin: '0 auto',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <img 
                  src="/imagens_videos/IMG-20250826-WA0014.jpg"
                  alt="Ambiente de Massagem"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '0.5rem'
                  }}
                />
              </div>
              <div 
                onClick={() => openModal("/imagens_videos/IMG-20250826-WA0016.jpg")}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'scale(1.1)';
                  target.style.zIndex = '10';
                  target.style.transition = 'all 0.3s ease';
                  target.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'scale(1)';
                  target.style.zIndex = '1';
                  target.style.transition = 'all 0.3s ease';
                  target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
                style={{
                  width: '300px',
                  height: '225px',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  margin: '0 auto',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <img 
                  src="/imagens_videos/IMG-20250826-WA0016.jpg"
                  alt="Técnica Terapêutica"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '0.5rem'
                  }}
                />
              </div>
              <div 
                onClick={() => openModal("/imagens_videos/IMG-20250826-WA0017.jpg")}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'scale(1.1)';
                  target.style.zIndex = '10';
                  target.style.transition = 'all 0.3s ease';
                  target.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'scale(1)';
                  target.style.zIndex = '1';
                  target.style.transition = 'all 0.3s ease';
                  target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
                style={{
                  width: '300px',
                  height: '225px',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  margin: '0 auto',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <img 
                  src="/imagens_videos/IMG-20250826-WA0017.jpg"
                  alt="Massagem Profissional"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '0.5rem'
                  }}
                />
              </div>
            </div>
            <div>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '2rem'
              }}>
                Informações de Contato
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#dbeafe',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)'
                  }}>
                    <Phone size={28} style={{ color: '#3b82f6' }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: '600', color: '#1f2937', fontSize: '1.125rem' }}>Telefone</p>
                    <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>(31) 99268-5055</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#dbeafe',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)'
                  }}>
                    <Mail size={28} style={{ color: '#3b82f6' }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: '600', color: '#1f2937', fontSize: '1.125rem' }}>Email</p>
                    <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>contato@massagempro.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#dbeafe',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)'
                  }}>
                    <MapPin size={28} style={{ color: '#3b82f6' }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: '600', color: '#1f2937', fontSize: '1.125rem' }}>Endereço</p>
                    <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>Rua das Flores, 123 - Centro</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#dbeafe',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)'
                  }}>
                    <Clock size={28} style={{ color: '#3b82f6' }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: '600', color: '#1f2937', fontSize: '1.125rem' }}>Horário de Atendimento</p>
                    <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>Segunda a Sexta: 8h às 18h</p>
                    <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '2.5rem',
              borderRadius: '1rem',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#1f2937',
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
                    placeholder="(31) 99268-5055"
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
                  >
                    <option>Selecione um serviço</option>
                    <option>Liberação Miofascial</option>
                    <option>Massoterapia</option>
                    <option>Massagem Relaxante</option>
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
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    padding: '1.25rem',
                    borderRadius: '0.5rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.125rem',
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = '#2563eb';
                    (e.target as HTMLElement).style.transform = 'translateY(-2px)';
                    (e.target as HTMLElement).style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = '#3b82f6';
                    (e.target as HTMLElement).style.transform = 'translateY(0)';
                    (e.target as HTMLElement).style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
                  }}
                >
                  <Calendar size={24} />
                  Agendar Sessão
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1f2937',
        color: 'white',
        padding: '4rem 1rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem'
              }}>MassagemPro</h3>
              <p style={{
                color: '#d1d5db',
                lineHeight: 1.6,
                fontSize: '1.125rem'
              }}>
                Especialistas em massoterapia e liberação miofascial, 
                dedicados ao seu bem-estar e qualidade de vida.
              </p>
            </div>
            
            <div>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1.5rem'
              }}>Serviços</h4>
              <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                color: '#d1d5db',
                fontSize: '1.125rem'
              }}>
                <li>Liberação Miofascial</li>
                <li>Massoterapia</li>
                <li>Massagem Relaxante</li>
                <li>Consultoria em Bem-estar</li>
              </ul>
            </div>
            
            <div>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1.5rem'
              }}>Contato</h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                color: '#d1d5db',
                fontSize: '1.125rem'
              }}>
                <p>(31) 99268-5055</p>
                <p>contato@massagempro.com</p>
                <p>Rua das Flores, 123 - Centro</p>
              </div>
            </div>
          </div>
          
          <div style={{
            borderTop: '1px solid #374151',
            marginTop: '3rem',
            paddingTop: '2rem',
            textAlign: 'center',
            color: '#9ca3af'
          }}>
            <p>&copy; 2024 MassagemPro. Todos os direitos reservados.</p>
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
                  <p style={{ color: '#6b7280' }}>(31) 99268-5055</p>
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
                onClick={() => window.open('https://wa.me/5531992685055', '_blank')}
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
            <img 
              src={modalImage}
              alt="Imagem em tamanho original"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '0.5rem',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
