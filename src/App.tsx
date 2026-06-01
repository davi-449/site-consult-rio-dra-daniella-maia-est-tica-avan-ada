import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ChevronRight, CheckCircle2, Instagram, Facebook } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

function App() {
  const whatsappNumber = "5511964679122";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed w-full top-0 z-50 glass border-b-0">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-premium-charcoal">
            Dra Daniella Maia
            <span className="block text-xs font-normal text-premium-sage">Estética Avançada</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#sobre" className="text-sm font-medium hover:text-premium-nude transition-colors">Sobre</a>
            <a href="#servicos" className="text-sm font-medium hover:text-premium-nude transition-colors">Tratamentos</a>
            <a href="#exclusividade" className="text-sm font-medium hover:text-premium-nude transition-colors">A Clínica</a>
          </nav>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-premium-charcoal text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-colors flex items-center gap-2 shadow-xl shadow-black/10">
            Agendar Consulta
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="absolute inset-0 -z-10 bg-[url('https://loremflickr.com/1920/1080/spa,facial,treatment')] bg-cover bg-center opacity-[0.03]"></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-premium-nude/10 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-premium-nude/10 text-premium-nude text-sm font-medium mb-6 border border-premium-nude/20">
              <MapPin size={14} />
              Conceição, Diadema - SP
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-premium-charcoal">
              A referência em <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-nude to-premium-sage">Estética Avançada</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg text-premium-muted mb-8 leading-relaxed">
              Realce sua beleza natural com protocolos exclusivos e tecnologia de ponta na clínica da Dra Daniella Maia. Resultados que transformam e elevam sua autoestima.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-premium-nude text-white px-8 py-4 rounded-full font-medium hover:bg-premium-nude/90 transition-all shadow-xl shadow-premium-nude/20 flex items-center gap-2">
                Quero Agendar Minha Avaliação <ChevronRight size={18} />
              </a>
            </motion.div>
            
            <motion.div variants={fadeIn} className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img src="https://loremflickr.com/100/100/woman,face,1" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://loremflickr.com/100/100/woman,face,2" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://loremflickr.com/100/100/woman,face,3" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              </div>
              <div className="text-sm">
                <div className="font-bold text-premium-charcoal">Avaliação 5.0 Excelente</div>
                <div className="text-premium-muted">Baseado em 19 avaliações reais</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-premium-nude/20 to-transparent rounded-[2.5rem] blur-3xl -z-10"></div>
            <img src="https://loremflickr.com/800/1000/skincare,woman,2" alt="Tratamento Estético" className="rounded-[2.5rem] shadow-2xl w-full object-cover h-[600px]" />
            <div className="absolute -bottom-8 -left-8 glass p-6 rounded-3xl hidden md:block">
              <div className="text-3xl font-bold text-premium-nude mb-1">100%</div>
              <div className="text-sm font-medium text-premium-charcoal">Personalizado<br/>para você</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOBRE A ESPECIALISTA */}
      <section id="sobre" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeIn} className="relative">
              <img src="https://loremflickr.com/800/1000/doctor,woman,aesthetics" alt="Dra Daniella Maia" className="rounded-[2.5rem] w-full object-cover h-[700px] shadow-2xl" />
            </motion.div>
            <motion.div variants={fadeIn}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-premium-charcoal">
                Dra. Daniella Maia
              </h2>
              <div className="h-1 w-20 bg-premium-nude rounded-full mb-8"></div>
              <p className="text-lg text-premium-muted mb-6 leading-relaxed">
                Especialista em Estética Avançada, a Dra. Daniella Maia traz para Diadema o que há de mais moderno em protocolos faciais e corporais. Cada tratamento é meticulosamente planejado para entregar resultados naturais e harmoniosos.
              </p>
              <p className="text-lg text-premium-muted mb-8 leading-relaxed">
                Nosso compromisso é com a sua saúde, segurança e autoestima. Utilizamos apenas produtos premium e tecnologia de ponta para garantir uma experiência de nível superior.
              </p>
              <ul className="space-y-4 mb-10">
                {['Protocolos Individuais e Personalizados', 'Ambiente Clínico Seguro', 'Produtos de Alta Performance', 'Acompanhamento Contínuo'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-medium text-premium-charcoal">
                    <CheckCircle2 className="text-premium-nude" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVIÇOS / TRATAMENTOS */}
      <section id="servicos" className="py-24 bg-premium-pearl">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 text-premium-charcoal">Tratamentos de Elite</h2>
            <p className="text-premium-muted text-lg">Descubra nossos protocolos exclusivos desenhados para realçar o que você tem de melhor.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Harmonização Facial', desc: 'Equilíbrio e proporção para um rosto rejuvenescido e natural.', img: 'https://loremflickr.com/800/1000/face,beauty,3' },
              { title: 'Toxina Botulínica', desc: 'Suavização de linhas de expressão com precisão e elegância.', img: 'https://loremflickr.com/800/1000/skincare,treatment,4' },
              { title: 'Bioestimuladores', desc: 'Estímulo de colágeno para uma pele firme e revitalizada.', img: 'https://loremflickr.com/800/1000/spa,massage,5' }
            ].map((service, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="group relative rounded-3xl overflow-hidden glass p-2">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <div className="px-4 pb-6">
                  <p className="text-premium-muted mb-6">{service.desc}</p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-premium-charcoal font-bold hover:text-premium-nude transition-colors">
                    Saber mais <ChevronRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXCLUSIVIDADE VIP */}
      <section id="exclusividade" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-premium-charcoal"></div>
        <div className="absolute inset-0 bg-[url('https://loremflickr.com/1920/1080/modern,clinic,interior')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="glass-dark p-12 lg:p-20 rounded-[3rem] text-center max-w-4xl mx-auto">
            <motion.h2 variants={fadeIn} className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              A Experiência Consultório Dra Daniella Maia
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-300 mb-10 leading-relaxed">
              O seu momento de cuidado merece um espaço à altura. Localizado na R. Manoel da Nóbrega, 1316 - sala 8, no coração da Conceição em Diadema. Preparamos um ambiente sofisticado, climatizado e totalmente privativo para o seu conforto absoluto.
            </motion.p>
            <motion.div variants={fadeIn} className="flex justify-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-white text-premium-charcoal px-8 py-4 rounded-full font-bold hover:bg-premium-nude hover:text-white transition-all shadow-2xl shadow-white/10">
                Agendar Horário VIP
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER & MAPA */}
      <footer className="bg-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <div className="font-bold text-2xl tracking-tight text-premium-charcoal mb-2">
                Dra Daniella Maia
              </div>
              <div className="text-sm font-medium text-premium-sage mb-8">Estética Avançada</div>
              <p className="text-premium-muted max-w-sm mb-8">
                Elevando o padrão de estética avançada em Diadema com tratamentos exclusivos e resultados de excelência.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-premium-charcoal font-medium">
                  <Phone className="text-premium-nude" size={20} />
                  (11) 96467-9122
                </div>
                <div className="flex items-start gap-3 text-premium-charcoal font-medium">
                  <MapPin className="text-premium-nude" size={20} shrink-0 />
                  R. Manoel da Nóbrega, 1316 - sala 8<br/>Conceição, Diadema - SP, 09910-720
                </div>
                <div className="flex items-center gap-3 text-premium-charcoal font-medium">
                  <Clock className="text-premium-nude" size={20} />
                  Segunda a Sexta, 09h às 19h
                </div>
              </div>
            </div>
            
            <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <iframe 
                className="w-full h-full border-0" 
                loading="lazy" 
                allowFullScreen 
                src="https://maps.google.com/maps?q=-23.694216,-46.625908&z=15&output=embed"
              ></iframe>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-premium-muted">
              &copy; {new Date().getFullYear()} Consultório Dra Daniella Maia. Todos os direitos reservados.
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-premium-pearl flex items-center justify-center text-premium-charcoal hover:bg-premium-nude hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-premium-pearl flex items-center justify-center text-premium-charcoal hover:bg-premium-nude hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
