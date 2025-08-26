'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  Calendar,
  Heart,
  Leaf,
  Zap,
  Users
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Liberação Miofascial",
      description: "Técnica especializada para liberar tensões musculares e melhorar a mobilidade",
      icon: Leaf,
      duration: "60 min",
      price: "R$ 120"
    },
    {
      title: "Massoterapia",
      description: "Massagem terapêutica para alívio de dores e promoção do relaxamento",
      icon: Heart,
      duration: "45 min",
      price: "R$ 90"
    },
    {
      title: "Massagem Relaxante",
      description: "Massagem suave para redução do estresse e promoção do bem-estar",
      icon: Zap,
      duration: "60 min",
      price: "R$ 100"
    }
  ];

  const benefits = [
    {
      title: "Alívio da Dor",
      description: "Redução significativa de dores musculares e tensões",
      icon: Heart
    },
    {
      title: "Melhora da Mobilidade",
      description: "Aumento da flexibilidade e amplitude de movimento",
      icon: Leaf
    },
    {
      title: "Redução do Estresse",
      description: "Relaxamento profundo e redução dos níveis de cortisol",
      icon: Zap
    },
    {
      title: "Bem-estar Geral",
      description: "Melhora na qualidade do sono e sensação de vitalidade",
      icon: Users
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "A liberação miofascial mudou minha vida! As dores nas costas diminuíram drasticamente.",
      rating: 5
    },
    {
      name: "João Santos",
      text: "Excelente profissional! A massagem me ajudou muito com o estresse do trabalho.",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Sempre saio das sessões renovada e com muito mais energia. Recomendo muito!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-nature-warm">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sage-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-serif font-semibold text-sage-700"
            >
              MassagemPro
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Início', 'Serviços', 'Benefícios', 'Depoimentos', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sage-600 hover:text-sage-800 transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-sage-600 hover:text-sage-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-sage-200"
          >
            <div className="px-4 py-2 space-y-1">
              {['Início', 'Serviços', 'Benefícios', 'Depoimentos', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-sage-600 hover:text-sage-800 hover:bg-sage-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="início" className="pt-24 pb-16 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 nature-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-sage-800 mb-6">
                Bem-estar através do{' '}
                <span className="text-nature-green">toque terapêutico</span>
              </h1>
              <p className="text-lg text-sage-600 mb-8 leading-relaxed">
                Especialista em liberação miofascial e massoterapia. Descubra o poder da cura 
                através de técnicas especializadas que promovem relaxamento, alívio da dor e 
                bem-estar integral.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                  <Calendar size={20} />
                  Agendar Sessão
                </button>
                <button className="border-2 border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200">
                  Saiba Mais
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center">
                  <div className="w-24 h-24 bg-sage-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Heart size={40} className="text-sage-600" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-sage-800 mb-4">
                    Primeira Sessão
                  </h3>
                  <p className="text-sage-600 mb-6">
                    Experimente nossos serviços com desconto especial
                  </p>
                  <div className="text-3xl font-bold text-nature-green mb-4">
                    R$ 80
                  </div>
                  <button className="w-full bg-sage-600 hover:bg-sage-700 text-white py-3 rounded-lg font-medium transition-colors duration-200">
                    Reservar Agora
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-sage-800 mb-6">
              Nossos Serviços
            </h2>
            <p className="text-lg text-sage-600 max-w-3xl mx-auto">
              Oferecemos uma variedade de técnicas terapêuticas para atender suas necessidades 
              específicas de bem-estar e saúde.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-sage-50 to-cream-50 p-8 rounded-2xl border border-sage-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-sage-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-sage-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-sage-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sage-500 font-medium">{service.duration}</span>
                  <span className="text-2xl font-bold text-nature-green">{service.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefícios" className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-sage-800 mb-6">
              Benefícios da Terapia
            </h2>
            <p className="text-lg text-sage-600 max-w-3xl mx-auto">
              Descubra como nossas técnicas podem transformar sua saúde e qualidade de vida.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <benefit.icon size={36} className="text-sage-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-sage-800 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-sage-800 mb-6">
              O que nossos clientes dizem
            </h2>
            <p className="text-lg text-sage-600 max-w-3xl mx-auto">
              Histórias reais de transformação e bem-estar através de nossos serviços.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-sage-50 to-cream-50 p-8 rounded-2xl border border-sage-200"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sage-600 mb-6 italic leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="text-sage-800 font-semibold">
                  — {testimonial.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-sage-800 mb-6">
              Entre em Contato
            </h2>
            <p className="text-lg text-sage-600 max-w-3xl mx-auto">
              Agende sua sessão e comece sua jornada de transformação e bem-estar.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-semibold text-sage-800 mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-sage-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sage-800">Telefone</p>
                    <p className="text-sage-600">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                    <Mail size={24} className="text-sage-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sage-800">Email</p>
                    <p className="text-sage-600">contato@massagempro.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                    <MapPin size={24} className="text-sage-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sage-800">Endereço</p>
                    <p className="text-sage-600">Rua das Flores, 123 - Centro</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                    <Clock size={24} className="text-sage-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sage-800">Horário de Atendimento</p>
                    <p className="text-sage-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-sage-600">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-serif font-semibold text-sage-800 mb-6">
                Agende sua Sessão
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sage-700 font-medium mb-2">Nome Completo</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sage-700 font-medium mb-2">Telefone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors duration-200"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sage-700 font-medium mb-2">Serviço Desejado</label>
                  <select className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors duration-200">
                    <option>Selecione um serviço</option>
                    <option>Liberação Miofascial</option>
                    <option>Massoterapia</option>
                    <option>Massagem Relaxante</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sage-700 font-medium mb-2">Data Preferida</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-sage-600 hover:bg-sage-700 text-white py-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Calendar size={20} />
                  Agendar Sessão
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-4">MassagemPro</h3>
              <p className="text-sage-200 leading-relaxed">
                Especialistas em massoterapia e liberação miofascial, 
                dedicados ao seu bem-estar e qualidade de vida.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sage-200">
                <li>Liberação Miofascial</li>
                <li>Massoterapia</li>
                <li>Massagem Relaxante</li>
                <li>Consultoria em Bem-estar</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sage-200">
                <p>(11) 99999-9999</p>
                <p>contato@massagempro.com</p>
                <p>Rua das Flores, 123 - Centro</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-sage-700 mt-8 pt-8 text-center text-sage-300">
            <p>&copy; 2024 MassagemPro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
